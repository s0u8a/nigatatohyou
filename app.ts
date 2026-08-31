// ============================================================
// にいがた、投票までの道 - Vanilla TypeScript版
// ============================================================

// ---------- Types ----------
type Tag = "経済" | "教育" | "環境" | "デジタル" | "福祉" | "地域";

interface TagMeta {
  color: string;
  label: string;
}

interface Candidate {
  id: string;
  name: string;
  tagline: string;
  weights: Record<Tag, number>;
  pledges: string[];
}

interface QuizOption {
  text: string;
  weights: Partial<Record<Tag, number>>;
}

interface Question {
  q: string;
  options: QuizOption[];
}

interface UpcomingElection {
  year: string;
  yearLabel: string;
  name: string;
  notice: string;
  day: string;
  isoDate: string;
}

interface PollingPlace {
  id: string;
  region: string; // "下越", "中越", "上越", "佐渡"
  municipality: string; // "新潟市中央区", "長岡市", "上越市" etc.
  wardShort?: string;
  name: string;
  address: string;
  area: string;
  mapUrl: string;
  officialUrl?: string;
  updateInfo?: string;
}

type TabKey = "home" | "pledges" | "quiz" | "place";

// ---------- Sample / reference data ----------
const TAGS: Tag[] = ["経済", "教育", "環境", "デジタル", "福祉", "地域"];

const TAG_META: Record<Tag, TagMeta> = {
  経済: { color: "#8C3B4B", label: "経済・仕事" },
  教育: { color: "#3E6B8A", label: "教育・学び" },
  環境: { color: "#4C7A54", label: "環境・農業" },
  デジタル: { color: "#6B5B95", label: "デジタル・くらし" },
  福祉: { color: "#B5762B", label: "福祉・医療" },
  地域: { color: "#D6A24C", label: "地域のつながり" },
};

const CANDIDATES: Candidate[] = [
  {
    id: "a",
    name: "新潟未来会議",
    tagline: "働き方と学びをアップデート",
    weights: { デジタル: 3, 教育: 2, 経済: 1, 環境: 0, 福祉: 0, 地域: 0 },
    pledges: [
      "県内どこでも高速通信、行政手続きは全部オンラインで完結",
      "奨学金の返済負担を今より軽くする給付型支援を拡充",
      "リモートワークで働ける企業誘致を進め、県外に出なくても働ける環境をつくる",
    ],
  },
  {
    id: "b",
    name: "みどりの新潟",
    tagline: "田んぼと自然を次の世代へ",
    weights: { 環境: 3, 地域: 2, デジタル: 0, 経済: 0, 教育: 0, 福祉: 0 },
    pledges: [
      "耕作放棄地を再生し、若い世代が新規就農しやすい補助制度をつくる",
      "空き家をリノベーションし、移住者と地元の交流拠点にする",
      "再生可能エネルギーの導入で電気代の負担を減らす",
    ],
  },
  {
    id: "c",
    name: "くらし安心新潟",
    tagline: "誰もが安心して暮らせる新潟に",
    weights: { 福祉: 3, 教育: 1, 地域: 1, デジタル: 0, 経済: 0, 環境: 0 },
    pledges: [
      "県内どこに住んでいても小児科・産婦人科にアクセスできる体制をつくる",
      "医療費の窓口負担を軽くする独自の助成を拡充",
      "地域の相談窓口を減らさず、対面でも相談できる場所を維持する",
    ],
  },
  {
    id: "d",
    name: "改革新潟",
    tagline: "稼げる新潟、暮らせる新潟",
    weights: { 経済: 3, デジタル: 1, 地域: 1, 教育: 0, 環境: 0, 福祉: 0 },
    pledges: [
      "県内企業の賃上げを支援し、若手の初任給の底上げを目指す",
      "新潟駅周辺の再開発を進め、通勤・通学の交通の便を良くする",
      "行政のムダを削り、子育て世帯への現金給付に回す",
    ],
  },
];

const QUESTIONS: Question[] = [
  {
    q: "大学や専門学校の学費、正直どう思う?",
    options: [
      { text: "奨学金や給付をもっと増やしてほしい", weights: { 教育: 2 } },
      { text: "学費より、社会人になってからの奨学金返済を軽くしてほしい", weights: { 教育: 1, 経済: 1 } },
    ],
  },
  {
    q: "就職について一番気になるのは?",
    options: [
      { text: "新潟県内で給料の高い仕事を増やしてほしい", weights: { 経済: 2 } },
      { text: "県外に出なくても働ける環境(リモートワークなど)がほしい", weights: { デジタル: 2 } },
    ],
  },
  {
    q: "10年後の新潟の景色として、近いのは?",
    options: [
      { text: "田んぼや自然を生かした、環境と共存するまち", weights: { 環境: 2 } },
      { text: "新しい建物やIT企業が集まる、便利なまち", weights: { デジタル: 1, 経済: 1 } },
    ],
  },
  {
    q: "体調を崩したとき、一番不安なことは?",
    options: [
      { text: "近くに病院や小児科が少ないこと", weights: { 福祉: 2 } },
      { text: "治療費や医療費の負担が大きいこと", weights: { 福祉: 1, 経済: 1 } },
    ],
  },
  {
    q: "行政サービスについて思うことは?",
    options: [
      { text: "手続きがオンラインでもっと簡単になってほしい", weights: { デジタル: 2 } },
      { text: "窓口で直接相談できる場所を減らさないでほしい", weights: { 地域: 2 } },
    ],
  },
  {
    q: "この先も新潟に住み続けたい理由に近いのは?",
    options: [
      { text: "近所の人とのつながりや、地域のお祭りなどの文化", weights: { 地域: 2 } },
      { text: "通勤・通学の交通の便の良さ", weights: { 経済: 1, デジタル: 1 } },
    ],
  },
];

const TYPE_NAMES: Record<Tag, string> = {
  教育: "学びの未来型",
  経済: "暮らしの安定型",
  環境: "自然と共に型",
  デジタル: "テクノロジー活用型",
  福祉: "安心第一型",
  地域: "地元つながり型",
};

// 出典リンク
const OFFICIAL_SCHEDULE_URL = "https://www.pref.niigata.lg.jp/site/senkyo/list803.html";
const OFFICIAL_NIIGATA_POLLING_URL = "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html";

// 令和8年度, 令和9年度以降 スケジュール
const UPCOMING_ELECTIONS: UpcomingElection[] = [
  { year: "令和8年度", yearLabel: "令和8年", name: "胎内市長選挙", notice: "9月6日", day: "9月13日", isoDate: "2026-09-13" },
  { year: "令和8年度", yearLabel: "令和8年", name: "新潟市長選挙", notice: "10月11日", day: "10月25日", isoDate: "2026-10-25" },
  { year: "令和8年度", yearLabel: "令和8年", name: "燕市議会議員選挙", notice: "10月11日", day: "10月18日", isoDate: "2026-10-18" },
  { year: "令和8年度", yearLabel: "令和8年", name: "見附市議会議員選挙", notice: "10月18日", day: "10月25日", isoDate: "2026-10-25" },
  { year: "令和8年度", yearLabel: "令和8年", name: "妙高市長選挙", notice: "11月8日", day: "11月15日", isoDate: "2026-11-15" },
  { year: "令和8年度", yearLabel: "令和8年", name: "小千谷市長選挙", notice: "11月8日", day: "11月15日", isoDate: "2026-11-15" },
  { year: "令和8年度", yearLabel: "令和8年", name: "新発田市長選挙", notice: "11月15日", day: "11月22日", isoDate: "2026-11-22" },
  { year: "令和8年度", yearLabel: "令和8年", name: "阿賀町長選挙", notice: "11月17日", day: "11月22日", isoDate: "2026-11-22" },

  { year: "令和9年度以降", yearLabel: "令和9年", name: "第21回 統一地方選挙 (新潟県議会議員選挙)", notice: "3月下旬", day: "4月11日(予定)", isoDate: "2027-04-11" },
  { year: "令和9年度以降", yearLabel: "令和9年", name: "新潟市議会議員一般選挙", notice: "3月下旬", day: "4月11日(予定)", isoDate: "2027-04-11" },
  { year: "令和9年度以降", yearLabel: "令和9年", name: "長岡市長選挙 (任期満了 10月)", notice: "10月", day: "10月下旬(予定)", isoDate: "2027-10-24" },
  { year: "令和9年度以降", yearLabel: "令和9年", name: "上越市長選挙 (任期満了 11月)", notice: "11月", day: "11月下旬(予定)", isoDate: "2027-11-21" },
];

const ELECTION_YEAR_FILTERS = ["すべて", "令和8年度", "令和9年度以降"];

// 新潟県 全30市町村 投票所データ (全284箇所)
const POLLING_PLACES: PollingPlace[] = [
  {
    "id": "1001",
    "ward": "新潟市北区",
    "wardShort": "北区",
    "name": "松浜小学校",
    "address": "北区松浜3‐19‐1",
    "area": "松浜1～8丁目、松浜町の一部、松浜東町1～2丁目、松浜本町1～4丁目、松浜みなと",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E5%8C%97%E5%8C%BA%20%E6%9D%BE%E6%B5%9C%E5%B0%8F%E5%AD%A6%E6%A0%A1%20%E5%8C%97%E5%8C%BA%E6%9D%BE%E6%B5%9C3%E2%80%9019%E2%80%901",
    "updateInfo": "",
    "region": "下越",
    "municipality": "新潟市北区",
    "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
  },
  {
    "id": "1002",
    "ward": "新潟市北区",
    "wardShort": "北区",
    "name": "南浜連絡所",
    "address": "北区島見町2069-1",
    "area": "島見町、白勢町、新富町",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E5%8C%97%E5%8C%BA%20%E5%8D%97%E6%B5%9C%E9%80%A3%E7%B5%A1%E6%89%80%20%E5%8C%97%E5%8C%BA%E5%B3%B6%E8%A6%8B%E7%94%BA2069-1",
    "updateInfo": "",
    "region": "下越",
    "municipality": "新潟市北区",
    "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
  },
  {
    "id": "1003",
    "ward": "新潟市北区",
    "wardShort": "北区",
    "name": "太夫浜小学校",
    "address": "北区太夫浜2045‐2",
    "area": "神谷内、太夫浜、太夫浜新町1～2丁目、松栄町、松浜町の一部",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E5%8C%97%E5%8C%BA%20%E5%A4%AA%E5%A4%AB%E6%B5%9C%E5%B0%8F%E5%AD%A6%E6%A0%A1%20%E5%8C%97%E5%8C%BA%E5%A4%AA%E5%A4%AB%E6%B5%9C2045%E2%80%902",
    "updateInfo": "",
    "region": "下越",
    "municipality": "新潟市北区",
    "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
  },
  {
    "id": "1004",
    "ward": "新潟市北区",
    "wardShort": "北区",
    "name": "太郎代自治会館",
    "address": "北区太郎代120",
    "area": "太郎代",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E5%8C%97%E5%8C%BA%20%E5%A4%AA%E9%83%8E%E4%BB%A3%E8%87%AA%E6%B2%BB%E4%BC%9A%E9%A4%A8%20%E5%8C%97%E5%8C%BA%E5%A4%AA%E9%83%8E%E4%BB%A3120",
    "updateInfo": "",
    "region": "下越",
    "municipality": "新潟市北区",
    "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
  },
  {
    "id": "1005",
    "ward": "新潟市北区",
    "wardShort": "北区",
    "name": "濁川小学校",
    "address": "北区濁川284",
    "area": "すみれ野1～3丁目、つくし野1～2丁目、新崎、新崎1～3丁目、濁川、濁川1丁目、松潟",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E5%8C%97%E5%8C%BA%20%E6%BF%81%E5%B7%9D%E5%B0%8F%E5%AD%A6%E6%A0%A1%20%E5%8C%97%E5%8C%BA%E6%BF%81%E5%B7%9D284",
    "updateInfo": "",
    "region": "下越",
    "municipality": "新潟市北区",
    "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
  },
  {
    "id": "1006",
    "ward": "新潟市北区",
    "wardShort": "北区",
    "name": "三軒屋町自治会館",
    "address": "北区三軒屋町19‐16",
    "area": "三軒屋町、新元島町、名目所、名目所1～3丁目、西名目所、松浜新町",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E5%8C%97%E5%8C%BA%20%E4%B8%89%E8%BB%92%E5%B1%8B%E7%94%BA%E8%87%AA%E6%B2%BB%E4%BC%9A%E9%A4%A8%20%E5%8C%97%E5%8C%BA%E4%B8%89%E8%BB%92%E5%B1%8B%E7%94%BA19%E2%80%9016",
    "updateInfo": "",
    "region": "下越",
    "municipality": "新潟市北区",
    "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
  },
  {
    "id": "1007",
    "ward": "新潟市北区",
    "wardShort": "北区",
    "name": "北区役所",
    "address": "北区東栄町1-1-14",
    "area": "葛塚の一部、太田の一部、嘉山の一部、前新田の一部、横井の一部、白新町1丁目の一部、白新町2～3丁目、白新町4丁目の一部、嘉山1丁目全域、嘉山2丁目の一部、嘉山3～5丁目、嘉山6丁目の一部、東栄町(とうえいちょう)1～3丁目",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E5%8C%97%E5%8C%BA%20%E5%8C%97%E5%8C%BA%E5%BD%B9%E6%89%80%20%E5%8C%97%E5%8C%BA%E6%9D%B1%E6%A0%84%E7%94%BA1-1-14",
    "updateInfo": "",
    "region": "下越",
    "municipality": "新潟市北区",
    "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
  },
  {
    "id": "1008",
    "ward": "新潟市北区",
    "wardShort": "北区",
    "name": "葛塚小学校",
    "address": "北区川西3‐9‐24",
    "area": "浦木の一部、嘉山2丁目の一部、嘉山6丁目の一部、上土地亀、川西1～4丁目、美里1～2丁目",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E5%8C%97%E5%8C%BA%20%E8%91%9B%E5%A1%9A%E5%B0%8F%E5%AD%A6%E6%A0%A1%20%E5%8C%97%E5%8C%BA%E5%B7%9D%E8%A5%BF3%E2%80%909%E2%80%9024",
    "updateInfo": "",
    "region": "下越",
    "municipality": "新潟市北区",
    "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
  },
  {
    "id": "1009",
    "ward": "新潟市北区",
    "wardShort": "北区",
    "name": "すみれ保育園",
    "address": "北区石動1‐10‐1",
    "area": "太田の一部、葛塚の一部、白新町1丁目の一部、かぶとやま1～2丁目、石動1～2丁目、柳原1丁目の一部、横井の一部",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E5%8C%97%E5%8C%BA%20%E3%81%99%E3%81%BF%E3%82%8C%E4%BF%9D%E8%82%B2%E5%9C%92%20%E5%8C%97%E5%8C%BA%E7%9F%B3%E5%8B%951%E2%80%9010%E2%80%901",
    "updateInfo": "",
    "region": "下越",
    "municipality": "新潟市北区",
    "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
  },
  {
    "id": "1010",
    "ward": "新潟市北区",
    "wardShort": "北区",
    "name": "こまくさ保育園子育て支援センターおひさまひろば",
    "address": "北区柳原3-3-16",
    "area": "葛塚の一部、下土地亀の一部、白新町4丁目の一部、柳原1丁目の一部、柳原2～6丁目",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E5%8C%97%E5%8C%BA%20%E3%81%93%E3%81%BE%E3%81%8F%E3%81%95%E4%BF%9D%E8%82%B2%E5%9C%92%E5%AD%90%E8%82%B2%E3%81%A6%E6%94%AF%E6%8F%B4%E3%82%BB%E3%83%B3%E3%82%BF%E3%83%BC%E3%81%8A%E3%81%B2%E3%81%95%E3%81%BE%E3%81%B2%E3%82%8D%E3%81%B0%20%E5%8C%97%E5%8C%BA%E6%9F%B3%E5%8E%9F3-3-16",
    "updateInfo": "",
    "region": "下越",
    "municipality": "新潟市北区",
    "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
  },
  {
    "id": "1011",
    "ward": "新潟市北区",
    "wardShort": "北区",
    "name": "葛塚東小学校",
    "address": "北区朝日町4‐1‐2",
    "area": "葛塚の一部、太田の一部、嘉山の一部、横井の一部、朝日町1～4丁目、前新田の一部、新鼻、内沼の一部",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E5%8C%97%E5%8C%BA%20%E8%91%9B%E5%A1%9A%E6%9D%B1%E5%B0%8F%E5%AD%A6%E6%A0%A1%20%E5%8C%97%E5%8C%BA%E6%9C%9D%E6%97%A5%E7%94%BA4%E2%80%901%E2%80%902",
    "updateInfo": "",
    "region": "下越",
    "municipality": "新潟市北区",
    "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
  },
  {
    "id": "1012",
    "ward": "新潟市北区",
    "wardShort": "北区",
    "name": "太田保育園",
    "address": "北区太田2005",
    "area": "太田の一部、笠柳の一部、村新田",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E5%8C%97%E5%8C%BA%20%E5%A4%AA%E7%94%B0%E4%BF%9D%E8%82%B2%E5%9C%92%20%E5%8C%97%E5%8C%BA%E5%A4%AA%E7%94%B02005",
    "updateInfo": "",
    "region": "下越",
    "municipality": "新潟市北区",
    "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
  },
  {
    "id": "1013",
    "ward": "新潟市北区",
    "wardShort": "北区",
    "name": "木崎コミュニティセンター",
    "address": "北区木崎3227",
    "area": "内島見の一部、浦ノ入の一部、木崎の一部、鳥屋、早通の一部、笠柳の一部、横井の一部",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E5%8C%97%E5%8C%BA%20%E6%9C%A8%E5%B4%8E%E3%82%B3%E3%83%9F%E3%83%A5%E3%83%8B%E3%83%86%E3%82%A3%E3%82%BB%E3%83%B3%E3%82%BF%E3%83%BC%20%E5%8C%97%E5%8C%BA%E6%9C%A8%E5%B4%8E3227",
    "updateInfo": "",
    "region": "下越",
    "municipality": "新潟市北区",
    "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
  },
  {
    "id": "1014",
    "ward": "新潟市北区",
    "wardShort": "北区",
    "name": "尾山ニュータウン公民館",
    "address": "北区内島見2185‐30",
    "area": "内島見の一部、木崎の一部、北陽1～2丁目",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E5%8C%97%E5%8C%BA%20%E5%B0%BE%E5%B1%B1%E3%83%8B%E3%83%A5%E3%83%BC%E3%82%BF%E3%82%A6%E3%83%B3%E5%85%AC%E6%B0%91%E9%A4%A8%20%E5%8C%97%E5%8C%BA%E5%86%85%E5%B3%B6%E8%A6%8B2185%E2%80%9030",
    "updateInfo": "",
    "region": "下越",
    "municipality": "新潟市北区",
    "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
  },
  {
    "id": "1015",
    "ward": "新潟市北区",
    "wardShort": "北区",
    "name": "樋ノ入公民館",
    "address": "北区樋ノ入1471",
    "area": "木崎の一部、下大谷内、下早通の一部、樋ノ入",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E5%8C%97%E5%8C%BA%20%E6%A8%8B%E3%83%8E%E5%85%A5%E5%85%AC%E6%B0%91%E9%A4%A8%20%E5%8C%97%E5%8C%BA%E6%A8%8B%E3%83%8E%E5%85%A51471",
    "updateInfo": "",
    "region": "下越",
    "municipality": "新潟市北区",
    "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
  },
  {
    "id": "1016",
    "ward": "新潟市北区",
    "wardShort": "北区",
    "name": "笹山公民館",
    "address": "北区笹山2058",
    "area": "内島見の一部、木崎の一部、笹山、浦ノ入の一部、横土居",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E5%8C%97%E5%8C%BA%20%E7%AC%B9%E5%B1%B1%E5%85%AC%E6%B0%91%E9%A4%A8%20%E5%8C%97%E5%8C%BA%E7%AC%B9%E5%B1%B12058",
    "updateInfo": "",
    "region": "下越",
    "municipality": "新潟市北区",
    "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
  },
  {
    "id": "1017",
    "ward": "新潟市北区",
    "wardShort": "北区",
    "name": "早通南小学校",
    "address": "北区須戸1‐1‐1",
    "area": "下土地亀の一部、須戸、須戸1～5丁目、新井郷、早通の一部、仏伝、早通南1～5丁目",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E5%8C%97%E5%8C%BA%20%E6%97%A9%E9%80%9A%E5%8D%97%E5%B0%8F%E5%AD%A6%E6%A0%A1%20%E5%8C%97%E5%8C%BA%E9%A0%88%E6%88%B81%E2%80%901%E2%80%901",
    "updateInfo": "",
    "region": "下越",
    "municipality": "新潟市北区",
    "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
  },
  {
    "id": "1018",
    "ward": "新潟市北区",
    "wardShort": "北区",
    "name": "早通中学校",
    "address": "北区早通396",
    "area": "彩野1～4丁目、早通北1～6丁目、下早通の一部、早通の一部",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E5%8C%97%E5%8C%BA%20%E6%97%A9%E9%80%9A%E4%B8%AD%E5%AD%A6%E6%A0%A1%20%E5%8C%97%E5%8C%BA%E6%97%A9%E9%80%9A396",
    "updateInfo": "",
    "region": "下越",
    "municipality": "新潟市北区",
    "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
  },
  {
    "id": "1019",
    "ward": "新潟市北区",
    "wardShort": "北区",
    "name": "岡方コミュニティセンター",
    "address": "北区長戸呂4601",
    "area": "十二、平林、灰塚、山飯野、大久保、大瀬柳、大迎、太子堂、長戸呂、長戸呂新田、三ツ屋、十二前",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E5%8C%97%E5%8C%BA%20%E5%B2%A1%E6%96%B9%E3%82%B3%E3%83%9F%E3%83%A5%E3%83%8B%E3%83%86%E3%82%A3%E3%82%BB%E3%83%B3%E3%82%BF%E3%83%BC%20%E5%8C%97%E5%8C%BA%E9%95%B7%E6%88%B8%E5%91%824601",
    "updateInfo": "",
    "region": "下越",
    "municipality": "新潟市北区",
    "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
  },
  {
    "id": "1020",
    "ward": "新潟市北区",
    "wardShort": "北区",
    "name": "旧三ツ森保育園",
    "address": "北区森下1409",
    "area": "高森、高森新田、森下、すみれ野4丁目",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E5%8C%97%E5%8C%BA%20%E6%97%A7%E4%B8%89%E3%83%84%E6%A3%AE%E4%BF%9D%E8%82%B2%E5%9C%92%20%E5%8C%97%E5%8C%BA%E6%A3%AE%E4%B8%8B1409",
    "updateInfo": "",
    "region": "下越",
    "municipality": "新潟市北区",
    "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
  },
  {
    "id": "1021",
    "ward": "新潟市北区",
    "wardShort": "北区",
    "name": "長浦コミュニティセンター",
    "address": "北区長場1834‐1",
    "area": "上大月、岡新田、上堀田、里飯野、大月、長場、内沼の一部、長戸、浦木の一部",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E5%8C%97%E5%8C%BA%20%E9%95%B7%E6%B5%A6%E3%82%B3%E3%83%9F%E3%83%A5%E3%83%8B%E3%83%86%E3%82%A3%E3%82%BB%E3%83%B3%E3%82%BF%E3%83%BC%20%E5%8C%97%E5%8C%BA%E9%95%B7%E5%A0%B41834%E2%80%901",
    "updateInfo": "",
    "region": "下越",
    "municipality": "新潟市北区",
    "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
  },
  {
    "id": "2001",
    "ward": "新潟市東区",
    "wardShort": "東区",
    "name": "山の下まちづくりセンター",
    "address": "東区古川町4‐12",
    "area": "神明町、浜町、古湊町、山の下町、臨海町、臨港1丁目、長者町、大山1～2丁目、東新町、古川町、北葉町、松島1～3丁目、末広町",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E6%9D%B1%E5%8C%BA%20%E5%B1%B1%E3%81%AE%E4%B8%8B%E3%81%BE%E3%81%A1%E3%81%A5%E3%81%8F%E3%82%8A%E3%82%BB%E3%83%B3%E3%82%BF%E3%83%BC%20%E6%9D%B1%E5%8C%BA%E5%8F%A4%E5%B7%9D%E7%94%BA4%E2%80%9012",
    "updateInfo": "",
    "region": "下越",
    "municipality": "新潟市東区",
    "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
  },
  {
    "id": "2002",
    "ward": "新潟市東区",
    "wardShort": "東区",
    "name": "山の下中学校",
    "address": "東区秋葉通2‐3722‐7",
    "area": "秋葉1丁目、秋葉通2～3丁目、桃山町1～2丁目、臨港町2～3丁目",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E6%9D%B1%E5%8C%BA%20%E5%B1%B1%E3%81%AE%E4%B8%8B%E4%B8%AD%E5%AD%A6%E6%A0%A1%20%E6%9D%B1%E5%8C%BA%E7%A7%8B%E8%91%89%E9%80%9A2%E2%80%903722%E2%80%907",
    "updateInfo": "",
    "region": "下越",
    "municipality": "新潟市東区",
    "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
  },
  {
    "id": "2003",
    "ward": "新潟市東区",
    "wardShort": "東区",
    "name": "東山の下小学校",
    "address": "東区藤見町1‐23‐57",
    "area": "河渡庚、河渡1丁目の一部、河渡2丁目の一部、河渡3丁目の一部、河渡本町、藤見町1～2丁目、月見町、上王瀬町",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E6%9D%B1%E5%8C%BA%20%E6%9D%B1%E5%B1%B1%E3%81%AE%E4%B8%8B%E5%B0%8F%E5%AD%A6%E6%A0%A1%20%E6%9D%B1%E5%8C%BA%E8%97%A4%E8%A6%8B%E7%94%BA1%E2%80%9023%E2%80%9057",
    "updateInfo": "",
    "region": "下越",
    "municipality": "新潟市東区",
    "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
  },
  {
    "id": "2004",
    "ward": "新潟市東区",
    "wardShort": "東区",
    "name": "藤見中学校",
    "address": "東区小金町3‐5‐1",
    "area": "河渡1丁目の一部、小金台、小金町1～3丁目、宝町、錦町、物見山1～2丁目",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E6%9D%B1%E5%8C%BA%20%E8%97%A4%E8%A6%8B%E4%B8%AD%E5%AD%A6%E6%A0%A1%20%E6%9D%B1%E5%8C%BA%E5%B0%8F%E9%87%91%E7%94%BA3%E2%80%905%E2%80%901",
    "updateInfo": "",
    "region": "下越",
    "municipality": "新潟市東区",
    "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
  },
  {
    "id": "2005",
    "ward": "新潟市東区",
    "wardShort": "東区",
    "name": "中地区コミュニティセンター",
    "address": "東区松和町15‐8",
    "area": "幸栄1～3丁目、河渡2丁目の一部、河渡3丁目の一部、向陽1丁目、松園1～2丁目、松和町、物見山3～4丁目",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E6%9D%B1%E5%8C%BA%20%E4%B8%AD%E5%9C%B0%E5%8C%BA%E3%82%B3%E3%83%9F%E3%83%A5%E3%83%8B%E3%83%86%E3%82%A3%E3%82%BB%E3%83%B3%E3%82%BF%E3%83%BC%20%E6%9D%B1%E5%8C%BA%E6%9D%BE%E5%92%8C%E7%94%BA15%E2%80%908",
    "updateInfo": "",
    "region": "下越",
    "municipality": "新潟市東区",
    "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
  },
  {
    "id": "2006",
    "ward": "新潟市東区",
    "wardShort": "東区",
    "name": "臨空船江会館",
    "address": "東区船江町2‐11‐3",
    "area": "空港西1～2丁目、浜谷町1～2丁目、船江町1～3丁目）",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E6%9D%B1%E5%8C%BA%20%E8%87%A8%E7%A9%BA%E8%88%B9%E6%B1%9F%E4%BC%9A%E9%A4%A8%20%E6%9D%B1%E5%8C%BA%E8%88%B9%E6%B1%9F%E7%94%BA2%E2%80%9011%E2%80%903",
    "updateInfo": "",
    "region": "下越",
    "municipality": "新潟市東区",
    "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
  },
  {
    "id": "2007",
    "ward": "新潟市東区",
    "wardShort": "東区",
    "name": "下山小学校",
    "address": "東区太平2‐18",
    "area": "河渡甲、河渡新町1～2丁目、向陽3丁目、下山1～3丁目、新川町、太平1～4丁目、津島屋5丁目、根室新町、松浜町の一部",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E6%9D%B1%E5%8C%BA%20%E4%B8%8B%E5%B1%B1%E5%B0%8F%E5%AD%A6%E6%A0%A1%20%E6%9D%B1%E5%8C%BA%E5%A4%AA%E5%B9%B32%E2%80%9018",
    "updateInfo": "",
    "region": "下越",
    "municipality": "新潟市東区",
    "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
  },
  {
    "id": "2008",
    "ward": "新潟市東区",
    "wardShort": "東区",
    "name": "松崎自治会館",
    "address": "東区松崎1‐14‐25",
    "area": "向陽2丁目、白銀1～2丁目、松崎、松崎1～2丁目、有楽1～3丁目",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E6%9D%B1%E5%8C%BA%20%E6%9D%BE%E5%B4%8E%E8%87%AA%E6%B2%BB%E4%BC%9A%E9%A4%A8%20%E6%9D%B1%E5%8C%BA%E6%9D%BE%E5%B4%8E1%E2%80%9014%E2%80%9025",
    "updateInfo": "",
    "region": "下越",
    "municipality": "新潟市東区",
    "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
  },
  {
    "id": "2009",
    "ward": "新潟市東区",
    "wardShort": "東区",
    "name": "新潟市立東特別支援学校",
    "address": "東区海老ケ瀬31",
    "area": "津島屋1～4丁目、津島屋6～7丁目、海老ケ瀬、新松崎1～3丁目、一日市、木工新町",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E6%9D%B1%E5%8C%BA%20%E6%96%B0%E6%BD%9F%E5%B8%82%E7%AB%8B%E6%9D%B1%E7%89%B9%E5%88%A5%E6%94%AF%E6%8F%B4%E5%AD%A6%E6%A0%A1%20%E6%9D%B1%E5%8C%BA%E6%B5%B7%E8%80%81%E3%82%B1%E7%80%AC31",
    "updateInfo": "",
    "region": "下越",
    "municipality": "新潟市東区",
    "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
  },
  {
    "id": "2010",
    "ward": "新潟市東区",
    "wardShort": "東区",
    "name": "大形小学校",
    "address": "東区大形本町2‐6‐1",
    "area": "石動、海老ケ瀬新町、逢谷内、逢谷内1～6丁目、大形本町、大形本町1～6丁目、寺山3丁目の一部、中興野、本所、本所1～3丁目、柳ケ丘、豊2～3丁目",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E6%9D%B1%E5%8C%BA%20%E5%A4%A7%E5%BD%A2%E5%B0%8F%E5%AD%A6%E6%A0%A1%20%E6%9D%B1%E5%8C%BA%E5%A4%A7%E5%BD%A2%E6%9C%AC%E7%94%BA2%E2%80%906%E2%80%901",
    "updateInfo": "",
    "region": "下越",
    "municipality": "新潟市東区",
    "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
  },
  {
    "id": "2011",
    "ward": "新潟市東区",
    "wardShort": "東区",
    "name": "木戸中学校",
    "address": "東区上木戸5‐1‐1",
    "area": "上木戸の一部、上木戸1～3、5丁目、材木町、下木戸、寺山、寺山1～2丁目、寺山3丁目の一部、中木戸、はなみずき2丁目、豊1丁目",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E6%9D%B1%E5%8C%BA%20%E6%9C%A8%E6%88%B8%E4%B8%AD%E5%AD%A6%E6%A0%A1%20%E6%9D%B1%E5%8C%BA%E4%B8%8A%E6%9C%A8%E6%88%B85%E2%80%901%E2%80%901",
    "updateInfo": "",
    "region": "下越",
    "municipality": "新潟市東区",
    "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
  },
  {
    "id": "2012",
    "ward": "新潟市東区",
    "wardShort": "東区",
    "name": "牡丹山小学校",
    "address": "東区牡丹山6‐15‐1",
    "area": "上木戸の一部、上木戸4丁目、下木戸1～3丁目、竹尾4丁目、はなみずき1、3丁目、牡丹山3～6丁目",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E6%9D%B1%E5%8C%BA%20%E7%89%A1%E4%B8%B9%E5%B1%B1%E5%B0%8F%E5%AD%A6%E6%A0%A1%20%E6%9D%B1%E5%8C%BA%E7%89%A1%E4%B8%B9%E5%B1%B16%E2%80%9015%E2%80%901",
    "updateInfo": "",
    "region": "下越",
    "municipality": "新潟市東区",
    "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
  },
  {
    "id": "2013",
    "ward": "新潟市東区",
    "wardShort": "東区",
    "name": "竹尾小学校",
    "address": "東区竹尾2-18-1",
    "area": "竹尾、竹尾1～3丁目、紫竹6～7丁目、竹尾卸新町、紫竹卸新町、卸新町1～3丁目",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E6%9D%B1%E5%8C%BA%20%E7%AB%B9%E5%B0%BE%E5%B0%8F%E5%AD%A6%E6%A0%A1%20%E6%9D%B1%E5%8C%BA%E7%AB%B9%E5%B0%BE2-18-1",
    "updateInfo": "",
    "region": "下越",
    "municipality": "新潟市東区",
    "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
  },
  {
    "id": "2014",
    "ward": "新潟市東区",
    "wardShort": "東区",
    "name": "木戸小学校",
    "address": "東区中山4‐1‐1",
    "area": "中山1～8丁目、牡丹山1～2丁目、山木戸5丁目",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E6%9D%B1%E5%8C%BA%20%E6%9C%A8%E6%88%B8%E5%B0%8F%E5%AD%A6%E6%A0%A1%20%E6%9D%B1%E5%8C%BA%E4%B8%AD%E5%B1%B14%E2%80%901%E2%80%901",
    "updateInfo": "",
    "region": "下越",
    "municipality": "新潟市東区",
    "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
  },
  {
    "id": "2015",
    "ward": "新潟市東区",
    "wardShort": "東区",
    "name": "東新潟中学校",
    "address": "東区山木戸1‐2‐1",
    "area": "榎、榎町、山木戸1～4丁目、山木戸6～8丁目",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E6%9D%B1%E5%8C%BA%20%E6%9D%B1%E6%96%B0%E6%BD%9F%E4%B8%AD%E5%AD%A6%E6%A0%A1%20%E6%9D%B1%E5%8C%BA%E5%B1%B1%E6%9C%A8%E6%88%B81%E2%80%902%E2%80%901",
    "updateInfo": "",
    "region": "下越",
    "municipality": "新潟市東区",
    "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
  },
  {
    "id": "2016",
    "ward": "新潟市東区",
    "wardShort": "東区",
    "name": "江南小学校",
    "address": "東区江南5-1-1",
    "area": "紫竹2～5丁目、江南1～6丁目、紫竹山3丁目の一部、南紫竹1丁目",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E6%9D%B1%E5%8C%BA%20%E6%B1%9F%E5%8D%97%E5%B0%8F%E5%AD%A6%E6%A0%A1%20%E6%9D%B1%E5%8C%BA%E6%B1%9F%E5%8D%975-1-1",
    "updateInfo": "",
    "region": "下越",
    "municipality": "新潟市東区",
    "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
  },
  {
    "id": "2017",
    "ward": "新潟市東区",
    "wardShort": "東区",
    "name": "石山中学校",
    "address": "東区東明6‐2",
    "area": "石山1～3、5丁目、東明1～8丁目、南紫竹2丁目、新石山5丁目、もえぎ野1丁目",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E6%9D%B1%E5%8C%BA%20%E7%9F%B3%E5%B1%B1%E4%B8%AD%E5%AD%A6%E6%A0%A1%20%E6%9D%B1%E5%8C%BA%E6%9D%B1%E6%98%8E6%E2%80%902",
    "updateInfo": "",
    "region": "下越",
    "municipality": "新潟市東区",
    "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
  },
  {
    "id": "2018",
    "ward": "新潟市東区",
    "wardShort": "東区",
    "name": "中野山小学校",
    "address": "東区中野山1‐1‐1",
    "area": "石山6丁目、下場、下場新町、下場本町、新石山1～4丁目、中島1丁目、中野山1～5丁目",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E6%9D%B1%E5%8C%BA%20%E4%B8%AD%E9%87%8E%E5%B1%B1%E5%B0%8F%E5%AD%A6%E6%A0%A1%20%E6%9D%B1%E5%8C%BA%E4%B8%AD%E9%87%8E%E5%B1%B11%E2%80%901%E2%80%901",
    "updateInfo": "",
    "region": "下越",
    "municipality": "新潟市東区",
    "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
  },
  {
    "id": "2019",
    "ward": "新潟市東区",
    "wardShort": "東区",
    "name": "南中野山小学校",
    "address": "東区中野山863‐1",
    "area": "粟山1～4丁目、石山4丁目、中野山6～7丁目、東中野山1丁目、もえぎ野2～3丁目",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E6%9D%B1%E5%8C%BA%20%E5%8D%97%E4%B8%AD%E9%87%8E%E5%B1%B1%E5%B0%8F%E5%AD%A6%E6%A0%A1%20%E6%9D%B1%E5%8C%BA%E4%B8%AD%E9%87%8E%E5%B1%B1863%E2%80%901",
    "updateInfo": "",
    "region": "下越",
    "municipality": "新潟市東区",
    "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
  },
  {
    "id": "2020",
    "ward": "新潟市東区",
    "wardShort": "東区",
    "name": "シルバーピア石山",
    "address": "東区石山団地10-13",
    "area": "石山団地、猿ケ馬場1丁目、中島2丁目の一部、中野山8丁目、東中島1～2丁目、東中野山2～5丁目、若葉町1～2丁目",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E6%9D%B1%E5%8C%BA%20%E3%82%B7%E3%83%AB%E3%83%90%E3%83%BC%E3%83%94%E3%82%A2%E7%9F%B3%E5%B1%B1%20%E6%9D%B1%E5%8C%BA%E7%9F%B3%E5%B1%B1%E5%9B%A3%E5%9C%B010-13",
    "updateInfo": "",
    "region": "下越",
    "municipality": "新潟市東区",
    "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
  },
  {
    "id": "2021",
    "ward": "新潟市東区",
    "wardShort": "東区",
    "name": "東中野山小学校",
    "address": "東区猿ケ馬場9",
    "area": "岡山、猿ケ馬場2丁目、新岡山2丁目、児池、中島2丁目の一部、東中島3～4丁目、東中野山6～7丁目",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E6%9D%B1%E5%8C%BA%20%E6%9D%B1%E4%B8%AD%E9%87%8E%E5%B1%B1%E5%B0%8F%E5%AD%A6%E6%A0%A1%20%E6%9D%B1%E5%8C%BA%E7%8C%BF%E3%82%B1%E9%A6%AC%E5%A0%B49",
    "updateInfo": "",
    "region": "下越",
    "municipality": "新潟市東区",
    "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
  },
  {
    "id": "3001",
    "ward": "新潟市中央区",
    "wardShort": "中央区",
    "name": "鏡淵小学校",
    "address": "中央区白山浦1‐207‐3",
    "area": "医学町通1～2番町、一番堀通町の一部、学校裏町、学校町通1～2番町、川岸町1～3丁目、白山浦1～2丁目、白山浦新町通",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E4%B8%AD%E5%A4%AE%E5%8C%BA%20%E9%8F%A1%E6%B7%B5%E5%B0%8F%E5%AD%A6%E6%A0%A1%20%E4%B8%AD%E5%A4%AE%E5%8C%BA%E7%99%BD%E5%B1%B1%E6%B5%A61%E2%80%90207%E2%80%903",
    "updateInfo": "",
    "region": "下越",
    "municipality": "新潟市中央区",
    "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
  },
  {
    "id": "3002",
    "ward": "新潟市中央区",
    "wardShort": "中央区",
    "name": "関屋小学校",
    "address": "中央区関屋下川原町2‐664",
    "area": "学校町通3番町、水道町1丁目の一部、関新1丁目の一部、関屋の一部、関屋下川原町1～2丁目、関屋新町通1丁目、関屋田町1～3丁目、関屋本村町1丁目の一部、関屋松波町1～3丁目",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E4%B8%AD%E5%A4%AE%E5%8C%BA%20%E9%96%A2%E5%B1%8B%E5%B0%8F%E5%AD%A6%E6%A0%A1%20%E4%B8%AD%E5%A4%AE%E5%8C%BA%E9%96%A2%E5%B1%8B%E4%B8%8B%E5%B7%9D%E5%8E%9F%E7%94%BA2%E2%80%90664",
    "updateInfo": "",
    "region": "下越",
    "municipality": "新潟市中央区",
    "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
  },
  {
    "id": "3003",
    "ward": "新潟市中央区",
    "wardShort": "中央区",
    "name": "関屋地区公民館",
    "address": "中央区関屋昭和町3‐148‐1",
    "area": "関新1丁目の一部、関新2～3丁目、関屋の一部、関屋御船蔵町、関屋金鉢山町、関屋昭和町2～3丁目、関屋新町通2丁目、関屋田町4丁目、関屋本村町1丁目の一部、関屋本村町2丁目",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E4%B8%AD%E5%A4%AE%E5%8C%BA%20%E9%96%A2%E5%B1%8B%E5%9C%B0%E5%8C%BA%E5%85%AC%E6%B0%91%E9%A4%A8%20%E4%B8%AD%E5%A4%AE%E5%8C%BA%E9%96%A2%E5%B1%8B%E6%98%AD%E5%92%8C%E7%94%BA3%E2%80%90148%E2%80%901",
    "updateInfo": "",
    "region": "下越",
    "municipality": "新潟市中央区",
    "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
  },
  {
    "id": "3004",
    "ward": "新潟市中央区",
    "wardShort": "中央区",
    "name": "浜浦小学校",
    "address": "中央区浜浦町1‐1",
    "area": "汐見台、信濃町、関屋の一部、関屋金衛町1～2丁目、関屋昭和町1丁目、関屋浜松町、浜浦町1～2丁目、文京町",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E4%B8%AD%E5%A4%AE%E5%8C%BA%20%E6%B5%9C%E6%B5%A6%E5%B0%8F%E5%AD%A6%E6%A0%A1%20%E4%B8%AD%E5%A4%AE%E5%8C%BA%E6%B5%9C%E6%B5%A6%E7%94%BA1%E2%80%901",
    "updateInfo": "",
    "region": "下越",
    "municipality": "新潟市中央区",
    "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
  },
  {
    "id": "3005",
    "ward": "新潟市中央区",
    "wardShort": "中央区",
    "name": "有明台小学校",
    "address": "中央区有明台4‐1",
    "area": "有明大橋町、有明台、関南町、関屋大川前1～2丁目、関屋恵町、堀割町、弥生町",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E4%B8%AD%E5%A4%AE%E5%8C%BA%20%E6%9C%89%E6%98%8E%E5%8F%B0%E5%B0%8F%E5%AD%A6%E6%A0%A1%20%E4%B8%AD%E5%A4%AE%E5%8C%BA%E6%9C%89%E6%98%8E%E5%8F%B04%E2%80%901",
    "updateInfo": "",
    "region": "下越",
    "municipality": "新潟市中央区",
    "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
  },
  {
    "id": "3006",
    "ward": "新潟市中央区",
    "wardShort": "中央区",
    "name": "白山小学校",
    "address": "中央区川端町1‐1",
    "area": "一番堀通町の一部、上大川前通1～5番町、川端町1～5丁目、西堀通1～3番町、西堀前通1～5番町、東堀通1～5番町、東堀前通1～5番町、古町通1～5番町、本町通1～5番町、横一番町",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E4%B8%AD%E5%A4%AE%E5%8C%BA%20%E7%99%BD%E5%B1%B1%E5%B0%8F%E5%AD%A6%E6%A0%A1%20%E4%B8%AD%E5%A4%AE%E5%8C%BA%E5%B7%9D%E7%AB%AF%E7%94%BA1%E2%80%901",
    "updateInfo": "",
    "region": "下越",
    "municipality": "新潟市中央区",
    "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
  },
  {
    "id": "3007",
    "ward": "新潟市中央区",
    "wardShort": "中央区",
    "name": "寄居中学校",
    "address": "中央区営所通2‐592‐12",
    "area": "旭町通1～2番町、営所通1～2番町、下旭町、水道町1丁目の一部、水道町2丁目、寺裏通1～2番町、西中町、西船見町の一部、西堀通4～5番町、西堀前通6番町、東中通1～2番町、古町通6番町、南横堀町、寄居町",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E4%B8%AD%E5%A4%AE%E5%8C%BA%20%E5%AF%84%E5%B1%85%E4%B8%AD%E5%AD%A6%E6%A0%A1%20%E4%B8%AD%E5%A4%AE%E5%8C%BA%E5%96%B6%E6%89%80%E9%80%9A2%E2%80%90592%E2%80%9012",
    "updateInfo": "",
    "region": "下越",
    "municipality": "新潟市中央区",
    "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
  },
  {
    "id": "3008",
    "ward": "新潟市中央区",
    "wardShort": "中央区",
    "name": "新潟小学校",
    "address": "中央区東大畑通1‐679",
    "area": "北大畑町、北浜通1～2番町、田中町の一部、中大畑町、西大畑町、西堀通6～8番町、西堀前通7～9番町、東堀通8～9番町、東大畑通1～2番町、二葉町1～2丁目、古町通7～9番町、南大畑町、南浜通1～2番町",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E4%B8%AD%E5%A4%AE%E5%8C%BA%20%E6%96%B0%E6%BD%9F%E5%B0%8F%E5%AD%A6%E6%A0%A1%20%E4%B8%AD%E5%A4%AE%E5%8C%BA%E6%9D%B1%E5%A4%A7%E7%95%91%E9%80%9A1%E2%80%90679",
    "updateInfo": "",
    "region": "下越",
    "municipality": "新潟市中央区",
    "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
  },
  {
    "id": "3009",
    "ward": "新潟市中央区",
    "wardShort": "中央区",
    "name": "クロスパルにいがた",
    "address": "中央区礎町通3‐2086",
    "area": "相生町、礎町通1～6ノ町、礎町通上1ノ町、上大川前通6～11番町、川端町6丁目、北多門町、北毘沙門町、下大川前通1～7ノ町、新島町通1～5ノ町、住吉町、月町、豊照町、並木町、西厩島町、花町、東厩島町、東堀通6～7番町、東堀前通6～9番町、東湊町通1～3ノ町、船場町1丁目、本町通6～11番町、本間町1～2丁目、秣川岸通1～2丁目、見方町、湊町通1～2ノ町、南多門町、南毘沙門町、雪町、芳町",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E4%B8%AD%E5%A4%AE%E5%8C%BA%20%E3%82%AF%E3%83%AD%E3%82%B9%E3%83%91%E3%83%AB%E3%81%AB%E3%81%84%E3%81%8C%E3%81%9F%20%E4%B8%AD%E5%A4%AE%E5%8C%BA%E7%A4%8E%E7%94%BA%E9%80%9A3%E2%80%902086",
    "updateInfo": "",
    "region": "下越",
    "municipality": "新潟市中央区",
    "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
  },
  {
    "id": "3010",
    "ward": "新潟市中央区",
    "wardShort": "中央区",
    "name": "二葉コミュニティハウス",
    "address": "中央区古町通13‐5148‐2",
    "area": "曙町、上大川前通12番町、田中町の一部、西船見町の一部、西堀通9～11番町、西堀前通10～11番町、東堀通10～13番町、東堀前通10～11番町、二葉町3丁目、古町通10～13番町、本町通12～13番町、夕栄町、横六番町、横七番町通1丁目、四ツ屋町1丁目",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E4%B8%AD%E5%A4%AE%E5%8C%BA%20%E4%BA%8C%E8%91%89%E3%82%B3%E3%83%9F%E3%83%A5%E3%83%8B%E3%83%86%E3%82%A3%E3%83%8F%E3%82%A6%E3%82%B9%20%E4%B8%AD%E5%A4%AE%E5%8C%BA%E5%8F%A4%E7%94%BA%E9%80%9A13%E2%80%905148%E2%80%902",
    "updateInfo": "",
    "region": "下越",
    "municipality": "新潟市中央区",
    "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
  },
  {
    "id": "3011",
    "ward": "新潟市中央区",
    "wardShort": "中央区",
    "name": "新潟柳都中学校",
    "address": "中央区栄町3‐4213",
    "area": "祝町、浮洲町、烏帽子町、翁町1～2丁目、寄附町、窪田町1～4丁目、窪田町6丁目の一部、寿町1～2丁目、栄町1～3丁目、菅根町、寺山町、西受地町、西船見町の一部、東受地町、雲雀町、本町通14番町、元祝町、横七番町通2～3丁目、四ツ屋町2～3丁目、寄合町",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E4%B8%AD%E5%A4%AE%E5%8C%BA%20%E6%96%B0%E6%BD%9F%E6%9F%B3%E9%83%BD%E4%B8%AD%E5%AD%A6%E6%A0%A1%20%E4%B8%AD%E5%A4%AE%E5%8C%BA%E6%A0%84%E7%94%BA3%E2%80%904213",
    "updateInfo": "",
    "region": "下越",
    "municipality": "新潟市中央区",
    "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
  },
  {
    "id": "3012",
    "ward": "新潟市中央区",
    "wardShort": "中央区",
    "name": "北部総合コミュニティセンター",
    "address": "中央区稲荷町3511-1",
    "area": "赤坂町1～3丁目、稲荷町、入船町1～6丁目、魁町、田町1～3丁目、附船町1～3丁目、西湊町通1～4ノ町、艀川岸町、早川町1～3丁目、東入船町、東湊町通4ノ町、船場町2丁目、船見町1～2丁目、本間町3丁目、松岡町、緑町、湊町通3～4ノ町、元下島町、柳島町1～4丁目、横七番町通4～5丁目、海辺町1～2番町、窪田町5丁目、窪田町6丁目の一部、窪田町7丁目、忠蔵町、室町1～2丁目、山田町1～2丁目",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E4%B8%AD%E5%A4%AE%E5%8C%BA%20%E5%8C%97%E9%83%A8%E7%B7%8F%E5%90%88%E3%82%B3%E3%83%9F%E3%83%A5%E3%83%8B%E3%83%86%E3%82%A3%E3%82%BB%E3%83%B3%E3%82%BF%E3%83%BC%20%E4%B8%AD%E5%A4%AE%E5%8C%BA%E7%A8%B2%E8%8D%B7%E7%94%BA3511-1",
    "updateInfo": "",
    "region": "下越",
    "municipality": "新潟市中央区",
    "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
  },
  {
    "id": "3013",
    "ward": "新潟市中央区",
    "wardShort": "中央区",
    "name": "南万代小学校",
    "address": "中央区幸西4‐1‐1",
    "area": "春日町、幸町、幸西1～4丁目、花園1丁目の一部、東大通1丁目の一部、東大通2丁目の一部、弁天1～3丁目、水島町、南万代町、八千代1～2丁目",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E4%B8%AD%E5%A4%AE%E5%8C%BA%20%E5%8D%97%E4%B8%87%E4%BB%A3%E5%B0%8F%E5%AD%A6%E6%A0%A1%20%E4%B8%AD%E5%A4%AE%E5%8C%BA%E5%B9%B8%E8%A5%BF4%E2%80%901%E2%80%901",
    "updateInfo": "",
    "region": "下越",
    "municipality": "新潟市中央区",
    "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
  },
  {
    "id": "3014",
    "ward": "新潟市中央区",
    "wardShort": "中央区",
    "name": "宮浦中学校",
    "address": "中央区万代5‐6‐1",
    "area": "三和町、沼垂西2～3丁目、万代1～5丁目、万代島",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E4%B8%AD%E5%A4%AE%E5%8C%BA%20%E5%AE%AE%E6%B5%A6%E4%B8%AD%E5%AD%A6%E6%A0%A1%20%E4%B8%AD%E5%A4%AE%E5%8C%BA%E4%B8%87%E4%BB%A35%E2%80%906%E2%80%901",
    "updateInfo": "",
    "region": "下越",
    "municipality": "新潟市中央区",
    "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
  },
  {
    "id": "3015",
    "ward": "新潟市中央区",
    "wardShort": "中央区",
    "name": "万代長嶺小学校",
    "address": "中央区東万代町4‐1",
    "area": "蒲原町、天明町、沼垂西1丁目、万代6丁目、東大通2丁目の一部、東万代町",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E4%B8%AD%E5%A4%AE%E5%8C%BA%20%E4%B8%87%E4%BB%A3%E9%95%B7%E5%B6%BA%E5%B0%8F%E5%AD%A6%E6%A0%A1%20%E4%B8%AD%E5%A4%AE%E5%8C%BA%E6%9D%B1%E4%B8%87%E4%BB%A3%E7%94%BA4%E2%80%901",
    "updateInfo": "",
    "region": "下越",
    "municipality": "新潟市中央区",
    "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
  },
  {
    "id": "3016",
    "ward": "新潟市中央区",
    "wardShort": "中央区",
    "name": "長嶺保育園",
    "address": "中央区明石2‐1‐51",
    "area": "明石1～2丁目、長嶺町、花園1丁目の一部、花園2丁目、東大通1丁目の一部",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E4%B8%AD%E5%A4%AE%E5%8C%BA%20%E9%95%B7%E5%B6%BA%E4%BF%9D%E8%82%B2%E5%9C%92%20%E4%B8%AD%E5%A4%AE%E5%8C%BA%E6%98%8E%E7%9F%B32%E2%80%901%E2%80%9051",
    "updateInfo": "",
    "region": "下越",
    "municipality": "新潟市中央区",
    "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
  },
  {
    "id": "3017",
    "ward": "新潟市中央区",
    "wardShort": "中央区",
    "name": "沼垂保育園",
    "address": "中央区沼垂東4‐8‐36",
    "area": "沼垂東3～6丁目、日の出3丁目の一部、竜が島1～2丁目",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E4%B8%AD%E5%A4%AE%E5%8C%BA%20%E6%B2%BC%E5%9E%82%E4%BF%9D%E8%82%B2%E5%9C%92%20%E4%B8%AD%E5%A4%AE%E5%8C%BA%E6%B2%BC%E5%9E%82%E6%9D%B14%E2%80%908%E2%80%9036",
    "updateInfo": "",
    "region": "下越",
    "municipality": "新潟市中央区",
    "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
  },
  {
    "id": "3018",
    "ward": "新潟市中央区",
    "wardShort": "中央区",
    "name": "沼垂小学校",
    "address": "中央区鏡が岡5‐5",
    "area": "鏡が岡、紫竹1丁目、西馬越、沼垂東1～2丁目、日の出1～2丁目、日の出3丁目の一部、本馬越1～2丁目",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E4%B8%AD%E5%A4%AE%E5%8C%BA%20%E6%B2%BC%E5%9E%82%E5%B0%8F%E5%AD%A6%E6%A0%A1%20%E4%B8%AD%E5%A4%AE%E5%8C%BA%E9%8F%A1%E3%81%8C%E5%B2%A15%E2%80%905",
    "updateInfo": "",
    "region": "下越",
    "municipality": "新潟市中央区",
    "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
  },
  {
    "id": "3019",
    "ward": "新潟市中央区",
    "wardShort": "中央区",
    "name": "笹口小学校",
    "address": "中央区笹口2‐47",
    "area": "笹口、笹口1～3丁目、南笹口1～2丁目、米山1丁目",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E4%B8%AD%E5%A4%AE%E5%8C%BA%20%E7%AC%B9%E5%8F%A3%E5%B0%8F%E5%AD%A6%E6%A0%A1%20%E4%B8%AD%E5%A4%AE%E5%8C%BA%E7%AC%B9%E5%8F%A32%E2%80%9047",
    "updateInfo": "",
    "region": "下越",
    "municipality": "新潟市中央区",
    "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
  },
  {
    "id": "3020",
    "ward": "新潟市中央区",
    "wardShort": "中央区",
    "name": "恵光学園第一幼稚園",
    "address": "中央区天神尾1-4-1",
    "area": "天神1～2丁目、天神尾1～2丁目、花園1丁目の一部、米山、米山2丁目",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E4%B8%AD%E5%A4%AE%E5%8C%BA%20%E6%81%B5%E5%85%89%E5%AD%A6%E5%9C%92%E7%AC%AC%E4%B8%80%E5%B9%BC%E7%A8%9A%E5%9C%92%20%E4%B8%AD%E5%A4%AE%E5%8C%BA%E5%A4%A9%E7%A5%9E%E5%B0%BE1-4-1",
    "updateInfo": "",
    "region": "下越",
    "municipality": "新潟市中央区",
    "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
  },
  {
    "id": "3021",
    "ward": "新潟市中央区",
    "wardShort": "中央区",
    "name": "県立新潟テクノスクール",
    "address": "中央区鐙西1‐11‐2",
    "area": "鐙1～3丁目、鐙西1丁目、鐙西2丁目の一部、紫竹山1丁目の一部、紫竹山2丁目、紫竹山3丁目の一部、紫竹山4～5丁目、米山3～4丁目",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E4%B8%AD%E5%A4%AE%E5%8C%BA%20%E7%9C%8C%E7%AB%8B%E6%96%B0%E6%BD%9F%E3%83%86%E3%82%AF%E3%83%8E%E3%82%B9%E3%82%AF%E3%83%BC%E3%83%AB%20%E4%B8%AD%E5%A4%AE%E5%8C%BA%E9%90%99%E8%A5%BF1%E2%80%9011%E2%80%902",
    "updateInfo": "",
    "region": "下越",
    "municipality": "新潟市中央区",
    "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
  },
  {
    "id": "3022",
    "ward": "新潟市中央区",
    "wardShort": "中央区",
    "name": "紫竹山小学校",
    "address": "中央区紫竹山1‐12‐1",
    "area": "鐙西2丁目の一部、神道寺、神道寺1～3丁目、神道寺南1～2丁目、紫竹山1丁目の一部、紫竹山6～7丁目、堀之内南2丁目の一部、女池東1丁目、米山5～6丁目、和合町1丁目",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E4%B8%AD%E5%A4%AE%E5%8C%BA%20%E7%B4%AB%E7%AB%B9%E5%B1%B1%E5%B0%8F%E5%AD%A6%E6%A0%A1%20%E4%B8%AD%E5%A4%AE%E5%8C%BA%E7%B4%AB%E7%AB%B9%E5%B1%B11%E2%80%9012%E2%80%901",
    "updateInfo": "",
    "region": "下越",
    "municipality": "新潟市中央区",
    "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
  },
  {
    "id": "3023",
    "ward": "新潟市中央区",
    "wardShort": "中央区",
    "name": "桜が丘小学校",
    "address": "中央区姥ケ山6‐1‐21",
    "area": "姥ケ山の一部、姥ケ山3～6丁目、京王1～3丁目、高志1～2丁目、山二ツの一部、山二ツ1～5丁目",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E4%B8%AD%E5%A4%AE%E5%8C%BA%20%E6%A1%9C%E3%81%8C%E4%B8%98%E5%B0%8F%E5%AD%A6%E6%A0%A1%20%E4%B8%AD%E5%A4%AE%E5%8C%BA%E5%A7%A5%E3%82%B1%E5%B1%B16%E2%80%901%E2%80%9021",
    "updateInfo": "",
    "region": "下越",
    "municipality": "新潟市中央区",
    "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
  },
  {
    "id": "3024",
    "ward": "新潟市中央区",
    "wardShort": "中央区",
    "name": "山潟小学校",
    "address": "中央区弁天橋通3‐3‐1",
    "area": "姥ケ山の一部、姥ケ山1～2丁目、清五郎、長潟、長潟1～3丁目、弁天橋通1～3丁目、南長潟、美の里、鐘木",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E4%B8%AD%E5%A4%AE%E5%8C%BA%20%E5%B1%B1%E6%BD%9F%E5%B0%8F%E5%AD%A6%E6%A0%A1%20%E4%B8%AD%E5%A4%AE%E5%8C%BA%E5%BC%81%E5%A4%A9%E6%A9%8B%E9%80%9A3%E2%80%903%E2%80%901",
    "updateInfo": "",
    "region": "下越",
    "municipality": "新潟市中央区",
    "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
  },
  {
    "id": "3025",
    "ward": "新潟市中央区",
    "wardShort": "中央区",
    "name": "愛泉こども園",
    "address": "中央区上所3‐14‐1",
    "area": "上所1～3丁目、上所中1～3丁目、下所島1～2丁目",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E4%B8%AD%E5%A4%AE%E5%8C%BA%20%E6%84%9B%E6%B3%89%E3%81%93%E3%81%A9%E3%82%82%E5%9C%92%20%E4%B8%AD%E5%A4%AE%E5%8C%BA%E4%B8%8A%E6%89%803%E2%80%9014%E2%80%901",
    "updateInfo": "",
    "region": "下越",
    "municipality": "新潟市中央区",
    "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
  },
  {
    "id": "3026",
    "ward": "新潟市中央区",
    "wardShort": "中央区",
    "name": "上所小学校",
    "address": "中央区近江3‐2‐1",
    "area": "近江1～3丁目、上近江1丁目の一部、下所島、新和1丁目の一部、新和2丁目、東幸町、堀之内、堀之内南1丁目、堀之内南2丁目の一部、堀之内南3丁目",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E4%B8%AD%E5%A4%AE%E5%8C%BA%20%E4%B8%8A%E6%89%80%E5%B0%8F%E5%AD%A6%E6%A0%A1%20%E4%B8%AD%E5%A4%AE%E5%8C%BA%E8%BF%91%E6%B1%9F3%E2%80%902%E2%80%901",
    "updateInfo": "",
    "region": "下越",
    "municipality": "新潟市中央区",
    "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
  },
  {
    "id": "3027",
    "ward": "新潟市中央区",
    "wardShort": "中央区",
    "name": "上山小学校",
    "address": "中央区女池上山1‐1‐28",
    "area": "愛宕1丁目、上近江1丁目の一部、上近江3～4丁目、上所上1～3丁目、新光町の一部、東出来島、南出来島1丁目、女池上山1～2、5丁目、女池北1丁目、女池神明2～3丁目、女池西1～2丁目",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E4%B8%AD%E5%A4%AE%E5%8C%BA%20%E4%B8%8A%E5%B1%B1%E5%B0%8F%E5%AD%A6%E6%A0%A1%20%E4%B8%AD%E5%A4%AE%E5%8C%BA%E5%A5%B3%E6%B1%A0%E4%B8%8A%E5%B1%B11%E2%80%901%E2%80%9028",
    "updateInfo": "",
    "region": "下越",
    "municipality": "新潟市中央区",
    "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
  },
  {
    "id": "3028",
    "ward": "新潟市中央区",
    "wardShort": "中央区",
    "name": "女池小学校",
    "address": "中央区女池6‐4‐1",
    "area": "小張木1～3丁目、桜木町、鳥屋野の一部、女池1、2、5～8丁目、女池神明1丁目、女池南1～3丁目、和合町2丁目",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E4%B8%AD%E5%A4%AE%E5%8C%BA%20%E5%A5%B3%E6%B1%A0%E5%B0%8F%E5%AD%A6%E6%A0%A1%20%E4%B8%AD%E5%A4%AE%E5%8C%BA%E5%A5%B3%E6%B1%A06%E2%80%904%E2%80%901",
    "updateInfo": "",
    "region": "下越",
    "municipality": "新潟市中央区",
    "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
  },
  {
    "id": "3029",
    "ward": "新潟市中央区",
    "wardShort": "中央区",
    "name": "鳥屋野小学校",
    "address": "中央区美咲町2‐4‐7",
    "area": "愛宕2丁目、上沼、大島、親松、湖南、太右エ門新田の一部、高美町、鳥屋野の一部、鳥屋野2～4丁目、鳥屋野南1～3丁目、美咲町2丁目",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E4%B8%AD%E5%A4%AE%E5%8C%BA%20%E9%B3%A5%E5%B1%8B%E9%87%8E%E5%B0%8F%E5%AD%A6%E6%A0%A1%20%E4%B8%AD%E5%A4%AE%E5%8C%BA%E7%BE%8E%E5%92%B2%E7%94%BA2%E2%80%904%E2%80%907",
    "updateInfo": "",
    "region": "下越",
    "municipality": "新潟市中央区",
    "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
  },
  {
    "id": "3030",
    "ward": "新潟市中央区",
    "wardShort": "中央区",
    "name": "鳥屋野中学校",
    "address": "中央区女池4‐31‐1",
    "area": "上近江2丁目、新和1丁目の一部、新和3～4丁目、女池3～4丁目、和合町3丁目",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E4%B8%AD%E5%A4%AE%E5%8C%BA%20%E9%B3%A5%E5%B1%8B%E9%87%8E%E4%B8%AD%E5%AD%A6%E6%A0%A1%20%E4%B8%AD%E5%A4%AE%E5%8C%BA%E5%A5%B3%E6%B1%A04%E2%80%9031%E2%80%901",
    "updateInfo": "",
    "region": "下越",
    "municipality": "新潟市中央区",
    "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
  },
  {
    "id": "3031",
    "ward": "新潟市中央区",
    "wardShort": "中央区",
    "name": "上山コミュニティハウス",
    "address": "中央区網川原2‐1‐15",
    "area": "愛宕3丁目、網川原1～2丁目、新光町の一部、出来島1～2丁目、鳥屋野1丁目、美咲町1丁目、南出来島2丁目、女池上山3～4丁目",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E4%B8%AD%E5%A4%AE%E5%8C%BA%20%E4%B8%8A%E5%B1%B1%E3%82%B3%E3%83%9F%E3%83%A5%E3%83%8B%E3%83%86%E3%82%A3%E3%83%8F%E3%82%A6%E3%82%B9%20%E4%B8%AD%E5%A4%AE%E5%8C%BA%E7%B6%B2%E5%B7%9D%E5%8E%9F2%E2%80%901%E2%80%9015",
    "updateInfo": "",
    "region": "下越",
    "municipality": "新潟市中央区",
    "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
  },
  {
    "id": "4001",
    "ward": "新潟市江南区",
    "wardShort": "江南区",
    "name": "亀田第一保育園",
    "address": "江南区亀田新明町2‐6‐1",
    "area": "亀田新明町1～3丁目、亀田本町2丁目の一部、亀田本町3丁目の一部、亀田本町4丁目、東本町4丁目の一部、東本町5丁目、船戸山4丁目の一部",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E6%B1%9F%E5%8D%97%E5%8C%BA%20%E4%BA%80%E7%94%B0%E7%AC%AC%E4%B8%80%E4%BF%9D%E8%82%B2%E5%9C%92%20%E6%B1%9F%E5%8D%97%E5%8C%BA%E4%BA%80%E7%94%B0%E6%96%B0%E6%98%8E%E7%94%BA2%E2%80%906%E2%80%901",
    "updateInfo": "",
    "region": "下越",
    "municipality": "新潟市江南区",
    "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
  },
  {
    "id": "4002",
    "ward": "新潟市江南区",
    "wardShort": "江南区",
    "name": "亀田第二保育園",
    "address": "江南区諏訪1‐6‐10",
    "area": "稲葉1～3丁目、亀田向陽1～4丁目、亀田水道町1丁目、亀田水道町2丁目の一部、諏訪1～3丁目、東本町1丁目の一部、東本町3丁目の一部、東本町4丁目の一部",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E6%B1%9F%E5%8D%97%E5%8C%BA%20%E4%BA%80%E7%94%B0%E7%AC%AC%E4%BA%8C%E4%BF%9D%E8%82%B2%E5%9C%92%20%E6%B1%9F%E5%8D%97%E5%8C%BA%E8%AB%8F%E8%A8%AA1%E2%80%906%E2%80%9010",
    "updateInfo": "",
    "region": "下越",
    "municipality": "新潟市江南区",
    "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
  },
  {
    "id": "4003",
    "ward": "新潟市江南区",
    "wardShort": "江南区",
    "name": "亀田市民会館",
    "address": "江南区船戸山5‐7‐2",
    "area": "荻曽根の一部、梅見台1～3丁目、荻曽根、荻曽根1～4丁目、荻曽根5丁目の一部、亀田緑町4丁目の一部、亀田本町2丁目の一部、亀田本町3丁目の一部、城所2丁目の一部、茅野山1～3丁目、手代山1～2丁目、日水1丁目の一部、日水2、3丁目、船戸山1丁目、船戸山2丁目の一部、船戸山3丁目、船戸山4丁目の一部、船戸山5丁目、元町2丁目の一部、元町3～5丁目",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E6%B1%9F%E5%8D%97%E5%8C%BA%20%E4%BA%80%E7%94%B0%E5%B8%82%E6%B0%91%E4%BC%9A%E9%A4%A8%20%E6%B1%9F%E5%8D%97%E5%8C%BA%E8%88%B9%E6%88%B8%E5%B1%B15%E2%80%907%E2%80%902",
    "updateInfo": "",
    "region": "下越",
    "municipality": "新潟市江南区",
    "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
  },
  {
    "id": "4004",
    "ward": "新潟市江南区",
    "wardShort": "江南区",
    "name": "亀田第三保育園",
    "address": "江南区亀田東町3‐5‐15",
    "area": "曙町1丁目の一部、亀田東町1～4丁目、亀田水道町2丁目の一部、亀田水道町3丁目の一部、亀田水道町4丁目の一部、所島1～2丁目、袋津1～4丁目、袋津5丁目の一部、袋津6丁目の一部",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E6%B1%9F%E5%8D%97%E5%8C%BA%20%E4%BA%80%E7%94%B0%E7%AC%AC%E4%B8%89%E4%BF%9D%E8%82%B2%E5%9C%92%20%E6%B1%9F%E5%8D%97%E5%8C%BA%E4%BA%80%E7%94%B0%E6%9D%B1%E7%94%BA3%E2%80%905%E2%80%9015",
    "updateInfo": "",
    "region": "下越",
    "municipality": "新潟市江南区",
    "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
  },
  {
    "id": "4005",
    "ward": "新潟市江南区",
    "wardShort": "江南区",
    "name": "亀田中学校",
    "address": "江南区城山1‐3‐5",
    "area": "城所、亀田新明町4、5丁目、城所1丁目、城所2丁目の一部、城山1～4丁目、日水1丁目の一部、元町1丁目、元町2丁目の一部",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E6%B1%9F%E5%8D%97%E5%8C%BA%20%E4%BA%80%E7%94%B0%E4%B8%AD%E5%AD%A6%E6%A0%A1%20%E6%B1%9F%E5%8D%97%E5%8C%BA%E5%9F%8E%E5%B1%B11%E2%80%903%E2%80%905",
    "updateInfo": "",
    "region": "下越",
    "municipality": "新潟市江南区",
    "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
  },
  {
    "id": "4006",
    "ward": "新潟市江南区",
    "wardShort": "江南区",
    "name": "早通小学校",
    "address": "江南区早通5-7-2",
    "area": "下早通1、2、3丁目、長潟1丁目、亀田早通1～6丁目、東早通2丁目、丸潟1丁目、下早通柳田1～2丁目",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E6%B1%9F%E5%8D%97%E5%8C%BA%20%E6%97%A9%E9%80%9A%E5%B0%8F%E5%AD%A6%E6%A0%A1%20%E6%B1%9F%E5%8D%97%E5%8C%BA%E6%97%A9%E9%80%9A5-7-2",
    "updateInfo": "",
    "region": "下越",
    "municipality": "新潟市江南区",
    "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
  },
  {
    "id": "4007",
    "ward": "新潟市江南区",
    "wardShort": "江南区",
    "name": "亀田第四保育園",
    "address": "江南区西町4‐6‐24",
    "area": "旭1～4丁目、亀田大月1丁目、亀田本町1丁目、亀田本町2丁目の一部、西町1～6丁目、東船場1～5丁目、東本町1丁目の一部、東本町2丁目、東本町3丁目の一部、船戸山2丁目の一部",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E6%B1%9F%E5%8D%97%E5%8C%BA%20%E4%BA%80%E7%94%B0%E7%AC%AC%E5%9B%9B%E4%BF%9D%E8%82%B2%E5%9C%92%20%E6%B1%9F%E5%8D%97%E5%8C%BA%E8%A5%BF%E7%94%BA4%E2%80%906%E2%80%9024",
    "updateInfo": "",
    "region": "下越",
    "municipality": "新潟市江南区",
    "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
  },
  {
    "id": "4008",
    "ward": "新潟市江南区",
    "wardShort": "江南区",
    "name": "亀田東小学校",
    "address": "江南区亀田水道町3-2-45",
    "area": "砂崩、袋津の一部、亀田水道町3丁目の一部、亀田水道町4丁目の一部、亀田水道町5丁目、三條岡1、2丁目、砂岡1丁目、砂岡2丁目の一部、砂岡3丁目の一部、砂岡4丁目、砂山1、2丁目、袋津6丁目の一部",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E6%B1%9F%E5%8D%97%E5%8C%BA%20%E4%BA%80%E7%94%B0%E6%9D%B1%E5%B0%8F%E5%AD%A6%E6%A0%A1%20%E6%B1%9F%E5%8D%97%E5%8C%BA%E4%BA%80%E7%94%B0%E6%B0%B4%E9%81%93%E7%94%BA3-2-45",
    "updateInfo": "投票所を亀田東児童館から亀田東小学校へ変更",
    "region": "下越",
    "municipality": "新潟市江南区",
    "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
  },
  {
    "id": "4009",
    "ward": "新潟市江南区",
    "wardShort": "江南区",
    "name": "亀田第五保育園",
    "address": "江南区亀田中島2‐4‐14",
    "area": "亀田大月2、3丁目、亀田中島1～4丁目、山二ツの一部、亀田、亀田ノ内高山",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E6%B1%9F%E5%8D%97%E5%8C%BA%20%E4%BA%80%E7%94%B0%E7%AC%AC%E4%BA%94%E4%BF%9D%E8%82%B2%E5%9C%92%20%E6%B1%9F%E5%8D%97%E5%8C%BA%E4%BA%80%E7%94%B0%E4%B8%AD%E5%B3%B62%E2%80%904%E2%80%9014",
    "updateInfo": "",
    "region": "下越",
    "municipality": "新潟市江南区",
    "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
  },
  {
    "id": "4010",
    "ward": "新潟市江南区",
    "wardShort": "江南区",
    "name": "江南区役所",
    "address": "江南区泉町3‐4‐5",
    "area": "泉町1～5丁目、鵜ノ子1～4丁目、荻曽根の一部、荻曽根5丁目の一部、亀田緑町1～3丁目、亀田緑町4丁目の一部、亀田四ツ興野1～5丁目、五月町1～3丁目、早苗1～2丁目、船戸山",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E6%B1%9F%E5%8D%97%E5%8C%BA%20%E6%B1%9F%E5%8D%97%E5%8C%BA%E5%BD%B9%E6%89%80%20%E6%B1%9F%E5%8D%97%E5%8C%BA%E6%B3%89%E7%94%BA3%E2%80%904%E2%80%905",
    "updateInfo": "",
    "region": "下越",
    "municipality": "新潟市江南区",
    "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
  },
  {
    "id": "4011",
    "ward": "新潟市江南区",
    "wardShort": "江南区",
    "name": "あけぼの印刷団地事業協同組合事務所",
    "address": "江南区曙町3-15-13",
    "area": "袋津の一部、曙町1丁目の一部、曙町2～5丁目、砂岡2丁目の一部、砂岡3丁目の一部、砂岡5丁目、袋津5丁目の一部、袋津6丁目の一部",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E6%B1%9F%E5%8D%97%E5%8C%BA%20%E3%81%82%E3%81%91%E3%81%BC%E3%81%AE%E5%8D%B0%E5%88%B7%E5%9B%A3%E5%9C%B0%E4%BA%8B%E6%A5%AD%E5%8D%94%E5%90%8C%E7%B5%84%E5%90%88%E4%BA%8B%E5%8B%99%E6%89%80%20%E6%B1%9F%E5%8D%97%E5%8C%BA%E6%9B%99%E7%94%BA3-15-13",
    "updateInfo": "",
    "region": "下越",
    "municipality": "新潟市江南区",
    "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
  },
  {
    "id": "4012",
    "ward": "新潟市江南区",
    "wardShort": "江南区",
    "name": "江南区役所横越出張所",
    "address": "江南区横越中央1‐1‐1",
    "area": "いぶき野1～2丁目、横越、横越上町1～5丁目、横越中央1～8丁目、横越東町1～2丁目",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E6%B1%9F%E5%8D%97%E5%8C%BA%20%E6%B1%9F%E5%8D%97%E5%8C%BA%E5%BD%B9%E6%89%80%E6%A8%AA%E8%B6%8A%E5%87%BA%E5%BC%B5%E6%89%80%20%E6%B1%9F%E5%8D%97%E5%8C%BA%E6%A8%AA%E8%B6%8A%E4%B8%AD%E5%A4%AE1%E2%80%901%E2%80%901",
    "updateInfo": "",
    "region": "下越",
    "municipality": "新潟市江南区",
    "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
  },
  {
    "id": "4013",
    "ward": "新潟市江南区",
    "wardShort": "江南区",
    "name": "横越農村環境改善センター",
    "address": "江南区沢海3‐1‐30",
    "area": "沢海1～3丁目",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E6%B1%9F%E5%8D%97%E5%8C%BA%20%E6%A8%AA%E8%B6%8A%E8%BE%B2%E6%9D%91%E7%92%B0%E5%A2%83%E6%94%B9%E5%96%84%E3%82%BB%E3%83%B3%E3%82%BF%E3%83%BC%20%E6%B1%9F%E5%8D%97%E5%8C%BA%E6%B2%A2%E6%B5%B73%E2%80%901%E2%80%9030",
    "updateInfo": "",
    "region": "下越",
    "municipality": "新潟市江南区",
    "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
  },
  {
    "id": "4014",
    "ward": "新潟市江南区",
    "wardShort": "江南区",
    "name": "木津地域研修センター",
    "address": "江南区木津2‐3‐28",
    "area": "木津1～5丁目、木津工業団地",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E6%B1%9F%E5%8D%97%E5%8C%BA%20%E6%9C%A8%E6%B4%A5%E5%9C%B0%E5%9F%9F%E7%A0%94%E4%BF%AE%E3%82%BB%E3%83%B3%E3%82%BF%E3%83%BC%20%E6%B1%9F%E5%8D%97%E5%8C%BA%E6%9C%A8%E6%B4%A52%E2%80%903%E2%80%9028",
    "updateInfo": "",
    "region": "下越",
    "municipality": "新潟市江南区",
    "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
  },
  {
    "id": "4015",
    "ward": "新潟市江南区",
    "wardShort": "江南区",
    "name": "二本木地区コミュニティセンター",
    "address": "江南区二本木3‐2‐50",
    "area": "二本木1～5丁目",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E6%B1%9F%E5%8D%97%E5%8C%BA%20%E4%BA%8C%E6%9C%AC%E6%9C%A8%E5%9C%B0%E5%8C%BA%E3%82%B3%E3%83%9F%E3%83%A5%E3%83%8B%E3%83%86%E3%82%A3%E3%82%BB%E3%83%B3%E3%82%BF%E3%83%BC%20%E6%B1%9F%E5%8D%97%E5%8C%BA%E4%BA%8C%E6%9C%AC%E6%9C%A83%E2%80%902%E2%80%9050",
    "updateInfo": "",
    "region": "下越",
    "municipality": "新潟市江南区",
    "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
  },
  {
    "id": "4016",
    "ward": "新潟市江南区",
    "wardShort": "江南区",
    "name": "小杉地区コミュニティセンター",
    "address": "江南区小杉3‐11‐26",
    "area": "小杉1～5丁目、平山",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E6%B1%9F%E5%8D%97%E5%8C%BA%20%E5%B0%8F%E6%9D%89%E5%9C%B0%E5%8C%BA%E3%82%B3%E3%83%9F%E3%83%A5%E3%83%8B%E3%83%86%E3%82%A3%E3%82%BB%E3%83%B3%E3%82%BF%E3%83%BC%20%E6%B1%9F%E5%8D%97%E5%8C%BA%E5%B0%8F%E6%9D%893%E2%80%9011%E2%80%9026",
    "updateInfo": "",
    "region": "下越",
    "municipality": "新潟市江南区",
    "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
  },
  {
    "id": "4017",
    "ward": "新潟市江南区",
    "wardShort": "江南区",
    "name": "藤山会館",
    "address": "江南区藤山1‐6‐28",
    "area": "うぐいす1～2丁目、駒込1～2丁目、藤山1～2丁目",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E6%B1%9F%E5%8D%97%E5%8C%BA%20%E8%97%A4%E5%B1%B1%E4%BC%9A%E9%A4%A8%20%E6%B1%9F%E5%8D%97%E5%8C%BA%E8%97%A4%E5%B1%B11%E2%80%906%E2%80%9028",
    "updateInfo": "",
    "region": "下越",
    "municipality": "新潟市江南区",
    "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
  },
  {
    "id": "4018",
    "ward": "新潟市江南区",
    "wardShort": "江南区",
    "name": "焼山集落開発センター",
    "address": "江南区阿賀野2‐1‐20",
    "area": "阿賀野1～2丁目",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E6%B1%9F%E5%8D%97%E5%8C%BA%20%E7%84%BC%E5%B1%B1%E9%9B%86%E8%90%BD%E9%96%8B%E7%99%BA%E3%82%BB%E3%83%B3%E3%82%BF%E3%83%BC%20%E6%B1%9F%E5%8D%97%E5%8C%BA%E9%98%BF%E8%B3%80%E9%87%8E2%E2%80%901%E2%80%9020",
    "updateInfo": "",
    "region": "下越",
    "municipality": "新潟市江南区",
    "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
  },
  {
    "id": "4019",
    "ward": "新潟市江南区",
    "wardShort": "江南区",
    "name": "サンウィング横越",
    "address": "江南区横越川根町2‐20‐1",
    "area": "茜ケ丘、横越川根町1～5丁目",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E6%B1%9F%E5%8D%97%E5%8C%BA%20%E3%82%B5%E3%83%B3%E3%82%A6%E3%82%A3%E3%83%B3%E3%82%B0%E6%A8%AA%E8%B6%8A%20%E6%B1%9F%E5%8D%97%E5%8C%BA%E6%A8%AA%E8%B6%8A%E5%B7%9D%E6%A0%B9%E7%94%BA2%E2%80%9020%E2%80%901",
    "updateInfo": "",
    "region": "下越",
    "municipality": "新潟市江南区",
    "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
  },
  {
    "id": "4020",
    "ward": "新潟市江南区",
    "wardShort": "江南区",
    "name": "大江山農村環境改善センター",
    "address": "江南区細山401",
    "area": "蔵岡、笹山、直り山、西山、細山、松山",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E6%B1%9F%E5%8D%97%E5%8C%BA%20%E5%A4%A7%E6%B1%9F%E5%B1%B1%E8%BE%B2%E6%9D%91%E7%92%B0%E5%A2%83%E6%94%B9%E5%96%84%E3%82%BB%E3%83%B3%E3%82%BF%E3%83%BC%20%E6%B1%9F%E5%8D%97%E5%8C%BA%E7%B4%B0%E5%B1%B1401",
    "updateInfo": "",
    "region": "下越",
    "municipality": "新潟市江南区",
    "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
  },
  {
    "id": "4021",
    "ward": "新潟市江南区",
    "wardShort": "江南区",
    "name": "丸山小学校",
    "address": "江南区丸山300",
    "area": "北山、丸山、丸山ノ内善之丞組、茗荷谷",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E6%B1%9F%E5%8D%97%E5%8C%BA%20%E4%B8%B8%E5%B1%B1%E5%B0%8F%E5%AD%A6%E6%A0%A1%20%E6%B1%9F%E5%8D%97%E5%8C%BA%E4%B8%B8%E5%B1%B1300",
    "updateInfo": "",
    "region": "下越",
    "municipality": "新潟市江南区",
    "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
  },
  {
    "id": "4022",
    "ward": "新潟市江南区",
    "wardShort": "江南区",
    "name": "大淵小学校",
    "address": "江南区大渕1760‐1",
    "area": "江口、大渕、三百地、西野",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E6%B1%9F%E5%8D%97%E5%8C%BA%20%E5%A4%A7%E6%B7%B5%E5%B0%8F%E5%AD%A6%E6%A0%A1%20%E6%B1%9F%E5%8D%97%E5%8C%BA%E5%A4%A7%E6%B8%951760%E2%80%901",
    "updateInfo": "",
    "region": "下越",
    "municipality": "新潟市江南区",
    "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
  },
  {
    "id": "4023",
    "ward": "新潟市江南区",
    "wardShort": "江南区",
    "name": "曽野木連絡所",
    "address": "江南区天野2‐7‐2",
    "area": "天野、天野1～3丁目、嘉木、楚川、曽川、俵柳の一部",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E6%B1%9F%E5%8D%97%E5%8C%BA%20%E6%9B%BD%E9%87%8E%E6%9C%A8%E9%80%A3%E7%B5%A1%E6%89%80%20%E6%B1%9F%E5%8D%97%E5%8C%BA%E5%A4%A9%E9%87%8E2%E2%80%907%E2%80%902",
    "updateInfo": "",
    "region": "下越",
    "municipality": "新潟市江南区",
    "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
  },
  {
    "id": "4024",
    "ward": "新潟市江南区",
    "wardShort": "江南区",
    "name": "鍋潟新田自治会館",
    "address": "江南区鍋潟新田275",
    "area": "鍋潟新田、丸潟新田",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E6%B1%9F%E5%8D%97%E5%8C%BA%20%E9%8D%8B%E6%BD%9F%E6%96%B0%E7%94%B0%E8%87%AA%E6%B2%BB%E4%BC%9A%E9%A4%A8%20%E6%B1%9F%E5%8D%97%E5%8C%BA%E9%8D%8B%E6%BD%9F%E6%96%B0%E7%94%B0275",
    "updateInfo": "",
    "region": "下越",
    "municipality": "新潟市江南区",
    "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
  },
  {
    "id": "4025",
    "ward": "新潟市江南区",
    "wardShort": "江南区",
    "name": "両川連絡所",
    "address": "江南区酒屋町821‐8",
    "area": "嘉瀬、上和田、酒屋町、花ノ牧、両川1丁目",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E6%B1%9F%E5%8D%97%E5%8C%BA%20%E4%B8%A1%E5%B7%9D%E9%80%A3%E7%B5%A1%E6%89%80%20%E6%B1%9F%E5%8D%97%E5%8C%BA%E9%85%92%E5%B1%8B%E7%94%BA821%E2%80%908",
    "updateInfo": "",
    "region": "下越",
    "municipality": "新潟市江南区",
    "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
  },
  {
    "id": "4026",
    "ward": "新潟市江南区",
    "wardShort": "江南区",
    "name": "割野集落開発センター",
    "address": "江南区割野684",
    "area": "両川2丁目、割野",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E6%B1%9F%E5%8D%97%E5%8C%BA%20%E5%89%B2%E9%87%8E%E9%9B%86%E8%90%BD%E9%96%8B%E7%99%BA%E3%82%BB%E3%83%B3%E3%82%BF%E3%83%BC%20%E6%B1%9F%E5%8D%97%E5%8C%BA%E5%89%B2%E9%87%8E684",
    "updateInfo": "",
    "region": "下越",
    "municipality": "新潟市江南区",
    "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
  },
  {
    "id": "4027",
    "ward": "新潟市江南区",
    "wardShort": "江南区",
    "name": "和田公民館",
    "address": "江南区和田1482",
    "area": "平賀、舞潟、和田",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E6%B1%9F%E5%8D%97%E5%8C%BA%20%E5%92%8C%E7%94%B0%E5%85%AC%E6%B0%91%E9%A4%A8%20%E6%B1%9F%E5%8D%97%E5%8C%BA%E5%92%8C%E7%94%B01482",
    "updateInfo": "",
    "region": "下越",
    "municipality": "新潟市江南区",
    "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
  },
  {
    "id": "4028",
    "ward": "新潟市江南区",
    "wardShort": "江南区",
    "name": "曽野木コミュニティセンター",
    "address": "江南区曽野木1-21-8",
    "area": "祖父興野、久蔵興野、鐘木、曽野木1～2丁目、太右エ門新田の一部、俵柳の一部",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E6%B1%9F%E5%8D%97%E5%8C%BA%20%E6%9B%BD%E9%87%8E%E6%9C%A8%E3%82%B3%E3%83%9F%E3%83%A5%E3%83%8B%E3%83%86%E3%82%A3%E3%82%BB%E3%83%B3%E3%82%BF%E3%83%BC%20%E6%B1%9F%E5%8D%97%E5%8C%BA%E6%9B%BD%E9%87%8E%E6%9C%A81-21-8",
    "updateInfo": "",
    "region": "下越",
    "municipality": "新潟市江南区",
    "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
  },
  {
    "id": "5001",
    "ward": "新潟市秋葉区",
    "wardShort": "秋葉区",
    "name": "新津第一小学校",
    "address": "秋葉区新津本町4‐4‐3",
    "area": "善道町1、2丁目、田家1丁目の一部、中沢町、新津本町1丁目の一部、新津本町2～4丁目",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E7%A7%8B%E8%91%89%E5%8C%BA%20%E6%96%B0%E6%B4%A5%E7%AC%AC%E4%B8%80%E5%B0%8F%E5%AD%A6%E6%A0%A1%20%E7%A7%8B%E8%91%89%E5%8C%BA%E6%96%B0%E6%B4%A5%E6%9C%AC%E7%94%BA4%E2%80%904%E2%80%903",
    "updateInfo": "",
    "region": "下越",
    "municipality": "新潟市秋葉区",
    "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
  },
  {
    "id": "5002",
    "ward": "新潟市秋葉区",
    "wardShort": "秋葉区",
    "name": "北上公会堂",
    "address": "秋葉区北上3‐13‐11",
    "area": "北上1丁目、北上2丁目の一部、北上3丁目、下興野町",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E7%A7%8B%E8%91%89%E5%8C%BA%20%E5%8C%97%E4%B8%8A%E5%85%AC%E4%BC%9A%E5%A0%82%20%E7%A7%8B%E8%91%89%E5%8C%BA%E5%8C%97%E4%B8%8A3%E2%80%9013%E2%80%9011",
    "updateInfo": "",
    "region": "下越",
    "municipality": "新潟市秋葉区",
    "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
  },
  {
    "id": "5003",
    "ward": "新潟市秋葉区",
    "wardShort": "秋葉区",
    "name": "新津第三小学校",
    "address": "秋葉区山谷町3‐4785",
    "area": "大鹿の一部、古田、古田1～2丁目、古田3丁目の一部、古田4丁目、美幸町1～3丁目、美善1、2丁目、山谷町1～3丁目、新津本町1丁目の一部",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E7%A7%8B%E8%91%89%E5%8C%BA%20%E6%96%B0%E6%B4%A5%E7%AC%AC%E4%B8%89%E5%B0%8F%E5%AD%A6%E6%A0%A1%20%E7%A7%8B%E8%91%89%E5%8C%BA%E5%B1%B1%E8%B0%B7%E7%94%BA3%E2%80%904785",
    "updateInfo": "",
    "region": "下越",
    "municipality": "新潟市秋葉区",
    "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
  },
  {
    "id": "5004",
    "ward": "新潟市秋葉区",
    "wardShort": "秋葉区",
    "name": "秋葉区役所",
    "address": "秋葉区程島2009",
    "area": "朝日の一部、新栄町、田家2丁目の一部、中村、新津、新津緑町、西島、西古津の一部、東島の一部、程島、南町",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E7%A7%8B%E8%91%89%E5%8C%BA%20%E7%A7%8B%E8%91%89%E5%8C%BA%E5%BD%B9%E6%89%80%20%E7%A7%8B%E8%91%89%E5%8C%BA%E7%A8%8B%E5%B3%B62009",
    "updateInfo": "",
    "region": "下越",
    "municipality": "新潟市秋葉区",
    "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
  },
  {
    "id": "5005",
    "ward": "新潟市秋葉区",
    "wardShort": "秋葉区",
    "name": "田家町内会館（氏子会館）",
    "address": "秋葉区田家3‐1",
    "area": "田家、田家1丁目の一部、田家2丁目の一部、田家3丁目、吉岡町",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E7%A7%8B%E8%91%89%E5%8C%BA%20%E7%94%B0%E5%AE%B6%E7%94%BA%E5%86%85%E4%BC%9A%E9%A4%A8%EF%BC%88%E6%B0%8F%E5%AD%90%E4%BC%9A%E9%A4%A8%EF%BC%89%20%E7%A7%8B%E8%91%89%E5%8C%BA%E7%94%B0%E5%AE%B63%E2%80%901",
    "updateInfo": "",
    "region": "下越",
    "municipality": "新潟市秋葉区",
    "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
  },
  {
    "id": "5006",
    "ward": "新潟市秋葉区",
    "wardShort": "秋葉区",
    "name": "草水町内会館",
    "address": "秋葉区草水町3‐5‐1",
    "area": "草水町1～3丁目、小口の一部、滝谷町の一部",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E7%A7%8B%E8%91%89%E5%8C%BA%20%E8%8D%89%E6%B0%B4%E7%94%BA%E5%86%85%E4%BC%9A%E9%A4%A8%20%E7%A7%8B%E8%91%89%E5%8C%BA%E8%8D%89%E6%B0%B4%E7%94%BA3%E2%80%905%E2%80%901",
    "updateInfo": "",
    "region": "下越",
    "municipality": "新潟市秋葉区",
    "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
  },
  {
    "id": "5007",
    "ward": "新潟市秋葉区",
    "wardShort": "秋葉区",
    "name": "柄目木自治会館",
    "address": "秋葉区柄目木309‐4",
    "area": "飯柳、柄目木、滝谷町の一部、秋葉2丁目の一部",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E7%A7%8B%E8%91%89%E5%8C%BA%20%E6%9F%84%E7%9B%AE%E6%9C%A8%E8%87%AA%E6%B2%BB%E4%BC%9A%E9%A4%A8%20%E7%A7%8B%E8%91%89%E5%8C%BA%E6%9F%84%E7%9B%AE%E6%9C%A8309%E2%80%904",
    "updateInfo": "",
    "region": "下越",
    "municipality": "新潟市秋葉区",
    "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
  },
  {
    "id": "5008",
    "ward": "新潟市秋葉区",
    "wardShort": "秋葉区",
    "name": "大安寺集落開発センター",
    "address": "秋葉区大安寺318‐2",
    "area": "大安寺、中新田、東金沢、六郷の一部、金屋の一部",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E7%A7%8B%E8%91%89%E5%8C%BA%20%E5%A4%A7%E5%AE%89%E5%AF%BA%E9%9B%86%E8%90%BD%E9%96%8B%E7%99%BA%E3%82%BB%E3%83%B3%E3%82%BF%E3%83%BC%20%E7%A7%8B%E8%91%89%E5%8C%BA%E5%A4%A7%E5%AE%89%E5%AF%BA318%E2%80%902",
    "updateInfo": "",
    "region": "下越",
    "municipality": "新潟市秋葉区",
    "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
  },
  {
    "id": "5009",
    "ward": "新潟市秋葉区",
    "wardShort": "秋葉区",
    "name": "旧満日小学校",
    "address": "秋葉区七日町17‐乙",
    "area": "大蔵、七日町、満願寺の一部",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E7%A7%8B%E8%91%89%E5%8C%BA%20%E6%97%A7%E6%BA%80%E6%97%A5%E5%B0%8F%E5%AD%A6%E6%A0%A1%20%E7%A7%8B%E8%91%89%E5%8C%BA%E4%B8%83%E6%97%A5%E7%94%BA17%E2%80%90%E4%B9%99",
    "updateInfo": "",
    "region": "下越",
    "municipality": "新潟市秋葉区",
    "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
  },
  {
    "id": "5010",
    "ward": "新潟市秋葉区",
    "wardShort": "秋葉区",
    "name": "結幼稚園",
    "address": "秋葉区結160‐3",
    "area": "荻島1丁目の一部、荻島2丁目の一部、田島の一部、福島、結、みそら野1～3丁目",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E7%A7%8B%E8%91%89%E5%8C%BA%20%E7%B5%90%E5%B9%BC%E7%A8%9A%E5%9C%92%20%E7%A7%8B%E8%91%89%E5%8C%BA%E7%B5%90160%E2%80%903",
    "updateInfo": "",
    "region": "下越",
    "municipality": "新潟市秋葉区",
    "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
  },
  {
    "id": "5011",
    "ward": "新潟市秋葉区",
    "wardShort": "秋葉区",
    "name": "おぎかわこども園",
    "address": "秋葉区中野3‐20‐7",
    "area": "荻島1丁目の一部、荻島2丁目の一部、荻島3丁目、車場1丁目の一部、車場2丁目の一部、中野1～3丁目、田島の一部",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E7%A7%8B%E8%91%89%E5%8C%BA%20%E3%81%8A%E3%81%8E%E3%81%8B%E3%82%8F%E3%81%93%E3%81%A9%E3%82%82%E5%9C%92%20%E7%A7%8B%E8%91%89%E5%8C%BA%E4%B8%AD%E9%87%8E3%E2%80%9020%E2%80%907",
    "updateInfo": "",
    "region": "下越",
    "municipality": "新潟市秋葉区",
    "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
  },
  {
    "id": "5012",
    "ward": "新潟市秋葉区",
    "wardShort": "秋葉区",
    "name": "市之瀬集落センター",
    "address": "秋葉区市之瀬452",
    "area": "市之瀬、覚路津の一部、車場1丁目の一部",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E7%A7%8B%E8%91%89%E5%8C%BA%20%E5%B8%82%E4%B9%8B%E7%80%AC%E9%9B%86%E8%90%BD%E3%82%BB%E3%83%B3%E3%82%BF%E3%83%BC%20%E7%A7%8B%E8%91%89%E5%8C%BA%E5%B8%82%E4%B9%8B%E7%80%AC452",
    "updateInfo": "",
    "region": "下越",
    "municipality": "新潟市秋葉区",
    "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
  },
  {
    "id": "5013",
    "ward": "新潟市秋葉区",
    "wardShort": "秋葉区",
    "name": "小合小学校",
    "address": "秋葉区出戸180",
    "area": "浦興野、川根、子成場、出戸、新津四ツ興野、蕨曽根、大秋、梅ノ木、小屋場、小戸下組の一部、覚路津の一部",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E7%A7%8B%E8%91%89%E5%8C%BA%20%E5%B0%8F%E5%90%88%E5%B0%8F%E5%AD%A6%E6%A0%A1%20%E7%A7%8B%E8%91%89%E5%8C%BA%E5%87%BA%E6%88%B8180",
    "updateInfo": "",
    "region": "下越",
    "municipality": "新潟市秋葉区",
    "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
  },
  {
    "id": "5014",
    "ward": "新潟市秋葉区",
    "wardShort": "秋葉区",
    "name": "小合東小学校",
    "address": "秋葉区小戸上組234",
    "area": "大鹿の一部、栗宮、古田3丁目の一部、小戸上組、小戸下組の一部",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E7%A7%8B%E8%91%89%E5%8C%BA%20%E5%B0%8F%E5%90%88%E6%9D%B1%E5%B0%8F%E5%AD%A6%E6%A0%A1%20%E7%A7%8B%E8%91%89%E5%8C%BA%E5%B0%8F%E6%88%B8%E4%B8%8A%E7%B5%84234",
    "updateInfo": "",
    "region": "下越",
    "municipality": "新潟市秋葉区",
    "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
  },
  {
    "id": "5015",
    "ward": "新潟市秋葉区",
    "wardShort": "秋葉区",
    "name": "金津地区コミュニティセンター",
    "address": "秋葉区古津597",
    "area": "朝日の一部、金津の一部、蒲ケ沢、西古津の一部、東島の一部、古津、割町の一部",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E7%A7%8B%E8%91%89%E5%8C%BA%20%E9%87%91%E6%B4%A5%E5%9C%B0%E5%8C%BA%E3%82%B3%E3%83%9F%E3%83%A5%E3%83%8B%E3%83%86%E3%82%A3%E3%82%BB%E3%83%B3%E3%82%BF%E3%83%BC%20%E7%A7%8B%E8%91%89%E5%8C%BA%E5%8F%A4%E6%B4%A5597",
    "updateInfo": "",
    "region": "下越",
    "municipality": "新潟市秋葉区",
    "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
  },
  {
    "id": "5016",
    "ward": "新潟市秋葉区",
    "wardShort": "秋葉区",
    "name": "金津公会堂",
    "address": "秋葉区金津618-2",
    "area": "金津の一部、塩谷、割町の一部",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E7%A7%8B%E8%91%89%E5%8C%BA%20%E9%87%91%E6%B4%A5%E5%85%AC%E4%BC%9A%E5%A0%82%20%E7%A7%8B%E8%91%89%E5%8C%BA%E9%87%91%E6%B4%A5618-2",
    "updateInfo": "",
    "region": "下越",
    "municipality": "新潟市秋葉区",
    "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
  },
  {
    "id": "5017",
    "ward": "新潟市秋葉区",
    "wardShort": "秋葉区",
    "name": "小口公会堂",
    "address": "秋葉区小口1013",
    "area": "小口の一部",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E7%A7%8B%E8%91%89%E5%8C%BA%20%E5%B0%8F%E5%8F%A3%E5%85%AC%E4%BC%9A%E5%A0%82%20%E7%A7%8B%E8%91%89%E5%8C%BA%E5%B0%8F%E5%8F%A31013",
    "updateInfo": "",
    "region": "下越",
    "municipality": "新潟市秋葉区",
    "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
  },
  {
    "id": "5018",
    "ward": "新潟市秋葉区",
    "wardShort": "秋葉区",
    "name": "新関コミュニティセンター",
    "address": "秋葉区下新364‐1",
    "area": "安部新、下新、市新、新郷屋、金屋の一部、羽下、北、大関、岡田、小口の一部、六郷の一部",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E7%A7%8B%E8%91%89%E5%8C%BA%20%E6%96%B0%E9%96%A2%E3%82%B3%E3%83%9F%E3%83%A5%E3%83%8B%E3%83%86%E3%82%A3%E3%82%BB%E3%83%B3%E3%82%BF%E3%83%BC%20%E7%A7%8B%E8%91%89%E5%8C%BA%E4%B8%8B%E6%96%B0364%E2%80%901",
    "updateInfo": "",
    "region": "下越",
    "municipality": "新潟市秋葉区",
    "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
  },
  {
    "id": "5019",
    "ward": "新潟市秋葉区",
    "wardShort": "秋葉区",
    "name": "秋葉会館",
    "address": "秋葉区秋葉1‐17‐3",
    "area": "秋葉1丁目、秋葉2丁目の一部、秋葉3丁目、滝谷町の一部",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E7%A7%8B%E8%91%89%E5%8C%BA%20%E7%A7%8B%E8%91%89%E4%BC%9A%E9%A4%A8%20%E7%A7%8B%E8%91%89%E5%8C%BA%E7%A7%8B%E8%91%891%E2%80%9017%E2%80%903",
    "updateInfo": "",
    "region": "下越",
    "municipality": "新潟市秋葉区",
    "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
  },
  {
    "id": "5020",
    "ward": "新潟市秋葉区",
    "wardShort": "秋葉区",
    "name": "新津第二小学校",
    "address": "秋葉区新町2‐3‐3",
    "area": "秋葉2丁目の一部、金沢町1～4丁目、新町1～3丁目、滝谷本町、日宝町",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E7%A7%8B%E8%91%89%E5%8C%BA%20%E6%96%B0%E6%B4%A5%E7%AC%AC%E4%BA%8C%E5%B0%8F%E5%AD%A6%E6%A0%A1%20%E7%A7%8B%E8%91%89%E5%8C%BA%E6%96%B0%E7%94%BA2%E2%80%903%E2%80%903",
    "updateInfo": "",
    "region": "下越",
    "municipality": "新潟市秋葉区",
    "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
  },
  {
    "id": "5021",
    "ward": "新潟市秋葉区",
    "wardShort": "秋葉区",
    "name": "新津地域学園",
    "address": "秋葉区新津東町2-5-6",
    "area": "新金沢町、新津東町1～3丁目、西金沢、満願寺の一部",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E7%A7%8B%E8%91%89%E5%8C%BA%20%E6%96%B0%E6%B4%A5%E5%9C%B0%E5%9F%9F%E5%AD%A6%E5%9C%92%20%E7%A7%8B%E8%91%89%E5%8C%BA%E6%96%B0%E6%B4%A5%E6%9D%B1%E7%94%BA2-5-6",
    "updateInfo": "",
    "region": "下越",
    "municipality": "新潟市秋葉区",
    "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
  },
  {
    "id": "5022",
    "ward": "新潟市秋葉区",
    "wardShort": "秋葉区",
    "name": "荻川小学校",
    "address": "秋葉区車場922‐1",
    "area": "あおば通1～2丁目、荻野町、こがね町、車場、車場1丁目の一部、車場2丁目の一部、車場3～5丁目、中野4～5丁目",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E7%A7%8B%E8%91%89%E5%8C%BA%20%E8%8D%BB%E5%B7%9D%E5%B0%8F%E5%AD%A6%E6%A0%A1%20%E7%A7%8B%E8%91%89%E5%8C%BA%E8%BB%8A%E5%A0%B4922%E2%80%901",
    "updateInfo": "",
    "region": "下越",
    "municipality": "新潟市秋葉区",
    "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
  },
  {
    "id": "5023",
    "ward": "新潟市秋葉区",
    "wardShort": "秋葉区",
    "name": "川口地域交流会館",
    "address": "秋葉区川口392‐5",
    "area": "川口、北潟、北上、北上2丁目の一部、北上新田、古田ノ内大野開、さつき野1～4丁目、満願寺の一部",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E7%A7%8B%E8%91%89%E5%8C%BA%20%E5%B7%9D%E5%8F%A3%E5%9C%B0%E5%9F%9F%E4%BA%A4%E6%B5%81%E4%BC%9A%E9%A4%A8%20%E7%A7%8B%E8%91%89%E5%8C%BA%E5%B7%9D%E5%8F%A3392%E2%80%905",
    "updateInfo": "",
    "region": "下越",
    "municipality": "新潟市秋葉区",
    "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
  },
  {
    "id": "5024",
    "ward": "新潟市秋葉区",
    "wardShort": "秋葉区",
    "name": "小須戸まちづくりセンター",
    "address": "秋葉区小須戸120‐1",
    "area": "小須戸、新保、横川浜の一部、竜玄",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E7%A7%8B%E8%91%89%E5%8C%BA%20%E5%B0%8F%E9%A0%88%E6%88%B8%E3%81%BE%E3%81%A1%E3%81%A5%E3%81%8F%E3%82%8A%E3%82%BB%E3%83%B3%E3%82%BF%E3%83%BC%20%E7%A7%8B%E8%91%89%E5%8C%BA%E5%B0%8F%E9%A0%88%E6%88%B8120%E2%80%901",
    "updateInfo": "",
    "region": "下越",
    "municipality": "新潟市秋葉区",
    "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
  },
  {
    "id": "5025",
    "ward": "新潟市秋葉区",
    "wardShort": "秋葉区",
    "name": "小須戸きずなの家（「ワークセンターほほえみ」と同じ建物です）",
    "address": "秋葉区小向1744",
    "area": "小向、水田、横川浜の一部",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E7%A7%8B%E8%91%89%E5%8C%BA%20%E5%B0%8F%E9%A0%88%E6%88%B8%E3%81%8D%E3%81%9A%E3%81%AA%E3%81%AE%E5%AE%B6%EF%BC%88%E3%80%8C%E3%83%AF%E3%83%BC%E3%82%AF%E3%82%BB%E3%83%B3%E3%82%BF%E3%83%BC%E3%81%BB%E3%81%BB%E3%81%88%E3%81%BF%E3%80%8D%E3%81%A8%E5%90%8C%E3%81%98%E5%BB%BA%E7%89%A9%E3%81%A7%E3%81%99%EF%BC%89%20%E7%A7%8B%E8%91%89%E5%8C%BA%E5%B0%8F%E5%90%911744",
    "updateInfo": "",
    "region": "下越",
    "municipality": "新潟市秋葉区",
    "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
  },
  {
    "id": "5026",
    "ward": "新潟市秋葉区",
    "wardShort": "秋葉区",
    "name": "小須戸地区ふれあい会館",
    "address": "秋葉区矢代田35",
    "area": "天ヶ沢、鎌倉、舟戸1～2丁目、松ヶ丘1丁目、矢代田",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E7%A7%8B%E8%91%89%E5%8C%BA%20%E5%B0%8F%E9%A0%88%E6%88%B8%E5%9C%B0%E5%8C%BA%E3%81%B5%E3%82%8C%E3%81%82%E3%81%84%E4%BC%9A%E9%A4%A8%20%E7%A7%8B%E8%91%89%E5%8C%BA%E7%9F%A2%E4%BB%A3%E7%94%B035",
    "updateInfo": "",
    "region": "下越",
    "municipality": "新潟市秋葉区",
    "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
  },
  {
    "id": "6001",
    "ward": "新潟市南区",
    "wardShort": "南区",
    "name": "白根健康福祉センター",
    "address": "南区白根1364-12",
    "area": "上下諏訪木の一部、白根の一部、白根魚町、能登の一部、能登1～2丁目、十五間、小坂、鯵潟の一部、鯵潟1丁目、七軒の一部、七軒町、白根四ツ興野、神屋の一部、保坂、白根ノ内七軒の一部、助次右エ門組の一部",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E5%8D%97%E5%8C%BA%20%E7%99%BD%E6%A0%B9%E5%81%A5%E5%BA%B7%E7%A6%8F%E7%A5%89%E3%82%BB%E3%83%B3%E3%82%BF%E3%83%BC%20%E5%8D%97%E5%8C%BA%E7%99%BD%E6%A0%B91364-12",
    "updateInfo": "",
    "region": "下越",
    "municipality": "新潟市南区",
    "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
  },
  {
    "id": "6002",
    "ward": "新潟市南区",
    "wardShort": "南区",
    "name": "諏訪木保育園",
    "address": "南区白根水道町10‐35",
    "area": "上下諏訪木の一部、白根の一部、白根水道町、白根ノ内七軒の一部、白根日の出町、田中、戸頭の一部、能登の一部、平成町、助次右エ門組の一部",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E5%8D%97%E5%8C%BA%20%E8%AB%8F%E8%A8%AA%E6%9C%A8%E4%BF%9D%E8%82%B2%E5%9C%92%20%E5%8D%97%E5%8C%BA%E7%99%BD%E6%A0%B9%E6%B0%B4%E9%81%93%E7%94%BA10%E2%80%9035",
    "updateInfo": "",
    "region": "下越",
    "municipality": "新潟市南区",
    "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
  },
  {
    "id": "6003",
    "ward": "新潟市南区",
    "wardShort": "南区",
    "name": "茨曽根小学校",
    "address": "南区茨曽根1432‐1",
    "area": "茨曽根の一部、清水、東萱場",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E5%8D%97%E5%8C%BA%20%E8%8C%A8%E6%9B%BD%E6%A0%B9%E5%B0%8F%E5%AD%A6%E6%A0%A1%20%E5%8D%97%E5%8C%BA%E8%8C%A8%E6%9B%BD%E6%A0%B91432%E2%80%901",
    "updateInfo": "",
    "region": "下越",
    "municipality": "新潟市南区",
    "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
  },
  {
    "id": "6004",
    "ward": "新潟市南区",
    "wardShort": "南区",
    "name": "新飯田地域生活センター",
    "address": "南区新飯田1261‐1",
    "area": "上新田、新飯田",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E5%8D%97%E5%8C%BA%20%E6%96%B0%E9%A3%AF%E7%94%B0%E5%9C%B0%E5%9F%9F%E7%94%9F%E6%B4%BB%E3%82%BB%E3%83%B3%E3%82%BF%E3%83%BC%20%E5%8D%97%E5%8C%BA%E6%96%B0%E9%A3%AF%E7%94%B01261%E2%80%901",
    "updateInfo": "",
    "region": "下越",
    "municipality": "新潟市南区",
    "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
  },
  {
    "id": "6005",
    "ward": "新潟市南区",
    "wardShort": "南区",
    "name": "庄瀬小学校",
    "address": "南区菱潟新田193",
    "area": "茨曽根の一部、兎新田、牛崎、庄瀬、菱潟、飯島、沖新保、菱潟新田、古川新田、真木、上道潟、下道潟の一部、鋳物師興野、蜘手興野、十二道島、次郎右エ門興野、上八枚の一部",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E5%8D%97%E5%8C%BA%20%E5%BA%84%E7%80%AC%E5%B0%8F%E5%AD%A6%E6%A0%A1%20%E5%8D%97%E5%8C%BA%E8%8F%B1%E6%BD%9F%E6%96%B0%E7%94%B0193",
    "updateInfo": "",
    "region": "下越",
    "municipality": "新潟市南区",
    "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
  },
  {
    "id": "6006",
    "ward": "新潟市南区",
    "wardShort": "南区",
    "name": "小林保育園",
    "address": "南区下木山613",
    "area": "浦梨、上木山、下木山、櫛笥、上八枚の一部、下道潟の一部、和泉、蔵主、田尾、鍋潟、平潟、平潟新田、万年",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E5%8D%97%E5%8C%BA%20%E5%B0%8F%E6%9E%97%E4%BF%9D%E8%82%B2%E5%9C%92%20%E5%8D%97%E5%8C%BA%E4%B8%8B%E6%9C%A8%E5%B1%B1613",
    "updateInfo": "",
    "region": "下越",
    "municipality": "新潟市南区",
    "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
  },
  {
    "id": "6007",
    "ward": "新潟市南区",
    "wardShort": "南区",
    "name": "南区役所",
    "address": "南区白根1235",
    "area": "上下諏訪木の一部、白根の一部、白根ノ内七軒の一部、助次右エ門組の一部、戸頭の一部、親和町、能登の一部、 鯵潟の一部、小蔵子の一部、七軒の一部、白根東町1丁目、白根古川、杉菜、神屋の一部",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E5%8D%97%E5%8C%BA%20%E5%8D%97%E5%8C%BA%E5%BD%B9%E6%89%80%20%E5%8D%97%E5%8C%BA%E7%99%BD%E6%A0%B91235",
    "updateInfo": "",
    "region": "下越",
    "municipality": "新潟市南区",
    "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
  },
  {
    "id": "6008",
    "ward": "新潟市南区",
    "wardShort": "南区",
    "name": "ワークセンターしらはす",
    "address": "南区戸石45‐2",
    "area": "上浦、上八枚の一部、下八枚、新生町1～3丁目、戸石、中小見",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E5%8D%97%E5%8C%BA%20%E3%83%AF%E3%83%BC%E3%82%AF%E3%82%BB%E3%83%B3%E3%82%BF%E3%83%BC%E3%81%97%E3%82%89%E3%81%AF%E3%81%99%20%E5%8D%97%E5%8C%BA%E6%88%B8%E7%9F%B345%E2%80%902",
    "updateInfo": "",
    "region": "下越",
    "municipality": "新潟市南区",
    "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
  },
  {
    "id": "6009",
    "ward": "新潟市南区",
    "wardShort": "南区",
    "name": "臼井地域生活センター",
    "address": "南区臼井1193‐1",
    "area": "赤渋、朝捲、臼井、小蔵子の一部、中山、西笠巻、堀掛、引越、大郷の一部",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E5%8D%97%E5%8C%BA%20%E8%87%BC%E4%BA%95%E5%9C%B0%E5%9F%9F%E7%94%9F%E6%B4%BB%E3%82%BB%E3%83%B3%E3%82%BF%E3%83%BC%20%E5%8D%97%E5%8C%BA%E8%87%BC%E4%BA%951193%E2%80%901",
    "updateInfo": "",
    "region": "下越",
    "municipality": "新潟市南区",
    "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
  },
  {
    "id": "6010",
    "ward": "新潟市南区",
    "wardShort": "南区",
    "name": "大郷地域生活センター",
    "address": "南区犬帰新田751‐6",
    "area": "犬帰新田、大郷の一部、西酒屋、東笠巻の一部",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E5%8D%97%E5%8C%BA%20%E5%A4%A7%E9%83%B7%E5%9C%B0%E5%9F%9F%E7%94%9F%E6%B4%BB%E3%82%BB%E3%83%B3%E3%82%BF%E3%83%BC%20%E5%8D%97%E5%8C%BA%E7%8A%AC%E5%B8%B0%E6%96%B0%E7%94%B0751%E2%80%906",
    "updateInfo": "",
    "region": "下越",
    "municipality": "新潟市南区",
    "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
  },
  {
    "id": "6011",
    "ward": "新潟市南区",
    "wardShort": "南区",
    "name": "大鷲保育園",
    "address": "南区東笠巻新田270‐2",
    "area": "西笠巻新田、東笠巻の一部、東笠巻新田、鷲ノ木新田の一部",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E5%8D%97%E5%8C%BA%20%E5%A4%A7%E9%B7%B2%E4%BF%9D%E8%82%B2%E5%9C%92%20%E5%8D%97%E5%8C%BA%E6%9D%B1%E7%AC%A0%E5%B7%BB%E6%96%B0%E7%94%B0270%E2%80%902",
    "updateInfo": "",
    "region": "下越",
    "municipality": "新潟市南区",
    "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
  },
  {
    "id": "6012",
    "ward": "新潟市南区",
    "wardShort": "南区",
    "name": "中鷲ノ木ふれあいセンター",
    "address": "南区鷲ノ木新田973",
    "area": "獺ヶ通、東笠巻の一部、鷲ノ木新田の一部",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E5%8D%97%E5%8C%BA%20%E4%B8%AD%E9%B7%B2%E3%83%8E%E6%9C%A8%E3%81%B5%E3%82%8C%E3%81%82%E3%81%84%E3%82%BB%E3%83%B3%E3%82%BF%E3%83%BC%20%E5%8D%97%E5%8C%BA%E9%B7%B2%E3%83%8E%E6%9C%A8%E6%96%B0%E7%94%B0973",
    "updateInfo": "",
    "region": "下越",
    "municipality": "新潟市南区",
    "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
  },
  {
    "id": "6013",
    "ward": "新潟市南区",
    "wardShort": "南区",
    "name": "根岸小学校",
    "address": "南区山崎興野2288",
    "area": "上塩俵の一部、北田中、下塩俵、下山崎、新山崎町1～3丁目、高井興野、高井東1～3丁目、中塩俵、根岸、松橋、山崎興野",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E5%8D%97%E5%8C%BA%20%E6%A0%B9%E5%B2%B8%E5%B0%8F%E5%AD%A6%E6%A0%A1%20%E5%8D%97%E5%8C%BA%E5%B1%B1%E5%B4%8E%E8%88%88%E9%87%8E2288",
    "updateInfo": "",
    "region": "下越",
    "municipality": "新潟市南区",
    "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
  },
  {
    "id": "6014",
    "ward": "新潟市南区",
    "wardShort": "南区",
    "name": "大通保育園",
    "address": "南区鷲ノ木新田5681",
    "area": "大通1～2丁目、大通西、鷲ノ木新田の一部、大通南6丁目",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E5%8D%97%E5%8C%BA%20%E5%A4%A7%E9%80%9A%E4%BF%9D%E8%82%B2%E5%9C%92%20%E5%8D%97%E5%8C%BA%E9%B7%B2%E3%83%8E%E6%9C%A8%E6%96%B0%E7%94%B05681",
    "updateInfo": "",
    "region": "下越",
    "municipality": "新潟市南区",
    "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
  },
  {
    "id": "6015",
    "ward": "新潟市南区",
    "wardShort": "南区",
    "name": "大通地域生活センター",
    "address": "南区大通南4‐105",
    "area": "大通黄金1～7丁目、大通南1～5丁目、上塩俵の一部、鷲ノ木新田の一部",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E5%8D%97%E5%8C%BA%20%E5%A4%A7%E9%80%9A%E5%9C%B0%E5%9F%9F%E7%94%9F%E6%B4%BB%E3%82%BB%E3%83%B3%E3%82%BF%E3%83%BC%20%E5%8D%97%E5%8C%BA%E5%A4%A7%E9%80%9A%E5%8D%974%E2%80%90105",
    "updateInfo": "",
    "region": "下越",
    "municipality": "新潟市南区",
    "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
  },
  {
    "id": "6016",
    "ward": "新潟市南区",
    "wardShort": "南区",
    "name": "味方出張所",
    "address": "南区味方1544",
    "area": "味方",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E5%8D%97%E5%8C%BA%20%E5%91%B3%E6%96%B9%E5%87%BA%E5%BC%B5%E6%89%80%20%E5%8D%97%E5%8C%BA%E5%91%B3%E6%96%B91544",
    "updateInfo": "",
    "region": "下越",
    "municipality": "新潟市南区",
    "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
  },
  {
    "id": "6017",
    "ward": "新潟市南区",
    "wardShort": "南区",
    "name": "西白根公民館",
    "address": "南区西白根1563‐1",
    "area": "西白根",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E5%8D%97%E5%8C%BA%20%E8%A5%BF%E7%99%BD%E6%A0%B9%E5%85%AC%E6%B0%91%E9%A4%A8%20%E5%8D%97%E5%8C%BA%E8%A5%BF%E7%99%BD%E6%A0%B91563%E2%80%901",
    "updateInfo": "",
    "region": "下越",
    "municipality": "新潟市南区",
    "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
  },
  {
    "id": "6018",
    "ward": "新潟市南区",
    "wardShort": "南区",
    "name": "七穂公民館",
    "address": "南区吉江238‐1",
    "area": "居宿、大倉、大倉新田、山王、山王新田、七穂、吉江、吉田新田",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E5%8D%97%E5%8C%BA%20%E4%B8%83%E7%A9%82%E5%85%AC%E6%B0%91%E9%A4%A8%20%E5%8D%97%E5%8C%BA%E5%90%89%E6%B1%9F238%E2%80%901",
    "updateInfo": "",
    "region": "下越",
    "municipality": "新潟市南区",
    "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
  },
  {
    "id": "6019",
    "ward": "新潟市南区",
    "wardShort": "南区",
    "name": "月潟出張所",
    "address": "南区月潟535",
    "area": "大別當、月潟、西萱場",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E5%8D%97%E5%8C%BA%20%E6%9C%88%E6%BD%9F%E5%87%BA%E5%BC%B5%E6%89%80%20%E5%8D%97%E5%8C%BA%E6%9C%88%E6%BD%9F535",
    "updateInfo": "",
    "region": "下越",
    "municipality": "新潟市南区",
    "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
  },
  {
    "id": "6020",
    "ward": "新潟市南区",
    "wardShort": "南区",
    "name": "曲通多目的共同利用施設",
    "address": "南区上曲通24",
    "area": "上曲通、下曲通",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E5%8D%97%E5%8C%BA%20%E6%9B%B2%E9%80%9A%E5%A4%9A%E7%9B%AE%E7%9A%84%E5%85%B1%E5%90%8C%E5%88%A9%E7%94%A8%E6%96%BD%E8%A8%AD%20%E5%8D%97%E5%8C%BA%E4%B8%8A%E6%9B%B2%E9%80%9A24",
    "updateInfo": "",
    "region": "下越",
    "municipality": "新潟市南区",
    "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
  },
  {
    "id": "6021",
    "ward": "新潟市南区",
    "wardShort": "南区",
    "name": "東長嶋集落開発センター",
    "address": "南区東長嶋89‐7",
    "area": "東長嶋、木滑、釣寄新、釣寄",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E5%8D%97%E5%8C%BA%20%E6%9D%B1%E9%95%B7%E5%B6%8B%E9%9B%86%E8%90%BD%E9%96%8B%E7%99%BA%E3%82%BB%E3%83%B3%E3%82%BF%E3%83%BC%20%E5%8D%97%E5%8C%BA%E6%9D%B1%E9%95%B7%E5%B6%8B89%E2%80%907",
    "updateInfo": "",
    "region": "下越",
    "municipality": "新潟市南区",
    "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
  },
  {
    "id": "7001",
    "ward": "新潟市西区",
    "wardShort": "西区",
    "name": "西区役所",
    "address": "西区寺尾東3-14-41",
    "area": "寺尾の一部、寺尾上1～4丁目、寺尾上5丁目の一部、寺尾上6丁目の一部、寺尾東1丁目の一部、寺尾東2～3丁目",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E8%A5%BF%E5%8C%BA%20%E8%A5%BF%E5%8C%BA%E5%BD%B9%E6%89%80%20%E8%A5%BF%E5%8C%BA%E5%AF%BA%E5%B0%BE%E6%9D%B13-14-41",
    "updateInfo": "",
    "region": "下越",
    "municipality": "新潟市西区",
    "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
  },
  {
    "id": "7002",
    "ward": "新潟市西区",
    "wardShort": "西区",
    "name": "新通小学校",
    "address": "西区坂井東6‐18‐1",
    "area": "坂井の一部、坂井3丁目、坂井砂山1～4丁目、坂井東6丁目、新田の一部、新通の一部、寺尾上5丁目の一部、寺尾上6丁目の一部",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E8%A5%BF%E5%8C%BA%20%E6%96%B0%E9%80%9A%E5%B0%8F%E5%AD%A6%E6%A0%A1%20%E8%A5%BF%E5%8C%BA%E5%9D%82%E4%BA%95%E6%9D%B16%E2%80%9018%E2%80%901",
    "updateInfo": "",
    "region": "下越",
    "municipality": "新潟市西区",
    "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
  },
  {
    "id": "7003",
    "ward": "新潟市西区",
    "wardShort": "西区",
    "name": "坂井東小学校",
    "address": "西区坂井東5‐17‐1",
    "area": "亀貝、小新の一部、坂井1丁目の一部、坂井2丁目、坂井東3～5丁目、新通の一部、須賀、流通センター1～6丁目",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E8%A5%BF%E5%8C%BA%20%E5%9D%82%E4%BA%95%E6%9D%B1%E5%B0%8F%E5%AD%A6%E6%A0%A1%20%E8%A5%BF%E5%8C%BA%E5%9D%82%E4%BA%95%E6%9D%B15%E2%80%9017%E2%80%901",
    "updateInfo": "",
    "region": "下越",
    "municipality": "新潟市西区",
    "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
  },
  {
    "id": "7004",
    "ward": "新潟市西区",
    "wardShort": "西区",
    "name": "坂井輪小学校",
    "address": "西区坂井東1‐2‐1",
    "area": "小針6～8丁目、小針南、小針南台の一部、坂井1丁目の一部、坂井東1～2丁目、寺尾の一部、寺尾朝日通、寺尾東1丁目の一部、寺尾前通1～3丁目",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E8%A5%BF%E5%8C%BA%20%E5%9D%82%E4%BA%95%E8%BC%AA%E5%B0%8F%E5%AD%A6%E6%A0%A1%20%E8%A5%BF%E5%8C%BA%E5%9D%82%E4%BA%95%E6%9D%B11%E2%80%902%E2%80%901",
    "updateInfo": "",
    "region": "下越",
    "municipality": "新潟市西区",
    "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
  },
  {
    "id": "7005",
    "ward": "新潟市西区",
    "wardShort": "西区",
    "name": "小新中学校",
    "address": "西区小新西3‐18‐1",
    "area": "小新の一部、小新大通1～2丁目、小新西1～3丁目、小新南1～2丁目",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E8%A5%BF%E5%8C%BA%20%E5%B0%8F%E6%96%B0%E4%B8%AD%E5%AD%A6%E6%A0%A1%20%E8%A5%BF%E5%8C%BA%E5%B0%8F%E6%96%B0%E8%A5%BF3%E2%80%9018%E2%80%901",
    "updateInfo": "",
    "region": "下越",
    "municipality": "新潟市西区",
    "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
  },
  {
    "id": "7006",
    "ward": "新潟市西区",
    "wardShort": "西区",
    "name": "小針小学校",
    "address": "西区小針2‐36‐1",
    "area": "青山水道、小針2丁目、小針4丁目の一部、小針5丁目、小針上山の一部、小針が丘の一部、小針藤山、小針南台の一部、東青山1丁目の一部",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E8%A5%BF%E5%8C%BA%20%E5%B0%8F%E9%87%9D%E5%B0%8F%E5%AD%A6%E6%A0%A1%20%E8%A5%BF%E5%8C%BA%E5%B0%8F%E9%87%9D2%E2%80%9036%E2%80%901",
    "updateInfo": "",
    "region": "下越",
    "municipality": "新潟市西区",
    "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
  },
  {
    "id": "7007",
    "ward": "新潟市西区",
    "wardShort": "西区",
    "name": "小針中学校",
    "address": "西区小針1‐37‐1",
    "area": "小新の一部、小新1～5丁目、小針1、3丁目、小針4丁目の一部、平島1丁目の一部",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E8%A5%BF%E5%8C%BA%20%E5%B0%8F%E9%87%9D%E4%B8%AD%E5%AD%A6%E6%A0%A1%20%E8%A5%BF%E5%8C%BA%E5%B0%8F%E9%87%9D1%E2%80%9037%E2%80%901",
    "updateInfo": "",
    "region": "下越",
    "municipality": "新潟市西区",
    "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
  },
  {
    "id": "7008",
    "ward": "新潟市西区",
    "wardShort": "西区",
    "name": "東青山小学校",
    "address": "西区青山261‐1",
    "area": "青山の一部、青山1～3丁目、青山新町、浦山1丁目、東青山1丁目の一部、東青山2丁目、平島、平島1丁目の一部、平島2～3丁目",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E8%A5%BF%E5%8C%BA%20%E6%9D%B1%E9%9D%92%E5%B1%B1%E5%B0%8F%E5%AD%A6%E6%A0%A1%20%E8%A5%BF%E5%8C%BA%E9%9D%92%E5%B1%B1261%E2%80%901",
    "updateInfo": "",
    "region": "下越",
    "municipality": "新潟市西区",
    "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
  },
  {
    "id": "7009",
    "ward": "新潟市西区",
    "wardShort": "西区",
    "name": "青山コミュニティハウス",
    "address": "西区青山6‐16‐20",
    "area": "青山4丁目の一部、青山5～6丁目、浦山2～4丁目、関屋堀割町",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E8%A5%BF%E5%8C%BA%20%E9%9D%92%E5%B1%B1%E3%82%B3%E3%83%9F%E3%83%A5%E3%83%8B%E3%83%86%E3%82%A3%E3%83%8F%E3%82%A6%E3%82%B9%20%E8%A5%BF%E5%8C%BA%E9%9D%92%E5%B1%B16%E2%80%9016%E2%80%9020",
    "updateInfo": "",
    "region": "下越",
    "municipality": "新潟市西区",
    "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
  },
  {
    "id": "7010",
    "ward": "新潟市西区",
    "wardShort": "西区",
    "name": "青山小学校",
    "address": "西区西有明町4‐1",
    "area": "青山の一部、青山4丁目の一部、青山7～8丁目、有明町、小針上山の一部、西有明町、松美台",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E8%A5%BF%E5%8C%BA%20%E9%9D%92%E5%B1%B1%E5%B0%8F%E5%AD%A6%E6%A0%A1%20%E8%A5%BF%E5%8C%BA%E8%A5%BF%E6%9C%89%E6%98%8E%E7%94%BA4%E2%80%901",
    "updateInfo": "",
    "region": "下越",
    "municipality": "新潟市西区",
    "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
  },
  {
    "id": "7011",
    "ward": "新潟市西区",
    "wardShort": "西区",
    "name": "真砂小学校",
    "address": "西区真砂3‐24‐1",
    "area": "西小針台3丁目、真砂1丁目の一部、真砂2～4丁目、松海が丘1～4丁目",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E8%A5%BF%E5%8C%BA%20%E7%9C%9F%E7%A0%82%E5%B0%8F%E5%AD%A6%E6%A0%A1%20%E8%A5%BF%E5%8C%BA%E7%9C%9F%E7%A0%823%E2%80%9024%E2%80%901",
    "updateInfo": "",
    "region": "下越",
    "municipality": "新潟市西区",
    "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
  },
  {
    "id": "7012",
    "ward": "新潟市西区",
    "wardShort": "西区",
    "name": "坂井輪コミュニティセンター",
    "address": "西区小針西1‐12‐12",
    "area": "小針が丘の一部、小針台、小針西1～2丁目、寺尾台1～2丁目、西小針台1～2丁目、真砂1丁目の一部",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E8%A5%BF%E5%8C%BA%20%E5%9D%82%E4%BA%95%E8%BC%AA%E3%82%B3%E3%83%9F%E3%83%A5%E3%83%8B%E3%83%86%E3%82%A3%E3%82%BB%E3%83%B3%E3%82%BF%E3%83%BC%20%E8%A5%BF%E5%8C%BA%E5%B0%8F%E9%87%9D%E8%A5%BF1%E2%80%9012%E2%80%9012",
    "updateInfo": "",
    "region": "下越",
    "municipality": "新潟市西区",
    "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
  },
  {
    "id": "7013",
    "ward": "新潟市西区",
    "wardShort": "西区",
    "name": "五十嵐中学校",
    "address": "西区上新栄町5‐3‐1",
    "area": "上新栄町1～4丁目、上新栄町5丁目の一部、寺尾北1～2丁目、寺尾台3丁目、寺尾中央公園、寺尾西1丁目、寺尾西5丁目の一部",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E8%A5%BF%E5%8C%BA%20%E4%BA%94%E5%8D%81%E5%B5%90%E4%B8%AD%E5%AD%A6%E6%A0%A1%20%E8%A5%BF%E5%8C%BA%E4%B8%8A%E6%96%B0%E6%A0%84%E7%94%BA5%E2%80%903%E2%80%901",
    "updateInfo": "",
    "region": "下越",
    "municipality": "新潟市西区",
    "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
  },
  {
    "id": "7014",
    "ward": "新潟市西区",
    "wardShort": "西区",
    "name": "五十嵐小学校",
    "address": "西区寺尾西4‐23‐1",
    "area": "五十嵐1の町、五十嵐東1～3丁目、上新栄町5丁目の一部、上新栄町6丁目、大学南1丁目の一部、寺尾西2～4丁目、寺尾西5丁目の一部",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E8%A5%BF%E5%8C%BA%20%E4%BA%94%E5%8D%81%E5%B5%90%E5%B0%8F%E5%AD%A6%E6%A0%A1%20%E8%A5%BF%E5%8C%BA%E5%AF%BA%E5%B0%BE%E8%A5%BF4%E2%80%9023%E2%80%901",
    "updateInfo": "",
    "region": "下越",
    "municipality": "新潟市西区",
    "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
  },
  {
    "id": "7015",
    "ward": "新潟市西区",
    "wardShort": "西区",
    "name": "上五十嵐保育園",
    "address": "西区五十嵐2の町8404‐1",
    "area": "五十嵐2の町の一部",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E8%A5%BF%E5%8C%BA%20%E4%B8%8A%E4%BA%94%E5%8D%81%E5%B5%90%E4%BF%9D%E8%82%B2%E5%9C%92%20%E8%A5%BF%E5%8C%BA%E4%BA%94%E5%8D%81%E5%B5%902%E3%81%AE%E7%94%BA8404%E2%80%901",
    "updateInfo": "",
    "region": "下越",
    "municipality": "新潟市西区",
    "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
  },
  {
    "id": "7016",
    "ward": "新潟市西区",
    "wardShort": "西区",
    "name": "内野小学校",
    "address": "西区内野山手2‐18‐36",
    "area": "五十嵐2の町の一部、内野山手1～2丁目、大学南1丁目の一部、大学南2丁目",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E8%A5%BF%E5%8C%BA%20%E5%86%85%E9%87%8E%E5%B0%8F%E5%AD%A6%E6%A0%A1%20%E8%A5%BF%E5%8C%BA%E5%86%85%E9%87%8E%E5%B1%B1%E6%89%8B2%E2%80%9018%E2%80%9036",
    "updateInfo": "",
    "region": "下越",
    "municipality": "新潟市西区",
    "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
  },
  {
    "id": "7017",
    "ward": "新潟市西区",
    "wardShort": "西区",
    "name": "西出張所（内野まちづくりセンター）",
    "address": "西区内野町413",
    "area": "内野町、槙尾",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E8%A5%BF%E5%8C%BA%20%E8%A5%BF%E5%87%BA%E5%BC%B5%E6%89%80%EF%BC%88%E5%86%85%E9%87%8E%E3%81%BE%E3%81%A1%E3%81%A5%E3%81%8F%E3%82%8A%E3%82%BB%E3%83%B3%E3%82%BF%E3%83%BC%EF%BC%89%20%E8%A5%BF%E5%8C%BA%E5%86%85%E9%87%8E%E7%94%BA413",
    "updateInfo": "",
    "region": "下越",
    "municipality": "新潟市西区",
    "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
  },
  {
    "id": "7018",
    "ward": "新潟市西区",
    "wardShort": "西区",
    "name": "内野中学校",
    "address": "西区内野西1‐10‐1",
    "area": "五十嵐3の町北、五十嵐3の町中、五十嵐3の町西、五十嵐3の町東、五十嵐3の町南、五十嵐下崎山、五十嵐中島、五十嵐中島1～2丁目、五十嵐中島3丁目の一部、内野潟端、内野戸中才、内野西1～3丁目、内野西が丘1～2丁目、内野潟向、内野崎山、内野長潟、内野早角",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E8%A5%BF%E5%8C%BA%20%E5%86%85%E9%87%8E%E4%B8%AD%E5%AD%A6%E6%A0%A1%20%E8%A5%BF%E5%8C%BA%E5%86%85%E9%87%8E%E8%A5%BF1%E2%80%9010%E2%80%901",
    "updateInfo": "",
    "region": "下越",
    "municipality": "新潟市西区",
    "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
  },
  {
    "id": "7019",
    "ward": "新潟市西区",
    "wardShort": "西区",
    "name": "西コミュニティセンター",
    "address": "西区内野上新町11810",
    "area": "五十嵐上崎山、五十嵐中島3丁目の一部、五十嵐中島4～5丁目、五十嵐西、内野上新町、内野関場、内野西が丘3丁目、新中浜1～6丁目、中権寺の一部",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E8%A5%BF%E5%8C%BA%20%E8%A5%BF%E3%82%B3%E3%83%9F%E3%83%A5%E3%83%8B%E3%83%86%E3%82%A3%E3%82%BB%E3%83%B3%E3%82%BF%E3%83%BC%20%E8%A5%BF%E5%8C%BA%E5%86%85%E9%87%8E%E4%B8%8A%E6%96%B0%E7%94%BA11810",
    "updateInfo": "",
    "region": "下越",
    "municipality": "新潟市西区",
    "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
  },
  {
    "id": "7020",
    "ward": "新潟市西区",
    "wardShort": "西区",
    "name": "新通つばさ小学校",
    "address": "西区大野137",
    "area": "大野、坂井の一部、新通の一部、新通西1～2丁目、新通南1～3丁目、大学南1丁目の一部",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E8%A5%BF%E5%8C%BA%20%E6%96%B0%E9%80%9A%E3%81%A4%E3%81%B0%E3%81%95%E5%B0%8F%E5%AD%A6%E6%A0%A1%20%E8%A5%BF%E5%8C%BA%E5%A4%A7%E9%87%8E137",
    "updateInfo": "",
    "region": "下越",
    "municipality": "新潟市西区",
    "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
  },
  {
    "id": "7021",
    "ward": "新潟市西区",
    "wardShort": "西区",
    "name": "木山小学校",
    "address": "西区谷内1886",
    "area": "赤塚の一部、神山、木山、東山、谷内、中権寺の一部、四ツ郷屋",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E8%A5%BF%E5%8C%BA%20%E6%9C%A8%E5%B1%B1%E5%B0%8F%E5%AD%A6%E6%A0%A1%20%E8%A5%BF%E5%8C%BA%E8%B0%B7%E5%86%851886",
    "updateInfo": "",
    "region": "下越",
    "municipality": "新潟市西区",
    "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
  },
  {
    "id": "7022",
    "ward": "新潟市西区",
    "wardShort": "西区",
    "name": "赤塚小学校",
    "address": "西区赤塚4478",
    "area": "赤塚の一部、坂田、山崎",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E8%A5%BF%E5%8C%BA%20%E8%B5%A4%E5%A1%9A%E5%B0%8F%E5%AD%A6%E6%A0%A1%20%E8%A5%BF%E5%8C%BA%E8%B5%A4%E5%A1%9A4478",
    "updateInfo": "",
    "region": "下越",
    "municipality": "新潟市西区",
    "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
  },
  {
    "id": "7023",
    "ward": "新潟市西区",
    "wardShort": "西区",
    "name": "新潟国際情報大学",
    "address": "西区みずき野3‐1‐1",
    "area": "赤塚の一部、藤蔵新田、みずき野1～6丁目",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E8%A5%BF%E5%8C%BA%20%E6%96%B0%E6%BD%9F%E5%9B%BD%E9%9A%9B%E6%83%85%E5%A0%B1%E5%A4%A7%E5%AD%A6%20%E8%A5%BF%E5%8C%BA%E3%81%BF%E3%81%9A%E3%81%8D%E9%87%8E3%E2%80%901%E2%80%901",
    "updateInfo": "",
    "region": "下越",
    "municipality": "新潟市西区",
    "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
  },
  {
    "id": "7024",
    "ward": "新潟市西区",
    "wardShort": "西区",
    "name": "保古野木保育園",
    "address": "西区保古野木901",
    "area": "小見郷屋、勘助郷屋、小瀬、早潟、藤野木、保古野木、前野外新田、明田",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E8%A5%BF%E5%8C%BA%20%E4%BF%9D%E5%8F%A4%E9%87%8E%E6%9C%A8%E4%BF%9D%E8%82%B2%E5%9C%92%20%E8%A5%BF%E5%8C%BA%E4%BF%9D%E5%8F%A4%E9%87%8E%E6%9C%A8901",
    "updateInfo": "",
    "region": "下越",
    "municipality": "新潟市西区",
    "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
  },
  {
    "id": "7025",
    "ward": "新潟市西区",
    "wardShort": "西区",
    "name": "中野小屋連絡所",
    "address": "西区中野小屋590‐4",
    "area": "大友、金巻新田、田潟、田島、道河原、中野小屋",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E8%A5%BF%E5%8C%BA%20%E4%B8%AD%E9%87%8E%E5%B0%8F%E5%B1%8B%E9%80%A3%E7%B5%A1%E6%89%80%20%E8%A5%BF%E5%8C%BA%E4%B8%AD%E9%87%8E%E5%B0%8F%E5%B1%8B590%E2%80%904",
    "updateInfo": "",
    "region": "下越",
    "municipality": "新潟市西区",
    "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
  },
  {
    "id": "7026",
    "ward": "新潟市西区",
    "wardShort": "西区",
    "name": "笠木小学校",
    "address": "西区笠木1695",
    "area": "笠木、新通の一部、曽和、高山、新田の一部",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E8%A5%BF%E5%8C%BA%20%E7%AC%A0%E6%9C%A8%E5%B0%8F%E5%AD%A6%E6%A0%A1%20%E8%A5%BF%E5%8C%BA%E7%AC%A0%E6%9C%A81695",
    "updateInfo": "",
    "region": "下越",
    "municipality": "新潟市西区",
    "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
  },
  {
    "id": "7027",
    "ward": "新潟市西区",
    "wardShort": "西区",
    "name": "黒埼南部公民館",
    "address": "西区黒鳥974‐2",
    "area": "緒立流通1～2丁目、北場の一部、黒鳥、鳥原の一部、流通3丁目",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E8%A5%BF%E5%8C%BA%20%E9%BB%92%E5%9F%BC%E5%8D%97%E9%83%A8%E5%85%AC%E6%B0%91%E9%A4%A8%20%E8%A5%BF%E5%8C%BA%E9%BB%92%E9%B3%A5974%E2%80%902",
    "updateInfo": "",
    "region": "下越",
    "municipality": "新潟市西区",
    "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
  },
  {
    "id": "7028",
    "ward": "新潟市西区",
    "wardShort": "西区",
    "name": "黒埼南小学校",
    "address": "西区木場911‐1",
    "area": "板井の一部、金巻の一部、木場、小平方の一部",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E8%A5%BF%E5%8C%BA%20%E9%BB%92%E5%9F%BC%E5%8D%97%E5%B0%8F%E5%AD%A6%E6%A0%A1%20%E8%A5%BF%E5%8C%BA%E6%9C%A8%E5%A0%B4911%E2%80%901",
    "updateInfo": "",
    "region": "下越",
    "municipality": "新潟市西区",
    "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
  },
  {
    "id": "7029",
    "ward": "新潟市西区",
    "wardShort": "西区",
    "name": "板井公民館",
    "address": "西区板井2597",
    "area": "板井の一部",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E8%A5%BF%E5%8C%BA%20%E6%9D%BF%E4%BA%95%E5%85%AC%E6%B0%91%E9%A4%A8%20%E8%A5%BF%E5%8C%BA%E6%9D%BF%E4%BA%952597",
    "updateInfo": "",
    "region": "下越",
    "municipality": "新潟市西区",
    "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
  },
  {
    "id": "7030",
    "ward": "新潟市西区",
    "wardShort": "西区",
    "name": "黒埼農村環境改善センター",
    "address": "西区金巻746‐3",
    "area": "大野町の一部、金巻の一部、小平方の一部、鳥原の一部、鳥原新田",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E8%A5%BF%E5%8C%BA%20%E9%BB%92%E5%9F%BC%E8%BE%B2%E6%9D%91%E7%92%B0%E5%A2%83%E6%94%B9%E5%96%84%E3%82%BB%E3%83%B3%E3%82%BF%E3%83%BC%20%E8%A5%BF%E5%8C%BA%E9%87%91%E5%B7%BB746%E2%80%903",
    "updateInfo": "",
    "region": "下越",
    "municipality": "新潟市西区",
    "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
  },
  {
    "id": "7031",
    "ward": "新潟市西区",
    "wardShort": "西区",
    "name": "大野小学校",
    "address": "西区大野町3140乙",
    "area": "大野町の一部、鳥原の一部",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E8%A5%BF%E5%8C%BA%20%E5%A4%A7%E9%87%8E%E5%B0%8F%E5%AD%A6%E6%A0%A1%20%E8%A5%BF%E5%8C%BA%E5%A4%A7%E9%87%8E%E7%94%BA3140%E4%B9%99",
    "updateInfo": "",
    "region": "下越",
    "municipality": "新潟市西区",
    "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
  },
  {
    "id": "7032",
    "ward": "新潟市西区",
    "wardShort": "西区",
    "name": "黒埼市民会館",
    "address": "西区鳥原909‐1",
    "area": "北場の一部、善久、立仏の一部、鳥原の一部、山田の一部",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E8%A5%BF%E5%8C%BA%20%E9%BB%92%E5%9F%BC%E5%B8%82%E6%B0%91%E4%BC%9A%E9%A4%A8%20%E8%A5%BF%E5%8C%BA%E9%B3%A5%E5%8E%9F909%E2%80%901",
    "updateInfo": "",
    "region": "下越",
    "municipality": "新潟市西区",
    "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
  },
  {
    "id": "7033",
    "ward": "新潟市西区",
    "wardShort": "西区",
    "name": "山田小学校",
    "address": "西区山田2781‐2",
    "area": "立仏の一部、鳥原の一部、山田の一部",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E8%A5%BF%E5%8C%BA%20%E5%B1%B1%E7%94%B0%E5%B0%8F%E5%AD%A6%E6%A0%A1%20%E8%A5%BF%E5%8C%BA%E5%B1%B1%E7%94%B02781%E2%80%902",
    "updateInfo": "",
    "region": "下越",
    "municipality": "新潟市西区",
    "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
  },
  {
    "id": "7034",
    "ward": "新潟市西区",
    "wardShort": "西区",
    "name": "黒埼北部公民館",
    "address": "西区ときめき西4‐1‐1",
    "area": "立仏の一部、寺地、ときめき西1～4丁目、ときめき東1丁目、山田の一部",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E8%A5%BF%E5%8C%BA%20%E9%BB%92%E5%9F%BC%E5%8C%97%E9%83%A8%E5%85%AC%E6%B0%91%E9%A4%A8%20%E8%A5%BF%E5%8C%BA%E3%81%A8%E3%81%8D%E3%82%81%E3%81%8D%E8%A5%BF4%E2%80%901%E2%80%901",
    "updateInfo": "",
    "region": "下越",
    "municipality": "新潟市西区",
    "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
  },
  {
    "id": "8001",
    "ward": "新潟市西蒲区",
    "wardShort": "西蒲区",
    "name": "巻地区公民館",
    "address": "西蒲区巻甲635",
    "area": "赤鏥の一部、巻甲の一部",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E8%A5%BF%E8%92%B2%E5%8C%BA%20%E5%B7%BB%E5%9C%B0%E5%8C%BA%E5%85%AC%E6%B0%91%E9%A4%A8%20%E8%A5%BF%E8%92%B2%E5%8C%BA%E5%B7%BB%E7%94%B2635",
    "updateInfo": "",
    "region": "下越",
    "municipality": "新潟市西蒲区",
    "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
  },
  {
    "id": "8002",
    "ward": "新潟市西蒲区",
    "wardShort": "西蒲区",
    "name": "巻つくし保育園",
    "address": "西蒲区堀山新田256",
    "area": "安尻の一部、下和納、堀山新田、巻乙",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E8%A5%BF%E8%92%B2%E5%8C%BA%20%E5%B7%BB%E3%81%A4%E3%81%8F%E3%81%97%E4%BF%9D%E8%82%B2%E5%9C%92%20%E8%A5%BF%E8%92%B2%E5%8C%BA%E5%A0%80%E5%B1%B1%E6%96%B0%E7%94%B0256",
    "updateInfo": "",
    "region": "下越",
    "municipality": "新潟市西蒲区",
    "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
  },
  {
    "id": "8003",
    "ward": "新潟市西蒲区",
    "wardShort": "西蒲区",
    "name": "蒲原ガス株式会社ショールーム棟",
    "address": "西蒲区巻甲４１１１",
    "area": "中郷屋、葉萱場、巻甲の一部、割前の一部",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E8%A5%BF%E8%92%B2%E5%8C%BA%20%E8%92%B2%E5%8E%9F%E3%82%AC%E3%82%B9%E6%A0%AA%E5%BC%8F%E4%BC%9A%E7%A4%BE%E3%82%B7%E3%83%A7%E3%83%BC%E3%83%AB%E3%83%BC%E3%83%A0%E6%A3%9F%20%E8%A5%BF%E8%92%B2%E5%8C%BA%E5%B7%BB%E7%94%B2%EF%BC%94%EF%BC%91%EF%BC%91%EF%BC%91",
    "updateInfo": "西蒲区役所から蒲原ガス株式会社ショールーム棟へ変更",
    "region": "下越",
    "municipality": "新潟市西蒲区",
    "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
  },
  {
    "id": "8004",
    "ward": "新潟市西蒲区",
    "wardShort": "西蒲区",
    "name": "巻地域保健福祉センター",
    "address": "西蒲区巻甲4363",
    "area": "赤鏥の一部、安尻の一部、潟頭の一部、巻甲の一部",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E8%A5%BF%E8%92%B2%E5%8C%BA%20%E5%B7%BB%E5%9C%B0%E5%9F%9F%E4%BF%9D%E5%81%A5%E7%A6%8F%E7%A5%89%E3%82%BB%E3%83%B3%E3%82%BF%E3%83%BC%20%E8%A5%BF%E8%92%B2%E5%8C%BA%E5%B7%BB%E7%94%B24363",
    "updateInfo": "",
    "region": "下越",
    "municipality": "新潟市西蒲区",
    "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
  },
  {
    "id": "8005",
    "ward": "新潟市西蒲区",
    "wardShort": "西蒲区",
    "name": "巻やすらぎ会館",
    "address": "西蒲区巻甲121‐1",
    "area": "羽田、東汰上、巻甲の一部、割前の一部",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E8%A5%BF%E8%92%B2%E5%8C%BA%20%E5%B7%BB%E3%82%84%E3%81%99%E3%82%89%E3%81%8E%E4%BC%9A%E9%A4%A8%20%E8%A5%BF%E8%92%B2%E5%8C%BA%E5%B7%BB%E7%94%B2121%E2%80%901",
    "updateInfo": "",
    "region": "下越",
    "municipality": "新潟市西蒲区",
    "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
  },
  {
    "id": "8006",
    "ward": "新潟市西蒲区",
    "wardShort": "西蒲区",
    "name": "漆山西保育園",
    "address": "西蒲区並岡10‐2",
    "area": "漆山の一部、潟頭の一部、柿島、河井、栄町、桜林、並岡、馬堀、山島",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E8%A5%BF%E8%92%B2%E5%8C%BA%20%E6%BC%86%E5%B1%B1%E8%A5%BF%E4%BF%9D%E8%82%B2%E5%9C%92%20%E8%A5%BF%E8%92%B2%E5%8C%BA%E4%B8%A6%E5%B2%A110%E2%80%902",
    "updateInfo": "",
    "region": "下越",
    "municipality": "新潟市西蒲区",
    "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
  },
  {
    "id": "8007",
    "ward": "新潟市西蒲区",
    "wardShort": "西蒲区",
    "name": "漆山東保育園",
    "address": "西蒲区漆山3320",
    "area": "漆山の一部、巻東町",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E8%A5%BF%E8%92%B2%E5%8C%BA%20%E6%BC%86%E5%B1%B1%E6%9D%B1%E4%BF%9D%E8%82%B2%E5%9C%92%20%E8%A5%BF%E8%92%B2%E5%8C%BA%E6%BC%86%E5%B1%B13320",
    "updateInfo": "",
    "region": "下越",
    "municipality": "新潟市西蒲区",
    "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
  },
  {
    "id": "8008",
    "ward": "新潟市西蒲区",
    "wardShort": "西蒲区",
    "name": "かきの実保育園",
    "address": "西蒲区仁箇1443‐1",
    "area": "竹野町、稲島、仁箇、布目、伏部、前田、鷲ノ木の一部",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E8%A5%BF%E8%92%B2%E5%8C%BA%20%E3%81%8B%E3%81%8D%E3%81%AE%E5%AE%9F%E4%BF%9D%E8%82%B2%E5%9C%92%20%E8%A5%BF%E8%92%B2%E5%8C%BA%E4%BB%81%E7%AE%871443%E2%80%901",
    "updateInfo": "",
    "region": "下越",
    "municipality": "新潟市西蒲区",
    "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
  },
  {
    "id": "8009",
    "ward": "新潟市西蒲区",
    "wardShort": "西蒲区",
    "name": "峰岡公民館",
    "address": "西蒲区鷲ノ木1633-9",
    "area": "上木島、五ケ浜、下木島、平沢、福井、舟戸、松郷屋、峰岡、鷲ノ木の一部、角海浜",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E8%A5%BF%E8%92%B2%E5%8C%BA%20%E5%B3%B0%E5%B2%A1%E5%85%AC%E6%B0%91%E9%A4%A8%20%E8%A5%BF%E8%92%B2%E5%8C%BA%E9%B7%B2%E3%83%8E%E6%9C%A81633-9",
    "updateInfo": "",
    "region": "下越",
    "municipality": "新潟市西蒲区",
    "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
  },
  {
    "id": "8010",
    "ward": "新潟市西蒲区",
    "wardShort": "西蒲区",
    "name": "松野尾地域コミュニティセンター",
    "address": "西蒲区松野尾2852-3",
    "area": "新保、巻大原、松野尾、松山",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E8%A5%BF%E8%92%B2%E5%8C%BA%20%E6%9D%BE%E9%87%8E%E5%B0%BE%E5%9C%B0%E5%9F%9F%E3%82%B3%E3%83%9F%E3%83%A5%E3%83%8B%E3%83%86%E3%82%A3%E3%82%BB%E3%83%B3%E3%82%BF%E3%83%BC%20%E8%A5%BF%E8%92%B2%E5%8C%BA%E6%9D%BE%E9%87%8E%E5%B0%BE2852-3",
    "updateInfo": "",
    "region": "下越",
    "municipality": "新潟市西蒲区",
    "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
  },
  {
    "id": "8011",
    "ward": "新潟市西蒲区",
    "wardShort": "西蒲区",
    "name": "角田地区コミュニティセンター",
    "address": "西蒲区角田浜1815-1",
    "area": "越前浜、角田浜",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E8%A5%BF%E8%92%B2%E5%8C%BA%20%E8%A7%92%E7%94%B0%E5%9C%B0%E5%8C%BA%E3%82%B3%E3%83%9F%E3%83%A5%E3%83%8B%E3%83%86%E3%82%A3%E3%82%BB%E3%83%B3%E3%82%BF%E3%83%BC%20%E8%A5%BF%E8%92%B2%E5%8C%BA%E8%A7%92%E7%94%B0%E6%B5%9C1815-1",
    "updateInfo": "",
    "region": "下越",
    "municipality": "新潟市西蒲区",
    "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
  },
  {
    "id": "8012",
    "ward": "新潟市西蒲区",
    "wardShort": "西蒲区",
    "name": "岩室農村環境改善センター",
    "address": "西蒲区和納2‐21‐1",
    "area": "和納の一部、和納1丁目の一部、和納2丁目の一部、和納3丁目",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E8%A5%BF%E8%92%B2%E5%8C%BA%20%E5%B2%A9%E5%AE%A4%E8%BE%B2%E6%9D%91%E7%92%B0%E5%A2%83%E6%94%B9%E5%96%84%E3%82%BB%E3%83%B3%E3%82%BF%E3%83%BC%20%E8%A5%BF%E8%92%B2%E5%8C%BA%E5%92%8C%E7%B4%8D2%E2%80%9021%E2%80%901",
    "updateInfo": "",
    "region": "下越",
    "municipality": "新潟市西蒲区",
    "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
  },
  {
    "id": "8013",
    "ward": "新潟市西蒲区",
    "wardShort": "西蒲区",
    "name": "和納小学校",
    "address": "西蒲区和納1212",
    "area": "高橋、津雲田、富岡、原、和納の一部、和納1丁目の一部、和納2丁目の一部",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E8%A5%BF%E8%92%B2%E5%8C%BA%20%E5%92%8C%E7%B4%8D%E5%B0%8F%E5%AD%A6%E6%A0%A1%20%E8%A5%BF%E8%92%B2%E5%8C%BA%E5%92%8C%E7%B4%8D1212",
    "updateInfo": "",
    "region": "下越",
    "municipality": "新潟市西蒲区",
    "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
  },
  {
    "id": "8014",
    "ward": "新潟市西蒲区",
    "wardShort": "西蒲区",
    "name": "岩室出張所",
    "address": "西蒲区西中860",
    "area": "油島、新谷、植野新田、潟上、北野、白鳥、高畑、夏井、西中、西長島、西船越、南谷内、横曽根",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E8%A5%BF%E8%92%B2%E5%8C%BA%20%E5%B2%A9%E5%AE%A4%E5%87%BA%E5%BC%B5%E6%89%80%20%E8%A5%BF%E8%92%B2%E5%8C%BA%E8%A5%BF%E4%B8%AD860",
    "updateInfo": "",
    "region": "下越",
    "municipality": "新潟市西蒲区",
    "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
  },
  {
    "id": "8015",
    "ward": "新潟市西蒲区",
    "wardShort": "西蒲区",
    "name": "岩室保育園",
    "address": "西蒲区橋本101‐1",
    "area": "石瀬、岩室温泉、金池、久保田、栄、猿ヶ瀬、橋本、樋曽",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E8%A5%BF%E8%92%B2%E5%8C%BA%20%E5%B2%A9%E5%AE%A4%E4%BF%9D%E8%82%B2%E5%9C%92%20%E8%A5%BF%E8%92%B2%E5%8C%BA%E6%A9%8B%E6%9C%AC101%E2%80%901",
    "updateInfo": "",
    "region": "下越",
    "municipality": "新潟市西蒲区",
    "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
  },
  {
    "id": "8016",
    "ward": "新潟市西蒲区",
    "wardShort": "西蒲区",
    "name": "岩室すこやかセンター",
    "address": "西蒲区間瀬4290-1",
    "area": "間瀬",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E8%A5%BF%E8%92%B2%E5%8C%BA%20%E5%B2%A9%E5%AE%A4%E3%81%99%E3%81%93%E3%82%84%E3%81%8B%E3%82%BB%E3%83%B3%E3%82%BF%E3%83%BC%20%E8%A5%BF%E8%92%B2%E5%8C%BA%E9%96%93%E7%80%AC4290-1",
    "updateInfo": "",
    "region": "下越",
    "municipality": "新潟市西蒲区",
    "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
  },
  {
    "id": "8017",
    "ward": "新潟市西蒲区",
    "wardShort": "西蒲区",
    "name": "鎧郷小学校",
    "address": "西蒲区天竺堂412‐4",
    "area": "川崎の一部、真田、下山、天竺堂、中島、西汰上、槇島の一部、平野",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E8%A5%BF%E8%92%B2%E5%8C%BA%20%E9%8E%A7%E9%83%B7%E5%B0%8F%E5%AD%A6%E6%A0%A1%20%E8%A5%BF%E8%92%B2%E5%8C%BA%E5%A4%A9%E7%AB%BA%E5%A0%82412%E2%80%904",
    "updateInfo": "",
    "region": "下越",
    "municipality": "新潟市西蒲区",
    "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
  },
  {
    "id": "8018",
    "ward": "新潟市西蒲区",
    "wardShort": "西蒲区",
    "name": "いこいの家西川荘",
    "address": "西蒲区川崎308‐4",
    "area": "押付の一部、川崎の一部、鱸、旗屋の一部、槇島の一部、松崎の一部、矢島",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E8%A5%BF%E8%92%B2%E5%8C%BA%20%E3%81%84%E3%81%93%E3%81%84%E3%81%AE%E5%AE%B6%E8%A5%BF%E5%B7%9D%E8%8D%98%20%E8%A5%BF%E8%92%B2%E5%8C%BA%E5%B7%9D%E5%B4%8E308%E2%80%904",
    "updateInfo": "",
    "region": "下越",
    "municipality": "新潟市西蒲区",
    "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
  },
  {
    "id": "8019",
    "ward": "新潟市西蒲区",
    "wardShort": "西蒲区",
    "name": "西川出張所",
    "address": "西蒲区旗屋585‐1",
    "area": "押付の一部、曽根の一部、旗屋の一部、松崎の一部",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E8%A5%BF%E8%92%B2%E5%8C%BA%20%E8%A5%BF%E5%B7%9D%E5%87%BA%E5%BC%B5%E6%89%80%20%E8%A5%BF%E8%92%B2%E5%8C%BA%E6%97%97%E5%B1%8B585%E2%80%901",
    "updateInfo": "",
    "region": "下越",
    "municipality": "新潟市西蒲区",
    "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
  },
  {
    "id": "8020",
    "ward": "新潟市西蒲区",
    "wardShort": "西蒲区",
    "name": "曽根小学校",
    "address": "西蒲区曽根750",
    "area": "桑山、善光寺、善光寺村受、曽根の一部、旗屋村受",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E8%A5%BF%E8%92%B2%E5%8C%BA%20%E6%9B%BD%E6%A0%B9%E5%B0%8F%E5%AD%A6%E6%A0%A1%20%E8%A5%BF%E8%92%B2%E5%8C%BA%E6%9B%BD%E6%A0%B9750",
    "updateInfo": "",
    "region": "下越",
    "municipality": "新潟市西蒲区",
    "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
  },
  {
    "id": "8021",
    "ward": "新潟市西蒲区",
    "wardShort": "西蒲区",
    "name": "升潟小学校",
    "address": "西蒲区升潟2179",
    "area": "浦村の一部、大潟の一部、大関の一部、兵右衛門新田の一部、升潟の一部",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E8%A5%BF%E8%92%B2%E5%8C%BA%20%E5%8D%87%E6%BD%9F%E5%B0%8F%E5%AD%A6%E6%A0%A1%20%E8%A5%BF%E8%92%B2%E5%8C%BA%E5%8D%87%E6%BD%9F2179",
    "updateInfo": "",
    "region": "下越",
    "municipality": "新潟市西蒲区",
    "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
  },
  {
    "id": "8022",
    "ward": "新潟市西蒲区",
    "wardShort": "西蒲区",
    "name": "貝柄地区集会所",
    "address": "西蒲区貝柄805‐6",
    "area": "浦村の一部、大潟の一部、大潟村古新田受、大関の一部、貝柄、貝柄新田、三角野新田、兵右衛門新田の一部、堀上新田、升岡、升潟の一部、與兵衛野新田",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E8%A5%BF%E8%92%B2%E5%8C%BA%20%E8%B2%9D%E6%9F%84%E5%9C%B0%E5%8C%BA%E9%9B%86%E4%BC%9A%E6%89%80%20%E8%A5%BF%E8%92%B2%E5%8C%BA%E8%B2%9D%E6%9F%84805%E2%80%906",
    "updateInfo": "",
    "region": "下越",
    "municipality": "新潟市西蒲区",
    "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
  },
  {
    "id": "8023",
    "ward": "新潟市西蒲区",
    "wardShort": "西蒲区",
    "name": "潟東出張所",
    "address": "西蒲区三方1",
    "area": "井随、大原、熊谷、三方、番屋、山口新田",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E8%A5%BF%E8%92%B2%E5%8C%BA%20%E6%BD%9F%E6%9D%B1%E5%87%BA%E5%BC%B5%E6%89%80%20%E8%A5%BF%E8%92%B2%E5%8C%BA%E4%B8%89%E6%96%B91",
    "updateInfo": "",
    "region": "下越",
    "municipality": "新潟市西蒲区",
    "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
  },
  {
    "id": "8024",
    "ward": "新潟市西蒲区",
    "wardShort": "西蒲区",
    "name": "横戸集会所",
    "address": "西蒲区横戸137",
    "area": "卯八郎受、遠藤、横戸",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E8%A5%BF%E8%92%B2%E5%8C%BA%20%E6%A8%AA%E6%88%B8%E9%9B%86%E4%BC%9A%E6%89%80%20%E8%A5%BF%E8%92%B2%E5%8C%BA%E6%A8%AA%E6%88%B8137",
    "updateInfo": "",
    "region": "下越",
    "municipality": "新潟市西蒲区",
    "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
  },
  {
    "id": "8025",
    "ward": "新潟市西蒲区",
    "wardShort": "西蒲区",
    "name": "大曽根集落開発センター",
    "address": "西蒲区大曽根1298",
    "area": "茨島、今井、大曽根、国見、称名、美里、南",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E8%A5%BF%E8%92%B2%E5%8C%BA%20%E5%A4%A7%E6%9B%BD%E6%A0%B9%E9%9B%86%E8%90%BD%E9%96%8B%E7%99%BA%E3%82%BB%E3%83%B3%E3%82%BF%E3%83%BC%20%E8%A5%BF%E8%92%B2%E5%8C%BA%E5%A4%A7%E6%9B%BD%E6%A0%B91298",
    "updateInfo": "",
    "region": "下越",
    "municipality": "新潟市西蒲区",
    "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
  },
  {
    "id": "8026",
    "ward": "新潟市西蒲区",
    "wardShort": "西蒲区",
    "name": "五之上ふれあいセンター",
    "address": "西蒲区五之上253",
    "area": "五之上",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E8%A5%BF%E8%92%B2%E5%8C%BA%20%E4%BA%94%E4%B9%8B%E4%B8%8A%E3%81%B5%E3%82%8C%E3%81%82%E3%81%84%E3%82%BB%E3%83%B3%E3%82%BF%E3%83%BC%20%E8%A5%BF%E8%92%B2%E5%8C%BA%E4%BA%94%E4%B9%8B%E4%B8%8A253",
    "updateInfo": "",
    "region": "下越",
    "municipality": "新潟市西蒲区",
    "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
  },
  {
    "id": "8027",
    "ward": "新潟市西蒲区",
    "wardShort": "西蒲区",
    "name": "中之口東小学校",
    "address": "西蒲区小吉1100",
    "area": "潟浦新、上小吉、高野宮、小吉の一部、中之口の一部、長場、針ヶ曽根、東小吉、東中、六分、門田の一部",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E8%A5%BF%E8%92%B2%E5%8C%BA%20%E4%B8%AD%E4%B9%8B%E5%8F%A3%E6%9D%B1%E5%B0%8F%E5%AD%A6%E6%A0%A1%20%E8%A5%BF%E8%92%B2%E5%8C%BA%E5%B0%8F%E5%90%891100",
    "updateInfo": "",
    "region": "下越",
    "municipality": "新潟市西蒲区",
    "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
  },
  {
    "id": "8028",
    "ward": "新潟市西蒲区",
    "wardShort": "西蒲区",
    "name": "中之口出張所",
    "address": "西蒲区中之口626",
    "area": "姥島、小吉の一部、中之口の一部、羽黒、東船越、福島の一部、真木、門田の一部",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E8%A5%BF%E8%92%B2%E5%8C%BA%20%E4%B8%AD%E4%B9%8B%E5%8F%A3%E5%87%BA%E5%BC%B5%E6%89%80%20%E8%A5%BF%E8%92%B2%E5%8C%BA%E4%B8%AD%E4%B9%8B%E5%8F%A3626",
    "updateInfo": "",
    "region": "下越",
    "municipality": "新潟市西蒲区",
    "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
  },
  {
    "id": "8029",
    "ward": "新潟市西蒲区",
    "wardShort": "西蒲区",
    "name": "中之口西小学校",
    "address": "西蒲区打越甲244",
    "area": "打越、河間、道上、福島の一部、牧ヶ島、三ツ門",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E8%A5%BF%E8%92%B2%E5%8C%BA%20%E4%B8%AD%E4%B9%8B%E5%8F%A3%E8%A5%BF%E5%B0%8F%E5%AD%A6%E6%A0%A1%20%E8%A5%BF%E8%92%B2%E5%8C%BA%E6%89%93%E8%B6%8A%E7%94%B2244",
    "updateInfo": "",
    "region": "下越",
    "municipality": "新潟市西蒲区",
    "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
  },
  {
    "id": "N01",
    "region": "中越",
    "municipality": "長岡市",
    "name": "長岡市役所 アオーレ長岡",
    "address": "長岡市大手通1-4-10",
    "area": "大手通・長岡駅前・表町・殿町エリア",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E9%95%B7%E5%B2%A1%E5%B8%82%20%E9%95%B7%E5%B2%A1%E5%B8%82%E5%BD%B9%E6%89%80%20%E3%82%A2%E3%82%AA%E3%83%BC%E3%83%AC%E9%95%B7%E5%B2%A1%20%E9%95%B7%E5%B2%A1%E5%B8%82%E5%A4%A7%E6%89%8B%E9%80%9A1-4-10",
    "officialUrl": "https://www.city.nagaoka.niigata.jp/shisei/cate04/senkyo/touhyoujo.html"
  },
  {
    "id": "N02",
    "region": "中越",
    "municipality": "長岡市",
    "name": "長岡市立劇場",
    "address": "長岡市幸町2-1-2",
    "area": "幸町・千手・関原・台町エリア",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E9%95%B7%E5%B2%A1%E5%B8%82%20%E9%95%B7%E5%B2%A1%E5%B8%82%E7%AB%8B%E5%8A%87%E5%A0%B4%20%E9%95%B7%E5%B2%A1%E5%B8%82%E5%B9%B8%E7%94%BA2-1-2",
    "officialUrl": "https://www.city.nagaoka.niigata.jp/shisei/cate04/senkyo/touhyoujo.html"
  },
  {
    "id": "N03",
    "region": "中越",
    "municipality": "長岡市",
    "name": "長岡市北部体育館",
    "address": "長岡市東蔵王2-2-72",
    "area": "蔵王・神谷・新保・今井エリア",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E9%95%B7%E5%B2%A1%E5%B8%82%20%E9%95%B7%E5%B2%A1%E5%B8%82%E5%8C%97%E9%83%A8%E4%BD%93%E8%82%B2%E9%A4%A8%20%E9%95%B7%E5%B2%A1%E5%B8%82%E6%9D%B1%E8%94%B5%E7%8E%8B2-2-72",
    "officialUrl": "https://www.city.nagaoka.niigata.jp/shisei/cate04/senkyo/touhyoujo.html"
  },
  {
    "id": "N04",
    "region": "中越",
    "municipality": "長岡市",
    "name": "長岡市南部体育館",
    "address": "長岡市学校町3-2-29",
    "area": "学校町・悠久山・栖吉・中島エリア",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E9%95%B7%E5%B2%A1%E5%B8%82%20%E9%95%B7%E5%B2%A1%E5%B8%82%E5%8D%97%E9%83%A8%E4%BD%93%E8%82%B2%E9%A4%A8%20%E9%95%B7%E5%B2%A1%E5%B8%82%E5%AD%A6%E6%A0%A1%E7%94%BA3-2-29",
    "officialUrl": "https://www.city.nagaoka.niigata.jp/shisei/cate04/senkyo/touhyoujo.html"
  },
  {
    "id": "N05",
    "region": "中越",
    "municipality": "長岡市",
    "name": "長岡市越路支所",
    "address": "長岡市浦715",
    "area": "越路地区（浦・来迎寺・塚野山）",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E9%95%B7%E5%B2%A1%E5%B8%82%20%E9%95%B7%E5%B2%A1%E5%B8%82%E8%B6%8A%E8%B7%AF%E6%94%AF%E6%89%80%20%E9%95%B7%E5%B2%A1%E5%B8%82%E6%B5%A6715",
    "officialUrl": "https://www.city.nagaoka.niigata.jp/shisei/cate04/senkyo/touhyoujo.html"
  },
  {
    "id": "N06",
    "region": "中越",
    "municipality": "長岡市",
    "name": "長岡市栃尾支所",
    "address": "長岡市金町2-1-5",
    "area": "栃尾地区（谷内・秋葉・東谷）",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E9%95%B7%E5%B2%A1%E5%B8%82%20%E9%95%B7%E5%B2%A1%E5%B8%82%E6%A0%83%E5%B0%BE%E6%94%AF%E6%89%80%20%E9%95%B7%E5%B2%A1%E5%B8%82%E9%87%91%E7%94%BA2-1-5",
    "officialUrl": "https://www.city.nagaoka.niigata.jp/shisei/cate04/senkyo/touhyoujo.html"
  },
  {
    "id": "N07",
    "region": "中越",
    "municipality": "長岡市",
    "name": "長岡市寺泊支所",
    "address": "長岡市寺泊川崎4798-1",
    "area": "寺泊地区（港町・大野・野積）",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E9%95%B7%E5%B2%A1%E5%B8%82%20%E9%95%B7%E5%B2%A1%E5%B8%82%E5%AF%BA%E6%B3%8A%E6%94%AF%E6%89%80%20%E9%95%B7%E5%B2%A1%E5%B8%82%E5%AF%BA%E6%B3%8A%E5%B7%9D%E5%B4%8E4798-1",
    "officialUrl": "https://www.city.nagaoka.niigata.jp/shisei/cate04/senkyo/touhyoujo.html"
  },
  {
    "id": "N08",
    "region": "中越",
    "municipality": "長岡市",
    "name": "長岡市中之島支所",
    "address": "長岡市中之島844",
    "area": "中之島地区全域",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E9%95%B7%E5%B2%A1%E5%B8%82%20%E9%95%B7%E5%B2%A1%E5%B8%82%E4%B8%AD%E4%B9%8B%E5%B3%B6%E6%94%AF%E6%89%80%20%E9%95%B7%E5%B2%A1%E5%B8%82%E4%B8%AD%E4%B9%8B%E5%B3%B6844",
    "officialUrl": "https://www.city.nagaoka.niigata.jp/shisei/cate04/senkyo/touhyoujo.html"
  },
  {
    "id": "N09",
    "region": "中越",
    "municipality": "長岡市",
    "name": "長岡市山古志支所",
    "address": "長岡市山古志竹沢3610",
    "area": "山古志地区（竹沢・種すは・油夫）",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E9%95%B7%E5%B2%A1%E5%B8%82%20%E9%95%B7%E5%B2%A1%E5%B8%82%E5%B1%B1%E5%8F%A4%E5%BF%97%E6%94%AF%E6%89%80%20%E9%95%B7%E5%B2%A1%E5%B8%82%E5%B1%B1%E5%8F%A4%E5%BF%97%E7%AB%B9%E6%B2%A23610",
    "officialUrl": "https://www.city.nagaoka.niigata.jp/shisei/cate04/senkyo/touhyoujo.html"
  },
  {
    "id": "N10",
    "region": "中越",
    "municipality": "長岡市",
    "name": "長岡市川口支所",
    "address": "長岡市川口川口1974-26",
    "area": "川口地区（東川口・和南津）",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E9%95%B7%E5%B2%A1%E5%B8%82%20%E9%95%B7%E5%B2%A1%E5%B8%82%E5%B7%9D%E5%8F%A3%E6%94%AF%E6%89%80%20%E9%95%B7%E5%B2%A1%E5%B8%82%E5%B7%9D%E5%8F%A3%E5%B7%9D%E5%8F%A31974-26",
    "officialUrl": "https://www.city.nagaoka.niigata.jp/shisei/cate04/senkyo/touhyoujo.html"
  },
  {
    "id": "SJ01",
    "region": "中越",
    "municipality": "三条市",
    "name": "三条市役所 本庁舎",
    "address": "三条市旭町2-3-1",
    "area": "三条中心部・本町・旭町エリア",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E4%B8%89%E6%9D%A1%E5%B8%82%20%E4%B8%89%E6%9D%A1%E5%B8%82%E5%BD%B9%E6%89%80%20%E6%9C%AC%E5%BA%81%E8%88%8E%20%E4%B8%89%E6%9D%A1%E5%B8%82%E6%97%AD%E7%94%BA2-3-1",
    "officialUrl": "https://www.city.sanjo.niigata.jp/soshiki/senkyokanriinkaijimukyoku/senkyoseido/touhyou/15316.html"
  },
  {
    "id": "SJ02",
    "region": "中越",
    "municipality": "三条市",
    "name": "三条市厚生福祉会館",
    "address": "三条市本町1-4-1",
    "area": "一ノ木戸・東三条・島田エリア",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E4%B8%89%E6%9D%A1%E5%B8%82%20%E4%B8%89%E6%9D%A1%E5%B8%82%E5%8E%9A%E7%94%9F%E7%A6%8F%E7%A5%89%E4%BC%9A%E9%A4%A8%20%E4%B8%89%E6%9D%A1%E5%B8%82%E6%9C%AC%E7%94%BA1-4-1",
    "officialUrl": "https://www.city.sanjo.niigata.jp/soshiki/senkyokanriinkaijimukyoku/senkyoseido/touhyou/15316.html"
  },
  {
    "id": "SJ03",
    "region": "中越",
    "municipality": "三条市",
    "name": "三条市栄庁舎",
    "address": "三条市新堀1311",
    "area": "栄地区（新堀・大面・北入蔵）",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E4%B8%89%E6%9D%A1%E5%B8%82%20%E4%B8%89%E6%9D%A1%E5%B8%82%E6%A0%84%E5%BA%81%E8%88%8E%20%E4%B8%89%E6%9D%A1%E5%B8%82%E6%96%B0%E5%A0%801311",
    "officialUrl": "https://www.city.sanjo.niigata.jp/soshiki/senkyokanriinkaijimukyoku/senkyoseido/touhyou/15316.html"
  },
  {
    "id": "SJ04",
    "region": "中越",
    "municipality": "三条市",
    "name": "三条市下田庁舎",
    "address": "三条市荻堀830-1",
    "area": "下田地区（荻堀・長野・荒沢）",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E4%B8%89%E6%9D%A1%E5%B8%82%20%E4%B8%89%E6%9D%A1%E5%B8%82%E4%B8%8B%E7%94%B0%E5%BA%81%E8%88%8E%20%E4%B8%89%E6%9D%A1%E5%B8%82%E8%8D%BB%E5%A0%80830-1",
    "officialUrl": "https://www.city.sanjo.niigata.jp/soshiki/senkyokanriinkaijimukyoku/senkyoseido/touhyou/15316.html"
  },
  {
    "id": "KZ01",
    "region": "中越",
    "municipality": "柏崎市",
    "name": "柏崎市役所 本庁舎",
    "address": "柏崎市日石町2-1",
    "area": "柏崎駅前・日石町・中央町エリア",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%9F%8F%E5%B4%8E%E5%B8%82%20%E6%9F%8F%E5%B4%8E%E5%B8%82%E5%BD%B9%E6%89%80%20%E6%9C%AC%E5%BA%81%E8%88%8E%20%E6%9F%8F%E5%B4%8E%E5%B8%82%E6%97%A5%E7%9F%B3%E7%94%BA2-1",
    "officialUrl": "https://www.city.kashiwazaki.lg.jp/soshiki/senkyo/senkyo/1/6530.html"
  },
  {
    "id": "KZ02",
    "region": "中越",
    "municipality": "柏崎市",
    "name": "柏崎市文化会館 アルフォーレ",
    "address": "柏崎市日石町4-32",
    "area": "東本町・諏訪町・鏡町エリア",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%9F%8F%E5%B4%8E%E5%B8%82%20%E6%9F%8F%E5%B4%8E%E5%B8%82%E6%96%87%E5%8C%96%E4%BC%9A%E9%A4%A8%20%E3%82%A2%E3%83%AB%E3%83%95%E3%82%A9%E3%83%BC%E3%83%AC%20%E6%9F%8F%E5%B4%8E%E5%B8%82%E6%97%A5%E7%9F%B3%E7%94%BA4-32",
    "officialUrl": "https://www.city.kashiwazaki.lg.jp/soshiki/senkyo/senkyo/1/6530.html"
  },
  {
    "id": "KZ03",
    "region": "中越",
    "municipality": "柏崎市",
    "name": "柏崎市西川コミュニティセンター",
    "address": "柏崎市西山町妙法寺348",
    "area": "西山地区（西山・妙法寺・二田）",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%9F%8F%E5%B4%8E%E5%B8%82%20%E6%9F%8F%E5%B4%8E%E5%B8%82%E8%A5%BF%E5%B7%9D%E3%82%B3%E3%83%9F%E3%83%A5%E3%83%8B%E3%83%86%E3%82%A3%E3%82%BB%E3%83%B3%E3%82%BF%E3%83%BC%20%E6%9F%8F%E5%B4%8E%E5%B8%82%E8%A5%BF%E5%B1%B1%E7%94%BA%E5%A6%99%E6%B3%95%E5%AF%BA348",
    "officialUrl": "https://www.city.kashiwazaki.lg.jp/soshiki/senkyo/senkyo/1/6530.html"
  },
  {
    "id": "KZ04",
    "region": "中越",
    "municipality": "柏崎市",
    "name": "高田コミュニティセンター",
    "address": "柏崎市山上465",
    "area": "高田・荒浜・松波エリア",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%9F%8F%E5%B4%8E%E5%B8%82%20%E9%AB%98%E7%94%B0%E3%82%B3%E3%83%9F%E3%83%A5%E3%83%8B%E3%83%86%E3%82%A3%E3%82%BB%E3%83%B3%E3%82%BF%E3%83%BC%20%E6%9F%8F%E5%B4%8E%E5%B8%82%E5%B1%B1%E4%B8%8A465",
    "officialUrl": "https://www.city.kashiwazaki.lg.jp/soshiki/senkyo/senkyo/1/6530.html"
  },
  {
    "id": "TB01",
    "region": "中越",
    "municipality": "燕市",
    "name": "燕市役所 本庁舎",
    "address": "燕市吉田西太田1934",
    "area": "西太田・吉田中心部・粟生津エリア",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E7%87%95%E5%B8%82%20%E7%87%95%E5%B8%82%E5%BD%B9%E6%89%80%20%E6%9C%AC%E5%BA%81%E8%88%8E%20%E7%87%95%E5%B8%82%E5%90%89%E7%94%B0%E8%A5%BF%E5%A4%AA%E7%94%B01934",
    "officialUrl": "https://www.city.tsubame.niigata.jp/soshiki/senkyokanriinkaijimukyoku/touhyouseido/5529.html"
  },
  {
    "id": "TB02",
    "region": "中越",
    "municipality": "燕市",
    "name": "燕市総合文化センター",
    "address": "燕市大曲3015",
    "area": "燕地区（中央通・秋津・大曲）",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E7%87%95%E5%B8%82%20%E7%87%95%E5%B8%82%E7%B7%8F%E5%90%88%E6%96%87%E5%8C%96%E3%82%BB%E3%83%B3%E3%82%BF%E3%83%BC%20%E7%87%95%E5%B8%82%E5%A4%A7%E6%9B%B23015",
    "officialUrl": "https://www.city.tsubame.niigata.jp/soshiki/senkyokanriinkaijimukyoku/touhyouseido/5529.html"
  },
  {
    "id": "TB03",
    "region": "中越",
    "municipality": "燕市",
    "name": "燕市分水公民館",
    "address": "燕市分水新町2-5-1",
    "area": "分水地区（分水・地蔵堂・渡部）",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E7%87%95%E5%B8%82%20%E7%87%95%E5%B8%82%E5%88%86%E6%B0%B4%E5%85%AC%E6%B0%91%E9%A4%A8%20%E7%87%95%E5%B8%82%E5%88%86%E6%B0%B4%E6%96%B0%E7%94%BA2-5-1",
    "officialUrl": "https://www.city.tsubame.niigata.jp/soshiki/senkyokanriinkaijimukyoku/touhyouseido/5529.html"
  },
  {
    "id": "TK01",
    "region": "中越",
    "municipality": "十日町市",
    "name": "十日町市役所 本庁舎",
    "address": "十日町市千歳町3-3",
    "area": "十日町中心部・千歳町・本町エリア",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E5%8D%81%E6%97%A5%E7%94%BA%E5%B8%82%20%E5%8D%81%E6%97%A5%E7%94%BA%E5%B8%82%E5%BD%B9%E6%89%80%20%E6%9C%AC%E5%BA%81%E8%88%8E%20%E5%8D%81%E6%97%A5%E7%94%BA%E5%B8%82%E5%8D%83%E6%AD%B3%E7%94%BA3-3",
    "officialUrl": "https://www.city.tokamachi.lg.jp/soshiki/senkyokanriinkai/"
  },
  {
    "id": "TK02",
    "region": "中越",
    "municipality": "十日町市",
    "name": "十日町市川西支所",
    "address": "十日町市小黒沢イ129-1",
    "area": "川西地区（上名市・小黒沢）",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E5%8D%81%E6%97%A5%E7%94%BA%E5%B8%82%20%E5%8D%81%E6%97%A5%E7%94%BA%E5%B8%82%E5%B7%9D%E8%A5%BF%E6%94%AF%E6%89%80%20%E5%8D%81%E6%97%A5%E7%94%BA%E5%B8%82%E5%B0%8F%E9%BB%92%E6%B2%A2%E3%82%A4129-1",
    "officialUrl": "https://www.city.tokamachi.lg.jp/soshiki/senkyokanriinkai/"
  },
  {
    "id": "TK03",
    "region": "中越",
    "municipality": "十日町市",
    "name": "十日町市松代支所",
    "address": "十日町市松代3926-1",
    "area": "松代地区全域",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E5%8D%81%E6%97%A5%E7%94%BA%E5%B8%82%20%E5%8D%81%E6%97%A5%E7%94%BA%E5%B8%82%E6%9D%BE%E4%BB%A3%E6%94%AF%E6%89%80%20%E5%8D%81%E6%97%A5%E7%94%BA%E5%B8%82%E6%9D%BE%E4%BB%A33926-1",
    "officialUrl": "https://www.city.tokamachi.lg.jp/soshiki/senkyokanriinkai/"
  },
  {
    "id": "TK04",
    "region": "中越",
    "municipality": "十日町市",
    "name": "十日町市松之山支所",
    "address": "十日町市松之山1104",
    "area": "松之山地区全域",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E5%8D%81%E6%97%A5%E7%94%BA%E5%B8%82%20%E5%8D%81%E6%97%A5%E7%94%BA%E5%B8%82%E6%9D%BE%E4%B9%8B%E5%B1%B1%E6%94%AF%E6%89%80%20%E5%8D%81%E6%97%A5%E7%94%BA%E5%B8%82%E6%9D%BE%E4%B9%8B%E5%B1%B11104",
    "officialUrl": "https://www.city.tokamachi.lg.jp/soshiki/senkyokanriinkai/"
  },
  {
    "id": "MU01",
    "region": "中越",
    "municipality": "南魚沼市",
    "name": "南魚沼市役所 本庁舎",
    "address": "南魚沼市六日町180-1",
    "area": "六日町中心部・坂戸・川窪エリア",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E5%8D%97%E9%AD%9A%E6%B2%BC%E5%B8%82%20%E5%8D%97%E9%AD%9A%E6%B2%BC%E5%B8%82%E5%BD%B9%E6%89%80%20%E6%9C%AC%E5%BA%81%E8%88%8E%20%E5%8D%97%E9%AD%9A%E6%B2%BC%E5%B8%82%E5%85%AD%E6%97%A5%E7%94%BA180-1",
    "officialUrl": "https://www.city.minamiuonuma.niigata.jp/"
  },
  {
    "id": "MU02",
    "region": "中越",
    "municipality": "南魚沼市",
    "name": "南魚沼市塩沢庁舎",
    "address": "南魚沼市塩沢1371-1",
    "area": "塩沢地区（塩沢・石打・舞子）",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E5%8D%97%E9%AD%9A%E6%B2%BC%E5%B8%82%20%E5%8D%97%E9%AD%9A%E6%B2%BC%E5%B8%82%E5%A1%A9%E6%B2%A2%E5%BA%81%E8%88%8E%20%E5%8D%97%E9%AD%9A%E6%B2%BC%E5%B8%82%E5%A1%A9%E6%B2%A21371-1",
    "officialUrl": "https://www.city.minamiuonuma.niigata.jp/"
  },
  {
    "id": "MU03",
    "region": "中越",
    "municipality": "南魚沼市",
    "name": "南魚沼市大和庁舎",
    "address": "南魚沼市浦佐1185-1",
    "area": "大和地区（浦佐・八色・五日町）",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E5%8D%97%E9%AD%9A%E6%B2%BC%E5%B8%82%20%E5%8D%97%E9%AD%9A%E6%B2%BC%E5%B8%82%E5%A4%A7%E5%92%8C%E5%BA%81%E8%88%8E%20%E5%8D%97%E9%AD%9A%E6%B2%BC%E5%B8%82%E6%B5%A6%E4%BD%901185-1",
    "officialUrl": "https://www.city.minamiuonuma.niigata.jp/"
  },
  {
    "id": "UO01",
    "region": "中越",
    "municipality": "魚沼市",
    "name": "魚沼市役所 小出庁舎",
    "address": "魚沼市小出島910",
    "area": "小出地区（小出島・四日町）",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E9%AD%9A%E6%B2%BC%E5%B8%82%20%E9%AD%9A%E6%B2%BC%E5%B8%82%E5%BD%B9%E6%89%80%20%E5%B0%8F%E5%87%BA%E5%BA%81%E8%88%8E%20%E9%AD%9A%E6%B2%BC%E5%B8%82%E5%B0%8F%E5%87%BA%E5%B3%B6910",
    "officialUrl": "https://www.city.uonuma.niigata.jp/"
  },
  {
    "id": "UO02",
    "region": "中越",
    "municipality": "魚沼市",
    "name": "魚沼市堀之内庁舎",
    "address": "魚沼市堀之内130",
    "area": "堀之内地区全域",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E9%AD%9A%E6%B2%BC%E5%B8%82%20%E9%AD%9A%E6%B2%BC%E5%B8%82%E5%A0%80%E4%B9%8B%E5%86%85%E5%BA%81%E8%88%8E%20%E9%AD%9A%E6%B2%BC%E5%B8%82%E5%A0%80%E4%B9%8B%E5%86%85130",
    "officialUrl": "https://www.city.uonuma.niigata.jp/"
  },
  {
    "id": "UO03",
    "region": "中越",
    "municipality": "魚沼市",
    "name": "魚沼市入広瀬庁舎",
    "address": "魚沼市穴沢215-1",
    "area": "入広瀬地区全域",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E9%AD%9A%E6%B2%BC%E5%B8%82%20%E9%AD%9A%E6%B2%BC%E5%B8%82%E5%85%A5%E5%BA%83%E7%80%AC%E5%BA%81%E8%88%8E%20%E9%AD%9A%E6%B2%BC%E5%B8%82%E7%A9%B4%E6%B2%A2215-1",
    "officialUrl": "https://www.city.uonuma.niigata.jp/"
  },
  {
    "id": "OJ01",
    "region": "中越",
    "municipality": "小千谷市",
    "name": "小千谷市役所 本庁舎",
    "address": "小千谷市城内2-7-5",
    "area": "小千谷市中心部・城内エリア",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E5%B0%8F%E5%8D%83%E8%B0%B7%E5%B8%82%20%E5%B0%8F%E5%8D%83%E8%B0%B7%E5%B8%82%E5%BD%B9%E6%89%80%20%E6%9C%AC%E5%BA%81%E8%88%8E%20%E5%B0%8F%E5%8D%83%E8%B0%B7%E5%B8%82%E5%9F%8E%E5%86%852-7-5",
    "officialUrl": "https://www.city.ojiya.niigata.jp/soshiki/senkan/"
  },
  {
    "id": "OJ02",
    "region": "中越",
    "municipality": "小千谷市",
    "name": "片貝コミュニティセンター",
    "address": "小千谷市片貝町4940-1",
    "area": "片貝地区全域",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E5%B0%8F%E5%8D%83%E8%B0%B7%E5%B8%82%20%E7%89%87%E8%B2%9D%E3%82%B3%E3%83%9F%E3%83%A5%E3%83%8B%E3%83%86%E3%82%A3%E3%82%BB%E3%83%B3%E3%82%BF%E3%83%BC%20%E5%B0%8F%E5%8D%83%E8%B0%B7%E5%B8%82%E7%89%87%E8%B2%9D%E7%94%BA4940-1",
    "officialUrl": "https://www.city.ojiya.niigata.jp/soshiki/senkan/"
  },
  {
    "id": "MT01",
    "region": "中越",
    "municipality": "見附市",
    "name": "見附市役所 本庁舎",
    "address": "見附市昭和町2-1-1",
    "area": "見附市中心部・昭和町エリア",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E8%A6%8B%E9%99%84%E5%B8%82%20%E8%A6%8B%E9%99%84%E5%B8%82%E5%BD%B9%E6%89%80%20%E6%9C%AC%E5%BA%81%E8%88%8E%20%E8%A6%8B%E9%99%84%E5%B8%82%E6%98%AD%E5%92%8C%E7%94%BA2-1-1",
    "officialUrl": "https://www.city.mitsuke.niigata.jp/"
  },
  {
    "id": "KM01",
    "region": "中越",
    "municipality": "加茂市",
    "name": "加茂市役所 本庁舎",
    "address": "加茂市幸町2-3-5",
    "area": "加茂市中心部・駅前エリア",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E5%8A%A0%E8%8C%82%E5%B8%82%20%E5%8A%A0%E8%8C%82%E5%B8%82%E5%BD%B9%E6%89%80%20%E6%9C%AC%E5%BA%81%E8%88%8E%20%E5%8A%A0%E8%8C%82%E5%B8%82%E5%B9%B8%E7%94%BA2-3-5",
    "officialUrl": "https://www.city.kamo.niigata.jp/"
  },
  {
    "id": "TG01",
    "region": "中越",
    "municipality": "田上町",
    "name": "田上町役場",
    "address": "南蒲原郡田上町原ヶ崎新田J1",
    "area": "田上町全域",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E7%94%B0%E4%B8%8A%E7%94%BA%20%E7%94%B0%E4%B8%8A%E7%94%BA%E5%BD%B9%E5%A0%B4%20%E5%8D%97%E8%92%B2%E5%8E%9F%E9%83%A1%E7%94%B0%E4%B8%8A%E7%94%BA%E5%8E%9F%E3%83%B6%E5%B4%8E%E6%96%B0%E7%94%B0J1",
    "officialUrl": "https://www.town.tagami.niigata.jp/"
  },
  {
    "id": "IZ01",
    "region": "中越",
    "municipality": "出雲崎町",
    "name": "出雲崎町役場",
    "address": "三島郡出雲崎町米田142",
    "area": "出雲崎町全域",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E5%87%BA%E9%9B%B2%E5%B4%8E%E7%94%BA%20%E5%87%BA%E9%9B%B2%E5%B4%8E%E7%94%BA%E5%BD%B9%E5%A0%B4%20%E4%B8%89%E5%B3%B6%E9%83%A1%E5%87%BA%E9%9B%B2%E5%B4%8E%E7%94%BA%E7%B1%B3%E7%94%B0142",
    "officialUrl": "https://www.town.izumozaki.niigata.jp/"
  },
  {
    "id": "YZ01",
    "region": "中越",
    "municipality": "湯沢町",
    "name": "湯沢町役場",
    "address": "南魚沼郡湯沢町神立300",
    "area": "湯沢町全域（神立・越後湯沢）",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%B9%AF%E6%B2%A2%E7%94%BA%20%E6%B9%AF%E6%B2%A2%E7%94%BA%E5%BD%B9%E5%A0%B4%20%E5%8D%97%E9%AD%9A%E6%B2%BC%E9%83%A1%E6%B9%AF%E6%B2%A2%E7%94%BA%E7%A5%9E%E7%AB%8B300",
    "officialUrl": "https://www.town.yuzawa.lg.jp/"
  },
  {
    "id": "TN01",
    "region": "中越",
    "municipality": "津南町",
    "name": "津南町役場",
    "address": "中魚沼郡津南町下船渡戊585",
    "area": "津南町全域",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%B4%A5%E5%8D%97%E7%94%BA%20%E6%B4%A5%E5%8D%97%E7%94%BA%E5%BD%B9%E5%A0%B4%20%E4%B8%AD%E9%AD%9A%E6%B2%BC%E9%83%A1%E6%B4%A5%E5%8D%97%E7%94%BA%E4%B8%8B%E8%88%B9%E6%B8%A1%E6%88%8A585",
    "officialUrl": "https://town.tsunan.niigata.jp/"
  },
  {
    "id": "KW01",
    "region": "中越",
    "municipality": "刈羽村",
    "name": "刈羽村役場",
    "address": "刈羽郡刈羽村割町新田100",
    "area": "刈羽村全域",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E5%88%88%E7%BE%BD%E6%9D%91%20%E5%88%88%E7%BE%BD%E6%9D%91%E5%BD%B9%E5%A0%B4%20%E5%88%88%E7%BE%BD%E9%83%A1%E5%88%88%E7%BE%BD%E6%9D%91%E5%89%B2%E7%94%BA%E6%96%B0%E7%94%B0100",
    "officialUrl": "https://www.vill.kariwa.niigata.jp/"
  },
  {
    "id": "YH01",
    "region": "中越",
    "municipality": "弥彦村",
    "name": "弥彦村役場",
    "address": "西蒲原郡弥彦村大字矢作2865-1",
    "area": "弥彦村全域",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E5%BC%A5%E5%BD%A6%E6%9D%91%20%E5%BC%A5%E5%BD%A6%E6%9D%91%E5%BD%B9%E5%A0%B4%20%E8%A5%BF%E8%92%B2%E5%8E%9F%E9%83%A1%E5%BC%A5%E5%BD%A6%E6%9D%91%E5%A4%A7%E5%AD%97%E7%9F%A2%E4%BD%9C2865-1",
    "officialUrl": "http://www.vill.yahiko.niigata.jp/"
  },
  {
    "id": "JO01",
    "region": "上越",
    "municipality": "上越市",
    "name": "上越市役所 木田庁舎",
    "address": "上越市木田1-1-3",
    "area": "春日山・木田・直江津南エリア",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E4%B8%8A%E8%B6%8A%E5%B8%82%20%E4%B8%8A%E8%B6%8A%E5%B8%82%E5%BD%B9%E6%89%80%20%E6%9C%A8%E7%94%B0%E5%BA%81%E8%88%8E%20%E4%B8%8A%E8%B6%8A%E5%B8%82%E6%9C%A8%E7%94%B01-1-3",
    "officialUrl": "https://www.city.joetsu.niigata.jp/soshiki/senkan/touhyoujo-ichiran.html"
  },
  {
    "id": "JO02",
    "region": "上越",
    "municipality": "上越市",
    "name": "高田地区公民館",
    "address": "上越市本町3-2-26",
    "area": "高田本町・城下町・大手町エリア",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E4%B8%8A%E8%B6%8A%E5%B8%82%20%E9%AB%98%E7%94%B0%E5%9C%B0%E5%8C%BA%E5%85%AC%E6%B0%91%E9%A4%A8%20%E4%B8%8A%E8%B6%8A%E5%B8%82%E6%9C%AC%E7%94%BA3-2-26",
    "officialUrl": "https://www.city.joetsu.niigata.jp/soshiki/senkan/touhyoujo-ichiran.html"
  },
  {
    "id": "JO03",
    "region": "上越",
    "municipality": "上越市",
    "name": "直江津学びの交流館",
    "address": "上越市中央2-3-5",
    "area": "直江津港・港町・中央エリア",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E4%B8%8A%E8%B6%8A%E5%B8%82%20%E7%9B%B4%E6%B1%9F%E6%B4%A5%E5%AD%A6%E3%81%B3%E3%81%AE%E4%BA%A4%E6%B5%81%E9%A4%A8%20%E4%B8%8A%E8%B6%8A%E5%B8%82%E4%B8%AD%E5%A4%AE2-3-5",
    "officialUrl": "https://www.city.joetsu.niigata.jp/soshiki/senkan/touhyoujo-ichiran.html"
  },
  {
    "id": "JO04",
    "region": "上越",
    "municipality": "上越市",
    "name": "柿崎区総合事務所",
    "address": "上越市柿崎区柿崎640",
    "area": "柿崎区全域",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E4%B8%8A%E8%B6%8A%E5%B8%82%20%E6%9F%BF%E5%B4%8E%E5%8C%BA%E7%B7%8F%E5%90%88%E4%BA%8B%E5%8B%99%E6%89%80%20%E4%B8%8A%E8%B6%8A%E5%B8%82%E6%9F%BF%E5%B4%8E%E5%8C%BA%E6%9F%BF%E5%B4%8E640",
    "officialUrl": "https://www.city.joetsu.niigata.jp/soshiki/senkan/touhyoujo-ichiran.html"
  },
  {
    "id": "JO05",
    "region": "上越",
    "municipality": "上越市",
    "name": "頸城区総合事務所",
    "address": "上越市頸城区百間町716",
    "area": "頸城区全域",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E4%B8%8A%E8%B6%8A%E5%B8%82%20%E9%A0%B8%E5%9F%8E%E5%8C%BA%E7%B7%8F%E5%90%88%E4%BA%8B%E5%8B%99%E6%89%80%20%E4%B8%8A%E8%B6%8A%E5%B8%82%E9%A0%B8%E5%9F%8E%E5%8C%BA%E7%99%BE%E9%96%93%E7%94%BA716",
    "officialUrl": "https://www.city.joetsu.niigata.jp/soshiki/senkan/touhyoujo-ichiran.html"
  },
  {
    "id": "JO06",
    "region": "上越",
    "municipality": "上越市",
    "name": "安塚区総合事務所",
    "address": "上越市安塚区安塚722",
    "area": "安塚区全域",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E4%B8%8A%E8%B6%8A%E5%B8%82%20%E5%AE%89%E5%A1%9A%E5%8C%BA%E7%B7%8F%E5%90%88%E4%BA%8B%E5%8B%99%E6%89%80%20%E4%B8%8A%E8%B6%8A%E5%B8%82%E5%AE%89%E5%A1%9A%E5%8C%BA%E5%AE%89%E5%A1%9A722",
    "officialUrl": "https://www.city.joetsu.niigata.jp/soshiki/senkan/touhyoujo-ichiran.html"
  },
  {
    "id": "IT01",
    "region": "上越",
    "municipality": "糸魚川市",
    "name": "糸魚川市役所 本庁舎",
    "address": "糸魚川市一の宮1-2-1",
    "area": "糸魚川駅前・一の宮・寺町エリア",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E7%B3%B8%E9%AD%9A%E5%B7%9D%E5%B8%82%20%E7%B3%B8%E9%AD%9A%E5%B7%9D%E5%B8%82%E5%BD%B9%E6%89%80%20%E6%9C%AC%E5%BA%81%E8%88%8E%20%E7%B3%B8%E9%AD%9A%E5%B7%9D%E5%B8%82%E4%B8%80%E3%81%AE%E5%AE%AE1-2-1",
    "officialUrl": "https://www.city.itoigawa.lg.jp/"
  },
  {
    "id": "IT02",
    "region": "上越",
    "municipality": "糸魚川市",
    "name": "糸魚川市能生事務所",
    "address": "糸魚川市大字能生7565",
    "area": "能生地区全域",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E7%B3%B8%E9%AD%9A%E5%B7%9D%E5%B8%82%20%E7%B3%B8%E9%AD%9A%E5%B7%9D%E5%B8%82%E8%83%BD%E7%94%9F%E4%BA%8B%E5%8B%99%E6%89%80%20%E7%B3%B8%E9%AD%9A%E5%B7%9D%E5%B8%82%E5%A4%A7%E5%AD%97%E8%83%BD%E7%94%9F7565",
    "officialUrl": "https://www.city.itoigawa.lg.jp/"
  },
  {
    "id": "IT03",
    "region": "上越",
    "municipality": "糸魚川市",
    "name": "糸魚川市青海事務所",
    "address": "糸魚川市大字青海4613-1",
    "area": "青海地区全域",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E7%B3%B8%E9%AD%9A%E5%B7%9D%E5%B8%82%20%E7%B3%B8%E9%AD%9A%E5%B7%9D%E5%B8%82%E9%9D%92%E6%B5%B7%E4%BA%8B%E5%8B%99%E6%89%80%20%E7%B3%B8%E9%AD%9A%E5%B7%9D%E5%B8%82%E5%A4%A7%E5%AD%97%E9%9D%92%E6%B5%B74613-1",
    "officialUrl": "https://www.city.itoigawa.lg.jp/"
  },
  {
    "id": "MY01",
    "region": "上越",
    "municipality": "妙高市",
    "name": "妙高市役所 本庁舎",
    "address": "妙高市栄町5-1",
    "area": "新井中心部・栄町エリア",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E5%A6%99%E9%AB%98%E5%B8%82%20%E5%A6%99%E9%AB%98%E5%B8%82%E5%BD%B9%E6%89%80%20%E6%9C%AC%E5%BA%81%E8%88%8E%20%E5%A6%99%E9%AB%98%E5%B8%82%E6%A0%84%E7%94%BA5-1",
    "officialUrl": "https://www.city.myoko.niigata.jp/"
  },
  {
    "id": "MY02",
    "region": "上越",
    "municipality": "妙高市",
    "name": "妙高高原メッセ",
    "address": "妙高市大字田口308",
    "area": "妙高高原・関川・赤倉エリア",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E5%A6%99%E9%AB%98%E5%B8%82%20%E5%A6%99%E9%AB%98%E9%AB%98%E5%8E%9F%E3%83%A1%E3%83%83%E3%82%BB%20%E5%A6%99%E9%AB%98%E5%B8%82%E5%A4%A7%E5%AD%97%E7%94%B0%E5%8F%A3308",
    "officialUrl": "https://www.city.myoko.niigata.jp/"
  },
  {
    "id": "SD01",
    "region": "佐渡",
    "municipality": "佐渡市",
    "name": "佐渡市役所 本庁舎",
    "address": "佐渡市千種232",
    "area": "金井・千種・中興エリア",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E4%BD%90%E6%B8%A1%E5%B8%82%20%E4%BD%90%E6%B8%A1%E5%B8%82%E5%BD%B9%E6%89%80%20%E6%9C%AC%E5%BA%81%E8%88%8E%20%E4%BD%90%E6%B8%A1%E5%B8%82%E5%8D%83%E7%A8%AE232",
    "officialUrl": "https://www.city.sado.niigata.jp/soshiki/1049/2234.html"
  },
  {
    "id": "SD02",
    "region": "佐渡",
    "municipality": "佐渡市",
    "name": "両津行政サービスセンター",
    "address": "佐渡市両津湊353-1",
    "area": "両津地区（湊・夷・加茂歌代）",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E4%BD%90%E6%B8%A1%E5%B8%82%20%E4%B8%A1%E6%B4%A5%E8%A1%8C%E6%94%BF%E3%82%B5%E3%83%BC%E3%83%93%E3%82%B9%E3%82%BB%E3%83%B3%E3%82%BF%E3%83%BC%20%E4%BD%90%E6%B8%A1%E5%B8%82%E4%B8%A1%E6%B4%A5%E6%B9%8A353-1",
    "officialUrl": "https://www.city.sado.niigata.jp/soshiki/1049/2234.html"
  },
  {
    "id": "SD03",
    "region": "佐渡",
    "municipality": "佐渡市",
    "name": "相川行政サービスセンター",
    "address": "佐渡市相川栄町1",
    "area": "相川地区（栄町・鉱山・羽田）",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E4%BD%90%E6%B8%A1%E5%B8%82%20%E7%9B%B8%E5%B7%9D%E8%A1%8C%E6%94%BF%E3%82%B5%E3%83%BC%E3%83%93%E3%82%B9%E3%82%BB%E3%83%B3%E3%82%BF%E3%83%BC%20%E4%BD%90%E6%B8%A1%E5%B8%82%E7%9B%B8%E5%B7%9D%E6%A0%84%E7%94%BA1",
    "officialUrl": "https://www.city.sado.niigata.jp/soshiki/1049/2234.html"
  },
  {
    "id": "SD04",
    "region": "佐渡",
    "municipality": "佐渡市",
    "name": "佐和田行政サービスセンター",
    "address": "佐渡市河原田本町394",
    "area": "佐和田地区（河原田・八幡）",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E4%BD%90%E6%B8%A1%E5%B8%82%20%E4%BD%90%E5%92%8C%E7%94%B0%E8%A1%8C%E6%94%BF%E3%82%B5%E3%83%BC%E3%83%93%E3%82%B9%E3%82%BB%E3%83%B3%E3%82%BF%E3%83%BC%20%E4%BD%90%E6%B8%A1%E5%B8%82%E6%B2%B3%E5%8E%9F%E7%94%B0%E6%9C%AC%E7%94%BA394",
    "officialUrl": "https://www.city.sado.niigata.jp/soshiki/1049/2234.html"
  },
  {
    "id": "SD05",
    "region": "佐渡",
    "municipality": "佐渡市",
    "name": "真野行政サービスセンター",
    "address": "佐渡市吉岡343",
    "area": "真野・羽茂・小木地区",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E4%BD%90%E6%B8%A1%E5%B8%82%20%E7%9C%9F%E9%87%8E%E8%A1%8C%E6%94%BF%E3%82%B5%E3%83%BC%E3%83%93%E3%82%B9%E3%82%BB%E3%83%B3%E3%82%BF%E3%83%BC%20%E4%BD%90%E6%B8%A1%E5%B8%82%E5%90%89%E5%B2%A1343",
    "officialUrl": "https://www.city.sado.niigata.jp/soshiki/1049/2234.html"
  },
  {
    "id": "SB01",
    "region": "下越",
    "municipality": "新発田市",
    "name": "新発田市役所 ヨリネスしばた",
    "address": "新発田市中央町3-3-3",
    "area": "新発田中心部・中央町・本町エリア",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E7%99%BA%E7%94%B0%E5%B8%82%20%E6%96%B0%E7%99%BA%E7%94%B0%E5%B8%82%E5%BD%B9%E6%89%80%20%E3%83%A8%E3%83%AA%E3%83%8D%E3%82%B9%E3%81%97%E3%81%B0%E3%81%9F%20%E6%96%B0%E7%99%BA%E7%94%B0%E5%B8%82%E4%B8%AD%E5%A4%AE%E7%94%BA3-3-3",
    "officialUrl": "https://www.city.shibata.lg.jp/shisei/senkyo/senkyoseido/1031383.html"
  },
  {
    "id": "SB02",
    "region": "下越",
    "municipality": "新発田市",
    "name": "新発田市豊浦支所",
    "address": "新発田市乙次26",
    "area": "豊浦地区全域",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E7%99%BA%E7%94%B0%E5%B8%82%20%E6%96%B0%E7%99%BA%E7%94%B0%E5%B8%82%E8%B1%8A%E6%B5%A6%E6%94%AF%E6%89%80%20%E6%96%B0%E7%99%BA%E7%94%B0%E5%B8%82%E4%B9%99%E6%AC%A126",
    "officialUrl": "https://www.city.shibata.lg.jp/shisei/senkyo/senkyoseido/1031383.html"
  },
  {
    "id": "SB03",
    "region": "下越",
    "municipality": "新発田市",
    "name": "新発田市紫雲寺支所",
    "address": "新発田市稲荷岡2371",
    "area": "紫雲寺地区全域",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E7%99%BA%E7%94%B0%E5%B8%82%20%E6%96%B0%E7%99%BA%E7%94%B0%E5%B8%82%E7%B4%AB%E9%9B%B2%E5%AF%BA%E6%94%AF%E6%89%80%20%E6%96%B0%E7%99%BA%E7%94%B0%E5%B8%82%E7%A8%B2%E8%8D%B7%E5%B2%A12371",
    "officialUrl": "https://www.city.shibata.lg.jp/shisei/senkyo/senkyoseido/1031383.html"
  },
  {
    "id": "MK01",
    "region": "下越",
    "municipality": "村上市",
    "name": "村上市役所 本庁舎",
    "address": "村上市三泉101",
    "area": "村上城下町・岩船・瀬波エリア",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%9D%91%E4%B8%8A%E5%B8%82%20%E6%9D%91%E4%B8%8A%E5%B8%82%E5%BD%B9%E6%89%80%20%E6%9C%AC%E5%BA%81%E8%88%8E%20%E6%9D%91%E4%B8%8A%E5%B8%82%E4%B8%89%E6%B3%89101",
    "officialUrl": "https://www.city.murakami.lg.jp/site/senkyo/"
  },
  {
    "id": "MK02",
    "region": "下越",
    "municipality": "村上市",
    "name": "村上市荒川支所",
    "address": "村上市羽下300",
    "area": "荒川地区全域",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%9D%91%E4%B8%8A%E5%B8%82%20%E6%9D%91%E4%B8%8A%E5%B8%82%E8%8D%92%E5%B7%9D%E6%94%AF%E6%89%80%20%E6%9D%91%E4%B8%8A%E5%B8%82%E7%BE%BD%E4%B8%8B300",
    "officialUrl": "https://www.city.murakami.lg.jp/site/senkyo/"
  },
  {
    "id": "MK03",
    "region": "下越",
    "municipality": "村上市",
    "name": "村上市神林支所",
    "address": "村上市岩船駅前56-1",
    "area": "神林地区全域",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%9D%91%E4%B8%8A%E5%B8%82%20%E6%9D%91%E4%B8%8A%E5%B8%82%E7%A5%9E%E6%9E%97%E6%94%AF%E6%89%80%20%E6%9D%91%E4%B8%8A%E5%B8%82%E5%B2%A9%E8%88%B9%E9%A7%85%E5%89%8D56-1",
    "officialUrl": "https://www.city.murakami.lg.jp/site/senkyo/"
  },
  {
    "id": "GS01",
    "region": "下越",
    "municipality": "五泉市",
    "name": "五泉市役所 本庁舎",
    "address": "五泉市太田1092-1",
    "area": "五泉中心部・太田エリア",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E4%BA%94%E6%B3%89%E5%B8%82%20%E4%BA%94%E6%B3%89%E5%B8%82%E5%BD%B9%E6%89%80%20%E6%9C%AC%E5%BA%81%E8%88%8E%20%E4%BA%94%E6%B3%89%E5%B8%82%E5%A4%AA%E7%94%B01092-1",
    "officialUrl": "https://www.city.gosen.lg.jp/soshiki/senkan/"
  },
  {
    "id": "GS02",
    "region": "下越",
    "municipality": "五泉市",
    "name": "五泉市村松支所",
    "address": "五泉市村松乙130",
    "area": "村松地区全域",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E4%BA%94%E6%B3%89%E5%B8%82%20%E4%BA%94%E6%B3%89%E5%B8%82%E6%9D%91%E6%9D%BE%E6%94%AF%E6%89%80%20%E4%BA%94%E6%B3%89%E5%B8%82%E6%9D%91%E6%9D%BE%E4%B9%99130",
    "officialUrl": "https://www.city.gosen.lg.jp/soshiki/senkan/"
  },
  {
    "id": "AG01",
    "region": "下越",
    "municipality": "阿賀野市",
    "name": "阿賀野市役所 本庁舎",
    "address": "阿賀野市岡山町10-15",
    "area": "水原地区・岡山町エリア",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E9%98%BF%E8%B3%80%E9%87%8E%E5%B8%82%20%E9%98%BF%E8%B3%80%E9%87%8E%E5%B8%82%E5%BD%B9%E6%89%80%20%E6%9C%AC%E5%BA%81%E8%88%8E%20%E9%98%BF%E8%B3%80%E9%87%8E%E5%B8%82%E5%B2%A1%E5%B1%B1%E7%94%BA10-15",
    "officialUrl": "https://www.city.agano.niigata.jp/soshiki/senkan/"
  },
  {
    "id": "AG02",
    "region": "下越",
    "municipality": "阿賀野市",
    "name": "阿賀野市安田支所",
    "address": "阿賀野市保田4664",
    "area": "安田地区全域",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E9%98%BF%E8%B3%80%E9%87%8E%E5%B8%82%20%E9%98%BF%E8%B3%80%E9%87%8E%E5%B8%82%E5%AE%89%E7%94%B0%E6%94%AF%E6%89%80%20%E9%98%BF%E8%B3%80%E9%87%8E%E5%B8%82%E4%BF%9D%E7%94%B04664",
    "officialUrl": "https://www.city.agano.niigata.jp/soshiki/senkan/"
  },
  {
    "id": "TN01",
    "region": "下越",
    "municipality": "胎内市",
    "name": "胎内市役所 本庁舎",
    "address": "胎内市新和町2-10",
    "area": "中条中心部・新和町エリア",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E8%83%8E%E5%86%85%E5%B8%82%20%E8%83%8E%E5%86%85%E5%B8%82%E5%BD%B9%E6%89%80%20%E6%9C%AC%E5%BA%81%E8%88%8E%20%E8%83%8E%E5%86%85%E5%B8%82%E6%96%B0%E5%92%8C%E7%94%BA2-10",
    "officialUrl": "https://www.city.tainai.niigata.jp/kurashi/senkyo/"
  },
  {
    "id": "TN02",
    "region": "下越",
    "municipality": "胎内市",
    "name": "胎内市黒川庁舎",
    "address": "胎内市黒川1410",
    "area": "黒川地区全域",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E8%83%8E%E5%86%85%E5%B8%82%20%E8%83%8E%E5%86%85%E5%B8%82%E9%BB%92%E5%B7%9D%E5%BA%81%E8%88%8E%20%E8%83%8E%E5%86%85%E5%B8%82%E9%BB%92%E5%B7%9D1410",
    "officialUrl": "https://www.city.tainai.niigata.jp/kurashi/senkyo/"
  },
  {
    "id": "SR01",
    "region": "下越",
    "municipality": "聖籠町",
    "name": "聖籠町役場",
    "address": "北蒲原郡聖籠町大字諏訪山1635-4",
    "area": "聖籠町全域",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E8%81%96%E7%B1%A0%E7%94%BA%20%E8%81%96%E7%B1%A0%E7%94%BA%E5%BD%B9%E5%A0%B4%20%E5%8C%97%E8%92%B2%E5%8E%9F%E9%83%A1%E8%81%96%E7%B1%A0%E7%94%BA%E5%A4%A7%E5%AD%97%E8%AB%8F%E8%A8%AA%E5%B1%B11635-4",
    "officialUrl": "https://www.town.seiro.niigata.jp/"
  },
  {
    "id": "AM01",
    "region": "下越",
    "municipality": "阿賀町",
    "name": "阿賀町役場",
    "address": "東蒲原郡阿賀町津川580",
    "area": "津川・鹿瀬・上川・三川地区",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E9%98%BF%E8%B3%80%E7%94%BA%20%E9%98%BF%E8%B3%80%E7%94%BA%E5%BD%B9%E5%A0%B4%20%E6%9D%B1%E8%92%B2%E5%8E%9F%E9%83%A1%E9%98%BF%E8%B3%80%E7%94%BA%E6%B4%A5%E5%B7%9D580",
    "officialUrl": "https://www.town.aga.niigata.jp/"
  },
  {
    "id": "SK01",
    "region": "下越",
    "municipality": "関川村",
    "name": "関川村役場",
    "address": "岩船郡関川村大字下関110-1",
    "area": "関川村全域",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E9%96%A2%E5%B7%9D%E6%9D%91%20%E9%96%A2%E5%B7%9D%E6%9D%91%E5%BD%B9%E5%A0%B4%20%E5%B2%A9%E8%88%B9%E9%83%A1%E9%96%A2%E5%B7%9D%E6%9D%91%E5%A4%A7%E5%AD%97%E4%B8%8B%E9%96%A2110-1",
    "officialUrl": "http://www.vill.sekikawa.niigata.jp/"
  },
  {
    "id": "AW01",
    "region": "下越",
    "municipality": "粟島浦村",
    "name": "粟島浦村役場",
    "address": "岩船郡粟島浦村字日見内151-1",
    "area": "粟島浦村全域",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E7%B2%9F%E5%B3%B6%E6%B5%A6%E6%9D%91%20%E7%B2%9F%E5%B3%B6%E6%B5%A6%E6%9D%91%E5%BD%B9%E5%A0%B4%20%E5%B2%A9%E8%88%B9%E9%83%A1%E7%B2%9F%E5%B3%B6%E6%B5%A6%E6%9D%91%E5%AD%97%E6%97%A5%E8%A6%8B%E5%86%85151-1",
    "officialUrl": "http://www.vill.awashimaura.lg.jp/"
  }
];

const REGION_CATEGORIES = ["すべて", "下越", "中越", "上越", "佐渡"];

// ---------- App state ----------
interface AppState {
  tab: TabKey;
  electionDate: string;
  quizStep: number;
  scores: Record<Tag, number>;
  quizFinished: boolean;
  selectedRegion: string;
  selectedMunicipality: string;
  placeSearchQuery: string;
  selectedElectionYear: string;
}

function freshScores(): Record<Tag, number> {
  const s = {} as Record<Tag, number>;
  TAGS.forEach((t) => (s[t] = 0));
  return s;
}

const state: AppState = {
  tab: "home",
  electionDate: "2026-10-25",
  quizStep: 0,
  scores: freshScores(),
  quizFinished: false,
  selectedRegion: "すべて",
  selectedMunicipality: "すべて",
  placeSearchQuery: "",
  selectedElectionYear: "すべて",
};

// ---------- Helpers ----------
function daysUntil(dateStr: string): number {
  const target = new Date(dateStr + "T00:00:00");
  const now = new Date();
  now.setHours(0, 0, 0, 0);
  return Math.ceil((target.getTime() - now.getTime()) / (1000 * 60 * 60 * 24));
}

function dateLabel(dateStr: string): string {
  const d = new Date(dateStr + "T00:00:00");
  if (isNaN(d.getTime())) return "";
  const weekday = ["日", "月", "火", "水", "木", "金", "土"][d.getDay()];
  return `${d.getFullYear()}年${d.getMonth() + 1}月${d.getDate()}日(${weekday})`;
}

function topTag(scores: Record<Tag, number>): Tag {
  return TAGS.reduce((best, t) => (scores[t] > scores[best] ? t : best), TAGS[0]);
}

function matchedCandidate(scores: Record<Tag, number>): Candidate {
  let best: Candidate = CANDIDATES[0];
  let bestScore = -Infinity;
  for (const c of CANDIDATES) {
    let dot = 0;
    TAGS.forEach((t) => (dot += (scores[t] || 0) * (c.weights[t] || 0)));
    if (dot > bestScore) {
      bestScore = dot;
      best = c;
    }
  }
  return best;
}

function elJpDateToIso(day: string): string {
  const match = day.match(/(\d+)月(\d+)日/);
  if (!match) return state.electionDate;
  const [, m, d] = match;
  return `2026-${m.padStart(2, "0")}-${d.padStart(2, "0")}`;
}

// ---------- Tiny icon helper ----------
function icon(name: string, size = 16): string {
  const common = `width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"`;
  switch (name) {
    case "calendar":
      return `<svg ${common}><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>`;
    case "clipboard":
      return `<svg ${common}><rect x="6" y="4" width="12" height="16" rx="2"/><rect x="9" y="2" width="6" height="4" rx="1"/><path d="M9 11h6M9 15h6"/></svg>`;
    case "vote":
      return `<svg ${common}><path d="M12 3l8 4v2H4V7l8-4z"/><path d="M4 10v9h16v-9M9 14l2 2 4-4"/></svg>`;
    case "map-pin":
      return `<svg ${common}><path d="M12 21s7-6.1 7-11a7 7 0 1 0-14 0c0 4.9 7 11 7 11z"/><circle cx="12" cy="10" r="2.5"/></svg>`;
    case "chevron-right":
      return `<svg ${common}><path d="M9 6l6 6-6 6"/></svg>`;
    case "rotate-ccw":
      return `<svg ${common}><path d="M3 12a9 9 0 1 0 3-6.7"/><path d="M3 4v5h5"/></svg>`;
    case "external-link":
      return `<svg ${common}><path d="M14 3h7v7"/><path d="M10 14L21 3"/><path d="M21 14v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5"/></svg>`;
    case "search":
      return `<svg ${common}><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>`;
    case "x":
      return `<svg ${common}><path d="M18 6 6 18M6 6l12 12"/></svg>`;
    case "info":
      return `<svg ${common}><circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/></svg>`;
    default:
      return "";
  }
}

// ---------- Rendering ----------
const root = document.getElementById("app")!;

function render() {
  root.innerHTML = "";
  root.appendChild(renderNav());

  const content = document.createElement("div");
  content.className = "wrap content";

  switch (state.tab) {
    case "home":
      content.appendChild(renderHome());
      break;
    case "pledges":
      content.appendChild(renderPledges());
      break;
    case "quiz":
      content.appendChild(
        state.quizFinished ? renderQuizResult() : renderQuizQuestion()
      );
      break;
    case "place":
      content.appendChild(renderPlace());
      break;
  }

  root.appendChild(content);
}

function renderNav(): HTMLElement {
  const nav = document.createElement("div");
  nav.className = "nav";

  const inner = document.createElement("div");
  inner.className = "wrap nav-inner";

  const title = document.createElement("h1");
  title.className = "disp nav-title";
  title.textContent = "にいがた、投票までの道";
  inner.appendChild(title);

  const tabs = document.createElement("div");
  tabs.className = "tabs";

  const tabDefs: [TabKey, string, string][] = [
    ["home", "日程", "calendar"],
    ["pledges", "公約", "clipboard"],
    ["quiz", "投票診断", "vote"],
    ["place", "投票所", "map-pin"],
  ];

  tabDefs.forEach(([key, label, iconName]) => {
    const btn = document.createElement("button");
    btn.className = "tab-btn" + (state.tab === key ? " active" : "");
    btn.innerHTML = `${icon(iconName, 15)}<span>${label}</span>`;
    btn.addEventListener("click", () => {
      state.tab = key;
      render();
    });
    tabs.appendChild(btn);
  });

  inner.appendChild(tabs);
  nav.appendChild(inner);
  return nav;
}

function renderHome(): HTMLElement {
  const wrap = document.createElement("div");

  const days = daysUntil(state.electionDate);
  const heroRow = document.createElement("div");
  heroRow.className = "hero-row";
  heroRow.innerHTML = `
    <span class="disp hero-num">${days >= 0 ? days : "―"}</span>
    <span class="hero-suffix">${days >= 0 ? "日後が選択した投票日" : "投票日を過ぎています"}</span>
  `;
  wrap.appendChild(heroRow);

  const sub = document.createElement("p");
  sub.className = "subtext";
  sub.textContent = `${dateLabel(state.electionDate)} 投票日 (リストをタップで日付変更)`;
  wrap.appendChild(sub);

  const dateCard = document.createElement("div");
  dateCard.className = "card";

  const dateLabelEl = document.createElement("label");
  dateLabelEl.className = "card-label";
  dateLabelEl.textContent = "投票日を手動設定する";

  const dateInput = document.createElement("input");
  dateInput.type = "date";
  dateInput.className = "date-input";
  dateInput.value = state.electionDate;
  dateInput.addEventListener("change", (e) => {
    state.electionDate = (e.target as HTMLInputElement).value;
    render();
  });

  dateCard.appendChild(dateLabelEl);
  dateCard.appendChild(dateInput);
  wrap.appendChild(dateCard);

  const scheduleCard = document.createElement("div");
  scheduleCard.className = "card";

  const scheduleHead = document.createElement("div");
  scheduleHead.style.display = "flex";
  scheduleHead.style.justifyContent = "space-between";
  scheduleHead.style.alignItems = "center";
  scheduleHead.style.marginBottom = "12px";
  scheduleHead.innerHTML = `
    <p style="font-size:15px;font-weight:700;margin:0;">新潟県内の予定選挙（年度別）</p>
    <span style="font-size:12px;color:var(--faint);">令和8〜9年以降</span>
  `;
  scheduleCard.appendChild(scheduleHead);

  const yearChips = document.createElement("div");
  yearChips.className = "year-chips";
  yearChips.style.display = "flex";
  yearChips.style.gap = "6px";
  yearChips.style.flexWrap = "wrap";
  yearChips.style.marginBottom = "14px";

  ELECTION_YEAR_FILTERS.forEach((y) => {
    const btn = document.createElement("button");
    btn.className = "year-chip" + (state.selectedElectionYear === y ? " active" : "");
    btn.textContent = y;
    btn.addEventListener("click", () => {
      state.selectedElectionYear = y;
      render();
    });
    yearChips.appendChild(btn);
  });
  scheduleCard.appendChild(yearChips);

  const filteredElections = UPCOMING_ELECTIONS.filter((e) => {
    if (state.selectedElectionYear === "すべて") return true;
    return e.year === state.selectedElectionYear;
  });

  filteredElections.forEach((e) => {
    const btn = document.createElement("button");
    btn.className = "election-btn";
    btn.innerHTML = `
      <div style="display:flex;align-items:center;gap:6px;">
        <span class="year-badge">${e.yearLabel}</span>
        <span style="font-weight:500;">${e.name}</span>
      </div>
      <span style="font-size:13px;color:var(--muted);">投票日 ${e.day} (告示 ${e.notice})</span>
    `;
    btn.addEventListener("click", () => {
      state.electionDate = e.isoDate || elJpDateToIso(e.day);
      render();
    });
    scheduleCard.appendChild(btn);
  });

  const officialLink = document.createElement("a");
  officialLink.className = "official-link";
  officialLink.href = OFFICIAL_SCHEDULE_URL;
  officialLink.target = "_blank";
  officialLink.rel = "noopener noreferrer";
  officialLink.innerHTML = `新潟県選挙管理委員会「県内選挙スケジュール」を見る ${icon(
    "external-link",
    13
  )}`;
  scheduleCard.appendChild(officialLink);

  wrap.appendChild(scheduleCard);

  const infoRows: [string, string][] = [
    ["投票時間", "7:00 〜 20:00"],
    ["期日前投票", "投票日の前日まで、区役所などで可能"],
    ["持ち物", "投票所入場券(なくても本人確認で投票可)"],
  ];
  infoRows.forEach(([label, value]) => {
    const row = document.createElement("div");
    row.className = "info-row";
    row.innerHTML = `<span class="label">${label}</span><span>${value}</span>`;
    wrap.appendChild(row);
  });

  const footnote = document.createElement("p");
  footnote.className = "footnote";
  footnote.textContent =
    "※上記の選挙一覧は新潟県選挙管理委員会の公表情報をもとにした抜粋で、自動更新はされません。最新の投票日・投票所は必ず公式サイトでご確認ください。";
  wrap.appendChild(footnote);

  return wrap;
}

function renderPledges(): HTMLElement {
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

function renderQuizQuestion(): HTMLElement {
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
      render();
    });
    options.appendChild(btn);
  });
  wrap.appendChild(options);

  return wrap;
}

function renderQuizResult(): HTMLElement {
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
    render();
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
    render();
  });
  wrap.appendChild(resetBtn);

  const footnote = document.createElement("p");
  footnote.className = "footnote";
  footnote.textContent =
    "※この診断は考えを整理するための簡易的なものです。実際の投票先は、公式の公約や政策を必ずご自身で確認して決めてください。";
  wrap.appendChild(footnote);

  return wrap;
}

function renderPlace(): HTMLElement {
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
      render();
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
    render();
  });
  muniChips.appendChild(allMuniBtn);

  availableMunicipalities.forEach((m) => {
    const count = POLLING_PLACES.filter(p => p.municipality === m).length;
    const btn = document.createElement("button");
    btn.className = "muni-chip" + (state.selectedMunicipality === m ? " active" : "");
    btn.innerHTML = `<span>${m}</span><span class="chip-count">${count}</span>`;
    btn.addEventListener("click", () => {
      state.selectedMunicipality = m;
      render();
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
      render();
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
        render();
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

// ---------- Init ----------
document.addEventListener("DOMContentLoaded", () => {
  render();
});
