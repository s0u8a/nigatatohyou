// ============================================================
// ログイン・会員登録 ＆ マイページ通知管理 (views/LoginView.ts)
// ============================================================

import {
  state,
  icon,
  logoutUser,
  saveState,
  triggerSimulatedNotification,
  showToast,
  toggleElectionSubscription,
  registerNewUser,
  authenticateUser,
  syncSubscriptionsToUserDB,
} from '../state';

// ============================================================
// メイン描画：ログイン済みか未ログインかで分岐
// ============================================================
export function renderMyPage(renderFn: () => void): HTMLElement {
  const wrap = document.createElement("div");
  wrap.className = "mypage-root";

  if (state.currentUser.isLoggedIn) {
    wrap.appendChild(renderDashboard(renderFn));
  } else {
    wrap.appendChild(renderAuthScreen(renderFn));
  }

  return wrap;
}

// ============================================================
// ① 未ログイン：ログイン / 新規登録スクリーン
// ============================================================
function renderAuthScreen(renderFn: () => void): HTMLElement {
  const root = document.createElement("div");
  root.className = "auth-screen";

  // ─── ヒーローヘッダー ───
  const hero = document.createElement("div");
  hero.className = "auth-hero";
  hero.innerHTML = `
    <div class="auth-hero-icon">${icon("shield-check", 32)}</div>
    <h1 class="auth-hero-title">にいがた、投票までの道</h1>
    <p class="auth-hero-sub">アカウントを作って、選挙日程リマインド通知を受け取ろう</p>
  `;
  root.appendChild(hero);

  // ─── カード ───
  const card = document.createElement("div");
  card.className = "auth-card";

  // タブバー
  let activeTab: "signup" | "login" = "signup";

  const tabBar = document.createElement("div");
  tabBar.className = "auth-tab-bar";

  const signupTab = document.createElement("button");
  signupTab.className = "auth-tab active";
  signupTab.id = "tab-signup";
  signupTab.textContent = "新規アカウント登録";

  const loginTab = document.createElement("button");
  loginTab.className = "auth-tab";
  loginTab.id = "tab-login";
  loginTab.textContent = "ログイン";

  tabBar.appendChild(signupTab);
  tabBar.appendChild(loginTab);
  card.appendChild(tabBar);

  // フォーム本体（切替）
  const formBody = document.createElement("div");
  formBody.className = "auth-form-body";
  card.appendChild(formBody);

  // ─── 新規登録フォーム ───
  const renderSignup = () => {
    formBody.innerHTML = "";

    // エラー表示エリア
    const errBox = document.createElement("div");
    errBox.className = "auth-error-box";
    errBox.style.display = "none";
    formBody.appendChild(errBox);

    const showError = (msg: string) => {
      errBox.textContent = "⚠️ " + msg;
      errBox.style.display = "block";
    };

    formBody.innerHTML += `
      <div class="form-group">
        <label class="form-label">お名前 <span class="form-required">必須</span></label>
        <input type="text" id="reg-name" class="form-input" placeholder="例: 山田 花子（ニックネーム可）" autocomplete="name">
      </div>
      <div class="form-group">
        <label class="form-label">メールアドレス <span class="form-required">必須</span></label>
        <input type="email" id="reg-email" class="form-input" placeholder="hanako@example.com" autocomplete="email">
      </div>
      <div class="form-group">
        <label class="form-label">パスワード <span class="form-required">必須（6文字以上）</span></label>
        <div class="pw-wrap">
          <input type="password" id="reg-password" class="form-input" placeholder="••••••••" autocomplete="new-password">
          <button type="button" class="pw-toggle-btn" title="表示切り替え">${icon("info", 14)}</button>
        </div>
      </div>
      <div class="form-group">
        <label class="form-label">お住まいの市区町村 <span class="form-required">必須</span></label>
        <select id="reg-muni" class="form-select">
          <optgroup label="新潟市">
            <option value="新潟市中央区">新潟市中央区</option>
            <option value="新潟市北区">新潟市北区</option>
            <option value="新潟市東区">新潟市東区</option>
            <option value="新潟市江南区">新潟市江南区</option>
            <option value="新潟市秋葉区">新潟市秋葉区</option>
            <option value="新潟市南区">新潟市南区</option>
            <option value="新潟市西区">新潟市西区</option>
            <option value="新潟市西蒲区">新潟市西蒲区</option>
          </optgroup>
          <optgroup label="下越エリア">
            <option value="新発田市">新発田市</option>
            <option value="村上市">村上市</option>
            <option value="阿賀野市">阿賀野市</option>
            <option value="五泉市">五泉市</option>
          </optgroup>
          <optgroup label="中越エリア">
            <option value="長岡市">長岡市</option>
            <option value="三条市">三条市</option>
            <option value="柏崎市">柏崎市</option>
            <option value="小千谷市">小千谷市</option>
            <option value="見附市">見附市</option>
            <option value="魚沼市">魚沼市</option>
          </optgroup>
          <optgroup label="上越エリア">
            <option value="上越市">上越市</option>
            <option value="妙高市">妙高市</option>
            <option value="糸魚川市">糸魚川市</option>
          </optgroup>
          <optgroup label="佐渡・その他">
            <option value="佐渡市">佐渡市</option>
            <option value="胎内市">胎内市</option>
          </optgroup>
        </select>
        <span class="form-hint">📍 お住まいの地域の選挙情報に合わせた通知が届きます</span>
      </div>
    `;

    // エラーボックスを先頭に戻す
    formBody.prepend(errBox);

    const submitBtn = document.createElement("button");
    submitBtn.className = "btn-auth-submit";
    submitBtn.innerHTML = `${icon("user", 16)} アカウントを作成する`;
    formBody.appendChild(submitBtn);

    // パスワード表示トグル
    const pwInput = formBody.querySelector("#reg-password") as HTMLInputElement;
    formBody.querySelector(".pw-toggle-btn")?.addEventListener("click", () => {
      pwInput.type = pwInput.type === "password" ? "text" : "password";
    });

    // 登録
    submitBtn.addEventListener("click", () => {
      const name = (formBody.querySelector("#reg-name") as HTMLInputElement)?.value.trim();
      const email = (formBody.querySelector("#reg-email") as HTMLInputElement)?.value.trim();
      const password = (formBody.querySelector("#reg-password") as HTMLInputElement)?.value;
      const muni = (formBody.querySelector("#reg-muni") as HTMLSelectElement)?.value;

      const result = registerNewUser(name, email, password, muni);
      if (!result.success) {
        showError(result.error!);
      } else {
        renderFn();
      }
    });

    // Enterキーでも登録
    formBody.querySelectorAll(".form-input, .form-select").forEach((el) => {
      el.addEventListener("keydown", (e: Event) => {
        if ((e as KeyboardEvent).key === "Enter") submitBtn.click();
      });
    });
  };

  // ─── ログインフォーム ───
  const renderLogin = () => {
    formBody.innerHTML = "";

    const errBox = document.createElement("div");
    errBox.className = "auth-error-box";
    errBox.style.display = "none";
    formBody.appendChild(errBox);

    const showError = (msg: string) => {
      errBox.textContent = "⚠️ " + msg;
      errBox.style.display = "block";
    };

    formBody.innerHTML += `
      <div class="form-group">
        <label class="form-label">メールアドレス</label>
        <input type="email" id="login-email" class="form-input" placeholder="hanako@example.com" autocomplete="email">
      </div>
      <div class="form-group">
        <label class="form-label">パスワード</label>
        <div class="pw-wrap">
          <input type="password" id="login-password" class="form-input" placeholder="••••••••" autocomplete="current-password">
          <button type="button" class="pw-toggle-btn" title="表示切り替え">${icon("info", 14)}</button>
        </div>
      </div>
    `;

    formBody.prepend(errBox);

    const submitBtn = document.createElement("button");
    submitBtn.className = "btn-auth-submit";
    submitBtn.innerHTML = `${icon("log-in", 16)} ログイン`;
    formBody.appendChild(submitBtn);

    // パスワード表示トグル
    const pwInput = formBody.querySelector("#login-password") as HTMLInputElement;
    formBody.querySelector(".pw-toggle-btn")?.addEventListener("click", () => {
      pwInput.type = pwInput.type === "password" ? "text" : "password";
    });

    // ログイン
    submitBtn.addEventListener("click", () => {
      const email = (formBody.querySelector("#login-email") as HTMLInputElement)?.value.trim();
      const password = (formBody.querySelector("#login-password") as HTMLInputElement)?.value;

      const result = authenticateUser(email, password);
      if (!result.success) {
        showError(result.error!);
      } else {
        renderFn();
      }
    });

    // Enterキーでも送信
    formBody.querySelectorAll(".form-input").forEach((el) => {
      el.addEventListener("keydown", (e: Event) => {
        if ((e as KeyboardEvent).key === "Enter") submitBtn.click();
      });
    });
  };

  // タブ切替
  signupTab.addEventListener("click", () => {
    activeTab = "signup";
    signupTab.classList.add("active");
    loginTab.classList.remove("active");
    renderSignup();
  });

  loginTab.addEventListener("click", () => {
    activeTab = "login";
    loginTab.classList.add("active");
    signupTab.classList.remove("active");
    renderLogin();
  });

  renderSignup(); // 初期表示は新規登録

  root.appendChild(card);

  // 注意書き
  const notice = document.createElement("p");
  notice.className = "auth-notice";
  notice.innerHTML = `🔒 入力情報はこのブラウザのみに保存されます。サーバーには送信されません。`;
  root.appendChild(notice);

  return root;
}

// ============================================================
// ② ログイン済み：マイページ ダッシュボード
// ============================================================
function renderDashboard(renderFn: () => void): HTMLElement {
  const root = document.createElement("div");

  // プロフィールカード
  const profileCard = document.createElement("div");
  profileCard.className = "card profile-card";
  profileCard.innerHTML = `
    <div class="profile-header">
      <div class="user-big-avatar">${icon("user", 28)}</div>
      <div class="profile-meta">
        <div style="display:flex;align-items:center;gap:8px;flex-wrap:wrap;">
          <h2 style="margin:0;font-size:18px;font-weight:800;">${state.currentUser.name} さん</h2>
          <span class="verified-tag">✅ 登録ユーザー</span>
        </div>
        <p style="margin:4px 0 0 0;font-size:13px;color:var(--muted);">${state.currentUser.email}</p>
      </div>
    </div>
    <div class="profile-info-grid">
      <div class="info-item">
        <span class="info-label">登録地域</span>
        <span class="info-val">📍 ${state.currentUser.municipality}</span>
      </div>
      <div class="info-item">
        <span class="info-label">リマインド登録中</span>
        <span class="info-val">🔔 ${state.currentUser.subscribedElectionNames.length} 件</span>
      </div>
    </div>
  `;
  root.appendChild(profileCard);

  // リマインド登録中の選挙一覧
  const remindCard = document.createElement("div");
  remindCard.className = "card";
  remindCard.innerHTML = `
    <h3 style="margin:0 0 12px 0;font-size:16px;display:flex;align-items:center;gap:6px;">
      ${icon("bell", 18)} <span>リマインド登録している選挙</span>
    </h3>
  `;

  const subList = document.createElement("div");
  subList.className = "subscribed-elections-list";

  if (state.currentUser.subscribedElectionNames.length === 0) {
    subList.innerHTML = `
      <div class="empty-sub-box">
        <p style="margin:0 0 6px 0;color:var(--muted);font-size:14px;">リマインド登録している選挙がありません</p>
        <p style="margin:0;font-size:13px;">「日程」タブから選挙ごとに「🔔 通知ON」を押して登録できます。</p>
      </div>
    `;
  } else {
    state.currentUser.subscribedElectionNames.forEach((name) => {
      const item = document.createElement("div");
      item.className = "sub-election-item";
      item.innerHTML = `
        <div style="display:flex;align-items:center;gap:8px;">
          <span class="sub-icon">${icon("check", 14)}</span>
          <span style="font-weight:600;font-size:14px;">${name}</span>
        </div>
      `;
      const removeBtn = document.createElement("button");
      removeBtn.className = "btn-remove-sub";
      removeBtn.innerHTML = `${icon("x", 12)} 解除`;
      removeBtn.addEventListener("click", () => {
        toggleElectionSubscription(name);
        syncSubscriptionsToUserDB();
        renderFn();
      });
      item.appendChild(removeBtn);
      subList.appendChild(item);
    });
  }
  remindCard.appendChild(subList);
  root.appendChild(remindCard);

  // 通知タイミング設定
  const prefCard = document.createElement("div");
  prefCard.className = "card";
  prefCard.innerHTML = `
    <h3 style="margin:0 0 12px 0;font-size:16px;display:flex;align-items:center;gap:6px;">
      ${icon("settings", 18)} <span>通知タイミングの設定</span>
    </h3>
    <p style="font-size:13px;color:var(--muted);margin-bottom:14px;">投票日を忘れないよう、希望するタイミングでリマインドを届けます。</p>
  `;

  const timingOptions = [
    { key: "days7Before", label: "📅 7日前（期日前投票の案内）" },
    { key: "days3Before", label: "📅 3日前（投票準備の確認）" },
    { key: "day1Before", label: "🔔 前日（最終リマインド）" },
    { key: "onElectionDay", label: "🗳️ 投票日当日 朝7:00" },
  ];

  const timingForm = document.createElement("div");
  timingForm.className = "timing-form";

  timingOptions.forEach((opt) => {
    const row = document.createElement("label");
    row.className = "timing-checkbox-row";
    const isChecked = (state.currentUser.notificationPrefs as any)[opt.key];
    row.innerHTML = `
      <input type="checkbox" ${isChecked ? "checked" : ""} data-key="${opt.key}">
      <span>${opt.label}</span>
    `;
    row.querySelector("input")?.addEventListener("change", (e) => {
      const checked = (e.target as HTMLInputElement).checked;
      (state.currentUser.notificationPrefs as any)[opt.key] = checked;
      saveState();
      showToast("✅ 通知タイミングを更新しました");
    });
    timingForm.appendChild(row);
  });
  prefCard.appendChild(timingForm);

  // Web通知許可ボタン
  const webNotifBox = document.createElement("div");
  webNotifBox.className = "web-notif-box";
  webNotifBox.innerHTML = `
    <div>
      <p style="margin:0;font-weight:700;font-size:13px;">ブラウザプッシュ通知</p>
      <p style="margin:2px 0 0 0;font-size:12px;color:var(--muted);">ブラウザの通知ポップアップを有効にします</p>
    </div>
  `;
  const webNotifBtn = document.createElement("button");
  webNotifBtn.className = "btn-web-notif-perm";
  webNotifBtn.textContent = "通知を許可する";
  webNotifBtn.addEventListener("click", async () => {
    if ("Notification" in window) {
      const perm = await Notification.requestPermission();
      showToast(perm === "granted" ? "✅ ブラウザ通知が許可されました！" : "⚠️ ブラウザ通知が拒否されました");
    } else {
      showToast("このブラウザはWeb Notificationに対応していません");
    }
  });
  webNotifBox.appendChild(webNotifBtn);
  prefCard.appendChild(webNotifBox);
  root.appendChild(prefCard);

  // アクションバー（テスト通知 ＆ ログアウト）
  const actionBar = document.createElement("div");
  actionBar.className = "mypage-action-bar";

  const testBtn = document.createElement("button");
  testBtn.className = "btn-test-notif-large";
  testBtn.innerHTML = `⚡ 模擬通知をテスト送信する`;
  testBtn.addEventListener("click", () => triggerSimulatedNotification(undefined, renderFn));

  const logoutBtn = document.createElement("button");
  logoutBtn.className = "btn-logout";
  logoutBtn.innerHTML = `${icon("log-out", 16)} ログアウト`;
  logoutBtn.addEventListener("click", () => {
    logoutUser();
    renderFn();
  });

  actionBar.appendChild(testBtn);
  actionBar.appendChild(logoutBtn);
  root.appendChild(actionBar);

  return root;
}
