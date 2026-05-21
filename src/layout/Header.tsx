import { Bell, CircleUserRound, Lightbulb, Megaphone, Mic, ShieldCheck } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../auth/AuthContext";
import { council, recentUpdates } from "../data/mockData";

const updateIcon = { alert: Megaphone, webinar: Mic, tip: Lightbulb } as const;
const updateBadge = {
  alert: "bg-orange-100 text-orange-700",
  webinar: "bg-primary/15 text-secondary",
  tip: "bg-gray-100 text-gray-600",
} as const;

function Header() {
  const { signOut } = useAuth();
  const navigate = useNavigate();
  const [notifOpen, setNotifOpen] = useState(false);
  const notifRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onClickOutside(e: MouseEvent) {
      if (notifRef.current && !notifRef.current.contains(e.target as Node)) {
        setNotifOpen(false);
      }
    }
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, []);

  const handleLogOut = () => {
    signOut();
    navigate("/login", { replace: true });
  };

  return (
    <header className="bg-secondary text-tertiary">
      <div className="flex items-center justify-between px-8 py-4">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/15 ring-1 ring-primary/40">
            <ShieldCheck className="h-6 w-6 text-primary" strokeWidth={2.5} />
          </div>
          <div className="leading-tight">
            <div className="text-xl font-bold tracking-wide">
              TECH-NEST <span className="italic font-semibold text-primary">Care</span>
            </div>
            <div className="text-xs text-tertiary/70">Community Cyber Support</div>
          </div>
        </div>

        <div className="flex items-center gap-6">
          <div className="text-sm font-medium text-tertiary/90">
            Welcome, {council.name}
          </div>

          <div ref={notifRef} className="relative">
            <button
              type="button"
              onClick={() => setNotifOpen((v) => !v)}
              className="relative rounded-full p-2 hover:bg-white/10"
              aria-label="Notifications"
            >
              <Bell className="h-5 w-5" />
              {council.notifications > 0 && (
                <span className="absolute -top-0.5 -right-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-orange-500 text-[10px] font-bold text-white">
                  {council.notifications}
                </span>
              )}
            </button>

            {notifOpen && (
              <div className="absolute right-0 top-full mt-2 w-80 rounded-xl bg-white shadow-xl ring-1 ring-gray-200 z-50">
                <div className="border-b border-gray-100 px-4 py-3">
                  <div className="text-sm font-semibold text-secondary">Notifications</div>
                </div>
                <ul className="divide-y divide-gray-100 py-1">
                  {recentUpdates.map((u) => {
                    const Icon = updateIcon[u.type];
                    return (
                      <li key={u.id} className="flex items-start gap-3 px-4 py-3 hover:bg-gray-50">
                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-primary/10 text-primary">
                          <Icon className="h-4 w-4" />
                        </div>
                        <div>
                          <div className="text-sm font-medium text-secondary leading-snug">{u.title}</div>
                          <span className={`mt-1 inline-block rounded-full px-2 py-0.5 text-[10px] font-semibold ${updateBadge[u.type]}`}>
                            {u.type.charAt(0).toUpperCase() + u.type.slice(1)}
                          </span>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
            )}
          </div>

          <div
            className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-white/30 bg-white/5"
            aria-label="Account"
          >
            <CircleUserRound className="h-7 w-7 text-tertiary/90" strokeWidth={1.75} />
          </div>

          <button
            type="button"
            onClick={handleLogOut}
            className="rounded-md bg-primary px-4 py-2 text-sm font-semibold text-secondary hover:bg-primary-hover"
          >
            Log Out
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
