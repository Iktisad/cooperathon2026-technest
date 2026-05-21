import { createContext, useContext, useState, type ReactNode } from "react";

export type Role = "admin" | "customer";

interface AuthState {
  role: Role | null;
  signIn: (role: Role) => void;
  signOut: () => void;
}

const AuthCtx = createContext<AuthState | null>(null);
const STORAGE_KEY = "technest_role";

export function AuthProvider({ children }: { children: ReactNode }) {
  const [role, setRole] = useState<Role | null>(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored === "admin" || stored === "customer" ? stored : null;
  });

  const signIn = (r: Role) => {
    localStorage.setItem(STORAGE_KEY, r);
    setRole(r);
  };

  const signOut = () => {
    localStorage.removeItem(STORAGE_KEY);
    setRole(null);
  };

  return (
    <AuthCtx.Provider value={{ role, signIn, signOut }}>
      {children}
    </AuthCtx.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthCtx);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
}
