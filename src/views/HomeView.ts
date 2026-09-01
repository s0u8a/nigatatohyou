// ============================================================
// ホーム画面（全画面ヒーロー ＋ アンケート調査結果） (views/HomeView.ts)
// ============================================================

export function renderTopLandingPage(): HTMLElement {
  const wrap = document.createElement("div");

  // メインヒーロービジュアル（モックアップ画像に100%忠実な全画面デザイン）
  const hero = document.createElement("div");
  hero.className = "main-hero-container";

  const bgPhoto = document.createElement("div");
  bgPhoto.className = "hero-bg-photo";
  bgPhoto.style.backgroundImage = "url('R.jpe')";
  hero.appendChild(bgPhoto);

  const heroOverlay = document.createElement("div");
  heroOverlay.className = "hero-overlay-mask";

  const ovalBanner = document.createElement("div");
  ovalBanner.className = "hero-oval-text";
  ovalBanner.textContent = "新潟の若者の選挙率を高めるためのサイト";
  heroOverlay.appendChild(ovalBanner);

  const mascotLeftCard = document.createElement("div");
  mascotLeftCard.className = "hero-mascot-left";
  const senkyoImg = document.createElement("img");
  senkyoImg.src = "選挙君.png";
  senkyoImg.alt = "選挙君";
  mascotLeftCard.appendChild(senkyoImg);
  heroOverlay.appendChild(mascotLeftCard);

  const komeLeftCard = document.createElement("div");
  komeLeftCard.className = "hero-mascot-kome-left";
  const komeLeftImg = document.createElement("img");
  komeLeftImg.src = "こめ.png";
  komeLeftImg.alt = "こめちゃん";
  komeLeftCard.appendChild(komeLeftImg);
  heroOverlay.appendChild(komeLeftCard);

  const komeRightCard = document.createElement("div");
  komeRightCard.className = "hero-mascot-kome-right";
  const komeRightImg = document.createElement("img");
  komeRightImg.src = "こめ.png";
  komeRightImg.alt = "こめちゃん";
  komeRightCard.appendChild(komeRightImg);
  heroOverlay.appendChild(komeRightCard);

  hero.appendChild(heroOverlay);

  const scrollIndicator = document.createElement("div");
  scrollIndicator.className = "scroll-indicator";
  scrollIndicator.innerHTML = `<span>▼ 下へスクロールしてアンケート調査結果を見る</span>`;
  hero.appendChild(scrollIndicator);

  wrap.appendChild(hero);

  // アンケート調査結果セクション (結果.png / 期日前投票.png)
  const surveySection = document.createElement("section");
  surveySection.className = "survey-section";
  surveySection.style.marginTop = "40px";

  const surveyTitle = document.createElement("h2");
  surveyTitle.className = "disp section-title";
  surveyTitle.textContent = "📊 新潟県 若者の投票意識アンケート調査結果";
  surveySection.appendChild(surveyTitle);

  const surveySub = document.createElement("p");
  surveySub.className = "section-sub";
  surveySub.textContent = "県内の若者世代（74名回答）を対象に実施した投票参加状況および期日前投票の調査データです。";
  surveySection.appendChild(surveySub);

  const surveyGrid = document.createElement("div");
  surveyGrid.className = "survey-grid";

  // Card 1: 県知事選挙 参加率 (結果.png)
  const card1 = document.createElement("div");
  card1.className = "card survey-card";
  card1.innerHTML = `
    <div class="survey-card-header">
      <span class="survey-tag">アンケート調査結果 ①</span>
      <h3 class="survey-question-title">令和8年5月31日 新潟県知事選挙に行きましたか？</h3>
      <span class="survey-count-badge">回答数: 74件</span>
    </div>
    <div class="survey-img-container">
      <img src="結果.png" alt="新潟県知事選挙 投票率アンケート結果" class="survey-chart-img">
    </div>
    <div class="survey-stats-row">
      <div class="stat-pill stat-blue">
        <span class="stat-label">行った</span>
        <span class="stat-value">50.0%</span>
        <span class="stat-sub">37名</span>
      </div>
      <div class="stat-pill stat-red">
        <span class="stat-label">行ってない</span>
        <span class="stat-value">50.0%</span>
        <span class="stat-sub">37名</span>
      </div>
    </div>
    <div class="survey-text-box">
      <p>「半数の若い人が投票に参加！残りの50%の人たちも、自分たちの声や願いを社会に届けるために一票を投じよう！」</p>
    </div>
  `;
  surveyGrid.appendChild(card1);

  // Card 2: 投票方法 (当日 vs 期日前投票) (期日前投票.png)
  const card2 = document.createElement("div");
  card2.className = "card survey-card";
  card2.innerHTML = `
    <div class="survey-card-header">
      <span class="survey-tag">アンケート調査結果 ②</span>
      <h3 class="survey-question-title">選挙に行った人に質問です。（当日の投票 vs 期日前投票）</h3>
      <span class="survey-count-badge">回答数: 37件</span>
    </div>
    <div class="survey-img-container">
      <img src="期日前投票.png" alt="期日前投票 利用割合アンケート結果" class="survey-chart-img">
    </div>
    <div class="survey-stats-row">
      <div class="stat-pill stat-blue">
        <span class="stat-label">選挙日当日にいった</span>
        <span class="stat-value">54.1%</span>
        <span class="stat-sub">20名</span>
      </div>
      <div class="stat-pill stat-red">
        <span class="stat-label">期日前投票にいった</span>
        <span class="stat-value">45.9%</span>
        <span class="stat-sub">17名</span>
      </div>
    </div>
    <div class="survey-text-box">
      <p>「投票に行った人のうち半数近くが『期日前投票』を活用！当日都合が悪くても、事前に投票に行こう！」</p>
    </div>
  `;
  surveyGrid.appendChild(card2);

  surveySection.appendChild(surveyGrid);
  wrap.appendChild(surveySection);

  return wrap;
}
