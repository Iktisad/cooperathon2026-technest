import { Plus } from "lucide-react";
import { useState, type FormEvent } from "react";
import Button from "../components/Button";
import Card from "../components/Card";
import PageHeader from "../components/PageHeader";
import { incidentReports } from "../data/mockData";
import type { IncidentStatus } from "../types";

const statusBadge: Record<IncidentStatus, string> = {
  New: "bg-orange-100 text-orange-700",
  "In Progress": "bg-primary/15 text-secondary",
  Resolved: "bg-emerald-100 text-emerald-700",
};

function IncidentReports() {
  const [showForm, setShowForm] = useState(false);
  const [resident, setResident] = useState("");
  const [issueType, setIssueType] = useState("Identity Theft");
  const [description, setDescription] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    alert(`Report logged for ${resident}: ${issueType}`);
    setResident("");
    setDescription("");
    setShowForm(false);
  };

  return (
    <div>
      <PageHeader
        title="Incident Reports"
        subtitle="Track and triage cyber incidents reported by community residents."
        action={
          <Button onClick={() => setShowForm((s) => !s)}>
            <Plus className="h-4 w-4" />
            {showForm ? "Close Form" : "New Report"}
          </Button>
        }
      />

      {showForm && (
        <div className="mb-6">
          <Card title="New Incident Report">
            <form className="grid grid-cols-1 gap-4 md:grid-cols-2" onSubmit={handleSubmit}>
              <div>
                <label className="mb-1 block text-sm font-medium text-secondary">
                  Resident's Name
                </label>
                <input
                  required
                  value={resident}
                  onChange={(e) => setResident(e.target.value)}
                  className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/40"
                />
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium text-secondary">
                  Issue Type
                </label>
                <select
                  value={issueType}
                  onChange={(e) => setIssueType(e.target.value)}
                  className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/40"
                >
                  <option>Identity Theft</option>
                  <option>Phishing Email</option>
                  <option>Phone Scam</option>
                  <option>Account Takeover</option>
                  <option>Malware</option>
                </select>
              </div>
              <div className="md:col-span-2">
                <label className="mb-1 block text-sm font-medium text-secondary">
                  Description
                </label>
                <textarea
                  required
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  rows={3}
                  className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/40"
                />
              </div>
              <div className="md:col-span-2">
                <Button type="submit" variant="secondary">
                  Submit Report
                </Button>
              </div>
            </form>
          </Card>
        </div>
      )}

      <Card>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="text-left text-xs font-semibold uppercase tracking-wide text-gray-500">
              <tr className="border-b border-gray-200">
                <th className="pb-3">Resident</th>
                <th className="pb-3">Issue Type</th>
                <th className="pb-3">Status</th>
                <th className="pb-3">Date</th>
                <th className="pb-3">Description</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {incidentReports.map((r) => (
                <tr key={r.id} className="text-secondary">
                  <td className="py-3 font-medium">{r.resident}</td>
                  <td className="py-3">{r.issueType}</td>
                  <td className="py-3">
                    <span
                      className={`rounded-full px-2 py-0.5 text-[11px] font-semibold ${statusBadge[r.status]}`}
                    >
                      {r.status}
                    </span>
                  </td>
                  <td className="py-3 text-gray-600">{r.date}</td>
                  <td className="py-3 text-gray-600 max-w-md">
                    {r.description}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}

export default IncidentReports;
