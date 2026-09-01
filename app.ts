// ============================================================
// にいがた、投票までの道 - メインエントリーポイント (app.ts)
// モジュール構造化リファクタリング済み
// ============================================================

import { state } from './src/state';
import { renderHeader } from './src/views/Header';
import { renderTopLandingPage } from './src/views/HomeView';
import { renderSchedulePage } from './src/views/ScheduleView';
import { renderPledges } from './src/views/PledgesView';
import { renderQuizQuestion, renderQuizResult } from './src/views/QuizView';
import { renderPlace } from './src/views/PlaceView';

const root = document.getElementById("app")!;

function render() {
  root.innerHTML = "";
  root.appendChild(renderHeader(render));

  const content = document.createElement("div");
  content.className = "wrap content";

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
  }

  root.appendChild(content);
}

// アプリ初期化
document.addEventListener("DOMContentLoaded", () => {
  render();
});
