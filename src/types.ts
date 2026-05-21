export type TrainingCategory =
  | "Phishing"
  | "Passwords"
  | "AI Safety"
  | "Social Engineering"
  | "General";

export interface TrainingProgram {
  id: string;
  title: string;
  category: TrainingCategory;
  nextSession: string;
  capacity: number;
  enrolled: number;
  description: string;
}

export type IncidentStatus = "New" | "In Progress" | "Resolved";

export interface IncidentReport {
  id: string;
  resident: string;
  issueType: string;
  status: IncidentStatus;
  date: string;
  description: string;
}

export type CasePriority = "Low" | "Medium" | "High";

export interface SupportCase {
  id: string;
  resident: string;
  issueType: string;
  priority: CasePriority;
  assignedTo: string;
  lastUpdate: string;
}

export type ResourceCategory = "Guide" | "Tip" | "Download";

export interface Resource {
  id: string;
  title: string;
  description: string;
  category: ResourceCategory;
}

export interface Update {
  id: string;
  title: string;
  type: "alert" | "webinar" | "tip";
}
