// ============================================================
// ヘッダー・ロゴ・タブコンポーネント (views/Header.ts)
// ============================================================

import { TabKey } from '../types';
import { state, icon } from '../state';

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

  // Header Tabs (［ ホーム ］［ 日程 ］［ 公約 ］［ 投票診断 ］［ 投票所 ］)
  const navTabs = document.createElement("nav");
  navTabs.className = "nav-tabs-container";

  const tabDefs: [TabKey, string, string][] = [
    ["top", "ホーム", "home"],
    ["schedule", "日程", "calendar"],
    ["pledges", "公約", "clipboard"],
    ["quiz", "投票診断", "vote"],
    ["place", "投票所", "map-pin"],
  ];

  tabDefs.forEach(([key, label, iconName]) => {
    const btn = document.createElement("button");
    btn.className = "nav-tab-item" + (state.tab === key ? " active" : "");
    btn.innerHTML = `${icon(iconName, 16)}<span>${label}</span>`;
    btn.addEventListener("click", () => {
      state.tab = key;
      renderFn();
    });
    navTabs.appendChild(btn);
  });

  container.appendChild(navTabs);
  header.appendChild(container);
  return header;
}
