// ============================================================
// アプリ状態管理 ＆ ヘルパー関数 (state.ts)
// ============================================================

import { Tag, Candidate, AppState, UserProfile, NotificationItem } from './types';
import { TAGS, CANDIDATES } from './data/candidates';

export function freshScores(): Record<Tag, number> {
  const s = {} as Record<Tag, number>;
  TAGS.forEach((t) => (s[t] = 0));
  return s;
}

export const defaultGuestUser: UserProfile = {
  id: "guest",
  name: "ゲストユーザー",
  email: "",
  municipality: "新潟市中央区",
  isLoggedIn: false,
  notificationPrefs: {
    days7Before: true,
    days3Before: true,
    day1Before: true,
    onElectionDay: true,
  },
  subscribedElectionNames: ["令和8年5月31日 新潟県知事選挙", "新潟市長選挙"],
};

export const defaultDemoUser: UserProfile = {
  id: "demo-voter-01",
  name: "新潟 たろう",
  email: "niigata.taro@example.com",
  municipality: "新潟市中央区",
  isLoggedIn: true,
  isDemo: true,
  notificationPrefs: {
    days7Before: true,
    days3Before: true,
    day1Before: true,
    onElectionDay: true,
  },
  subscribedElectionNames: ["令和8年5月31日 新潟県知事選挙", "新潟市長選挙", "新潟市議会議員補欠選挙"],
};

export const defaultInitialNotifications: NotificationItem[] = [
  {
    id: "notif-1",
    title: "🔔 選挙日程リマインド通知",
    message: "「令和8年5月31日 新潟県知事選挙」の告示日が近づいています。期日前投票所（新潟市役所など）の案内をご確認ください。",
    date: "2026-09-01 10:00",
    read: false,
    electionName: "令和8年5月31日 新潟県知事選挙",
    type: "reminder",
  },
  {
    id: "notif-2",
    title: "📍 地域の投票所アップデート",
    message: "新潟市中央区の期日前投票所情報が更新されました。最寄りの施設は「投票所」タブから検索できます。",
    date: "2026-08-28 14:30",
    read: true,
    type: "info",
  },
];

function loadStoredUser(): UserProfile {
  try {
    const saved = localStorage.getItem("niigata_election_user");
    if (saved) return JSON.parse(saved);
  } catch (e) {
    console.error("Failed to load user state", e);
  }
  return defaultDemoUser; // 初回デモ体験向上のためデモユーザーを初期設定
}

function loadStoredNotifications(): NotificationItem[] {
  try {
    const saved = localStorage.getItem("niigata_election_notifs");
    if (saved) return JSON.parse(saved);
  } catch (e) {
    console.error("Failed to load notification state", e);
  }
  return defaultInitialNotifications;
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
  currentUser: loadStoredUser(),
  notifications: loadStoredNotifications(),
  isNotificationDropdownOpen: false,
  toastMessage: null,
};

export function saveState() {
  try {
    localStorage.setItem("niigata_election_user", JSON.stringify(state.currentUser));
    localStorage.setItem("niigata_election_notifs", JSON.stringify(state.notifications));
  } catch (e) {
    console.error("Failed to save state", e);
  }
}

export function loginUser(name: string, email: string, municipality: string) {
  state.currentUser = {
    ...state.currentUser,
    id: "user-" + Date.now(),
    name: name || "新潟 市民",
    email: email || "user@example.com",
    municipality: municipality || "新潟市中央区",
    isLoggedIn: true,
    isDemo: false,
  };
  saveState();
  showToast(`Welcome! ${state.currentUser.name} さんでログインしました`);
}

export function loginDemoUser() {
  state.currentUser = { ...defaultDemoUser };
  saveState();
  showToast("⚡ デモユーザー（新潟 たろう さん）でログインしました");
}

export function logoutUser() {
  state.currentUser = {
    ...defaultGuestUser,
    isLoggedIn: false,
  };
  saveState();
  showToast("ログアウトしました");
}

export function toggleElectionSubscription(electionName: string): boolean {
  if (!state.currentUser.isLoggedIn) {
    loginDemoUser();
  }
  const index = state.currentUser.subscribedElectionNames.indexOf(electionName);
  let isSubscribed = false;
  if (index >= 0) {
    state.currentUser.subscribedElectionNames.splice(index, 1);
    showToast(`「${electionName}」のリマインド通知を解除しました`);
  } else {
    state.currentUser.subscribedElectionNames.push(electionName);
    isSubscribed = true;
    showToast(`🔔 「${electionName}」のリマインド通知を登録しました！`);
  }
  saveState();
  return isSubscribed;
}

export function isElectionSubscribed(electionName: string): boolean {
  return state.currentUser.subscribedElectionNames.includes(electionName);
}

export function triggerSimulatedNotification(electionName?: string, renderFn?: () => void) {
  const targetName = electionName || "令和8年5月31日 新潟県知事選挙";
  const newNotif: NotificationItem = {
    id: "notif-" + Date.now(),
    title: `🔔 【リマインド】${targetName}`,
    message: `投票日（${targetName}）が近づいています！期日前投票所（${state.currentUser.municipality}内）での事前投票も可能です。準備をお忘れなく！`,
    date: new Date().toLocaleString("ja-JP", { month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit" }),
    read: false,
    electionName: targetName,
    type: "urgent",
  };

  state.notifications.unshift(newNotif);
  saveState();

  // Web Notification API (ブラウザ標準プッシュ通知試行)
  if ("Notification" in window && Notification.permission === "granted") {
    try {
      new Notification(newNotif.title, {
        body: newNotif.message,
        icon: "rogo.png",
      });
    } catch (e) {
      console.log("Web Notification output error", e);
    }
  }

  showToast(`🔔 【通知送信】${newNotif.title} の模擬通知を発火しました！`);
  if (renderFn) renderFn();
}

export function markNotificationsAsRead() {
  state.notifications.forEach((n) => (n.read = true));
  saveState();
}

let toastTimer: any = null;
export function showToast(message: string) {
  state.toastMessage = message;
  const existing = document.getElementById("app-toast-container");
  if (existing) existing.remove();

  const toast = document.createElement("div");
  toast.id = "app-toast-container";
  toast.className = "toast-banner";
  toast.innerHTML = `<span class="toast-text">${message}</span>`;
  document.body.appendChild(toast);

  if (toastTimer) clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    if (toast.parentNode) toast.parentNode.removeChild(toast);
    state.toastMessage = null;
  }, 4000);
}

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
    case "bell":
      return `<svg ${common}><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>`;
    case "bell-off":
      return `<svg ${common}><path d="M8.66 8.66A6 6 0 0 1 18 8c0 7-3 9-3 9H3s3-2 3-9a6 6 0 0 1 .66-2.66"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/><line x1="1" y1="1" x2="23" y2="23"/></svg>`;
    case "user":
      return `<svg ${common}><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>`;
    case "log-in":
      return `<svg ${common}><path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"/><polyline points="10 17 15 12 10 7"/><line x1="15" y1="12" x2="3" y2="12"/></svg>`;
    case "log-out":
      return `<svg ${common}><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>`;
    case "check":
      return `<svg ${common}><polyline points="20 6 9 17 4 12"/></svg>`;
    case "alert-circle":
      return `<svg ${common}><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>`;
    case "settings":
      return `<svg ${common}><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>`;
    case "shield-check":
      return `<svg ${common}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/></svg>`;
    case "mail":
      return `<svg ${common}><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>`;
    default:
      return "";
  }
}

