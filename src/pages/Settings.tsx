import { useState } from "react";
import Button from "../components/Button";
import Card from "../components/Card";
import PageHeader from "../components/PageHeader";
import { council } from "../data/mockData";

function Toggle({
  label,
  description,
  defaultOn = false,
}: {
  label: string;
  description: string;
  defaultOn?: boolean;
}) {
  const [on, setOn] = useState(defaultOn);
  return (
    <div className="flex items-start justify-between gap-4 py-3">
      <div>
        <div className="text-sm font-medium text-secondary">{label}</div>
        <div className="text-xs text-gray-500">{description}</div>
      </div>
      <button
        type="button"
        onClick={() => setOn((v) => !v)}
        className={`relative h-6 w-11 flex-shrink-0 rounded-full transition-colors ${
          on ? "bg-primary" : "bg-gray-300"
        }`}
        aria-pressed={on}
      >
        <span
          className={`absolute top-0.5 h-5 w-5 rounded-full bg-tertiary shadow transition-transform ${
            on ? "translate-x-5" : "translate-x-0.5"
          }`}
        />
      </button>
    </div>
  );
}

function Settings() {
  return (
    <div>
      <PageHeader
        title="Settings"
        subtitle="Manage your council profile, notifications, and account."
      />

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <Card title="Council Profile">
          <div className="space-y-4">
            <div>
              <label className="mb-1 block text-xs font-semibold uppercase tracking-wide text-gray-500">
                Council Name
              </label>
              <input
                defaultValue={council.name}
                className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/40"
              />
            </div>
            <div>
              <label className="mb-1 block text-xs font-semibold uppercase tracking-wide text-gray-500">
                Region
              </label>
              <input
                defaultValue={council.region}
                className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/40"
              />
            </div>
            <div>
              <label className="mb-1 block text-xs font-semibold uppercase tracking-wide text-gray-500">
                Contact Email
              </label>
              <input
                type="email"
                defaultValue={council.contactEmail}
                className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/40"
              />
            </div>
            <Button>Save Changes</Button>
          </div>
        </Card>

        <Card title="Notification Preferences">
          <div className="divide-y divide-gray-100">
            <Toggle
              label="New incident reports"
              description="Email me when a resident files a new report."
              defaultOn
            />
            <Toggle
              label="Training reminders"
              description="Notify me 24h before a scheduled session."
              defaultOn
            />
            <Toggle
              label="Weekly digest"
              description="Send a summary of community activity each Monday."
            />
            <Toggle
              label="TECH-NEST product updates"
              description="Occasional emails about new features and resources."
            />
          </div>
        </Card>

        <Card title="Account" className="lg:col-span-2">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-sm font-medium text-secondary">
                Signed in as
              </div>
              <div className="text-xs text-gray-600">{council.contactEmail}</div>
            </div>
            <Button variant="secondary">Log Out</Button>
          </div>
        </Card>
      </div>
    </div>
  );
}

export default Settings;
