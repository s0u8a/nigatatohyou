// ============================================================
// アプリ状態管理 ＆ ヘルパー関数 (state.ts)
// ============================================================

import { Tag, Candidate, AppState } from './types';
import { TAGS, CANDIDATES } from './data/candidates';

export function freshScores(): Record<Tag, number> {
  const s = {} as Record<Tag, number>;
  TAGS.forEach((t) => (s[t] = 0));
  return s;
}

export const state: AppState = {
  tab: "top", // 最初に開いた時は必ずこのトップ画面
  electionDate: "2026-10-25",
  quizStep: 0,
  scores: freshScores(),
  quizFinished: false,
  selectedRegion: "すべて",
  selectedMunicipality: "すべて",
  placeSearchQuery: "",
  selectedElectionYear: "すべて",
};

export function daysUntil(dateStr: string): number {
  const target = new Date(dateStr + "T00:00:00");
  const now = new Date();
  now.setHours(0, 0, 0, 0);
  return Math.ceil((target.getTime() - now.getTime()) / (1000 * 60 * 60 * 24));
}

export function dateLabel(dateStr: string): string {
  const d = new Date(dateStr + "T00:00:00");
  if (isNaN(d.getTime())) return "";
  const weekday = ["日", "月", "火", "水", "木", "金", "土"][d.getDay()];
  return `${d.getFullYear()}年${d.getMonth() + 1}月${d.getDate()}日(${weekday})`;
}

export function topTag(scores: Record<Tag, number>): Tag {
  return TAGS.reduce((best, t) => (scores[t] > scores[best] ? t : best), TAGS[0]);
}

export function matchedCandidate(scores: Record<Tag, number>): Candidate {
  let best: Candidate = CANDIDATES[0];
  let bestScore = -Infinity;
  for (const c of CANDIDATES) {
    let dot = 0;
    TAGS.forEach((t) => (dot += (scores[t] || 0) * (c.weights[t] || 0)));
    if (dot > bestScore) {
      bestScore = dot;
      best = c;
    }
  }
  return best;
}

export function elJpDateToIso(day: string): string {
  const match = day.match(/(\d+)月(\d+)日/);
  if (!match) return state.electionDate;
  const [, m, d] = match;
  return `2026-${m.padStart(2, "0")}-${d.padStart(2, "0")}`;
}

// アイコン生成ヘルパー
export function icon(name: string, size = 16): string {
  const common = `width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"`;
  switch (name) {
    case "home":
      return `<svg ${common}><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>`;
    case "calendar":
      return `<svg ${common}><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>`;
    case "clipboard":
      return `<svg ${common}><rect x="6" y="4" width="12" height="16" rx="2"/><rect x="9" y="2" width="6" height="4" rx="1"/><path d="M9 11h6M9 15h6"/></svg>`;
    case "vote":
      return `<svg ${common}><path d="M12 3l8 4v2H4V7l8-4z"/><path d="M4 10v9h16v-9M9 14l2 2 4-4"/></svg>`;
    case "map-pin":
      return `<svg ${common}><path d="M12 21s7-6.1 7-11a7 7 0 1 0-14 0c0 4.9 7 11 7 11z"/><circle cx="12" cy="10" r="2.5"/></svg>`;
    case "chevron-right":
      return `<svg ${common}><path d="M9 6l6 6-6 6"/></svg>`;
    case "rotate-ccw":
      return `<svg ${common}><path d="M3 12a9 9 0 1 0 3-6.7"/><path d="M3 4v5h5"/></svg>`;
    case "external-link":
      return `<svg ${common}><path d="M14 3h7v7"/><path d="M10 14L21 3"/><path d="M21 14v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5"/></svg>`;
    case "search":
      return `<svg ${common}><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>`;
    case "x":
      return `<svg ${common}><path d="M18 6 6 18M6 6l12 12"/></svg>`;
    case "info":
      return `<svg ${common}><circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/></svg>`;
    default:
      return "";
  }
}
