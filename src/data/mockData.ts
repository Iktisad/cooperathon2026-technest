import type {
  IncidentReport,
  Resource,
  SupportCase,
  TrainingProgram,
  Update,
} from "../types";

export const council = {
  name: "Peter-McGill Community Council",
  region: "Montréal, QC",
  contactEmail: "council@peter-mcgill.org",
  notifications: 2,
};

export const trainingPrograms: TrainingProgram[] = [
  {
    id: "tp-1",
    title: "Password Security & Management",
    category: "Passwords",
    nextSession: "April 22, 10:00 AM",
    capacity: 30,
    enrolled: 18,
    description:
      "Hands-on workshop on creating strong passwords and using a password manager.",
  },
  {
    id: "tp-2",
    title: "AI & Online Safety",
    category: "AI Safety",
    nextSession: "April 24, 6:00 PM",
    capacity: 25,
    enrolled: 12,
    description:
      "How to spot AI-generated scams and protect personal data when using AI tools.",
  },
  {
    id: "tp-3",
    title: "Social Engineering Awareness",
    category: "Social Engineering",
    nextSession: "April 28, 2:00 PM",
    capacity: 40,
    enrolled: 31,
    description:
      "Recognize manipulation tactics used in phone, email, and in-person scams.",
  },
  {
    id: "tp-4",
    title: "Phishing Awareness Workshop",
    category: "Phishing",
    nextSession: "April 25, 2:00 PM",
    capacity: 50,
    enrolled: 42,
    description:
      "Identify phishing emails, suspicious links, and reporting workflows.",
  },
  {
    id: "tp-5",
    title: "Two-Factor Authentication 101",
    category: "Passwords",
    nextSession: "May 2, 11:00 AM",
    capacity: 30,
    enrolled: 9,
    description: "Set up 2FA on common accounts: email, banking, and social.",
  },
  {
    id: "tp-6",
    title: "Detecting Deepfakes",
    category: "AI Safety",
    nextSession: "May 5, 7:00 PM",
    capacity: 35,
    enrolled: 22,
    description:
      "Tools and habits to verify videos, voices, and images shared with you.",
  },
  {
    id: "tp-7",
    title: "Safe Online Banking",
    category: "General",
    nextSession: "May 9, 3:00 PM",
    capacity: 25,
    enrolled: 6,
    description: "Best practices for protecting financial accounts online.",
  },
  {
    id: "tp-8",
    title: "Recognizing Romance Scams",
    category: "Social Engineering",
    nextSession: "May 12, 6:30 PM",
    capacity: 20,
    enrolled: 14,
    description: "Patterns, red flags, and how to support someone targeted.",
  },
];

export const incidentReports: IncidentReport[] = [
  {
    id: "ir-1",
    resident: "John Doe",
    issueType: "Identity Theft",
    status: "New",
    date: "2026-04-18",
    description:
      "Resident's account was compromised. Needs assistance with recovery.",
  },
  {
    id: "ir-2",
    resident: "Marie Lavoie",
    issueType: "Phishing Email",
    status: "New",
    date: "2026-04-17",
    description: "Received a fake CRA tax-refund email with a payment link.",
  },
  {
    id: "ir-3",
    resident: "Samir Khan",
    issueType: "Phone Scam",
    status: "New",
    date: "2026-04-17",
    description:
      "Caller posed as Service Canada and requested SIN number over the phone.",
  },
  {
    id: "ir-4",
    resident: "Elena Roy",
    issueType: "Account Takeover",
    status: "In Progress",
    date: "2026-04-14",
    description: "Facebook account locked out; suspicious password reset.",
  },
  {
    id: "ir-5",
    resident: "Daniel Smith",
    issueType: "Malware",
    status: "In Progress",
    date: "2026-04-12",
    description: "Pop-ups and slowdowns after installing a free PDF tool.",
  },
  {
    id: "ir-6",
    resident: "Aïsha Bélanger",
    issueType: "Phishing Email",
    status: "Resolved",
    date: "2026-04-08",
    description: "Reported as spoofed bank message — no credentials shared.",
  },
];

export const supportCases: SupportCase[] = [
  {
    id: "sc-1",
    resident: "John Doe",
    issueType: "Identity Theft",
    priority: "High",
    assignedTo: "Priya Singh",
    lastUpdate: "2 hours ago",
  },
  {
    id: "sc-2",
    resident: "Elena Roy",
    issueType: "Account Takeover",
    priority: "High",
    assignedTo: "Marc Tremblay",
    lastUpdate: "Yesterday",
  },
  {
    id: "sc-3",
    resident: "Daniel Smith",
    issueType: "Malware Cleanup",
    priority: "Medium",
    assignedTo: "Priya Singh",
    lastUpdate: "2 days ago",
  },
  {
    id: "sc-4",
    resident: "Samir Khan",
    issueType: "Phone Scam Follow-up",
    priority: "Medium",
    assignedTo: "Lucie Bernard",
    lastUpdate: "3 days ago",
  },
  {
    id: "sc-5",
    resident: "Marie Lavoie",
    issueType: "Phishing Triage",
    priority: "Low",
    assignedTo: "Lucie Bernard",
    lastUpdate: "4 days ago",
  },
];

export const resources: Resource[] = [
  {
    id: "r-1",
    title: "Cyber Safety Guides",
    description:
      "A curated set of guides covering everyday online safety habits.",
    category: "Guide",
  },
  {
    id: "r-2",
    title: "Phishing Prevention Tips",
    description: "Quick-reference tips to share with residents and family.",
    category: "Tip",
  },
  {
    id: "r-3",
    title: "Download Awareness Materials",
    description: "Print-ready posters and flyers for community spaces.",
    category: "Download",
  },
  {
    id: "r-4",
    title: "Password Hygiene Checklist",
    description: "Step-by-step checklist to audit personal password habits.",
    category: "Guide",
  },
  {
    id: "r-5",
    title: "AI Scam Red Flags",
    description: "Visual guide to spotting AI-generated content and scams.",
    category: "Tip",
  },
  {
    id: "r-6",
    title: "Senior-Friendly Safety Booklet",
    description: "Large-print PDF booklet for older residents.",
    category: "Download",
  },
];

export const recentUpdates: Update[] = [
  { id: "u-1", title: "Cyber Scam Alert: New Phishing Tactics", type: "alert" },
  { id: "u-2", title: "AI Ethics Webinar Recap", type: "webinar" },
  { id: "u-3", title: "Tips for Secure Online Browsing", type: "tip" },
];
