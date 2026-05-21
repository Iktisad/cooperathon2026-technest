import { CalendarDays, Users } from "lucide-react";
import { useState } from "react";
import Button from "../components/Button";
import Card from "../components/Card";
import PageHeader from "../components/PageHeader";
import { trainingPrograms } from "../data/mockData";
import type { TrainingCategory } from "../types";

const filters: ("All" | TrainingCategory)[] = [
  "All",
  "Phishing",
  "Passwords",
  "AI Safety",
  "Social Engineering",
  "General",
];

const categoryBadge: Record<TrainingCategory, string> = {
  Phishing: "bg-orange-100 text-orange-700",
  Passwords: "bg-primary/15 text-secondary",
  "AI Safety": "bg-purple-100 text-purple-700",
  "Social Engineering": "bg-emerald-100 text-emerald-700",
  General: "bg-gray-100 text-gray-700",
};

function TrainingPrograms() {
  const [filter, setFilter] = useState<(typeof filters)[number]>("All");

  const visible = trainingPrograms.filter(
    (p) => filter === "All" || p.category === filter,
  );

  return (
    <div>
      <PageHeader
        title="Training Programs"
        subtitle="Schedule, browse, and manage cyber-awareness workshops for your community."
      />

      <div className="mb-5 flex flex-wrap gap-2">
        {filters.map((f) => (
          <button
            key={f}
            type="button"
            onClick={() => setFilter(f)}
            className={`rounded-full px-4 py-1.5 text-xs font-medium transition-colors ${
              filter === f
                ? "bg-btn text-tertiary"
                : "bg-tertiary text-gray-700 hover:bg-gray-50 border border-gray-200"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
        {visible.map((p) => (
          <Card key={p.id}>
            <div className="flex flex-col gap-3">
              <div className="flex items-start justify-between">
                <h3 className="text-base font-semibold text-secondary">
                  {p.title}
                </h3>
                <span
                  className={`rounded-full px-2 py-0.5 text-[10px] font-semibold ${categoryBadge[p.category]}`}
                >
                  {p.category}
                </span>
              </div>
              <p className="text-sm text-gray-600">{p.description}</p>
              <div className="mt-2 flex items-center gap-4 text-xs text-gray-500">
                <span className="inline-flex items-center gap-1">
                  <CalendarDays className="h-4 w-4" />
                  {p.nextSession}
                </span>
                <span className="inline-flex items-center gap-1">
                  <Users className="h-4 w-4" />
                  {p.enrolled}/{p.capacity}
                </span>
              </div>
              <div className="mt-2">
                <Button>Schedule Session</Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default TrainingPrograms;
