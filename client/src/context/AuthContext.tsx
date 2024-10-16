import { createContext, useContext, useState, ReactNode, useEffect } from "react";
import { User } from "../models/User";
import { useLocalStorage } from "../hooks/UseLocalStorage";


export interface AuthContextType {
  user: User | null; // User data from the User interface
  token: string | null; // Token stored separately, not part of User
  login: (user: User, token: string) => void;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null); // Separate state for token

//   const [user, setUser] = useLocalStorage<User | null>("user", null); // Use custom hook
//   const [token, setToken] = useLocalStorage<string | null>("token", null); // Use custom hook

  // Load user and token from localStorage on initial mount
//   useEffect(() => {
//     const storedUser = localStorage.getItem("user");
//     const storedToken = localStorage.getItem("token"); // Load token from localStorage
//     if (storedUser && storedToken) {
//       setUser(JSON.parse(storedUser));
//       setToken(storedToken);
//     }
//   }, []);

  const login = (user: User, token: string) => {
    setUser(user);
    setToken(token); // Set token separately
    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("token", token); // Store token in localStorage
  };

  const logout = () => {
    setUser(null);
    setToken(null); // Clear token
    localStorage.removeItem("user");
    localStorage.removeItem("token"); // Remove token from localStorage
  };

// const login = (user: User, token: string) => {
//     setUser(user);
//     setToken(token);
//   };

//   const logout = () => {
//     setUser(null);
//     setToken(null);
//   };
  return (
    <AuthContext.Provider value={{ user, token, login, logout }}>
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
