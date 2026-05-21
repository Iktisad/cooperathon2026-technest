import { Clock, UserCircle2 } from "lucide-react";
import Button from "../components/Button";
import Card from "../components/Card";
import PageHeader from "../components/PageHeader";
import { supportCases } from "../data/mockData";
import type { CasePriority } from "../types";

const priorityBadge: Record<CasePriority, string> = {
  High: "bg-orange-100 text-orange-700",
  Medium: "bg-primary/15 text-secondary",
  Low: "bg-emerald-100 text-emerald-700",
};

function CommunitySupport() {
  return (
    <div>
      <PageHeader
        title="Community Support"
        subtitle="Active resident support cases assigned to council members."
      />

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
        {supportCases.map((c) => (
          <Card key={c.id}>
            <div className="flex flex-col gap-3">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-base font-semibold text-secondary">
                    {c.resident}
                  </h3>
                  <p className="text-sm text-gray-600">{c.issueType}</p>
                </div>
                <span
                  className={`rounded-full px-2 py-0.5 text-[10px] font-semibold ${priorityBadge[c.priority]}`}
                >
                  {c.priority}
                </span>
              </div>
              <div className="flex flex-col gap-1 text-xs text-gray-500">
                <span className="inline-flex items-center gap-2">
                  <UserCircle2 className="h-4 w-4" />
                  Assigned: {c.assignedTo}
                </span>
                <span className="inline-flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  Updated {c.lastUpdate}
                </span>
              </div>
              <div className="mt-1 flex gap-2">
                <Button size="sm">Open Case</Button>
                <Button size="sm" variant="ghost">
                  Reassign
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default CommunitySupport;
