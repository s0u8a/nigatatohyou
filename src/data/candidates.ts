// ============================================================
// 候補者・公約・診断質問データ (src/data/candidates.ts)
// 新潟県内の市長・町長・村長公約マップ (koyaku.47story.jp/pref/niigata) に基づく現実的な政策テーマ
// ============================================================

import { Tag, TagMeta, Candidate, Question } from '../types';

export const TAGS: Tag[] = ["経済", "教育", "環境", "デジタル", "福祉", "地域"];

export const TAG_META: Record<Tag, TagMeta> = {
  経済: { color: "#8C3B4B", label: "産業・雇用・賃上げ" },
  教育: { color: "#3E6B8A", label: "子育て・奨学金支援" },
  環境: { color: "#4C7A54", label: "農業・環境・エネルギー" },
  デジタル: { color: "#6B5B95", label: "行政DX・スマート生活" },
  福祉: { color: "#B5762B", label: "医療・福祉・移動交通" },
  地域: { color: "#D6A24C", label: "まちづくり・防災・空き家" },
};

export const CANDIDATES: Candidate[] = [
  {
    id: "a",
    name: "新潟未来・子育てIT連合",
    tagline: "若者の定住・奨学金支援と行政デジタル化で選ばれる新潟へ",
    weights: { 教育: 3, デジタル: 2, 経済: 1, 環境: 0, 福祉: 0, 地域: 0 },
    pledges: [
      "県内企業に就職・定住する若者の「奨学金返済支援制度」を全県で大幅拡充",
      "高校生（18歳）までの医療費無償化を推進し、子育て世帯の経済負担を軽減",
      "行政手続き・証明書発行・投票所案内をスマホで即完結する「スマート新潟」の実現",
    ],
  },
  {
    id: "b",
    name: "新潟農業・地場産業再生の会",
    tagline: "ブランド米・モノづくり産業の強化で若者の雇用と賃上げを実現",
    weights: { 経済: 3, 環境: 2, 地域: 1, 教育: 0, デジタル: 0, 福祉: 0 },
    pledges: [
      "新潟米・水産物のブランド輸出強化とスマート農業・新規就農者への手厚い補助",
      "燕三条はじめ地場産業・地元中小企業への投資支援で、若者の初任給・賃上げの底上げ",
      "再生可能エネルギー導入と省エネ支援で、県民の電気代負担と企業コストを低減",
    ],
  },
  {
    id: "c",
    name: "くらし安心・地域医療ネット",
    tagline: "どこに住んでいても医療と福祉が行き届く、安心の新潟づくり",
    weights: { 福祉: 3, 地域: 2, 教育: 1, 経済: 0, 環境: 0, デジタル: 0 },
    pledges: [
      "医師・看護師不足を解消し、県内全地域の小児科・産婦人科・救急医療体制を維持・強化",
      "高齢者や学生の通学・通院を支えるコミュニティバス・デマンドタクシーの全県ネットワーク維持",
      "豪雪地帯の除雪支援体制を強化し、冬場でも誰もが安心して暮らせる地域づくり",
    ],
  },
  {
    id: "d",
    name: "新潟地域活性・まちづくり改革",
    tagline: "新潟駅周辺・中心街の再開発と空き家再生で賑わいを創出",
    weights: { 地域: 3, 経済: 2, デジタル: 1, 教育: 0, 環境: 0, 福祉: 0 },
    pledges: [
      "新潟駅周辺・県内主要都市の交通ハブ再開発を進め、通勤・通学・観光の利便性を飛躍向上",
      "増え続ける空き家をリノベーションし、若者や移住者の住まい・起業拠点として利活用",
      "公共施設の老朽化対策と財政の効率化を進め、将来世代にツケを残さない持続可能なまちづくり",
    ],
  },
];

export const QUESTIONS: Question[] = [
  {
    q: "新潟で暮らすうえで、子育てや学びの環境で最も重視したい政策は？",
    options: [
      { text: "奨学金返済の給付支援や、高校生までの医療費無償化を進めてほしい", weights: { 教育: 2 } },
      { text: "行政手続きや証明書発行がスマホで簡単に完結できるようになってほしい", weights: { デジタル: 2 } },
    ],
  },
  {
    q: "就職や地元の仕事について、どのような取り組みを期待する？",
    options: [
      { text: "地元企業や地場産業（モノづくり・農業）への支援で賃上げや雇用を増やしてほしい", weights: { 経済: 2 } },
      { text: "IT企業の誘致やリモートワーク環境を整え、県外に出ずに働ける選択肢がほしい", weights: { デジタル: 1, 経済: 1 } },
    ],
  },
  {
    q: "これからの新潟の農業や自然・エネルギーについて望むのは？",
    options: [
      { text: "新潟米・農産物のブランド強化とスマート農業で『稼げる農業』にしてほしい", weights: { 環境: 2, 経済: 1 } },
      { text: "再生可能エネルギーの普及で電気代を抑え、環境と自然を守ってほしい", weights: { 環境: 2, 地域: 1 } },
    ],
  },
  {
    q: "医療や日常の暮らしで、最も安心できる政策は？",
    options: [
      { text: "地域ごとの小児科・産婦人科・救急医療体制を維持・強化してほしい", weights: { 福祉: 2 } },
      { text: "バス路線やコミュニティ交通を維持し、通学や高齢者の移動手段を守ってほしい", weights: { 福祉: 1, 地域: 1 } },
    ],
  },
  {
    q: "冬の暮らしや防犯・防災対策で力を入れてほしいことは？",
    options: [
      { text: "豪雪地帯の除雪支援や老朽化インフラの整備で冬場の安心・安全を守ってほしい", weights: { 地域: 2 } },
      { text: "増える空き家をリノベーションして、若者の住まいや交流拠点に再生してほしい", weights: { 地域: 1, 経済: 1 } },
    ],
  },
  {
    q: "新潟の都市づくりや行政・財政について求めるのは？",
    options: [
      { text: "新潟駅周辺や中心都市の再開発を進め、交通と街の賑わいを向上させてほしい", weights: { 地域: 2, 経済: 1 } },
      { text: "公共施設のムダを抑え、子育て世帯や若者への直接支援に財政を使ってほしい", weights: { 教育: 1, デジタル: 1 } },
    ],
  },
];

export const TYPE_NAMES: Record<Tag, string> = {
  教育: "子育て・学び未来重視タイプ",
  経済: "産業・雇用・賃上げ重視タイプ",
  環境: "農業・環境共生タイプ",
  デジタル: "行政DX・スマート生活重視タイプ",
  福祉: "医療・福祉・安心生活重視タイプ",
  地域: "まちづくり・防災重視タイプ",
};


export interface MunicipalPledge {
  id: string;
  region: string; // "下越" | "中越" | "上越" | "佐渡"
  name: string;
  mayorTitle: string;
  scaleType: string;
  headline: string;
  tags: string[];
  details: string[];
  officialUrl: string;
}

export const MUNICIPAL_PLEDGES: MunicipalPledge[] = [
  {
    id: "gov",
    region: "県全域",
    name: "新潟県知事 (花角英世)",
    mayorTitle: "新潟県知事",
    scaleType: "県全域",
    headline: "人口減少と災害リスクに立ち向かう、産業・暮らしの基盤組み替え",
    tags: ["人口・子育て", "暮らし・医療", "産業・雇用"],
    details: [
      "① 就農・定住支援と人口増加基盤の確立",
      "② 安心・安全な県土づくりと豪雪・災害対策の推進",
      "③ 地場産業・新潟米の海外ブランド展開と県内賃上げ推進"
    ],
    officialUrl: "https://koyaku.47story.jp/gov/niigata"
  },
  {
    id: "15100",
    region: "下越",
    name: "新潟市",
    mayorTitle: "中原八一 市長",
    scaleType: "政令指定都市",
    headline: "都心の賑わい創出と拠点ソフィア型都市の構築",
    tags: ["産業・雇用", "暮らし・医療"],
    details: [
      "① 新潟駅周辺再開発と交通ハブ機能の強化",
      "② 子育て世帯の医療費負担軽減と教育環境の向上",
      "③ 拠点ソフィア型都市としての防災・デジタル行政推進"
    ],
    officialUrl: "https://koyaku.47story.jp/city/15100/"
  },
  {
    id: "15202",
    region: "中越",
    name: "長岡市",
    mayorTitle: "磯田達伸 市長",
    scaleType: "地方中核市",
    headline: "イノベーション推進と地域防災・子育ての充実",
    tags: ["防災・安全", "人口・子育て"],
    details: [
      "① 豪雪対策とデジタル防災インフラの推進",
      "② 米百俵の精神に基づく次世代人材育成と子育て定住支援",
      "③ 長岡花火と技術革新を生かした地方創生"
    ],
    officialUrl: "https://koyaku.47story.jp/city/15202/"
  },
  {
    id: "15222",
    region: "上越",
    name: "上越市",
    mayorTitle: "中川幹太 市長",
    scaleType: "地方中核市",
    headline: "通年観光・産業振興と行政DX推進",
    tags: ["行政・DX", "人口・子育て"],
    details: [
      "① 行政手続きのオンライン化とスマート市役所",
      "② 通年観光の強化と農林水産業の所得向上支援",
      "③ 地域交通ネットワークの維持と子育て環境整備"
    ],
    officialUrl: "https://koyaku.47story.jp/city/15222/"
  },
  {
    id: "15204",
    region: "中越",
    name: "三条市",
    mayorTitle: "滝沢亮 市長",
    scaleType: "市・小中規模",
    headline: "燕三条の鍛冶・ものづくり産業と子育て支援",
    tags: ["産業・雇用", "人口・子育て"],
    details: [
      "① オープンファクトリーと地場製造業の海外展開支援",
      "② 給食費軽減と若い世代の住宅取得助成",
      "③ デジタルイノベーション拠点の形成"
    ],
    officialUrl: "https://koyaku.47story.jp/city/15204/"
  },
  {
    id: "15205",
    region: "中越",
    name: "柏崎市",
    mayorTitle: "桜井雅浩 市長",
    scaleType: "市・小中規模",
    headline: "エネルギースマートシティと医療・福祉の充実",
    tags: ["暮らし・医療", "産業・雇用"],
    details: [
      "① 地域医療体制の確保と高齢者移動交通の支援",
      "② 次世代エネルギー産業と地元雇用の創出",
      "③ 市民生活を支える防災・防犯ネットワーク強化"
    ],
    officialUrl: "https://koyaku.47story.jp/city/15205/"
  },
  {
    id: "15206",
    region: "下越",
    name: "新発田市",
    mayorTitle: "二階堂馨 市長",
    scaleType: "市・小中規模",
    headline: "食の循環と子育て・高齢者福祉の充実",
    tags: ["人口・子育て", "暮らし・医療"],
    details: [
      "① オーガニック農業と地産地消の推進",
      "② 高校生までの医療費助成と福祉パスの拡充",
      "③ 歴史・城下町を生かした観光まちづくり"
    ],
    officialUrl: "https://koyaku.47story.jp/city/15206/"
  },
  {
    id: "15208",
    region: "中越",
    name: "小千谷市",
    mayorTitle: "宮崎悦男 市長",
    scaleType: "市・小規模",
    headline: "錦鯉・錦織産業の振興と行政DX",
    tags: ["暮らし・医療", "行政・DX"],
    details: [
      "① 錦鯉・伝統工芸のグローバル展開と観光強化",
      "② 救急医療体制の維持とコミュニティ交通整備",
      "③ 雪国における安全な除雪支援の実施"
    ],
    officialUrl: "https://koyaku.47story.jp/city/15208/"
  },
  {
    id: "15209",
    region: "下越",
    name: "加茂市",
    mayorTitle: "藤田明美 市長",
    scaleType: "市・小規模",
    headline: "桐箪笥・伝統工芸と子育て環境の改善",
    tags: ["行政・DX", "人口・子育て"],
    details: [
      "① 若者の定住・子育て支援金の給付",
      "② 透明性の高い行政運営とオンライン窓口の拡充",
      "③ 加茂山公園・商店街の賑わい再生"
    ],
    officialUrl: "https://koyaku.47story.jp/city/15209/"
  },
  {
    id: "15210",
    region: "中越",
    name: "十日町市",
    mayorTitle: "関口芳史 市長",
    scaleType: "市・小規模",
    headline: "大地の芸術祭・雪国文化と子育て支援",
    tags: ["人口・子育て", "産業・雇用"],
    details: [
      "① 大地の芸術祭を活用した通年観光・地域活性化",
      "② 雪国の安全な通学路確保と子育て助成",
      "③ 織物・農業の振興と新規就農者支援"
    ],
    officialUrl: "https://koyaku.47story.jp/city/15210/"
  },
  {
    id: "15211",
    region: "中越",
    name: "見附市",
    mayorTitle: "稲田敏恵 市長",
    scaleType: "市・小規模",
    headline: "スマートウエルネスみつけと健幸都市の進化",
    tags: ["人口・子育て", "暮らし・医療"],
    details: [
      "① 健康寿命延伸プログラムと歩いて暮らせるまちづくり",
      "② 子育て支援施設・保育環境の充実",
      "③ 地域防災・インフラ耐震化の推進"
    ],
    officialUrl: "https://koyaku.47story.jp/city/15211/"
  },
  {
    id: "15212",
    region: "下越",
    name: "村上市",
    mayorTitle: "高橋邦芳 市長",
    scaleType: "市・小規模",
    headline: "三面川の鮭・村上木彫堆朱と地域医療確保",
    tags: ["暮らし・医療", "人口・子育て"],
    details: [
      "① 北越後地域の医療ネットワーク確保と救急体制",
      "② 水産業・林業の振興と定住奨励金制度",
      "③ 村上町屋・歴史文化を生かした観光創出"
    ],
    officialUrl: "https://koyaku.47story.jp/city/15212/"
  },
  {
    id: "15213",
    region: "中越",
    name: "燕市",
    mayorTitle: "鈴木力 市長",
    scaleType: "市・小中規模",
    headline: "洋食器・カトラリー産業と子育て応援",
    tags: ["暮らし・医療", "産業・雇用"],
    details: [
      "① 燕ブランドのグローバル展開と職人育成",
      "② 全天候型こども遊戯施設の設置と手厚い子育て支援",
      "③ 水害対策と安全な地域社会の構築"
    ],
    officialUrl: "https://koyaku.47story.jp/city/15213/"
  },
  {
    id: "15216",
    region: "上越",
    name: "糸魚川市",
    mayorTitle: "米田徹 市長",
    scaleType: "市・小規模",
    headline: "ユネスコ世界ジオパークと地域医療体制維持",
    tags: ["暮らし・医療", "産業・雇用"],
    details: [
      "① ジオパーク観光推進と地場企業・商業の活性化",
      "② 南医療圏の病院連携と救急医療体制の維持",
      "③ 移住定住者への住宅取得支援"
    ],
    officialUrl: "https://koyaku.47story.jp/city/15216/"
  },
  {
    id: "15217",
    region: "上越",
    name: "妙高市",
    mayorTitle: "城戸英明 市長",
    scaleType: "市・小規模",
    headline: "国際リゾート・スキー観光と子育て定住",
    tags: ["人口・子育て", "暮らし・医療"],
    details: [
      "① 国際マウンテンリゾートの形成と通年観光",
      "② 若者住宅取得・子育て支援金の拡充",
      "③ 高齢者の移動手段と医療アクセスの確保"
    ],
    officialUrl: "https://koyaku.47story.jp/city/15217/"
  },
  {
    id: "15218",
    region: "下越",
    name: "五泉市",
    mayorTitle: "田邊正幸 市長",
    scaleType: "市・小規模",
    headline: "ニット・チューリップ産業と子育て環境向上",
    tags: ["産業・雇用", "人口・子育て"],
    details: [
      "① 日本一のニット産地ブランド化と販路拡大",
      "② 子育て・教育費負担の軽減と若者定住推進",
      "③ 清流と自然を生かした環境づくり"
    ],
    officialUrl: "https://koyaku.47story.jp/city/15218/"
  },
  {
    id: "15223",
    region: "下越",
    name: "阿賀野市",
    mayorTitle: "加藤博幸 市長",
    scaleType: "市・小規模",
    headline: "白鳥の瓢湖・有機農業と子育て医療支援",
    tags: ["人口・子育て", "暮らし・医療"],
    details: [
      "① 有機農業の推進と安心な学校給食の提供",
      "② 地域医療・高齢者デマンドバスの運行維持",
      "③ 観光拠点としての瓢湖・五頭温泉郷の強化"
    ],
    officialUrl: "https://koyaku.47story.jp/city/15223/"
  },
  {
    id: "15224",
    region: "佐渡",
    name: "佐渡市",
    mayorTitle: "渡辺竜五 市長",
    scaleType: "市・小中規模",
    headline: "佐渡金山世界遺産・トキの島と島内医療・交通確保",
    tags: ["暮らし・医療", "産業・雇用"],
    details: [
      "① 佐渡金山世界遺産を生かした観光創出と航路支援",
      "② 島内医療体制の維持とドクターヘリ連携",
      "③ 若者の島内就職助成と定住促進"
    ],
    officialUrl: "https://koyaku.47story.jp/city/15224/"
  },
  {
    id: "15225",
    region: "中越",
    name: "魚沼市",
    mayorTitle: "内田幹夫 市長",
    scaleType: "市・小規模",
    headline: "魚沼産コシヒカリと雪国医療・観光振興",
    tags: ["暮らし・医療", "産業・雇用"],
    details: [
      "① コシヒカリのブランド保護とスマート農業推進",
      "② 魚沼基幹病院との連携と地域医療の充実",
      "③ 豪雪地帯の道路除雪と生活基盤維持"
    ],
    officialUrl: "https://koyaku.47story.jp/city/15225/"
  },
  {
    id: "15226",
    region: "中越",
    name: "南魚沼市",
    mayorTitle: "林茂男 市長",
    scaleType: "市・小規模",
    headline: "雪国リゾート・八海山と医療・子育て強化",
    tags: ["暮らし・医療", "産業・雇用"],
    details: [
      "① スキーリゾートと国際大学連携による国際観光",
      "② 地域医療・小児科体制の維持強化",
      "③ 若者の地元就業・起業支援"
    ],
    officialUrl: "https://koyaku.47story.jp/city/15226/"
  },
  {
    id: "15227",
    region: "下越",
    name: "胎内市",
    mayorTitle: "井畑明彦 市長",
    scaleType: "市・小規模",
    headline: "洋力発電・チューリップと防災・子育ての充実",
    tags: ["防災・安全", "人口・子育て"],
    details: [
      "① 洋上風力発電とクリーンエネルギーの活用推進",
      "② 水害・地震対策と避難体制の強化",
      "③ 子育て世代への手当と教育環境の整備"
    ],
    officialUrl: "https://koyaku.47story.jp/city/15227/"
  },
  {
    id: "15307",
    region: "下越",
    name: "聖籠町",
    mayorTitle: "一見一夫 町長",
    scaleType: "町・小規模",
    headline: "新潟東港・工業団地と行財政・子育て環境",
    tags: ["行政・DX", "人口・子育て"],
    details: [
      "① 港湾・工業団地の税源活用による手厚い福祉",
      "② 小中学校のICT教育推進と給食費支援",
      "③ 安全で快適な住環境の整備"
    ],
    officialUrl: "https://koyaku.47story.jp/city/15307/"
  },
  {
    id: "15342",
    region: "中越",
    name: "弥彦村",
    mayorTitle: "本間芳之 村長",
    scaleType: "村・小規模",
    headline: "弥彦神社・観光と子育て・高齢者福祉の充実",
    tags: ["人口・子育て", "産業・雇用"],
    details: [
      "① 弥彦温泉・門前町の観光DXと活性化",
      "② 村独自の給付型奨学金と育児支援制度",
      "③ 高齢者の安心な暮らしとコミュニティバス"
    ],
    officialUrl: "https://koyaku.47story.jp/city/15342/"
  },
  {
    id: "15361",
    region: "中越",
    name: "田上町",
    mayorTitle: "佐野恒雄 町長",
    scaleType: "町・小規模",
    headline: "湯田上温泉・竹林と地域医療・福祉の確保",
    tags: ["暮らし・医療", "産業・雇用"],
    details: [
      "① 温泉・観光資源の再生と移住・定住促進",
      "② 高齢者・障害者福祉と地域交通の確保",
      "③ 農業・特産品ハチミツ等の振興"
    ],
    officialUrl: "https://koyaku.47story.jp/city/15361/"
  },
  {
    id: "15385",
    region: "下越",
    name: "阿賀町",
    mayorTitle: "神田一夫 町長",
    scaleType: "町・小規模",
    headline: "阿賀野川の自然と過疎・医療対策の推進",
    tags: ["人口・子育て", "暮らし・医療"],
    details: [
      "① 町立病院・診療所の体制維持と往診支援",
      "② 若者移住者への住宅取得支援と子育て応援",
      "③ 林業・観光資源を生かした地域再生"
    ],
    officialUrl: "https://koyaku.47story.jp/city/15385/"
  },
  {
    id: "15405",
    region: "中越",
    name: "出雲崎町",
    mayorTitle: "仙海直樹 町長",
    scaleType: "町・小規模",
    headline: "良寛の里・紙風船と財政健全化・教育投資",
    tags: ["人口・子育て", "財政・施設"],
    details: [
      "① コンパクトな行政運営と財政健全化",
      "② 小中一貫教育の推進と子育て医療費無償化",
      "③ 妻入り街並みの保存と観光創出"
    ],
    officialUrl: "https://koyaku.47story.jp/city/15405/"
  },
  {
    id: "15461",
    region: "中越",
    name: "湯沢町",
    mayorTitle: "田村正幸 町長",
    scaleType: "町・小規模",
    headline: "苗場・リゾート都市振興と町民子育て支援",
    tags: ["産業・雇用", "人口・子育て"],
    details: [
      "① リゾートマンションの適正管理と通年観光振興",
      "② 町内児童への手厚い教育・子育て補助金",
      "③ 国際的スキーリゾートとしてのインフラ整備"
    ],
    officialUrl: "https://koyaku.47story.jp/city/15461/"
  },
  {
    id: "15482",
    region: "中越",
    name: "津南町",
    mayorTitle: "桑原悠 町長",
    scaleType: "町・小規模",
    headline: "河岸段丘・雪国医療と若い世代のまちづくり",
    tags: ["暮らし・医療", "人口・子育て"],
    details: [
      "① 若い世代の町政参加と子育て・教育投資",
      "② 国保病院の維持と豪雪除雪対策の強化",
      "③ 津南ひまわり広場等の観光ブランディング"
    ],
    officialUrl: "https://koyaku.47story.jp/city/15482/"
  },
  {
    id: "15504",
    region: "中越",
    name: "刈羽村",
    mayorTitle: "品田宏一 村長",
    scaleType: "村・小規模",
    headline: "エネルギー産業活用と村独自福祉・行政DX",
    tags: ["産業・雇用", "行政・DX"],
    details: [
      "① 村独自の給付金・手厚い福祉サービスの維持",
      "② スマート農業とデジタル村役場の推進",
      "③ 防災体制の強化と村内インフラ整備"
    ],
    officialUrl: "https://koyaku.47story.jp/city/15504/"
  },
  {
    id: "15581",
    region: "下越",
    name: "関川村",
    mayorTitle: "加藤弘 村長",
    scaleType: "村・小規模",
    headline: "防災インフラ再建と安全安心な村づくり",
    tags: ["防災・安全", "人口・子育て"],
    details: [
      "① 河川改修・防災インフラの早期完成",
      "② 全児童への学習支援と村内雇用創出",
      "③ 高齢者見守りネットワークの強化"
    ],
    officialUrl: "https://koyaku.47story.jp/city/15581/"
  },
  {
    id: "15586",
    region: "下越",
    name: "粟島浦村",
    mayorTitle: "脇川善亮 村長",
    scaleType: "村・小規模",
    headline: "離島振興・天然漁業とオンライン医療・教育",
    tags: ["行政・DX", "暮らし・医療"],
    details: [
      "① 離島のオンライン診療・遠隔教育の推進",
      "② 島内定期航路の維持と水産業・観光活性化",
      "③ 移住定住支援と島内子育て応援"
    ],
    officialUrl: "https://koyaku.47story.jp/city/15586/"
  }
];
