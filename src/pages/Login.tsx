import { ArrowRight, ShieldCheck, User, Users } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useAuth, type Role } from "../auth/AuthContext";

function Login() {
  const { signIn } = useAuth();
  const navigate = useNavigate();

  const handleSignIn = (role: Role) => {
    signIn(role);
    navigate(role === "admin" ? "/" : "/customer", { replace: true });
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-secondary via-secondary to-slate-800 px-4 py-12">
      <div className="mx-auto max-w-4xl">
        <div className="mb-10 flex flex-col items-center text-center">
          <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/15 ring-1 ring-primary/40">
            <ShieldCheck className="h-8 w-8 text-primary" strokeWidth={2.25} />
          </div>
          <h1 className="text-3xl font-bold text-tertiary">
            TECH-NEST <span className="italic text-primary">Care</span>
          </h1>
          <p className="mt-1 text-sm text-tertiary/70">
            Community Cyber Support — Sign In
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          <RoleCard
            icon={<Users className="h-7 w-7 text-primary" strokeWidth={2.25} />}
            title="Council / Admin"
            description="Manage incident reports, training programs, community support cases, and resources."
            footer="For Peter-McGill Community Council members"
            onClick={() => handleSignIn("admin")}
            ctaLabel="Sign in as Admin"
          />
          <RoleCard
            icon={<User className="h-7 w-7 text-primary" strokeWidth={2.25} />}
            title="Resident / Customer"
            description="File a new case if you've been targeted by a cyber incident and need help from your community council."
            footer="For community residents"
            onClick={() => handleSignIn("customer")}
            ctaLabel="Sign in as Customer"
          />
        </div>

        <p className="mt-8 text-center text-xs text-tertiary/50">
          Prototype — no authentication is performed. Role is stored locally.
        </p>
      </div>
    </div>
  );
}

interface RoleCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  footer: string;
  ctaLabel: string;
  onClick: () => void;
}

function RoleCard({
  icon,
  title,
  description,
  footer,
  ctaLabel,
  onClick,
}: RoleCardProps) {
  return (
    <div className="group flex flex-col rounded-xl bg-tertiary p-6 shadow-lg ring-1 ring-white/10 transition-all hover:-translate-y-1 hover:shadow-xl">
      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 ring-1 ring-primary/30">
        {icon}
      </div>
      <h2 className="mt-4 text-lg font-bold text-secondary">{title}</h2>
      <p className="mt-2 flex-1 text-sm text-gray-600">{description}</p>
      <div className="mt-4 text-[11px] uppercase tracking-wider text-gray-400">
        {footer}
      </div>
      <button
        type="button"
        onClick={onClick}
        className="mt-4 inline-flex items-center justify-center gap-2 rounded-md bg-btn px-4 py-2.5 text-sm font-semibold text-tertiary transition-colors hover:bg-btn-hover"
      >
        {ctaLabel}
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
      </button>
    </div>
  );
}

export default Login;
