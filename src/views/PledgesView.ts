// ============================================================
// 公約要約カード画面 (views/PledgesView.ts)
// ============================================================

import { TAGS, TAG_META, CANDIDATES } from '../data/candidates';

export function renderPledges(): HTMLElement {
  const wrap = document.createElement("div");

  const title = document.createElement("h2");
  title.className = "disp section-title";
  title.textContent = "公約をわかりやすく";
  wrap.appendChild(title);

  const sub = document.createElement("p");
  sub.className = "section-sub";
  sub.textContent = "専門用語をできるだけ使わず、要点だけまとめました(サンプルデータ)";
  wrap.appendChild(sub);

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

    wrap.appendChild(card);
  });

  return wrap;
}
