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
    description: "A curated set of guides covering everyday online safety habits.",
    category: "Guide",
    readTime: "5 min read",
    content: [
      "Use a unique, strong password for every account — a password manager makes this easy.",
      "Enable two-factor authentication (2FA) on email, banking, and social media accounts.",
      "Keep your operating system and apps updated to patch known security vulnerabilities.",
      "Avoid connecting to public Wi-Fi for sensitive tasks like online banking. Use a VPN when necessary.",
      "Be cautious of unsolicited emails, calls, or messages asking for personal information.",
      "Regularly back up important files to an external drive or secure cloud service.",
      "Lock your devices with a PIN, fingerprint, or face recognition — even at home.",
    ],
  },
  {
    id: "r-2",
    title: "Phishing Prevention Tips",
    description: "Quick-reference tips to share with residents and family.",
    category: "Tip",
    readTime: "3 min read",
    content: [
      "Check the sender's email address carefully — scammers often use addresses that look almost right (e.g. support@paypa1.com).",
      "Never click links in unexpected emails. Instead, go directly to the website by typing the address in your browser.",
      "Legitimate organizations will never ask for your password, SIN, or banking details via email.",
      "Look for urgency tactics — phrases like 'Your account will be suspended in 24 hours' are red flags.",
      "Hover over links before clicking to preview the actual destination URL.",
      "When in doubt, call the organization directly using a number from their official website.",
      "Report suspicious emails to your email provider and to the Canadian Anti-Fraud Centre (1-888-495-8501).",
    ],
  },
  {
    id: "r-3",
    title: "Awareness Materials Package",
    description: "Print-ready posters and flyers for community spaces.",
    category: "Download",
    readTime: "4 files",
    content: [
      "Phishing Alert Poster (11×17, print-ready PDF) — designed for bulletin boards and community centres.",
      "Password Safety Flyer (letter size) — a simple one-pager for residents to take home.",
      "Scam Awareness Bookmark — compact handout suitable for library distribution.",
      "Community Cyber Safety Checklist — a fillable PDF for residents to self-assess their security habits.",
    ],
  },
  {
    id: "r-4",
    title: "Password Hygiene Checklist",
    description: "Step-by-step checklist to audit personal password habits.",
    category: "Guide",
    readTime: "4 min read",
    content: [
      "✓  Use at least 12 characters — mix uppercase, lowercase, numbers, and symbols.",
      "✓  Never reuse the same password across multiple accounts.",
      "✓  Use a reputable password manager (e.g. Bitwarden, 1Password) to store credentials securely.",
      "✓  Change passwords immediately if you suspect an account has been compromised.",
      "✓  Avoid using personal information (birthdays, pet names) that could be guessed from social media.",
      "✓  Enable 2FA wherever available — prefer an authenticator app over SMS.",
      "✓  Review and revoke access for unused third-party apps connected to your accounts.",
    ],
  },
  {
    id: "r-5",
    title: "AI Scam Red Flags",
    description: "Visual guide to spotting AI-generated content and scams.",
    category: "Tip",
    readTime: "4 min read",
    content: [
      "AI-generated voice clones can mimic a family member's voice. If someone calls asking for money urgently, hang up and call them back on a known number.",
      "Deepfake videos may show public figures making claims they never actually made. Verify through trusted news sources before sharing.",
      "AI-written scam emails are now grammatically perfect — don't rely on typos to spot fraud.",
      "Look for unnatural blinking, odd lighting on faces, or mismatched audio sync in videos — common signs of deepfakes.",
      "Be skeptical of AI chatbots on unknown websites asking for personal or financial details.",
      "Reverse-image search profile photos from unsolicited contacts to check if they are AI-generated or stolen.",
    ],
  },
  {
    id: "r-6",
    title: "Senior-Friendly Safety Booklet",
    description: "Large-print PDF booklet for older residents.",
    category: "Download",
    readTime: "3 files",
    content: [
      "Cyber Safety Basics Booklet (large print, 16pt font) — covers passwords, phishing, and safe browsing in plain language.",
      "Phone Scam Warning Card — wallet-sized card listing the most common phone scams targeting seniors.",
      "Emergency Contacts Sheet — a fillable page to record trusted contacts and official helpline numbers.",
    ],
  },
];

export const recentUpdates: Update[] = [
  { id: "u-1", title: "Cyber Scam Alert: New Phishing Tactics", type: "alert" },
  { id: "u-2", title: "AI Ethics Webinar Recap", type: "webinar" },
  { id: "u-3", title: "Tips for Secure Online Browsing", type: "tip" },
];
