// ============================================================
// 選挙日程 ＆ カウントダウン画面 (views/ScheduleView.ts)
// ============================================================

import { state, daysUntil, dateLabel, elJpDateToIso, icon, toggleElectionSubscription, isElectionSubscribed, triggerSimulatedNotification } from '../state';
import { UPCOMING_ELECTIONS, ELECTION_YEAR_FILTERS, OFFICIAL_SCHEDULE_URL } from '../data/elections';

export function renderSchedulePage(renderFn: () => void): HTMLElement {
  const wrap = document.createElement("div");

  const title = document.createElement("h2");
  title.className = "disp section-title";
  title.textContent = "選挙日程 ＆ リマインド通知";
  wrap.appendChild(title);

  // 選挙日忘れ防止・リマインド通知機能案内カード
  const remindBannerCard = document.createElement("div");
  remindBannerCard.className = "card remind-banner-card";
  remindBannerCard.style.borderLeft = "4px solid #7C3AED";
  remindBannerCard.style.background = "linear-gradient(135deg, rgba(124, 58, 237, 0.06), rgba(99, 102, 241, 0.04))";
  remindBannerCard.innerHTML = `
    <div style="display:flex;align-items:flex-start;justify-content:space-between;gap:12px;">
      <div>
        <h3 style="margin:0 0 4px 0;font-size:15px;color:#7C3AED;display:flex;align-items:center;gap:6px;">
          ${icon("bell", 18)} 選挙日忘れを防止！リマインド通知機能
        </h3>
        <p style="margin:0;font-size:13px;color:var(--muted);line-height:1.5;">
          気になる選挙の「🔔 リマインド通知」をONにすると、告示日や期日前投票の期間中に事前に通知が届きます。
        </p>
      </div>
      <button class="btn-test-notif-schedule" title="模擬通知を試す">
        ⚡ 模擬通知テスト
      </button>
    </div>
  `;

  remindBannerCard.querySelector(".btn-test-notif-schedule")?.addEventListener("click", () => {
    triggerSimulatedNotification(undefined, renderFn);
  });
  wrap.appendChild(remindBannerCard);

  const days = daysUntil(state.electionDate);
  const heroRow = document.createElement("div");
  heroRow.className = "hero-row";
  heroRow.innerHTML = `
    <span class="disp hero-num">${days >= 0 ? days : "―"}</span>
    <span class="hero-suffix">${days >= 0 ? "日後が選択した投票日" : "投票日を過ぎています"}</span>
  `;
  wrap.appendChild(heroRow);

  const sub = document.createElement("p");
  sub.className = "subtext";
  sub.textContent = `${dateLabel(state.electionDate)} 投票日 (リストをタップで日付選択)`;
  wrap.appendChild(sub);

  const dateCard = document.createElement("div");
  dateCard.className = "card";

  const dateLabelEl = document.createElement("label");
  dateLabelEl.className = "card-label";
  dateLabelEl.textContent = "投票日を手動設定する";

  const dateInput = document.createElement("input");
  dateInput.type = "date";
  dateInput.className = "date-input";
  dateInput.value = state.electionDate;
  dateInput.addEventListener("change", (e) => {
    state.electionDate = (e.target as HTMLInputElement).value;
    renderFn();
  });

  dateCard.appendChild(dateLabelEl);
  dateCard.appendChild(dateInput);
  wrap.appendChild(dateCard);

  const scheduleCard = document.createElement("div");
  scheduleCard.className = "card";

  const scheduleHead = document.createElement("div");
  scheduleHead.style.display = "flex";
  scheduleHead.style.justifyContent = "space-between";
  scheduleHead.style.alignItems = "center";
  scheduleHead.style.marginBottom = "12px";
  scheduleHead.innerHTML = `
    <p style="font-size:15px;font-weight:700;margin:0;">新潟県内の予定選挙（年度別）</p>
    <span style="font-size:12px;color:var(--faint);">令和8〜9年以降</span>
  `;
  scheduleCard.appendChild(scheduleHead);

  const yearChips = document.createElement("div");
  yearChips.className = "year-chips";
  yearChips.style.display = "flex";
  yearChips.style.gap = "6px";
  yearChips.style.flexWrap = "wrap";
  yearChips.style.marginBottom = "14px";

  ELECTION_YEAR_FILTERS.forEach((y) => {
    const btn = document.createElement("button");
    btn.className = "year-chip" + (state.selectedElectionYear === y ? " active" : "");
    btn.textContent = y;
    btn.addEventListener("click", () => {
      state.selectedElectionYear = y;
      renderFn();
    });
    yearChips.appendChild(btn);
  });
  scheduleCard.appendChild(yearChips);

  const filteredElections = UPCOMING_ELECTIONS.filter((e) => {
    if (state.selectedElectionYear === "すべて") return true;
    return e.year === state.selectedElectionYear;
  });

  filteredElections.forEach((e) => {
    const isSub = isElectionSubscribed(e.name);

    const electionRow = document.createElement("div");
    electionRow.className = "election-row-card" + (isSub ? " is-subscribed" : "");

    const electionInfo = document.createElement("div");
    electionInfo.className = "election-info-box";
    electionInfo.innerHTML = `
      <div style="display:flex;align-items:center;gap:6px;margin-bottom:4px;">
        <span class="year-badge">${e.yearLabel}</span>
        <span style="font-weight:600;font-size:15px;color:var(--heading);">${e.name}</span>
      </div>
      <span style="font-size:13px;color:var(--muted);">投票日 ${e.day} (告示 ${e.notice})</span>
    `;

    // タップでカウントダウン日数を設定
    electionInfo.addEventListener("click", () => {
      state.electionDate = e.isoDate || elJpDateToIso(e.day);
      renderFn();
    });

    // 🔔 リマインド登録トグルボタン
    const subBtn = document.createElement("button");
    subBtn.className = "btn-sub-toggle" + (isSub ? " active" : "");
    subBtn.innerHTML = isSub
      ? `${icon("bell", 14)} <span>通知ON</span>`
      : `${icon("bell-off", 14)} <span>通知OFF</span>`;

    subBtn.addEventListener("click", (evt) => {
      evt.stopPropagation();
      toggleElectionSubscription(e.name);
      renderFn();
    });

    electionRow.appendChild(electionInfo);
    electionRow.appendChild(subBtn);
    scheduleCard.appendChild(electionRow);
  });

  const officialLink = document.createElement("a");
  officialLink.className = "official-link";
  officialLink.href = OFFICIAL_SCHEDULE_URL;
  officialLink.target = "_blank";
  officialLink.rel = "noopener noreferrer";
  officialLink.innerHTML = `新潟県選挙管理委員会「県内選挙スケジュール」を見る ${icon(
    "external-link",
    13
  )}`;
  scheduleCard.appendChild(officialLink);

  wrap.appendChild(scheduleCard);

  const infoRows: { label: string; value: string; note?: string }[] = [
    {
      label: "投票時間",
      value: "7:00 ～ 20:00",
      note: "※一部の投票所では時間が異なる場合があります。",
    },
    {
      label: "期日前投票",
      value: "投票日の前日まで、各市区町村が指定する期日前投票所で投票できます。",
    },
    {
      label: "持ち物",
      value: "投票所入場券（本人確認ができれば投票できます）",
    },
  ];

  infoRows.forEach(({ label, value, note }, idx) => {
    const row = document.createElement("div");
    row.className = "info-row";
    row.style.display = "flex";
    row.style.justifyContent = "space-between";
    row.style.alignItems = "flex-start";
    row.style.gap = "16px";
    row.style.padding = "14px 0";

    const valueStyle = idx === 0
      ? "font-size: 22px; font-weight: 800; color: #7C3AED; letter-spacing: 0.5px; line-height: 1.2;"
      : "font-size: 14.5px; font-weight: 700; color: #7C3AED; line-height: 1.5;";

    row.innerHTML = `
      <span class="label" style="flex-shrink:0;font-weight:700;padding-top:2px;">${label}</span>
      <div style="text-align:right;">
        <div style="${valueStyle}">${value}</div>
        ${note ? `<div style="font-size:12px;color:var(--muted);margin-top:4px;">${note}</div>` : ""}
      </div>
    `;
    wrap.appendChild(row);
  });

  const footnote = document.createElement("p");
  footnote.className = "footnote";
  footnote.textContent =
    "※上記の選挙一覧は新潟県選挙管理委員会の公表情報をもとにした抜粋で、自動更新はされません。最新の投票日・投票所は必ず公式サイトでご確認ください。";
  wrap.appendChild(footnote);

  return wrap;
}
