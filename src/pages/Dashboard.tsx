import {
  Activity,
  AlertTriangle,
  CalendarDays,
  ChevronRight,
  Download,
  FileText,
  Lightbulb,
  Megaphone,
  Mic,
  Users,
} from "lucide-react";
import { useState, type FormEvent } from "react";
import Card from "../components/Card";
import StatCard from "../components/StatCard";
import {
  incidentReports,
  recentUpdates,
  resources,
  supportCases,
  trainingPrograms,
} from "../data/mockData";

const updateIcon = {
  alert: Megaphone,
  webinar: Mic,
  tip: Lightbulb,
} as const;

const resourceIcon = {
  Guide: FileText,
  Tip: Lightbulb,
  Download: Download,
} as const;

function Dashboard() {
  const [residentName, setResidentName] = useState("John Doe");
  const [issueType, setIssueType] = useState("Identity Theft");
  const [description, setDescription] = useState(
    "Resident's account was compromised. Needs assistance with recovery.",
  );

  const newIncidents = incidentReports.filter((i) => i.status === "New").length;
  const activeCases = supportCases.length;
  const featuredTraining = trainingPrograms.find(
    (t) => t.category === "Phishing",
  );
  const featuredTrainings = trainingPrograms.slice(0, 3);
  const featuredResources = resources.slice(0, 3);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    alert(`Incident report submitted for ${residentName}`);
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
        <StatCard
          title="Cyber Audit Status"
          icon={Activity}
          accent="primary"
          actionLabel="View Report"
          to="/settings"
        >
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            <span className="text-xl font-bold text-secondary">In Progress</span>
          </div>
          <div className="mt-1 text-xs text-gray-500">
            3 of 5 sections complete
          </div>
        </StatCard>

        <StatCard
          title="Upcoming Training"
          icon={CalendarDays}
          accent="primary"
          actionLabel="Manage Schedule"
          to="/training"
        >
          <div className="text-sm font-semibold text-secondary leading-tight">
            {featuredTraining?.title ?? "Phishing Awareness Workshop"}
          </div>
          <div className="mt-1 text-xs text-gray-500">
            {featuredTraining?.nextSession ?? "April 25, 2:00 PM"}
          </div>
        </StatCard>

        <StatCard
          title="Incident Reports"
          icon={AlertTriangle}
          accent="orange"
          actionLabel="View Reports"
          to="/incidents"
        >
          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-bold text-secondary tracking-tight">
              {newIncidents}
            </span>
            <span className="text-xs font-medium text-orange-600">
              New
            </span>
          </div>
          <div className="mt-1 text-xs text-gray-500">
            Awaiting triage
          </div>
        </StatCard>

        <StatCard
          title="Community Support"
          icon={Users}
          accent="emerald"
          actionLabel="View Cases"
          to="/support"
        >
          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-bold text-secondary tracking-tight">
              {activeCases}
            </span>
            <span className="text-xs font-medium text-emerald-600">
              Active
            </span>
          </div>
          <div className="mt-1 text-xs text-gray-500">
            Cases currently open
          </div>
        </StatCard>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <div className="space-y-6">
          <Card title="Available Training Programs">
            <ul className="space-y-3">
              {featuredTrainings.map((t) => (
                <li
                  key={t.id}
                  className="flex items-center justify-between rounded-md border border-gray-100 p-3"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-md bg-primary/10 text-primary">
                      <FileText className="h-5 w-5" />
                    </div>
                    <span className="text-sm font-medium text-secondary">
                      {t.title}
                    </span>
                  </div>
                  <button
                    type="button"
                    className="rounded-md bg-secondary px-3 py-1.5 text-xs font-semibold text-tertiary hover:bg-secondary/90"
                  >
                    Schedule Session
                  </button>
                </li>
              ))}
            </ul>
            <div className="mt-4 flex justify-center">
              <button
                type="button"
                className="inline-flex items-center gap-2 rounded-md bg-secondary px-4 py-2 text-sm font-semibold text-tertiary hover:bg-secondary/90"
              >
                Browse All Training <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </Card>

          <Card title="Resource Library">
            <ul className="divide-y divide-gray-100">
              {featuredResources.map((r) => {
                const Icon = resourceIcon[r.category];
                return (
                  <li
                    key={r.id}
                    className="flex items-center justify-between py-3 first:pt-0 last:pb-0"
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary/10 text-primary">
                        <Icon className="h-4 w-4" />
                      </div>
                      <span className="text-sm font-medium text-secondary">
                        {r.title}
                      </span>
                    </div>
                    <ChevronRight className="h-4 w-4 text-gray-400" />
                  </li>
                );
              })}
            </ul>
          </Card>
        </div>

        <div className="space-y-6">
          <Card title="Report a Community Incident">
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label className="mb-1 block text-sm font-medium text-secondary">
                  Resident's Name:
                </label>
                <select
                  value={residentName}
                  onChange={(e) => setResidentName(e.target.value)}
                  className="w-full rounded-md border border-gray-300 bg-tertiary px-3 py-2 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/40"
                >
                  <option>John Doe</option>
                  <option>Marie Lavoie</option>
                  <option>Samir Khan</option>
                  <option>Elena Roy</option>
                  <option>Daniel Smith</option>
                </select>
              </div>

              <div>
                <label className="mb-1 block text-sm font-medium text-secondary">
                  Issue Type:
                </label>
                <select
                  value={issueType}
                  onChange={(e) => setIssueType(e.target.value)}
                  className="w-full rounded-md border border-gray-300 bg-tertiary px-3 py-2 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/40"
                >
                  <option>Identity Theft</option>
                  <option>Phishing Email</option>
                  <option>Phone Scam</option>
                  <option>Account Takeover</option>
                  <option>Malware</option>
                </select>
              </div>

              <div>
                <label className="mb-1 block text-sm font-medium text-secondary">
                  Description:
                </label>
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  rows={3}
                  className="w-full rounded-md border border-gray-300 bg-tertiary px-3 py-2 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/40"
                />
              </div>

              <button
                type="submit"
                className="rounded-md bg-secondary px-5 py-2 text-sm font-semibold text-tertiary hover:bg-secondary/90"
              >
                Submit Report
              </button>
            </form>
          </Card>

          <Card title="Recent Updates">
            <ul className="divide-y divide-gray-100">
              {recentUpdates.map((u) => {
                const Icon = updateIcon[u.type];
                return (
                  <li
                    key={u.id}
                    className="flex items-center gap-3 py-3 first:pt-0 last:pb-0"
                  >
                    <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary/10 text-primary">
                      <Icon className="h-4 w-4" />
                    </div>
                    <span className="text-sm font-medium text-secondary">
                      {u.title}
                    </span>
                  </li>
                );
              })}
            </ul>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
