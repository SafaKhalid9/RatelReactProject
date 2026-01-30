import { createContext, useContext, useEffect, useState } from "react";
import type { ReactNode } from "react";

import api from "../api/axios";

export interface User {
  id: number;
  email: string;
  name?: string;
  role?: string;
}

interface AuthContextType {
  token: string | null;
  user: User | null;
  loading: boolean;
  login: (
    email: string,
    password: string,
    rememberMe: boolean,
  ) => Promise<boolean>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);
export function useAuth(): AuthContextType {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}

interface AuthProviderProps {
  children: ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
  const getStoredToken = () =>
    localStorage.getItem("token") || sessionStorage.getItem("token");

  const [token, setToken] = useState<string | null>(getStoredToken);
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const login = async (
    email: string,
    password: string,
    // rememberMe: boolean
  ): Promise<boolean> => {
    try {
      const res = await api.post(
        "https://ratil.tryasp.net/api/auth/login",
        { email, password },
        { headers: { "Content-Type": "application/json" } },
      );

      const tokenFromServer: string | undefined = res.data.data?.token;
      if (!tokenFromServer) throw new Error("لم يصدر توكن من السيرفر");

      localStorage.setItem("token", tokenFromServer);
      sessionStorage.setItem("token", tokenFromServer);
      setToken(tokenFromServer);

      await fetchUser(tokenFromServer);

      return true;
    } catch (err: any) {
      throw new Error(err.response?.data?.message || "بيانات الدخول غير صحيحة");
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    sessionStorage.removeItem("token");
    setToken(null);
    setUser(null);
  };

  const fetchUser = async (tokenParam?: string) => {
    try {
      const res = await api.get("/auth/me", {
        headers: { Authorization: `Bearer ${tokenParam || token}` },
      });

      const userData: User = res.data.data;

      if (!userData) {
        logout();
        return;
      }

      setUser(userData);
    } catch (err: any) {
      logout();
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const storedToken = getStoredToken();
    if (storedToken) {
      setToken(storedToken);
      fetchUser(storedToken).catch(() => logout());
    } else {
      setLoading(false);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ token, user, loading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
