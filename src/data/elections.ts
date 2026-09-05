// ============================================================
// 予定選挙スケジュールデータ (data/elections.ts)
// ============================================================

import { UpcomingElection } from '../types';

export const OFFICIAL_SCHEDULE_URL = "https://www.pref.niigata.lg.jp/site/senkyo/list803.html";

export const UPCOMING_ELECTIONS: UpcomingElection[] = [
  { year: "令和8年度", yearLabel: "令和8年", name: "胎内市長選挙", notice: "9月6日", day: "9月13日", isoDate: "2026-09-13" },
  { year: "令和8年度", yearLabel: "令和8年", name: "新潟市長選挙", notice: "10月11日", day: "10月25日", isoDate: "2026-10-25" },
  { year: "令和8年度", yearLabel: "令和8年", name: "燕市議会議員選挙", notice: "10月11日", day: "10月18日", isoDate: "2026-10-18" },
  { year: "令和8年度", yearLabel: "令和8年", name: "見附市議会議員選挙", notice: "10月18日", day: "10月25日", isoDate: "2026-10-25" },
  { year: "令和8年度", yearLabel: "令和8年", name: "妙高市長選挙", notice: "11月8日", day: "11月15日", isoDate: "2026-11-15" },
  { year: "令和8年度", yearLabel: "令和8年", name: "小千谷市長選挙", notice: "11月8日", day: "11月15日", isoDate: "2026-11-15" },
  { year: "令和8年度", yearLabel: "令和8年", name: "新発田市長選挙", notice: "11月15日", day: "11月22日", isoDate: "2026-11-22" },
  { year: "令和8年度", yearLabel: "令和8年", name: "阿賀町長選挙", notice: "11月17日", day: "11月22日", isoDate: "2026-11-22" },

  { year: "令和9年度以降", yearLabel: "令和9年", name: "第21回 統一地方選挙 (新潟県議会議員選挙)", notice: "3月下旬", day: "4月11日(予定)", isoDate: "2027-04-11" },
  { year: "令和9年度以降", yearLabel: "令和9年", name: "新潟市議会議員一般選挙", notice: "3月下旬", day: "4月11日(予定)", isoDate: "2027-04-11" },
  { year: "令和9年度以降", yearLabel: "令和9年", name: "長岡市長選挙 (任期満了 10月)", notice: "10月", day: "10月下旬(予定)", isoDate: "2027-10-24" },
  { year: "令和9年度以降", yearLabel: "令和9年", name: "上越市長選挙 (任期満了 11月)", notice: "11月", day: "11月下旬(予定)", isoDate: "2027-11-21" },
];

export const ELECTION_YEAR_FILTERS = ["すべて", "令和8年度", "令和9年度以降"];

const FALLBACK_ELECTIONS: Record<string, Partial<UpcomingElection>> = {
  "令和8年5月31日 新潟県知事選挙": {
    year: "令和8年度",
    yearLabel: "令和8年",
    notice: "5月14日",
    day: "5月31日",
    isoDate: "2026-05-31",
  },
  "新潟市議会議員補欠選挙": {
    year: "令和8年度",
    yearLabel: "令和8年",
    notice: "10月16日",
    day: "10月25日",
    isoDate: "2026-10-25",
  },
};

export function getElectionByName(name: string): UpcomingElection {
  const found = UPCOMING_ELECTIONS.find((e) => e.name === name);
  if (found) return found;

  const fallback = FALLBACK_ELECTIONS[name];
  if (fallback) {
    return {
      name,
      year: fallback.year || "令和8年度",
      yearLabel: fallback.yearLabel || "令和8年",
      notice: fallback.notice || "公表待ち",
      day: fallback.day || "日程確認中",
      isoDate: fallback.isoDate || "",
    };
  }

  return {
    name,
    year: "予定選挙",
    yearLabel: "予定",
    notice: "公表待ち",
    day: "日程確認中",
    isoDate: "",
  };
}
