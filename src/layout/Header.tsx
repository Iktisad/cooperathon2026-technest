import { Bell, CircleUserRound, ShieldCheck } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../auth/AuthContext";
import { council } from "../data/mockData";

function Header() {
  const { signOut } = useAuth();
  const navigate = useNavigate();

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

          <button
            type="button"
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
