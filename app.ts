// ============================================================
// にいがた、投票までの道 - メインエントリーポイント (app.ts)
// モジュール構造化リファクタリング済み
// ============================================================

import { state, checkAndFireReminders } from './src/state';
import { renderHeader } from './src/views/Header';
import { renderTopLandingPage } from './src/views/HomeView';
import { renderSchedulePage } from './src/views/ScheduleView';
import { renderPledges } from './src/views/PledgesView';
import { renderQuizQuestion, renderQuizResult } from './src/views/QuizView';
import { renderPlace } from './src/views/PlaceView';
import { renderMyPage } from './src/views/LoginView';

const root = document.getElementById("app")!;

function render() {
  root.innerHTML = "";
  root.appendChild(renderHeader(render));

  const content = document.createElement("div");
  content.className = state.tab === "top" ? "wrap content top-content" : "wrap content";

  switch (state.tab) {
    case "top":
      content.appendChild(renderTopLandingPage());
      break;
    case "schedule":
      content.appendChild(renderSchedulePage(render));
      break;
    case "pledges":
      content.appendChild(renderPledges());
      break;
    case "quiz":
      content.appendChild(
        state.quizFinished ? renderQuizResult(render) : renderQuizQuestion(render)
      );
      break;
    case "place":
      content.appendChild(renderPlace(render));
      break;
    case "mypage":
      content.appendChild(renderMyPage(render));
      break;
  }

  root.appendChild(content);
}

// ============================================================
// アプリ初期化
// ============================================================
document.addEventListener("DOMContentLoaded", () => {
  render();

  // ① Web通知の許可をリクエスト（ログイン済みユーザーのみ）
  if (state.currentUser.isLoggedIn && "Notification" in window && Notification.permission === "default") {
    Notification.requestPermission();
  }

  // ② 選挙リマインド自動チェック（当日・1日前・3日前・7日前に通知発火）
  setTimeout(() => {
    checkAndFireReminders(render);
  }, 1000); // 1秒後に実行（UIが描画されてから）
});

