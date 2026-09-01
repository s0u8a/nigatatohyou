// ============================================================
// 全30市町村 投票所マップ＆検索画面 (views/PlaceView.ts)
// ============================================================

import { state, icon } from '../state';
import { POLLING_PLACES, REGION_CATEGORIES } from '../data/places';

export function renderPlace(renderFn: () => void): HTMLElement {
  const wrap = document.createElement("div");

  const title = document.createElement("h2");
  title.className = "disp section-title";
  title.textContent = "新潟県 投票所案内 (全30市町村対応・284箇所)";
  wrap.appendChild(title);

  const sub = document.createElement("p");
  sub.className = "section-sub";
  sub.textContent = "下越・中越・上越・佐渡の全30市町村。お住まいの市町村・地区を選択またはキーワード検索できます。";
  wrap.appendChild(sub);

  // 1. 地域区分タブ (下越・中越・上越・佐渡)
  const regionContainer = document.createElement("div");
  regionContainer.className = "region-filter-container";
  regionContainer.style.marginBottom = "14px";

  const regionLabel = document.createElement("p");
  regionLabel.className = "filter-label";
  regionLabel.textContent = "1. 地域エリアを選択:";
  regionContainer.appendChild(regionLabel);

  const regionChips = document.createElement("div");
  regionChips.className = "region-chips";
  regionChips.style.display = "flex";
  regionChips.style.gap = "6px";
  regionChips.style.flexWrap = "wrap";

  REGION_CATEGORIES.forEach((reg) => {
    const count = reg === "すべて"
      ? POLLING_PLACES.length
      : POLLING_PLACES.filter(p => p.region === reg).length;
    
    const btn = document.createElement("button");
    btn.className = "region-chip" + (state.selectedRegion === reg ? " active" : "");
    btn.innerHTML = `<span>${reg}</span><span class="chip-count">${count}</span>`;
    btn.addEventListener("click", () => {
      state.selectedRegion = reg;
      state.selectedMunicipality = "すべて";
      renderFn();
    });
    regionChips.appendChild(btn);
  });
  regionContainer.appendChild(regionChips);
  wrap.appendChild(regionContainer);

  // 2. 市町村フィルター
  const availableMunicipalities = Array.from(new Set(
    POLLING_PLACES
      .filter(p => state.selectedRegion === "すべて" || p.region === state.selectedRegion)
      .map(p => p.municipality)
  ));

  const muniContainer = document.createElement("div");
  muniContainer.className = "muni-filter-container";
  muniContainer.style.marginBottom = "16px";

  const muniLabel = document.createElement("p");
  muniLabel.className = "filter-label";
  muniLabel.textContent = "2. 市町村・区を選択:";
  muniContainer.appendChild(muniLabel);

  const muniChips = document.createElement("div");
  muniChips.className = "muni-chips";
  muniChips.style.display = "flex";
  muniChips.style.gap = "6px";
  muniChips.style.flexWrap = "wrap";
  muniChips.style.maxHeight = "160px";
  muniChips.style.overflowY = "auto";
  muniChips.style.padding = "2px";

  const allMuniBtn = document.createElement("button");
  allMuniBtn.className = "muni-chip" + (state.selectedMunicipality === "すべて" ? " active" : "");
  allMuniBtn.textContent = "すべて (" + availableMunicipalities.length + "市町村/区)";
  allMuniBtn.addEventListener("click", () => {
    state.selectedMunicipality = "すべて";
    renderFn();
  });
  muniChips.appendChild(allMuniBtn);

  availableMunicipalities.forEach((m) => {
    const count = POLLING_PLACES.filter(p => p.municipality === m).length;
    const btn = document.createElement("button");
    btn.className = "muni-chip" + (state.selectedMunicipality === m ? " active" : "");
    btn.innerHTML = `<span>${m}</span><span class="chip-count">${count}</span>`;
    btn.addEventListener("click", () => {
      state.selectedMunicipality = m;
      renderFn();
    });
    muniChips.appendChild(btn);
  });
  muniContainer.appendChild(muniChips);
  wrap.appendChild(muniContainer);

  // 3. 検索ボックス
  const searchBox = document.createElement("div");
  searchBox.className = "place-search-box";

  const searchIcon = document.createElement("span");
  searchIcon.className = "search-icon";
  searchIcon.innerHTML = icon("search", 16);
  searchBox.appendChild(searchIcon);

  const searchInput = document.createElement("input");
  searchInput.type = "text";
  searchInput.className = "place-search-input";
  searchInput.placeholder = "市町村名、投票所名、住所、町名（例: 長岡、佐渡、高田、松浜）で検索...";
  searchInput.value = state.placeSearchQuery;
  searchInput.addEventListener("input", (e) => {
    state.placeSearchQuery = (e.target as HTMLInputElement).value;
    updatePollingListContainer();
  });
  searchBox.appendChild(searchInput);

  if (state.placeSearchQuery) {
    const clearBtn = document.createElement("button");
    clearBtn.className = "search-clear-btn";
    clearBtn.innerHTML = icon("x", 14);
    clearBtn.addEventListener("click", () => {
      state.placeSearchQuery = "";
      renderFn();
    });
    searchBox.appendChild(clearBtn);
  }

  wrap.appendChild(searchBox);

  // 4. 件数表示バッジ ＆ リストコンテナ
  const countBadge = document.createElement("div");
  countBadge.className = "result-count-badge";
  wrap.appendChild(countBadge);

  const listContainer = document.createElement("div");
  listContainer.className = "polling-list-container";
  wrap.appendChild(listContainer);

  function updatePollingListContainer() {
    listContainer.innerHTML = "";
    const q = state.placeSearchQuery.trim().toLowerCase();

    const filtered = POLLING_PLACES.filter((p) => {
      if (state.selectedRegion !== "すべて" && p.region !== state.selectedRegion) {
        return false;
      }
      if (state.selectedMunicipality !== "すべて" && p.municipality !== state.selectedMunicipality) {
        return false;
      }
      if (q) {
        const target = `${p.id} ${p.region} ${p.municipality} ${p.name} ${p.address} ${p.area} ${p.updateInfo || ""}`.toLowerCase();
        return target.includes(q);
      }
      return true;
    });

    const activeFilterLabel = state.selectedMunicipality !== "すべて" 
      ? state.selectedMunicipality 
      : (state.selectedRegion !== "すべて" ? state.selectedRegion : "新潟県全域");

    countBadge.textContent = q
      ? `🔍 「${activeFilterLabel}」の検索結果: ${filtered.length}件の投票所が見つかりました`
      : `📍 「${activeFilterLabel}」: 全${filtered.length}件を表示中`;

    if (filtered.length === 0) {
      const emptyState = document.createElement("div");
      emptyState.className = "empty-polling-state";
      emptyState.innerHTML = `
        <p class="empty-title">条件に一致する投票所が見つかりませんでした</p>
        <p class="empty-desc">地域・市町村選択を「すべて」にするか、検索キーワードを変更してみてください。</p>
      `;
      const resetFilterBtn = document.createElement("button");
      resetFilterBtn.className = "reset-btn";
      resetFilterBtn.style.marginTop = "12px";
      resetFilterBtn.innerHTML = `${icon("rotate-ccw", 14)} 条件を全リセット`;
      resetFilterBtn.addEventListener("click", () => {
        state.selectedRegion = "すべて";
        state.selectedMunicipality = "すべて";
        state.placeSearchQuery = "";
        renderFn();
      });
      emptyState.appendChild(resetFilterBtn);
      listContainer.appendChild(emptyState);
      return;
    }

    filtered.forEach((p) => {
      const card = document.createElement("div");
      card.className = "polling-card";

      const cardHead = document.createElement("div");
      cardHead.className = "polling-card-head";
      cardHead.innerHTML = `
        <div class="head-tags">
          <span class="region-badge-tag">${p.region}</span>
          <span class="ward-tag">${p.municipality}</span>
          <span class="code-tag">No.${p.id}</span>
        </div>
      `;
      card.appendChild(cardHead);

      const nameEl = document.createElement("h3");
      nameEl.className = "polling-name";
      nameEl.textContent = p.name;
      card.appendChild(nameEl);

      const addressEl = document.createElement("p");
      addressEl.className = "polling-address";
      addressEl.innerHTML = `${icon("map-pin", 14)} <span>${p.address}</span>`;
      card.appendChild(addressEl);

      if (p.area) {
        const areaEl = document.createElement("div");
        areaEl.className = "polling-area";
        areaEl.innerHTML = `<span class="area-label">対象区域・エリア:</span> ${p.area}`;
        card.appendChild(areaEl);
      }

      if (p.updateInfo) {
        const noticeEl = document.createElement("div");
        noticeEl.className = "polling-notice";
        noticeEl.innerHTML = `⚠️ <strong>変更注意:</strong> ${p.updateInfo}`;
        card.appendChild(noticeEl);
      }

      const btnGroup = document.createElement("div");
      btnGroup.style.display = "flex";
      btnGroup.style.gap = "8px";
      btnGroup.style.flexWrap = "wrap";
      btnGroup.style.marginTop = "8px";

      if (p.officialUrl) {
        const offBtn = document.createElement("a");
        offBtn.className = "muni-official-btn";
        offBtn.href = p.officialUrl;
        offBtn.target = "_blank";
        offBtn.rel = "noopener noreferrer";
        offBtn.innerHTML = `${p.municipality.replace(/新潟市.*/, '新潟市')}公式 投票所案内 ${icon("external-link", 13)}`;
        btnGroup.appendChild(offBtn);
      }

      if (p.mapUrl) {
        const mapBtn = document.createElement("a");
        mapBtn.className = "map-direct-btn";
        mapBtn.href = p.mapUrl;
        mapBtn.target = "_blank";
        mapBtn.rel = "noopener noreferrer";
        mapBtn.innerHTML = `${icon("map-pin", 14)} Google Mapsで確認 ↗`;
        btnGroup.appendChild(mapBtn);
      }

      card.appendChild(btnGroup);
      listContainer.appendChild(card);
    });
  }

  updatePollingListContainer();

  const footnote = document.createElement("p");
  footnote.className = "footnote";
  footnote.textContent =
    "※掲載データは各自治体・選挙管理委員会の公開情報に基づいています。投票所は住民登録住所によって指定されます。投票所入場券に記載の場所が正式な投票場所です。";
  wrap.appendChild(footnote);

  return wrap;
}
