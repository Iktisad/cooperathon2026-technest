import { Download, FileText, Lightbulb, type LucideIcon } from "lucide-react";
import Button from "../components/Button";
import Card from "../components/Card";
import PageHeader from "../components/PageHeader";
import { resources } from "../data/mockData";
import type { ResourceCategory } from "../types";

const categoryIcon: Record<ResourceCategory, LucideIcon> = {
  Guide: FileText,
  Tip: Lightbulb,
  Download: Download,
};

const categoryBadge: Record<ResourceCategory, string> = {
  Guide: "bg-primary/15 text-secondary",
  Tip: "bg-orange-100 text-orange-700",
  Download: "bg-emerald-100 text-emerald-700",
};

function Resources() {
  return (
    <div>
      <PageHeader
        title="Resource Library"
        subtitle="Guides, tips, and printable materials to share with residents."
      />

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
        {resources.map((r) => {
          const Icon = categoryIcon[r.category];
          return (
            <Card key={r.id}>
              <div className="flex flex-col gap-3">
                <div className="flex items-start justify-between">
                  <div className="flex h-10 w-10 items-center justify-center rounded-md bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" />
                  </div>
                  <span
                    className={`rounded-full px-2 py-0.5 text-[10px] font-semibold ${categoryBadge[r.category]}`}
                  >
                    {r.category}
                  </span>
                </div>
                <div>
                  <h3 className="text-base font-semibold text-secondary">
                    {r.title}
                  </h3>
                  <p className="mt-1 text-sm text-gray-600">{r.description}</p>
                </div>
                <div className="mt-1">
                  <Button size="sm">
                    {r.category === "Download" ? "Download" : "View"}
                  </Button>
                </div>
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
}

export default Resources;
