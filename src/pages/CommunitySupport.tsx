import { Check, Clock, UserCircle2, X } from "lucide-react";
import { useState } from "react";
import Select from "../components/Select";
import Button from "../components/Button";
import Card from "../components/Card";
import PageHeader from "../components/PageHeader";
import { supportCases } from "../data/mockData";
import type { CasePriority, SupportCase } from "../types";

const priorityBadge: Record<CasePriority, string> = {
  High: "bg-orange-100 text-orange-700",
  Medium: "bg-primary/15 text-secondary",
  Low: "bg-emerald-100 text-emerald-700",
};

const statusOptions = ["New", "In Progress", "Resolved"] as const;
type CaseStatus = (typeof statusOptions)[number];

const statusBadge: Record<CaseStatus, string> = {
  New: "bg-orange-100 text-orange-700",
  "In Progress": "bg-primary/15 text-secondary",
  Resolved: "bg-emerald-100 text-emerald-700",
};

const defaultNotes: Record<string, string> = {
  "Identity Theft":
    "Resident reported unauthorized use of their SIN and banking credentials. Initial triage complete. Advised to contact Equifax and freeze credit. Follow-up call scheduled.",
  "Account Takeover":
    "Social media account compromised via credential stuffing. Password reset completed. 2FA enabled on primary accounts. Monitoring for further activity.",
  "Malware Cleanup":
    "Resident's laptop showed signs of adware and a keylogger. Ran Malwarebytes scan — 14 threats removed. System restored from backup. Browser extensions audited.",
  "Phone Scam Follow-up":
    "Resident received a CRA impersonation call. No financial loss reported. Educated on common phone scam patterns. Case escalated for community awareness bulletin.",
  "Phishing Triage":
    "Spoofed bank email intercepted before credentials were entered. Email headers analyzed and flagged. ISP notified. Resident briefed on identifying future attempts.",
};

const councilMembers = ["Priya Singh", "Marc Tremblay", "Lucie Bernard", "Jean-Paul Côté"];

// ── Open Case Modal ──────────────────────────────────────────────────────────

function OpenCaseModal({ c, onClose }: { c: SupportCase; onClose: () => void }) {
  const [status, setStatus] = useState<CaseStatus>("In Progress");
  const [notes, setNotes] = useState(defaultNotes[c.issueType] ?? "No notes yet.");
  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    setSaved(true);
    setTimeout(onClose, 1200);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4 backdrop-blur-sm"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="w-full max-w-lg rounded-2xl bg-white shadow-xl">
        {saved ? (
          <div className="flex flex-col items-center gap-4 p-8 text-center">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-emerald-50 ring-1 ring-emerald-200">
              <Check className="h-7 w-7 text-emerald-600" />
            </div>
            <div className="text-base font-semibold text-secondary">Case Updated</div>
          </div>
        ) : (
          <>
            <div className="flex items-start justify-between border-b border-gray-100 px-6 py-4">
              <div>
                <div className="flex items-center gap-2">
                  <div className="text-base font-semibold text-secondary">{c.resident}</div>
                  <span className={`rounded-full px-2 py-0.5 text-[10px] font-semibold ${priorityBadge[c.priority]}`}>
                    {c.priority}
                  </span>
                </div>
                <div className="mt-0.5 text-xs text-gray-500">{c.issueType}</div>
              </div>
              <button type="button" onClick={onClose} className="rounded-md p-1 text-gray-400 hover:bg-gray-100 hover:text-gray-600">
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="space-y-4 px-6 py-5">
              <div className="flex items-center gap-4 text-xs text-gray-500">
                <span className="inline-flex items-center gap-1.5">
                  <UserCircle2 className="h-4 w-4" /> {c.assignedTo}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Clock className="h-4 w-4" /> Updated {c.lastUpdate}
                </span>
              </div>

              <div>
                <div className="mb-2 text-xs font-semibold uppercase tracking-wide text-gray-500">Status</div>
                <div className="flex gap-2">
                  {statusOptions.map((s) => (
                    <button
                      key={s}
                      type="button"
                      onClick={() => setStatus(s)}
                      className={`rounded-full px-3 py-1 text-xs font-semibold transition-colors ${
                        status === s ? statusBadge[s] : "bg-gray-100 text-gray-500 hover:bg-gray-200"
                      }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <div className="mb-1.5 text-xs font-semibold uppercase tracking-wide text-gray-500">Case Notes</div>
                <textarea
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  rows={4}
                  className="w-full rounded-md border border-gray-200 bg-gray-50 px-3 py-2 text-sm focus:border-primary focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/30"
                />
              </div>

              <div className="flex gap-3 pt-1">
                <button type="button" onClick={onClose} className="flex-1 rounded-lg border border-gray-200 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50">
                  Cancel
                </button>
                <button type="button" onClick={handleSave} className="flex-1 rounded-lg bg-btn py-2 text-sm font-semibold text-white hover:bg-btn-hover">
                  Save & Close
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

// ── Reassign Modal ───────────────────────────────────────────────────────────

function ReassignModal({
  c,
  onClose,
  onConfirm,
}: {
  c: SupportCase & { assignedTo: string };
  onClose: () => void;
  onConfirm: (newAssignee: string) => void;
}) {
  const [selected, setSelected] = useState(c.assignedTo);
  const [reason, setReason] = useState("");

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4 backdrop-blur-sm"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="w-full max-w-md rounded-2xl bg-white shadow-xl">
        <div className="flex items-start justify-between border-b border-gray-100 px-6 py-4">
          <div>
            <div className="text-base font-semibold text-secondary">Reassign Case</div>
            <div className="mt-0.5 text-xs text-gray-500">{c.resident} — {c.issueType}</div>
          </div>
          <button type="button" onClick={onClose} className="rounded-md p-1 text-gray-400 hover:bg-gray-100 hover:text-gray-600">
            <X className="h-4 w-4" />
          </button>
        </div>

        <div className="space-y-4 px-6 py-5">
          <div>
            <div className="mb-1 text-xs font-semibold uppercase tracking-wide text-gray-500">Currently Assigned</div>
            <div className="text-sm font-medium text-secondary">{c.assignedTo}</div>
          </div>

          <div>
            <div className="mb-1.5 text-xs font-semibold uppercase tracking-wide text-gray-500">Assign To</div>
            <Select
              value={selected}
              onChange={(e) => setSelected(e.target.value)}
              searchable
            >
              {councilMembers.map((m) => (
                <option key={m}>{m}</option>
              ))}
            </Select>
          </div>

          <div>
            <div className="mb-1.5 text-xs font-semibold uppercase tracking-wide text-gray-500">
              Reason{" "}
              <span className="normal-case font-normal text-gray-400">(optional)</span>
            </div>
            <textarea
              value={reason}
              onChange={(e) => setReason(e.target.value)}
              rows={2}
              placeholder="e.g. Capacity issue, better expertise match…"
              className="w-full rounded-md border border-gray-200 bg-gray-50 px-3 py-2 text-sm focus:border-primary focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/30"
            />
          </div>

          <div className="flex gap-3 pt-1">
            <button type="button" onClick={onClose} className="flex-1 rounded-lg border border-gray-200 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50">
              Cancel
            </button>
            <button
              type="button"
              disabled={selected === c.assignedTo}
              onClick={() => { onConfirm(selected); onClose(); }}
              className="flex-1 rounded-lg bg-btn py-2 text-sm font-semibold text-white hover:bg-btn-hover disabled:cursor-not-allowed disabled:opacity-40"
            >
              Confirm Reassignment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// ── Page ─────────────────────────────────────────────────────────────────────

function CommunitySupport() {
  const [openCase, setOpenCase] = useState<SupportCase | null>(null);
  const [reassignCase, setReassignCase] = useState<(SupportCase & { assignedTo: string }) | null>(null);
  const [assignees, setAssignees] = useState<Record<string, string>>({});

  return (
    <div>
      <PageHeader
        title="Community Support"
        subtitle="Active resident support cases assigned to council members."
      />

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
        {supportCases.map((c) => {
          const assignedTo = assignees[c.id] ?? c.assignedTo;
          return (
            <Card key={c.id}>
              <div className="flex flex-col gap-3">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-base font-semibold text-secondary">{c.resident}</h3>
                    <p className="text-sm text-gray-600">{c.issueType}</p>
                  </div>
                  <span className={`rounded-full px-2 py-0.5 text-[10px] font-semibold ${priorityBadge[c.priority]}`}>
                    {c.priority}
                  </span>
                </div>
                <div className="flex flex-col gap-1 text-xs text-gray-500">
                  <span className="inline-flex items-center gap-2">
                    <UserCircle2 className="h-4 w-4" />
                    Assigned: {assignedTo}
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    Updated {c.lastUpdate}
                  </span>
                </div>
                <div className="mt-1 flex gap-2">
                  <Button size="sm" onClick={() => setOpenCase({ ...c, assignedTo })}>
                    Open Case
                  </Button>
                  <Button size="sm" variant="ghost" onClick={() => setReassignCase({ ...c, assignedTo })}>
                    Reassign
                  </Button>
                </div>
              </div>
            </Card>
          );
        })}
      </div>

      {openCase && (
        <OpenCaseModal c={openCase} onClose={() => setOpenCase(null)} />
      )}

      {reassignCase && (
        <ReassignModal
          c={reassignCase}
          onClose={() => setReassignCase(null)}
          onConfirm={(newAssignee) =>
            setAssignees((prev) => ({ ...prev, [reassignCase.id]: newAssignee }))
          }
        />
      )}
    </div>
  );
}

export default CommunitySupport;
