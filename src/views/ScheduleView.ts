// ============================================================
// 選挙日程 ＆ カウントダウン画面 (views/ScheduleView.ts)
// ============================================================

import { state, daysUntil, dateLabel, elJpDateToIso, icon, toggleElectionSubscription, isElectionSubscribed, downloadElectionICS } from '../state';
import { UPCOMING_ELECTIONS, ELECTION_YEAR_FILTERS, OFFICIAL_SCHEDULE_URL } from '../data/elections';

export function renderSchedulePage(renderFn: () => void): HTMLElement {
  const wrap = document.createElement("div");

  const title = document.createElement("h2");
  title.className = "disp section-title";
  title.textContent = "選挙日程 ＆ リマインド通知";
  wrap.appendChild(title);

  // 通知・カレンダー機能の案内バナー
  const remindBannerCard = document.createElement("div");
  remindBannerCard.className = "card remind-banner-card";
  remindBannerCard.innerHTML = `
    <div style="display:flex;align-items:flex-start;gap:10px;">
      <div style="background:#F3E8FF;color:#7C3AED;width:36px;height:36px;border-radius:8px;display:flex;align-items:center;justify-content:center;flex-shrink:0;">${icon("bell", 18)}</div>
      <div>
        <h3 style="margin:0 0 4px 0;font-size:15px;color:#7C3AED;">投票日リマインド通知 ＆ カレンダー連携</h3>
        <p style="margin:0;font-size:13px;color:var(--muted);line-height:1.5;">
          各選挙の「🔔 通知ON」でリマインド登録。「📅 カレンダー」で端末のカレンダーアプリに追加できます。ログイン後に有効になります。
        </p>
      </div>
    </div>
  `;
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
    const daysLeft = daysUntil(e.isoDate);

    const electionRow = document.createElement("div");
    electionRow.className = "election-row-card" + (isSub ? " is-subscribed" : "");

    // 選挙名・日程情報
    const electionInfo = document.createElement("div");
    electionInfo.className = "election-info-box";

    let urgencyBadge = "";
    if (daysLeft === 0) urgencyBadge = `<span class="urgency-badge today">本日！</span>`;
    else if (daysLeft === 1) urgencyBadge = `<span class="urgency-badge urgent">明日！</span>`;
    else if (daysLeft <= 7 && daysLeft > 0) urgencyBadge = `<span class="urgency-badge soon">あと${daysLeft}日</span>`;

    electionInfo.innerHTML = `
      <div style="display:flex;align-items:center;gap:6px;flex-wrap:wrap;margin-bottom:4px;">
        <span class="year-badge">${e.yearLabel}</span>
        <span style="font-weight:600;font-size:14px;color:var(--ink);">${e.name}</span>
        ${urgencyBadge}
      </div>
      <span style="font-size:12.5px;color:var(--muted);">🗳️ 投票日 ${e.day}　　📋 告示 ${e.notice}</span>
    `;

    // タップでカウントダウンに反映
    electionInfo.addEventListener("click", () => {
      state.electionDate = e.isoDate || elJpDateToIso(e.day);
      renderFn();
    });

    // ボタン群
    const btnGroup = document.createElement("div");
    btnGroup.className = "election-btn-group";

    // 🔔 通知ON/OFF
    const subBtn = document.createElement("button");
    subBtn.className = "btn-sub-toggle" + (isSub ? " active" : "");
    subBtn.title = isSub ? "通知を解除する" : "投票日をリマインドする";
    subBtn.innerHTML = isSub
      ? `${icon("bell", 14)} <span>通知ON</span>`
      : `${icon("bell-off", 14)} <span>通知</span>`;

    subBtn.addEventListener("click", (evt) => {
      evt.stopPropagation();
      if (!state.currentUser.isLoggedIn) {
        // ログイン促すトースト
        import("../state").then(({ showToast }) => {
          showToast("⚠️ 通知の登録にはログインが必要です。マイページからアカウントを作成してください。");
        });
        return;
      }
      toggleElectionSubscription(e.name);
      renderFn();
    });

    // 📅 カレンダー追加ボタン
    const calBtn = document.createElement("button");
    calBtn.className = "btn-cal-add";
    calBtn.title = "端末のカレンダーに追加（iOS/Android/PC対応）";
    calBtn.innerHTML = `📅 <span>カレンダー</span>`;
    calBtn.addEventListener("click", (evt) => {
      evt.stopPropagation();
      downloadElectionICS(e.name, e.isoDate, e.notice);
    });

    btnGroup.appendChild(subBtn);
    btnGroup.appendChild(calBtn);

    electionRow.appendChild(electionInfo);
    electionRow.appendChild(btnGroup);
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
