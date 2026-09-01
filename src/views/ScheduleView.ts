// ============================================================
// 選挙日程 ＆ カウントダウン画面 (views/ScheduleView.ts)
// ============================================================

import { state, daysUntil, dateLabel, elJpDateToIso, icon } from '../state';
import { UPCOMING_ELECTIONS, ELECTION_YEAR_FILTERS, OFFICIAL_SCHEDULE_URL } from '../data/elections';

export function renderSchedulePage(renderFn: () => void): HTMLElement {
  const wrap = document.createElement("div");

  const title = document.createElement("h2");
  title.className = "disp section-title";
  title.textContent = "選挙日程 ＆ カウントダウン";
  wrap.appendChild(title);

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
  sub.textContent = `${dateLabel(state.electionDate)} 投票日 (リストをタップで日付変更)`;
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
    const btn = document.createElement("button");
    btn.className = "election-btn";
    btn.innerHTML = `
      <div style="display:flex;align-items:center;gap:6px;">
        <span class="year-badge">${e.yearLabel}</span>
        <span style="font-weight:500;">${e.name}</span>
      </div>
      <span style="font-size:13px;color:var(--muted);">投票日 ${e.day} (告示 ${e.notice})</span>
    `;
    btn.addEventListener("click", () => {
      state.electionDate = e.isoDate || elJpDateToIso(e.day);
      renderFn();
    });
    scheduleCard.appendChild(btn);
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

  infoRows.forEach(({ label, value, note }) => {
    const row = document.createElement("div");
    row.className = "info-row";
    row.style.display = "flex";
    row.style.justifyContent = "space-between";
    row.style.alignItems = "flex-start";
    row.style.gap = "16px";
    row.style.padding = "12px 0";

    row.innerHTML = `
      <span class="label" style="flex-shrink:0;font-weight:700;">${label}</span>
      <div style="text-align:right;">
        <div style="font-weight:600;color:#0F172A;line-height:1.4;">${value}</div>
        ${note ? `<div style="font-size:12px;color:var(--muted);margin-top:3px;">${note}</div>` : ""}
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
