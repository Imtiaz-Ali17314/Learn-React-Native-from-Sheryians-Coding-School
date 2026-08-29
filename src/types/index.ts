export type TopicCategory =
  | "fundamentals"
  | "styling"
  | "scrollview"
  | "flatlist"
  | "input"
  | "navigation";

export type TopicStatus = "completed" | "in-progress" | "learned";

export interface Topic {
  id: string;
  topicNumber: number;
  title: string;
  subtitle: string;
  description: string;
  category: TopicCategory;
  status: TopicStatus;
  route: string;
  icon: string;
  keyConcepts: string[];
}
