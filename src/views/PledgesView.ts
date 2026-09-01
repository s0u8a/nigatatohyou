// ============================================================
// 公約要約 ＆ 新潟県30市町村 首長公約検索画面 (views/PledgesView.ts)
// 出典: koyaku.47story.jp/pref/niigata
// ============================================================

import { TAGS, TAG_META, CANDIDATES, MUNICIPAL_PLEDGES } from '../data/candidates';
import { icon } from '../state';

let pledgeViewMode: "theme" | "municipality" = "theme";
let pledgeSearchQuery = "";
let selectedPledgeRegion = "すべて";

export function renderPledges(): HTMLElement {
  const wrap = document.createElement("div");

  const title = document.createElement("h2");
  title.className = "disp section-title";
  title.textContent = "公約をわかりやすく ＆ 新潟県30市町村 公約検索";
  wrap.appendChild(title);

  const sub = document.createElement("p");
  sub.className = "section-sub";
  sub.textContent = "主要な政策グループの要約、またはお住まいの市町村（全30市町村）の首長公約を検索・比較できます。";
  wrap.appendChild(sub);

  // 表示切替タブ (1. 主要政策テーマで比較 / 2. 新潟県全30市町村で検索)
  const modeSwitch = document.createElement("div");
  modeSwitch.style.display = "flex";
  modeSwitch.style.gap = "8px";
  modeSwitch.style.marginBottom = "20px";

  const btnTheme = document.createElement("button");
  btnTheme.className = "year-chip" + (pledgeViewMode === "theme" ? " active" : "");
  btnTheme.innerHTML = `<span>💡 主要政策テーマで比較</span>`;
  btnTheme.addEventListener("click", () => {
    pledgeViewMode = "theme";
    renderPledgesContent();
  });

  const btnMuni = document.createElement("button");
  btnMuni.className = "year-chip" + (pledgeViewMode === "municipality" ? " active" : "");
  btnMuni.innerHTML = `<span>🏛️ 新潟県 全30市町村 公約検索</span>`;
  btnMuni.addEventListener("click", () => {
    pledgeViewMode = "municipality";
    renderPledgesContent();
  });

  modeSwitch.appendChild(btnTheme);
  modeSwitch.appendChild(btnMuni);
  wrap.appendChild(modeSwitch);

  const dynamicContent = document.createElement("div");
  dynamicContent.className = "pledges-dynamic-content";
  wrap.appendChild(dynamicContent);

  function renderPledgesContent() {
    dynamicContent.innerHTML = "";

    // 1. 主要政策テーマで比較
    if (pledgeViewMode === "theme") {
      btnTheme.className = "year-chip active";
      btnMuni.className = "year-chip";

      CANDIDATES.forEach((c) => {
        const card = document.createElement("div");
        card.className = "card candidate-card";

        const name = document.createElement("h3");
        name.className = "disp candidate-name";
        name.textContent = c.name;
        card.appendChild(name);

        const tagline = document.createElement("p");
        tagline.className = "candidate-tagline";
        tagline.textContent = c.tagline;
        card.appendChild(tagline);

        const list = document.createElement("ul");
        list.className = "pledge-list";
        c.pledges.forEach((p) => {
          const li = document.createElement("li");
          li.textContent = p;
          list.appendChild(li);
        });
        card.appendChild(list);

        const chips = document.createElement("div");
        TAGS.filter((t) => c.weights[t] > 0).forEach((t) => {
          const meta = TAG_META[t];
          const chip = document.createElement("span");
          chip.className = "tag-chip";
          chip.style.backgroundColor = meta.color + "1A";
          chip.style.color = meta.color;
          chip.style.border = `1px solid ${meta.color}55`;
          chip.textContent = meta.label;
          chips.appendChild(chip);
        });
        card.appendChild(chips);

        dynamicContent.appendChild(card);
      });
    } 
    // 2. 新潟県全30市町村 首長公約検索
    else {
      btnTheme.className = "year-chip";
      btnMuni.className = "year-chip active";

      // 地域フィルター (すべて / 下越 / 中越 / 上越 / 佐渡)
      const regionFilterBox = document.createElement("div");
      regionFilterBox.style.display = "flex";
      regionFilterBox.style.gap = "6px";
      regionFilterBox.style.flexWrap = "wrap";
      regionFilterBox.style.marginBottom = "14px";

      ["すべて", "県全域", "下越", "中越", "上越", "佐渡"].forEach((r) => {
        const chip = document.createElement("button");
        chip.className = "region-chip" + (selectedPledgeRegion === r ? " active" : "");
        chip.textContent = r;
        chip.addEventListener("click", () => {
          selectedPledgeRegion = r;
          renderPledgesContent();
        });
        regionFilterBox.appendChild(chip);
      });
      dynamicContent.appendChild(regionFilterBox);

      // 検索入力ボックス
      const searchBox = document.createElement("div");
      searchBox.className = "place-search-box";
      searchBox.style.marginBottom = "16px";

      const searchIcon = document.createElement("span");
      searchIcon.className = "search-icon";
      searchIcon.innerHTML = icon("search", 16);
      searchBox.appendChild(searchIcon);

      const searchInput = document.createElement("input");
      searchInput.type = "text";
      searchInput.className = "place-search-input";
      searchInput.placeholder = "市町村名（例: 新潟市、長岡市、佐渡、燕）、首長名、キーワードで公約を検索...";
      searchInput.value = pledgeSearchQuery;
      searchInput.addEventListener("input", (e) => {
        pledgeSearchQuery = (e.target as HTMLInputElement).value;
        updatePledgeList();
      });
      searchBox.appendChild(searchInput);

      dynamicContent.appendChild(searchBox);

      const countBadge = document.createElement("div");
      countBadge.className = "result-count-badge";
      dynamicContent.appendChild(countBadge);

      const pledgeListContainer = document.createElement("div");
      pledgeListContainer.className = "polling-list-container";
      dynamicContent.appendChild(pledgeListContainer);

      function updatePledgeList() {
        pledgeListContainer.innerHTML = "";
        const q = pledgeSearchQuery.trim().toLowerCase();

        const filtered = MUNICIPAL_PLEDGES.filter((m) => {
          if (selectedPledgeRegion !== "すべて" && m.region !== selectedPledgeRegion) {
            return false;
          }
          if (q) {
            const target = `${m.name} ${m.mayorTitle} ${m.headline} ${m.tags.join(" ")} ${m.details.join(" ")}`.toLowerCase();
            return target.includes(q);
          }
          return true;
        });

        countBadge.textContent = q
          ? `🔍 検索結果: ${filtered.length}件の自治体公約が見つかりました`
          : `📍 「${selectedPledgeRegion}」: 全${filtered.length}自治体の公約を表示中`;

        filtered.forEach((m) => {
          const card = document.createElement("div");
          card.className = "card polling-card";
          card.style.marginBottom = "14px";

          const head = document.createElement("div");
          head.className = "polling-card-head";
          head.innerHTML = `
            <div class="head-tags">
              <span class="region-badge-tag">${m.region}</span>
              <span class="ward-tag">${m.scaleType}</span>
            </div>
            <span style="font-size:12px;color:var(--faint);">出典: 市長・町長・村長 公約マップ</span>
          `;
          card.appendChild(head);

          const nameEl = document.createElement("h3");
          nameEl.className = "polling-name";
          nameEl.innerHTML = `${m.name} <span style="font-size:14px;color:#7C3AED;font-weight:600;">（${m.mayorTitle}）</span>`;
          card.appendChild(nameEl);

          const headlineEl = document.createElement("p");
          headlineEl.style.fontSize = "14.5px";
          headlineEl.style.fontWeight = "700";
          headlineEl.style.color = "#0F172A";
          headlineEl.style.margin = "4px 0 10px 0";
          headlineEl.textContent = `「${m.headline}」`;
          card.appendChild(headlineEl);

          const detailsList = document.createElement("ul");
          detailsList.className = "pledge-list";
          detailsList.style.marginBottom = "12px";
          m.details.forEach((d) => {
            const li = document.createElement("li");
            li.textContent = d;
            detailsList.appendChild(li);
          });
          card.appendChild(detailsList);

          const chipContainer = document.createElement("div");
          chipContainer.style.display = "flex";
          chipContainer.style.gap = "6px";
          chipContainer.style.flexWrap = "wrap";
          chipContainer.style.marginBottom = "10px";
          m.tags.forEach((t) => {
            const chip = document.createElement("span");
            chip.className = "year-badge";
            chip.textContent = `# ${t}`;
            chipContainer.appendChild(chip);
          });
          card.appendChild(chipContainer);

          const linkBtn = document.createElement("a");
          linkBtn.className = "map-direct-btn";
          linkBtn.href = m.officialUrl;
          linkBtn.target = "_blank";
          linkBtn.rel = "noopener noreferrer";
          linkBtn.innerHTML = `公約マップで「${m.name}」の公式一次情報を確認 ↗`;
          card.appendChild(linkBtn);

          pledgeListContainer.appendChild(card);
        });
      }

      updatePledgeList();
    }
  }

  renderPledgesContent();

  return wrap;
}
