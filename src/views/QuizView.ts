// ============================================================
// 投票診断画面 (views/QuizView.ts)
// ============================================================

import { state, freshScores, topTag, matchedCandidate, icon } from '../state';
import { TAGS, TAG_META, QUESTIONS, TYPE_NAMES } from '../data/candidates';

export function renderQuizQuestion(renderFn: () => void): HTMLElement {
  const wrap = document.createElement("div");

  const q = QUESTIONS[state.quizStep];

  const head = document.createElement("div");
  head.className = "quiz-head";
  head.innerHTML = `
    <h2 class="disp section-title" style="margin:0;">投票診断</h2>
    <span style="font-size:14px;color:var(--faint);">質問 ${state.quizStep + 1} / ${
    QUESTIONS.length
  }</span>
  `;
  wrap.appendChild(head);

  const track = document.createElement("div");
  track.className = "progress-track";
  const fill = document.createElement("div");
  fill.className = "progress-fill";
  fill.style.width = `${(state.quizStep / QUESTIONS.length) * 100}%`;
  track.appendChild(fill);
  wrap.appendChild(track);

  const question = document.createElement("p");
  question.className = "disp quiz-question";
  question.textContent = q.q;
  wrap.appendChild(question);

  const options = document.createElement("div");
  options.className = "quiz-options";
  q.options.forEach((opt) => {
    const btn = document.createElement("button");
    btn.className = "quiz-option";
    btn.innerHTML = `<span>${opt.text}</span>${icon("chevron-right", 16)}`;
    btn.addEventListener("click", () => {
      TAGS.forEach((t) => {
        if (opt.weights[t]) state.scores[t] += opt.weights[t]!;
      });
      if (state.quizStep + 1 < QUESTIONS.length) {
        state.quizStep += 1;
      } else {
        state.quizFinished = true;
      }
      renderFn();
    });
    options.appendChild(btn);
  });
  wrap.appendChild(options);

  return wrap;
}

export function renderQuizResult(renderFn: () => void): HTMLElement {
  const wrap = document.createElement("div");

  const title = document.createElement("h2");
  title.className = "disp section-title";
  title.textContent = "診断結果";
  wrap.appendChild(title);

  const sub = document.createElement("p");
  sub.className = "section-sub";
  sub.textContent = "あなたの回答から見えてきたタイプです";
  wrap.appendChild(sub);

  const top = topTag(state.scores);
  const meta = TAG_META[top];

  const resultCard = document.createElement("div");
  resultCard.className = "result-card";
  resultCard.style.border = `1px solid ${meta.color}55`;
  resultCard.innerHTML = `
    <p class="result-eyebrow">あなたは</p>
    <p class="disp result-type" style="color:${meta.color};">${TYPE_NAMES[top]}</p>
    <p class="result-desc">特に「${meta.label}」を重視する傾向があります</p>
  `;
  wrap.appendChild(resultCard);

  const balanceLabel = document.createElement("p");
  balanceLabel.style.fontSize = "14px";
  balanceLabel.style.color = "var(--muted)";
  balanceLabel.style.marginBottom = "12px";
  balanceLabel.textContent = "重視ポイントのバランス";
  wrap.appendChild(balanceLabel);

  const maxScore = Math.max(...TAGS.map((t) => state.scores[t]), 1);
  TAGS.forEach((t) => {
    const row = document.createElement("div");
    row.className = "balance-row";
    const pct = (state.scores[t] / maxScore) * 100;
    row.innerHTML = `
      <span class="balance-label">${TAG_META[t].label}</span>
      <div class="balance-track"><div class="balance-fill" style="width:${pct}%;background-color:${TAG_META[t].color};"></div></div>
    `;
    wrap.appendChild(row);
  });

  const cand = matchedCandidate(state.scores);
  const matchCard = document.createElement("div");
  matchCard.className = "match-card";
  matchCard.innerHTML = `
    <p class="match-eyebrow">公約が近い候補(サンプル)</p>
    <p class="disp match-name">${cand.name}</p>
    <p class="match-tagline">${cand.tagline}</p>
  `;
  const viewPledgeBtn = document.createElement("button");
  viewPledgeBtn.className = "match-link";
  viewPledgeBtn.textContent = "公約の詳しい内容を見る";
  viewPledgeBtn.addEventListener("click", () => {
    state.tab = "pledges";
    renderFn();
  });
  matchCard.appendChild(viewPledgeBtn);
  wrap.appendChild(matchCard);

  const resetBtn = document.createElement("button");
  resetBtn.className = "reset-btn";
  resetBtn.innerHTML = `${icon("rotate-ccw", 14)}<span>もう一度診断する</span>`;
  resetBtn.addEventListener("click", () => {
    state.quizStep = 0;
    state.scores = freshScores();
    state.quizFinished = false;
    renderFn();
  });
  wrap.appendChild(resetBtn);

  const footnote = document.createElement("p");
  footnote.className = "footnote";
  footnote.textContent =
    "※この診断は考えを整理するための簡易的なものです。実際の投票先は、公式の公約や政策を必ずご自身で確認して決めてください。";
  wrap.appendChild(footnote);

  return wrap;
}
