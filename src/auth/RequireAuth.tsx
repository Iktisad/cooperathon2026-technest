import type { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { useAuth, type Role } from "./AuthContext";

interface Props {
  role: Role;
  children: ReactNode;
}

function RequireAuth({ role, children }: Props) {
  const { role: current } = useAuth();

  if (!current) return <Navigate to="/login" replace />;
  if (current !== role) {
    return <Navigate to={current === "admin" ? "/" : "/customer"} replace />;
  }
  return <>{children}</>;
}

export default RequireAuth;
