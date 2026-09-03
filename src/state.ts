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

// ============================================================
// ローカルユーザーDB (localStorage ベースの簡易認証)
// ============================================================
interface StoredUserRecord {
  id: string;
  name: string;
  email: string;
  passwordHash: string;
  municipality: string;
  subscribedElectionNames: string[];
  notificationPrefs: UserProfile['notificationPrefs'];
}

function simpleHash(str: string): string {
  // シンプルなハッシュ（本番では bcrypt 等を使用すること）
  let hash = 5381;
  for (let i = 0; i < str.length; i++) {
    hash = (hash * 33) ^ str.charCodeAt(i);
  }
  return (hash >>> 0).toString(16);
}

export function loadUserDB(): StoredUserRecord[] {
  try {
    const saved = localStorage.getItem("niigata_user_db");
    if (saved) return JSON.parse(saved);
  } catch (e) {
    console.error("Failed to load user DB", e);
  }
  return [];
}

function saveUserDB(db: StoredUserRecord[]) {
  try {
    localStorage.setItem("niigata_user_db", JSON.stringify(db));
  } catch (e) {
    console.error("Failed to save user DB", e);
  }
}

export function registerNewUser(
  name: string,
  email: string,
  password: string,
  municipality: string
): { success: boolean; error?: string } {
  if (!name.trim()) return { success: false, error: "お名前を入力してください" };
  if (!email.trim() || !email.includes("@")) return { success: false, error: "有効なメールアドレスを入力してください" };
  if (password.length < 6) return { success: false, error: "パスワードは6文字以上にしてください" };

  const db = loadUserDB();
  if (db.find((u) => u.email === email.toLowerCase())) {
    return { success: false, error: "このメールアドレスはすでに登録されています" };
  }

  const newRecord: StoredUserRecord = {
    id: "user-" + Date.now(),
    name: name.trim(),
    email: email.toLowerCase().trim(),
    passwordHash: simpleHash(password),
    municipality: municipality || "新潟市中央区",
    subscribedElectionNames: [],
    notificationPrefs: { days7Before: true, days3Before: true, day1Before: true, onElectionDay: true },
  };
  db.push(newRecord);
  saveUserDB(db);

  // 登録成功 → そのままログイン状態にする
  state.currentUser = {
    id: newRecord.id,
    name: newRecord.name,
    email: newRecord.email,
    municipality: newRecord.municipality,
    isLoggedIn: true,
    isDemo: false,
    notificationPrefs: newRecord.notificationPrefs,
    subscribedElectionNames: newRecord.subscribedElectionNames,
  };
  saveState();
  showToast(`✅ 登録完了！${newRecord.name} さん、ようこそ！`);
  return { success: true };
}

export function authenticateUser(
  email: string,
  password: string
): { success: boolean; error?: string } {
  if (!email.trim() || !password) return { success: false, error: "メールアドレスとパスワードを入力してください" };

  const db = loadUserDB();
  const record = db.find((u) => u.email === email.toLowerCase().trim());
  if (!record) return { success: false, error: "このメールアドレスは登録されていません" };
  if (record.passwordHash !== simpleHash(password)) return { success: false, error: "パスワードが正しくありません" };

  state.currentUser = {
    id: record.id,
    name: record.name,
    email: record.email,
    municipality: record.municipality,
    isLoggedIn: true,
    isDemo: false,
    notificationPrefs: record.notificationPrefs,
    subscribedElectionNames: record.subscribedElectionNames,
  };
  saveState();
  showToast(`おかえりなさい！${record.name} さん`);
  return { success: true };
}

// 選挙サブスクリプションの変更をDBにも反映する
export function syncSubscriptionsToUserDB() {
  const db = loadUserDB();
  const idx = db.findIndex((u) => u.email === state.currentUser.email);
  if (idx >= 0) {
    db[idx].subscribedElectionNames = [...state.currentUser.subscribedElectionNames];
    saveUserDB(db);
  }
}

function loadStoredUser(): UserProfile {
  try {
    const saved = localStorage.getItem("niigata_election_user");
    if (saved) {
      const parsed: UserProfile = JSON.parse(saved);
      // デモユーザーや、実DBに存在しないアカウントは自動ログアウト
      if (parsed.isDemo || parsed.id === "guest" || parsed.id === "demo-voter-01") {
        localStorage.removeItem("niigata_election_user");
        return defaultGuestUser;
      }
      // 実DBに存在するか確認
      const db = loadUserDB();
      const exists = db.some((u) => u.id === parsed.id && u.email === parsed.email);
      if (!exists) {
        localStorage.removeItem("niigata_election_user");
        return defaultGuestUser;
      }
      return parsed;
    }
  } catch (e) {
    console.error("Failed to load user state", e);
  }
  return defaultGuestUser; // 未ログイン状態でスタート
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

// loginDemoUser は削除（本物の認証に移行済み）

export function logoutUser() {
  state.currentUser = {
    ...defaultGuestUser,
    isLoggedIn: false,
  };
  saveState();
  showToast("ログアウトしました");
}

export function toggleElectionSubscription(electionName: string): boolean {
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

// ============================================================
// 自動選挙リマインド通知チェック（アプリ起動時に実行）
// ============================================================
export function checkAndFireReminders(renderFn?: () => void) {
  if (!state.currentUser.isLoggedIn) return;
  if (state.currentUser.subscribedElectionNames.length === 0) return;

  const today = new Date().toISOString().split("T")[0];
  const lastCheck = localStorage.getItem("niigata_last_reminder_check");
  // 同じ日に複数回チェックしない（1日1回のみ）
  if (lastCheck === today) return;
  localStorage.setItem("niigata_last_reminder_check", today);

  // elections データを動的インポート
  import("./data/elections").then(({ UPCOMING_ELECTIONS }) => {
    const thresholds = [
      { days: 0, label: "今日が投票日です！" },
      { days: 1, label: "明日が投票日です！" },
      { days: 3, label: "あと3日で投票日です" },
      { days: 7, label: "あと7日で投票日です（期日前投票も可能）" },
    ];

    let hasNewNotif = false;

    state.currentUser.subscribedElectionNames.forEach((name) => {
      const election = UPCOMING_ELECTIONS.find((e) => e.name === name);
      if (!election) return;

      const days = daysUntil(election.isoDate);
      if (days < 0) return; // 過去の選挙はスキップ

      const match = thresholds.find((t) => t.days === days);
      if (!match) return;

      const pref = state.currentUser.notificationPrefs;
      if (days === 0 && !pref.onElectionDay) return;
      if (days === 1 && !pref.day1Before) return;
      if (days === 3 && !pref.days3Before) return;
      if (days === 7 && !pref.days7Before) return;

      const notif: NotificationItem = {
        id: "auto-" + Date.now() + "-" + name,
        title: `🗳️ ${match.label}`,
        message: `「${name}」の投票日が近づいています。${state.currentUser.municipality}の投票所で忘れずに投票しましょう！`,
        date: new Date().toLocaleString("ja-JP", { month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit" }),
        read: false,
        electionName: name,
        type: days <= 1 ? "urgent" : "reminder",
      };

      // 同じ選挙・同じタイミングの通知が既にあれば追加しない
      const alreadyExists = state.notifications.some(
        (n) => n.electionName === name && n.title === notif.title
      );
      if (!alreadyExists) {
        state.notifications.unshift(notif);
        hasNewNotif = true;

        // Web Notification API
        if ("Notification" in window && Notification.permission === "granted") {
          try {
            new Notification(notif.title, {
              body: notif.message,
              icon: "rogo.png",
              badge: "rogo.png",
            });
          } catch (e) {
            console.log("Web Notification failed", e);
          }
        }
      }
    });

    if (hasNewNotif) {
      saveState();
      if (renderFn) renderFn();
    }
  }).catch(() => {});
}

// ============================================================
// カレンダー連携 (.ics 生成)
// すべての端末（iOS/Android/PC）の標準カレンダーアプリに対応
// ============================================================
export function downloadElectionICS(electionName: string, isoDate: string, notice: string) {
  const dateStr = isoDate.replace(/-/g, "");
  const noticeDateStr = isoDate.replace(/-/g, ""); // 告示日の近似値として投票日を使用

  const ics = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//にいがた投票までの道//JP",
    "CALSCALE:GREGORIAN",
    "METHOD:PUBLISH",
    "BEGIN:VEVENT",
    `UID:${Date.now()}@niigata-vote.jp`,
    `DTSTAMP:${new Date().toISOString().replace(/[-:.]/g, "").slice(0, 15)}Z`,
    `DTSTART;VALUE=DATE:${dateStr}`,
    `DTEND;VALUE=DATE:${dateStr}`,
    `SUMMARY:🗳️ ${electionName}（投票日）`,
    `DESCRIPTION:新潟県 ${electionName} の投票日です。\n忘れずに投票に行きましょう！\n\n期日前投票: 告示日(${notice})〜前日まで可能です。\n\n詳細: https://www.pref.niigata.lg.jp/site/senkyo/`,
    `LOCATION:新潟県内 各投票所`,
    "BEGIN:VALARM",
    "TRIGGER:-P7D",
    "ACTION:DISPLAY",
    `DESCRIPTION:【7日前リマインド】${electionName} の投票日が1週間後です`,
    "END:VALARM",
    "BEGIN:VALARM",
    "TRIGGER:-P1D",
    "ACTION:DISPLAY",
    `DESCRIPTION:【前日リマインド】明日は ${electionName} の投票日です！`,
    "END:VALARM",
    "END:VEVENT",
    "END:VCALENDAR",
  ].join("\r\n");

  const blob = new Blob([ics], { type: "text/calendar;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `${electionName}.ics`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
  showToast("📅 カレンダーに追加しました！投票日の7日前・前日にリマインドされます");
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

