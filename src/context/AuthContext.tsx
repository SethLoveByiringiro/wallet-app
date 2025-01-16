// src/context/AuthContext.tsx
import { createContext, useContext, useState, useEffect } from "react";

// Define interfaces for type safety
interface User {
  id: string;
  name: string;
  email: string;
}

interface SignupData {
  name: string;
  email: string;
  password: string;
}

interface AuthContextType {
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  signup: (data: SignupData) => Promise<void>;
  logout: () => void;
  user: User | null;
}

// Mock user data for development
const DEMO_USERS = [
  {
    id: "1",
    name: "Demo User",
    email: "demo@example.com",
    password: "123",
  },
];

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
    return localStorage.getItem("isAuthenticated") === "true";
  });

  const [user, setUser] = useState<User | null>(() => {
    const savedUser = localStorage.getItem("user");
    return savedUser ? JSON.parse(savedUser) : null;
  });

  useEffect(() => {
    if (isAuthenticated && user) {
      localStorage.setItem("isAuthenticated", "true");
      localStorage.setItem("user", JSON.stringify(user));
    } else {
      localStorage.removeItem("isAuthenticated");
      localStorage.removeItem("user");
    }
  }, [isAuthenticated, user]);

  const login = async (email: string, password: string) => {
    try {
      // Simulate API call delay
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Find user in demo data
      const foundUser = DEMO_USERS.find(
        (u) => u.email === email && u.password === password
      );

      if (!foundUser) {
        throw new Error("Invalid credentials");
      }

      // Remove password from user object before storing
      const { password: _, ...userWithoutPassword } = foundUser;
      setIsAuthenticated(true);
      setUser(userWithoutPassword);

      return Promise.resolve();
    } catch (error) {
      throw error;
    }
  };

  const signup = async (data: SignupData) => {
    try {
      // Simulate API call delay
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Check if user already exists
      if (DEMO_USERS.some((u) => u.email === data.email)) {
        throw new Error("Email already registered");
      }

      // Create new user
      const newUser = {
        id: String(DEMO_USERS.length + 1),
        name: data.name,
        email: data.email,
        password: data.password,
      };

      // In a real app, this would be an API call
      DEMO_USERS.push(newUser);

      // Don't automatically log in after signup
      return Promise.resolve();
    } catch (error) {
      throw error;
    }
  };

  const logout = () => {
    setIsAuthenticated(false);
    setUser(null);
    localStorage.removeItem("isAuthenticated");
    localStorage.removeItem("user");
  };

  // Additional utility functions (optional)
  const checkAuth = () => {
    return isAuthenticated && user !== null;
  };

  const updateUser = async (userData: Partial<User>) => {
    if (user) {
      const updatedUser = { ...user, ...userData };
      setUser(updatedUser);
      localStorage.setItem("user", JSON.stringify(updatedUser));
    }
  };

  const value = {
    isAuthenticated,
    user,
    login,
    signup,
    logout,
    updateUser,
    checkAuth,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

// Add a hook for protected routes
export const useRequireAuth = () => {
  const auth = useAuth();
  useEffect(() => {
    if (!auth.isAuthenticated) {
      // Redirect to login if not authenticated
      window.location.href = "/login";
    }
  }, [auth.isAuthenticated]);

  return auth;
};
