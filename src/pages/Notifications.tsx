import { Lightbulb, Megaphone, Mic } from "lucide-react";
import PageHeader from "../components/PageHeader";
import { recentUpdates } from "../data/mockData";

const updateIcon = {
  alert: Megaphone,
  webinar: Mic,
  tip: Lightbulb,
} as const;

const updateLabel = {
  alert: "Alert",
  webinar: "Webinar",
  tip: "Tip",
} as const;

const updateBadge = {
  alert: "bg-orange-100 text-orange-700",
  webinar: "bg-primary/15 text-secondary",
  tip: "bg-gray-100 text-gray-600",
} as const;

function Notifications() {
  return (
    <div>
      <PageHeader
        title="Notifications"
        subtitle="Stay up to date with alerts, webinars, and tips for your community."
      />

      <div className="max-w-2xl space-y-3">
        {recentUpdates.map((u) => {
          const Icon = updateIcon[u.type];
          return (
            <div
              key={u.id}
              className="flex items-start gap-4 rounded-xl bg-white p-4 ring-1 ring-gray-100 shadow-sm"
            >
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-primary/10 text-primary">
                <Icon className="h-5 w-5" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-semibold text-secondary">
                    {u.title}
                  </span>
                  <span className={`rounded-full px-2 py-0.5 text-[10px] font-semibold ${updateBadge[u.type]}`}>
                    {updateLabel[u.type]}
                  </span>
                </div>
                <div className="mt-0.5 text-xs text-gray-400">Just now</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Notifications;
