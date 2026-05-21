import { ArrowLeft, ShieldCheck } from "lucide-react";
import {
  Link,
  Outlet,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { useAuth } from "../auth/AuthContext";

function CustomerLayout() {
  const { signOut } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogOut = () => {
    signOut();
    navigate("/login", { replace: true });
  };

  const isHome = location.pathname === "/customer";

  return (
    <div className="flex min-h-screen flex-col bg-gray-100">
      <header className="bg-secondary text-tertiary">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <Link to="/customer" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/15 ring-1 ring-primary/40">
              <ShieldCheck
                className="h-6 w-6 text-primary"
                strokeWidth={2.5}
              />
            </div>
            <div className="leading-tight">
              <div className="text-lg font-bold">
                TECH-NEST{" "}
                <span className="italic text-primary">Care</span>
              </div>
              <div className="text-xs text-tertiary/70">
                Community Cyber Support
              </div>
            </div>
          </Link>

          <button
            type="button"
            onClick={handleLogOut}
            className="rounded-md bg-primary px-4 py-2 text-sm font-semibold text-secondary hover:bg-primary-hover"
          >
            Log Out
          </button>
        </div>
      </header>

      <main className="mx-auto w-full max-w-3xl flex-1 px-6 py-10">
        {!isHome && (
          <Link
            to="/customer"
            className="mb-6 inline-flex items-center gap-1.5 text-sm font-medium text-gray-600 hover:text-secondary"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to home
          </Link>
        )}
        <Outlet />
      </main>
    </div>
  );
}

export default CustomerLayout;
