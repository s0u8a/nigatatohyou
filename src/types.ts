// ============================================================
// にいがた、投票までの道 - データ型定義 (types.ts)
// ============================================================

export type Tag = "経済" | "教育" | "環境" | "デジタル" | "福祉" | "地域";

export interface TagMeta {
  color: string;
  label: string;
}

export interface Candidate {
  id: string;
  name: string;
  tagline: string;
  weights: Record<Tag, number>;
  pledges: string[];
}

export interface QuizOption {
  text: string;
  weights: Partial<Record<Tag, number>>;
}

export interface Question {
  q: string;
  options: QuizOption[];
}

export interface UpcomingElection {
  year: string;
  yearLabel: string;
  name: string;
  notice: string;
  day: string;
  isoDate: string;
}

export interface PollingPlace {
  id: string;
  region: string; // "下越", "中越", "上越", "佐渡"
  municipality: string; // "新潟市中央区", "長岡市", "上越市" など
  wardShort?: string;
  name: string;
  address: string;
  area: string;
  mapUrl: string;
  officialUrl?: string;
  updateInfo?: string;
}

export interface NotificationPreference {
  days7Before: boolean;
  days3Before: boolean;
  day1Before: boolean;
  onElectionDay: boolean;
}

export interface UserProfile {
  id: string;
  name: string;
  email: string;
  municipality: string;
  isLoggedIn: boolean;
  isDemo?: boolean;
  notificationPrefs: NotificationPreference;
  subscribedElectionNames: string[];
}

export interface NotificationItem {
  id: string;
  title: string;
  message: string;
  date: string;
  read: boolean;
  electionName?: string;
  type: "info" | "reminder" | "urgent";
}

export type TabKey = "top" | "schedule" | "pledges" | "quiz" | "place" | "mypage";

export interface AppState {
  tab: TabKey;
  electionDate: string;
  quizStep: number;
  scores: Record<Tag, number>;
  quizFinished: boolean;
  selectedRegion: string;
  selectedMunicipality: string;
  placeSearchQuery: string;
  selectedElectionYear: string;
  currentUser: UserProfile;
  notifications: NotificationItem[];
  isNotificationDropdownOpen: boolean;
  toastMessage: string | null;
}

