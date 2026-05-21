import { Clock, Download, FileText, Lightbulb, X, type LucideIcon } from "lucide-react";
import { useState } from "react";
import Button from "../components/Button";
import Card from "../components/Card";
import PageHeader from "../components/PageHeader";
import { resources } from "../data/mockData";
import type { Resource, ResourceCategory } from "../types";

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

// ── View Modal ───────────────────────────────────────────────────────────────

function ResourceModal({ r, onClose }: { r: Resource; onClose: () => void }) {
  const Icon = categoryIcon[r.category];
  const isDownload = r.category === "Download";

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4 backdrop-blur-sm"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="w-full max-w-lg rounded-2xl bg-white shadow-xl flex flex-col max-h-[85vh]">
        {/* Header */}
        <div className="flex items-start justify-between border-b border-gray-100 px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-primary/10 text-primary">
              <Icon className="h-5 w-5" />
            </div>
            <div>
              <div className="text-base font-semibold text-secondary leading-snug">{r.title}</div>
              <div className="mt-0.5 flex items-center gap-2">
                <span className={`rounded-full px-2 py-0.5 text-[10px] font-semibold ${categoryBadge[r.category]}`}>
                  {r.category}
                </span>
                {r.readTime && (
                  <span className="inline-flex items-center gap-1 text-[11px] text-gray-400">
                    <Clock className="h-3 w-3" /> {r.readTime}
                  </span>
                )}
              </div>
            </div>
          </div>
          <button type="button" onClick={onClose} className="rounded-md p-1 text-gray-400 hover:bg-gray-100 hover:text-gray-600">
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Body */}
        <div className="overflow-y-auto px-6 py-5 space-y-4">
          <p className="text-sm text-gray-500">{r.description}</p>

          <div className="space-y-2">
            {r.content.map((line, i) => (
              <div
                key={i}
                className={`rounded-lg px-4 py-3 text-sm text-secondary ${
                  isDownload ? "bg-gray-50 ring-1 ring-gray-100" : "flex gap-2 bg-gray-50"
                }`}
              >
                {!isDownload && (
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" />
                )}
                <span>{line}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-gray-100 px-6 py-4">
          {isDownload ? (
            <button
              type="button"
              onClick={onClose}
              className="inline-flex items-center gap-2 rounded-lg bg-btn px-5 py-2 text-sm font-semibold text-white hover:bg-btn-hover"
            >
              <Download className="h-4 w-4" /> Download Package
            </button>
          ) : (
            <button
              type="button"
              onClick={onClose}
              className="rounded-lg border border-gray-200 px-5 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50"
            >
              Close
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

// ── Page ─────────────────────────────────────────────────────────────────────

function Resources() {
  const [viewing, setViewing] = useState<Resource | null>(null);

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
                  <span className={`rounded-full px-2 py-0.5 text-[10px] font-semibold ${categoryBadge[r.category]}`}>
                    {r.category}
                  </span>
                </div>
                <div>
                  <h3 className="text-base font-semibold text-secondary">{r.title}</h3>
                  <p className="mt-1 text-sm text-gray-600">{r.description}</p>
                </div>
                {r.readTime && (
                  <div className="inline-flex items-center gap-1 text-xs text-gray-400">
                    <Clock className="h-3.5 w-3.5" /> {r.readTime}
                  </div>
                )}
                <div className="mt-1">
                  <Button size="sm" onClick={() => setViewing(r)}>
                    {r.category === "Download" ? "View Files" : "View"}
                  </Button>
                </div>
              </div>
            </Card>
          );
        })}
      </div>

      {viewing && <ResourceModal r={viewing} onClose={() => setViewing(null)} />}
    </div>
  );
}

export default Resources;
