// ============================================================
// ヘッダー・ボトムナビ (views/Header.ts)
// PC: 上部ヘッダー, スマホ: 上部はロゴ+ベルのみ / 下部にボトムナビ
// ============================================================

import { TabKey } from '../types';
import { state, icon, markNotificationsAsRead } from '../state';

const tabDefs: [TabKey, string, string][] = [
  ["top",      "ホーム",   "home"],
  ["schedule", "日程",     "calendar"],
  ["pledges",  "公約",     "clipboard"],
  ["quiz",     "診断",     "vote"],
  ["place",    "投票所",   "map-pin"],
  ["mypage",   "マイページ","user"],
];

export function renderHeader(renderFn: () => void): HTMLElement {
  const header = document.createElement("header");
  header.className = "site-header";

  const container = document.createElement("div");
  container.className = "header-container";

  // ── ロゴ ──────────────────────────────
  const logoBox = document.createElement("div");
  logoBox.className = "logo-box";
  const logoImg = document.createElement("img");
  logoImg.src = "rogo.png";
  logoImg.alt = "にいがた投票までの道";
  logoImg.className = "site-logo-img";
  logoImg.addEventListener("click", () => {
    state.tab = "top";
    renderFn();
  });
  logoBox.appendChild(logoImg);
  container.appendChild(logoBox);

  // ── PC用ナビタブ（モバイルでは display:none） ─
  const navTabs = document.createElement("nav");
  navTabs.className = "nav-tabs-container";

  tabDefs.forEach(([key, label, iconName]) => {
    const btn = document.createElement("button");
    btn.className = "nav-tab-item" + (state.tab === key ? " active" : "");
    btn.innerHTML = `${icon(iconName, 16)}<span>${label}</span>`;
    btn.addEventListener("click", () => {
      state.tab = key;
      state.isNotificationDropdownOpen = false;
      renderFn();
    });
    navTabs.appendChild(btn);
  });

  container.appendChild(navTabs);

  // ── 右上: 通知ベル + ユーザー ────────────
  const userControls = document.createElement("div");
  userControls.className = "header-user-controls";

  // ベル
  const unreadCount = state.notifications.filter((n) => !n.read).length;
  const bellBtn = document.createElement("button");
  bellBtn.className = "header-icon-btn notif-btn" + (unreadCount > 0 ? " has-unread" : "");
  bellBtn.title = "通知";
  bellBtn.innerHTML = `
    ${icon("bell", 20)}
    ${unreadCount > 0 ? `<span class="notif-badge">${unreadCount}</span>` : ""}
  `;
  bellBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    state.isNotificationDropdownOpen = !state.isNotificationDropdownOpen;
    if (state.isNotificationDropdownOpen) markNotificationsAsRead();
    renderFn();
  });
  userControls.appendChild(bellBtn);

  // ユーザーピル（PC）
  const userPill = document.createElement("button");
  userPill.className = "header-user-pill" + (state.currentUser.isLoggedIn ? " logged-in" : "");
  if (state.currentUser.isLoggedIn) {
    userPill.innerHTML = `
      <span class="user-avatar">${icon("user", 14)}</span>
      <span class="user-name">${state.currentUser.name}</span>
    `;
  } else {
    userPill.innerHTML = `${icon("log-in", 14)}<span>ログイン</span>`;
  }
  userPill.addEventListener("click", () => {
    state.tab = "mypage";
    state.isNotificationDropdownOpen = false;
    renderFn();
  });
  userControls.appendChild(userPill);

  container.appendChild(userControls);
  header.appendChild(container);

  // ── 通知ドロップダウン ─────────────────────
  if (state.isNotificationDropdownOpen) {
    const notifPanel = document.createElement("div");
    notifPanel.className = "notif-dropdown-panel";

    const panelHeader = document.createElement("div");
    panelHeader.className = "notif-panel-header";
    panelHeader.innerHTML = `
      <div style="display:flex;align-items:center;gap:6px;font-weight:700;">
        ${icon("bell", 16)} <span>通知一覧</span>
      </div>
      <button class="notif-close-btn">${icon("x", 14)}</button>
    `;
    panelHeader.querySelector(".notif-close-btn")?.addEventListener("click", () => {
      state.isNotificationDropdownOpen = false;
      renderFn();
    });
    notifPanel.appendChild(panelHeader);

    const notifList = document.createElement("div");
    notifList.className = "notif-panel-list";

    if (state.notifications.length === 0) {
      notifList.innerHTML = `<p class="notif-empty">現在通知はありません</p>`;
    } else {
      state.notifications.slice(0, 8).forEach((n) => {
        const item = document.createElement("div");
        item.className = `notif-item type-${n.type}`;
        item.innerHTML = `
          <div class="notif-item-head">
            <span class="notif-item-title">${n.title}</span>
            <span class="notif-item-date">${n.date}</span>
          </div>
          <p class="notif-item-msg">${n.message}</p>
        `;
        notifList.appendChild(item);
      });
    }
    notifPanel.appendChild(notifList);

    const panelFooter = document.createElement("div");
    panelFooter.className = "notif-panel-footer";
    const readAllBtn = document.createElement("button");
    readAllBtn.className = "btn-read-all-notif";
    readAllBtn.textContent = "すべて既読にする";
    readAllBtn.addEventListener("click", () => { markNotificationsAsRead(); renderFn(); });
    panelFooter.appendChild(readAllBtn);
    notifPanel.appendChild(panelFooter);

    header.appendChild(notifPanel);
  }

  // ── スマホ用ボトムナビ ─────────────────────
  // 既存のボトムナビを削除してから再描画
  const existing = document.getElementById("bottom-nav");
  if (existing) existing.remove();

  const bottomNav = document.createElement("nav");
  bottomNav.id = "bottom-nav";
  bottomNav.className = "bottom-nav";

  tabDefs.forEach(([key, label, iconName]) => {
    const item = document.createElement("button");
    item.className = "bottom-nav-item" + (state.tab === key ? " active" : "");

    // 通知バッジをマイページに表示
    const badge = (key === "mypage" && unreadCount > 0)
      ? `<span class="bottom-nav-badge">${unreadCount}</span>` : "";

    item.innerHTML = `
      <span class="bottom-nav-icon-wrap">
        ${icon(iconName, 22)}
        ${badge}
      </span>
      <span class="bottom-nav-label">${label}</span>
    `;
    item.addEventListener("click", () => {
      state.tab = key;
      state.isNotificationDropdownOpen = false;
      renderFn();
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
    bottomNav.appendChild(item);
  });

  document.body.appendChild(bottomNav);

  return header;
}
