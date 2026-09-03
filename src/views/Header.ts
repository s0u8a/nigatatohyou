// ============================================================
// ヘッダー・ロゴ・タブコンポーネント (views/Header.ts)
// ============================================================

import { TabKey } from '../types';
import { state, icon, markNotificationsAsRead } from '../state';

export function renderHeader(renderFn: () => void): HTMLElement {
  const header = document.createElement("header");
  header.className = "site-header";

  const container = document.createElement("div");
  container.className = "header-container";

  // Logo (rogo.png)
  const logoBox = document.createElement("div");
  logoBox.className = "logo-box";
  const logoImg = document.createElement("img");
  logoImg.src = "rogo.png";
  logoImg.alt = "新潟の新潟選挙";
  logoImg.className = "site-logo-img";
  logoImg.addEventListener("click", () => {
    state.tab = "top";
    renderFn();
  });
  logoBox.appendChild(logoImg);
  container.appendChild(logoBox);

  // Header Tabs (［ ホーム ］［ 日程 ］［ 公約 ］［ 投票診断 ］［ 投票所 ］［ マイページ ］)
  const navTabs = document.createElement("nav");
  navTabs.className = "nav-tabs-container";

  const tabDefs: [TabKey, string, string][] = [
    ["top", "ホーム", "home"],
    ["schedule", "日程", "calendar"],
    ["pledges", "公約", "clipboard"],
    ["quiz", "投票診断", "vote"],
    ["place", "投票所", "map-pin"],
    ["mypage", "マイページ", "user"],
  ];

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

  // 右上: ユーザー状態 ＆ 通知ベルアイコン
  const userControls = document.createElement("div");
  userControls.className = "header-user-controls";

  // ① ベルアイコン（通知ドロップダウン）
  const unreadCount = state.notifications.filter((n) => !n.read).length;
  const bellBtn = document.createElement("button");
  bellBtn.className = "header-icon-btn" + (unreadCount > 0 ? " has-unread" : "");
  bellBtn.title = "選挙リマインド通知";
  bellBtn.innerHTML = `
    ${icon("bell", 18)}
    ${unreadCount > 0 ? `<span class="notif-badge">${unreadCount}</span>` : ""}
  `;

  bellBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    state.isNotificationDropdownOpen = !state.isNotificationDropdownOpen;
    if (state.isNotificationDropdownOpen) {
      markNotificationsAsRead();
    }
    renderFn();
  });
  userControls.appendChild(bellBtn);

  // ② ユーザーログインステータスボタン
  const userPill = document.createElement("button");
  userPill.className = "header-user-pill" + (state.currentUser.isLoggedIn ? " logged-in" : "");
  if (state.currentUser.isLoggedIn) {
    userPill.innerHTML = `
      <span class="user-avatar">${icon("user", 14)}</span>
      <span class="user-name">${state.currentUser.name}</span>
      <span class="user-tag">${state.currentUser.municipality}</span>
    `;
  } else {
    userPill.innerHTML = `
      ${icon("log-in", 14)}
      <span>ログイン</span>
    `;
  }
  userPill.addEventListener("click", () => {
    state.tab = "mypage";
    state.isNotificationDropdownOpen = false;
    renderFn();
  });
  userControls.appendChild(userPill);

  container.appendChild(userControls);
  header.appendChild(container);

  // ③ 通知ドロップダウンパネル（開いている場合）
  if (state.isNotificationDropdownOpen) {
    const notifPanel = document.createElement("div");
    notifPanel.className = "notif-dropdown-panel";

    const panelHeader = document.createElement("div");
    panelHeader.className = "notif-panel-header";
    panelHeader.innerHTML = `
      <div style="display:flex;align-items:center;gap:6px;font-weight:700;">
        ${icon("bell", 16)} <span>選挙リマインド・通知一覧</span>
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
      notifList.innerHTML = `<p class="notif-empty">現在通知はありません。</p>`;
    } else {
      state.notifications.forEach((n) => {
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

    // フッター（通知をすべて既読）
    const panelFooter = document.createElement("div");
    panelFooter.className = "notif-panel-footer";
    const readAllBtn = document.createElement("button");
    readAllBtn.className = "btn-read-all-notif";
    readAllBtn.textContent = "すべて既読にする";
    readAllBtn.addEventListener("click", () => {
      markNotificationsAsRead();
      renderFn();
    });
    panelFooter.appendChild(readAllBtn);
    notifPanel.appendChild(panelFooter);

    header.appendChild(notifPanel);
  }

  return header;
}

