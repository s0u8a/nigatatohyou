// ============================================================
// ログイン・会員登録 ＆ マイページ通知管理 (views/LoginView.ts)
// 若者の選挙日忘れ解決ソリューション
// ============================================================

import { state, icon, loginUser, loginDemoUser, logoutUser, saveState, triggerSimulatedNotification, showToast, toggleElectionSubscription } from '../state';
import { MUNICIPALITIES_BY_REGION } from '../data/places';

export function renderMyPage(renderFn: () => void): HTMLElement {
  const wrap = document.createElement("div");

  // リマインド・通知機能の理念メッセージヘッダー
  const heroCard = document.createElement("div");
  heroCard.className = "card mypage-hero-card";
  heroCard.innerHTML = `
    <div style="display:flex;align-items:center;gap:12px;margin-bottom:8px;">
      <div class="hero-icon-badge">${icon("shield-check", 24)}</div>
      <div>
        <h2 class="disp" style="margin:0;font-size:20px;color:var(--heading);">若者の「投票日忘れ」を無くす選挙リマインド</h2>
        <p style="margin:4px 0 0 0;font-size:13px;color:var(--muted);">お住まいの地域を登録すると、選挙告示日や期日前投票の直前に通知が届きます。</p>
      </div>
    </div>
  `;
  wrap.appendChild(heroCard);

  if (state.currentUser.isLoggedIn) {
    // ============================================================
    // ① ログイン済み：マイページ ダッシュボード
    // ============================================================
    const profileCard = document.createElement("div");
    profileCard.className = "card profile-card";

    profileCard.innerHTML = `
      <div class="profile-header">
        <div class="user-big-avatar">${icon("user", 28)}</div>
        <div class="profile-meta">
          <div style="display:flex;align-items:center;gap:8px;">
            <h3 style="margin:0;font-size:18px;">${state.currentUser.name} さん</h3>
            ${state.currentUser.isDemo ? `<span class="demo-tag">デモアカウント</span>` : `<span class="verified-tag">本登録</span>`}
          </div>
          <p style="margin:2px 0 0 0;font-size:13px;color:var(--muted);">${state.currentUser.email || "登録メールアドレスなし"}</p>
        </div>
      </div>
      <div class="profile-info-grid">
        <div class="info-item">
          <span class="info-label">登録地域（市区町村）</span>
          <span class="info-val">📍 ${state.currentUser.municipality}</span>
        </div>
        <div class="info-item">
          <span class="info-label">リマインド登録中の選挙</span>
          <span class="info-val">🔔 ${state.currentUser.subscribedElectionNames.length} 件</span>
        </div>
      </div>
    `;
    wrap.appendChild(profileCard);

    // リマインド設定セクション
    const remindCard = document.createElement("div");
    remindCard.className = "card";
    remindCard.innerHTML = `
      <h3 style="margin:0 0 12px 0;font-size:16px;display:flex;align-items:center;gap:6px;">
        ${icon("bell", 18)} <span>リマインド登録している選挙一覧</span>
      </h3>
    `;

    const subList = document.createElement("div");
    subList.className = "subscribed-elections-list";

    if (state.currentUser.subscribedElectionNames.length === 0) {
      subList.innerHTML = `
        <div class="empty-sub-box">
          <p style="margin:0 0 8px 0;color:var(--muted);font-size:14px;">現在リマインド登録している選挙はありません。</p>
          <p style="margin:0;font-size:13px;">「日程」タブから気になる選挙の「🔔 通知を受け取る」ボタンを押して登録しましょう！</p>
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
          renderFn();
        });
        item.appendChild(removeBtn);
        subList.appendChild(item);
      });
    }
    remindCard.appendChild(subList);
    wrap.appendChild(remindCard);

    // 通知タイミング設定セクション
    const prefCard = document.createElement("div");
    prefCard.className = "card";
    prefCard.innerHTML = `
      <h3 style="margin:0 0 12px 0;font-size:16px;display:flex;align-items:center;gap:6px;">
        ${icon("settings", 18)} <span>通知受け取りタイミングの設定</span>
      </h3>
      <p style="font-size:13px;color:var(--muted);margin-bottom:14px;">投票日および期日前投票を逃さないため、指定したタイミングでリマインド通知を発行します。</p>
    `;

    const timingOptions = [
      { key: "days7Before", label: "7日前（期日前投票の案内）" },
      { key: "days3Before", label: "3日前（今週末の投票準備）" },
      { key: "day1Before", label: "前日（最終リマインド）" },
      { key: "onElectionDay", label: "投票日当日 朝7:00（投票所開場）" },
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
        showToast("通知タイミング設定を更新しました");
      });
      timingForm.appendChild(row);
    });
    prefCard.appendChild(timingForm);

    // Web Notification 許可設定ボタン
    const webNotifBox = document.createElement("div");
    webNotifBox.className = "web-notif-box";
    webNotifBox.style.marginTop = "16px";
    webNotifBox.style.padding = "12px";
    webNotifBox.style.background = "rgba(124, 58, 237, 0.05)";
    webNotifBox.style.borderRadius = "8px";
    webNotifBox.style.display = "flex";
    webNotifBox.style.justifyContent = "space-between";
    webNotifBox.style.alignItems = "center";

    webNotifBox.innerHTML = `
      <div>
        <p style="margin:0;font-weight:700;font-size:13px;">ブラウザ標準プッシュ通知</p>
        <p style="margin:2px 0 0 0;font-size:12px;color:var(--muted);">PC・スマホのデスクトップ通知を許可します</p>
      </div>
    `;

    const webNotifBtn = document.createElement("button");
    webNotifBtn.className = "btn-web-notif-perm";
    webNotifBtn.textContent = "通知を許可する";
    webNotifBtn.addEventListener("click", async () => {
      if ("Notification" in window) {
        const perm = await Notification.requestPermission();
        if (perm === "granted") {
          showToast("✅ ブラウザ通知が許可されました！");
        } else {
          showToast("⚠️ ブラウザ通知が拒否されました");
        }
      } else {
        showToast("お使いのブラウザはWeb Notificationに対応していません");
      }
    });
    webNotifBox.appendChild(webNotifBtn);
    prefCard.appendChild(webNotifBox);

    wrap.appendChild(prefCard);

    // テスト通知 ＆ ログアウト ボタンバー
    const actionBar = document.createElement("div");
    actionBar.className = "mypage-action-bar";

    const testBtn = document.createElement("button");
    testBtn.className = "btn-test-notif-large";
    testBtn.innerHTML = `⚡ 模擬通知をテスト送信する`;
    testBtn.addEventListener("click", () => {
      triggerSimulatedNotification(undefined, renderFn);
    });

    const logoutBtn = document.createElement("button");
    logoutBtn.className = "btn-logout";
    logoutBtn.innerHTML = `${icon("log-out", 16)} ログアウト`;
    logoutBtn.addEventListener("click", () => {
      logoutUser();
      renderFn();
    });

    actionBar.appendChild(testBtn);
    actionBar.appendChild(logoutBtn);
    wrap.appendChild(actionBar);

  } else {
    // ============================================================
    // ② 未ログイン：ログイン／新規会員登録フォーム ＆ ワンタップデモ
    // ============================================================
    
    // Quick Demo Banner
    const demoCard = document.createElement("div");
    demoCard.className = "card demo-quick-card";
    demoCard.innerHTML = `
      <div class="demo-quick-content">
        <span class="demo-badge">おすすめ</span>
        <h3 style="margin:6px 0;font-size:16px;">先生・評価者向け ワンタップデモ体験</h3>
        <p style="margin:0 0 12px 0;font-size:13px;color:var(--muted);">面倒な入力なしで、すぐに「新潟市中央区在住・投票権所有者」のマイページと通知機能をテストできます。</p>
      </div>
    `;

    const quickDemoBtn = document.createElement("button");
    quickDemoBtn.className = "btn-quick-demo";
    quickDemoBtn.innerHTML = `⚡ 1秒で体験！デモユーザーでログイン`;
    quickDemoBtn.addEventListener("click", () => {
      loginDemoUser();
      renderFn();
    });
    demoCard.appendChild(quickDemoBtn);
    wrap.appendChild(demoCard);

    // Form Container (Tabbed: ログイン / 新規登録)
    const formCard = document.createElement("div");
    formCard.className = "card auth-form-card";

    let activeTab: "login" | "signup" = "signup";

    const formTabs = document.createElement("div");
    formTabs.className = "auth-tab-bar";
    formTabs.innerHTML = `
      <button class="auth-tab ${activeTab === 'signup' ? 'active' : ''}" id="tab-signup">新規会員登録</button>
      <button class="auth-tab ${activeTab === 'login' ? 'active' : ''}" id="tab-login">ログイン</button>
    `;

    const formBody = document.createElement("div");
    formBody.className = "auth-form-body";

    const renderFormBody = () => {
      formBody.innerHTML = "";
      if (activeTab === "signup") {
        formBody.innerHTML = `
          <div class="form-group">
            <label class="form-label">お名前（ニックネーム可）</label>
            <input type="text" id="reg-name" class="form-input" placeholder="例: 新潟 花子">
          </div>
          <div class="form-group">
            <label class="form-label">メールアドレス</label>
            <input type="email" id="reg-email" class="form-input" placeholder="example@niigata.lg.jp">
          </div>
          <div class="form-group">
            <label class="form-label">お住まいの地域（新潟県内市区町村）</label>
            <select id="reg-muni" class="form-select">
              <optgroup label="下越エリア">
                <option value="新潟市中央区">新潟市中央区</option>
                <option value="新潟市北区">新潟市北区</option>
                <option value="新潟市東区">新潟市東区</option>
                <option value="新潟市江南区">新潟市江南区</option>
                <option value="新潟市秋葉区">新潟市秋葉区</option>
                <option value="新潟市南区">新潟市南区</option>
                <option value="新潟市西区">新潟市西区</option>
                <option value="新潟市西蒲区">新潟市西蒲区</option>
                <option value="新発田市">新発田市</option>
                <option value="村上市">村上市</option>
              </optgroup>
              <optgroup label="中越エリア">
                <option value="長岡市">長岡市</option>
                <option value="三条市">三条市</option>
                <option value="柏崎市">柏崎市</option>
              </optgroup>
              <optgroup label="上越・佐渡エリア">
                <option value="上越市">上越市</option>
                <option value="佐渡市">佐渡市</option>
              </optgroup>
            </select>
            <span class="form-hint">お住まいの地域の選挙や投票所情報に合わせた通知が届きます。</span>
          </div>
        `;
        const submitBtn = document.createElement("button");
        submitBtn.className = "btn-auth-submit";
        submitBtn.textContent = "登録して通知を受け取る";
        submitBtn.addEventListener("click", () => {
          const name = (formBody.querySelector("#reg-name") as HTMLInputElement)?.value;
          const email = (formBody.querySelector("#reg-email") as HTMLInputElement)?.value;
          const muni = (formBody.querySelector("#reg-muni") as HTMLSelectElement)?.value;
          loginUser(name, email, muni);
          renderFn();
        });
        formBody.appendChild(submitBtn);
      } else {
        formBody.innerHTML = `
          <div class="form-group">
            <label class="form-label">メールアドレス</label>
            <input type="email" id="login-email" class="form-input" placeholder="example@niigata.lg.jp" value="niigata.taro@example.com">
          </div>
          <div class="form-group">
            <label class="form-label">パスワード</label>
            <input type="password" class="form-input" value="••••••••">
          </div>
        `;
        const submitBtn = document.createElement("button");
        submitBtn.className = "btn-auth-submit";
        submitBtn.textContent = "ログイン";
        submitBtn.addEventListener("click", () => {
          const email = (formBody.querySelector("#login-email") as HTMLInputElement)?.value;
          loginUser("新潟 タロウ", email, "新潟市中央区");
          renderFn();
        });
        formBody.appendChild(submitBtn);
      }
    };

    formTabs.querySelector("#tab-signup")?.addEventListener("click", () => {
      activeTab = "signup";
      formTabs.querySelector("#tab-signup")?.classList.add("active");
      formTabs.querySelector("#tab-login")?.classList.remove("active");
      renderFormBody();
    });

    formTabs.querySelector("#tab-login")?.addEventListener("click", () => {
      activeTab = "login";
      formTabs.querySelector("#tab-login")?.classList.add("active");
      formTabs.querySelector("#tab-signup")?.classList.remove("active");
      renderFormBody();
    });

    renderFormBody();

    formCard.appendChild(formTabs);
    formCard.appendChild(formBody);
    wrap.appendChild(formCard);
  }

  return wrap;
}
