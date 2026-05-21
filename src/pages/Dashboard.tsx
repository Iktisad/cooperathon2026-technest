import {
  Activity,
  AlertTriangle,
  BookOpen,
  Bot,
  CalendarDays,
  ChevronRight,
  KeyRound,
  Plus,
  ShieldAlert,
  Users,
  UserX,
  X,
} from "lucide-react";
import React, { useState, type FormEvent } from "react";
import { Link } from "react-router-dom";
import Select from "../components/Select";
import Card from "../components/Card";
import StatCard from "../components/StatCard";
import type { TrainingCategory } from "../types";
import {
  incidentReports,
  supportCases,
  trainingPrograms,
} from "../data/mockData";

const categoryIcon: Record<TrainingCategory, React.ElementType> = {
  Phishing: ShieldAlert,
  Passwords: KeyRound,
  "AI Safety": Bot,
  "Social Engineering": UserX,
  General: BookOpen,
};

const categoryBadge: Record<TrainingCategory, string> = {
  Phishing: "bg-orange-100 text-orange-700",
  Passwords: "bg-primary/15 text-secondary",
  "AI Safety": "bg-purple-100 text-purple-700",
  "Social Engineering": "bg-rose-100 text-rose-700",
  General: "bg-gray-100 text-gray-600",
};

const statusBadge: Record<string, string> = {
  New: "bg-orange-100 text-orange-700",
  "In Progress": "bg-primary/15 text-secondary",
  Resolved: "bg-emerald-100 text-emerald-700",
};

function NewReportModal({ onClose }: { onClose: () => void }) {
  const [resident, setResident] = useState("");
  const [issueType, setIssueType] = useState("Identity Theft");
  const [description, setDescription] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    alert(`Report logged for ${resident}: ${issueType}`);
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4 backdrop-blur-sm"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="w-full max-w-lg rounded-2xl bg-white shadow-xl">
        <div className="flex items-center justify-between border-b border-gray-100 px-6 py-4">
          <div className="text-base font-semibold text-secondary">New Incident Report</div>
          <button type="button" onClick={onClose} className="rounded-md p-1 text-gray-400 hover:bg-gray-100 hover:text-gray-600">
            <X className="h-4 w-4" />
          </button>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4 px-6 py-5">
          <div>
            <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-gray-500">Resident's Name</label>
            <input
              required
              value={resident}
              onChange={(e) => setResident(e.target.value)}
              placeholder="Full name"
              className="w-full rounded-md border border-gray-200 bg-gray-50 px-3 py-2 text-sm focus:border-primary focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/30"
            />
          </div>
          <div>
            <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-gray-500">Issue Type</label>
            <Select value={issueType} onChange={(e) => setIssueType(e.target.value)}>
              <option>Identity Theft</option>
              <option>Phishing Email</option>
              <option>Phone Scam</option>
              <option>Account Takeover</option>
              <option>Malware</option>
            </Select>
          </div>
          <div>
            <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-gray-500">Description</label>
            <textarea
              required
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={3}
              className="w-full rounded-md border border-gray-200 bg-gray-50 px-3 py-2 text-sm focus:border-primary focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/30"
            />
          </div>
          <div className="flex gap-3 pt-1">
            <button type="button" onClick={onClose} className="flex-1 rounded-lg border border-gray-200 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50">
              Cancel
            </button>
            <button type="submit" className="flex-1 rounded-lg bg-btn py-2 text-sm font-semibold text-white hover:bg-btn-hover">
              Submit Report
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

function Dashboard() {
  const [showReportModal, setShowReportModal] = useState(false);

  const newIncidents = incidentReports.filter((i) => i.status === "New").length;
  const activeCases = supportCases.length;
  const featuredTraining = trainingPrograms.find(
    (t) => t.category === "Phishing",
  );
  const featuredTrainings = trainingPrograms.slice(0, 3);

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
              {featuredTrainings.map((t) => {
                const Icon = categoryIcon[t.category];
                return (
                  <li
                    key={t.id}
                    className="flex items-start justify-between gap-3 rounded-lg border border-gray-100 bg-gray-50/50 p-3"
                  >
                    <div className="flex items-start gap-3 min-w-0">
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-primary/10 text-primary">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div className="min-w-0">
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className="text-sm font-semibold text-secondary leading-snug">
                            {t.title}
                          </span>
                          <span
                            className={`rounded-full px-2 py-0.5 text-[10px] font-semibold ${categoryBadge[t.category]}`}
                          >
                            {t.category}
                          </span>
                        </div>
                        <div className="mt-1.5 flex items-center gap-3 text-xs text-gray-500">
                          <span className="inline-flex items-center gap-1">
                            <CalendarDays className="h-3.5 w-3.5" />
                            {t.nextSession}
                          </span>
                          <span className="inline-flex items-center gap-1">
                            <Users className="h-3.5 w-3.5" />
                            {t.enrolled}/{t.capacity}
                          </span>
                        </div>
                      </div>
                    </div>
                    <button
                      type="button"
                      className="shrink-0 rounded-md bg-btn px-3 py-1.5 text-xs font-semibold text-tertiary hover:bg-btn-hover"
                    >
                      Schedule
                    </button>
                  </li>
                );
              })}
            </ul>
            <div className="mt-4 flex justify-center">
              <Link
                to="/training"
                className="inline-flex items-center gap-2 rounded-md bg-btn px-4 py-2 text-sm font-semibold text-tertiary hover:bg-btn-hover"
              >
                Browse All Training <ChevronRight className="h-4 w-4" />
              </Link>
            </div>
          </Card>

        </div>

        <div className="space-y-6">
          <Card
            title="Recent Incidents"
            action={
              <button
                type="button"
                onClick={() => setShowReportModal(true)}
                className="inline-flex items-center gap-1 rounded-md bg-btn px-3 py-1.5 text-xs font-semibold text-white hover:bg-btn-hover"
              >
                <Plus className="h-3.5 w-3.5" /> New Report
              </button>
            }
          >
            <ul className="divide-y divide-gray-100">
              {incidentReports.slice(0, 4).map((r) => (
                <li key={r.id} className="flex items-center justify-between gap-3 py-3 first:pt-0 last:pb-0">
                  <div className="min-w-0">
                    <div className="text-sm font-medium text-secondary truncate">{r.resident}</div>
                    <div className="text-xs text-gray-400">{r.issueType} · {r.date}</div>
                  </div>
                  <span className={`shrink-0 rounded-full px-2 py-0.5 text-[11px] font-semibold ${statusBadge[r.status]}`}>
                    {r.status}
                  </span>
                </li>
              ))}
            </ul>
            <div className="mt-3 border-t border-gray-100 pt-3">
              <Link
                to="/incidents"
                className="inline-flex items-center gap-1 text-xs font-medium text-gray-400 hover:text-secondary"
              >
                View all incidents <ChevronRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </Card>

        </div>
      </div>

      {showReportModal && (
        <NewReportModal onClose={() => setShowReportModal(false)} />
      )}
    </div>
  );
}

export default Dashboard;
