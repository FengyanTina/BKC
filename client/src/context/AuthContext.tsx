// src/context/AuthContext.tsx
import React, { createContext, useContext, useState, ReactNode, useEffect } from "react";
import { UserCategory } from "../modals/User";

interface LogInUser {
  id: string;
  username: string; // Adding username
  name: string;
  role: UserCategory;
  token: string;
}

export interface AuthContextType {
  user: LogInUser | null;
  login: (id: string, username: string, name: string, role: UserCategory, token: string) => void;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<LogInUser | null>(null);

  // Load user from localStorage on initial mount
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser)); // Restore user state from localStorage
    }
  }, []);

  const login = (id: string, username: string, name: string, role: UserCategory, token: string) => {
    const userData: LogInUser = { id, username, name, role, token };
    setUser(userData);
    localStorage.setItem("user", JSON.stringify(userData));
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use the Auth context
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
