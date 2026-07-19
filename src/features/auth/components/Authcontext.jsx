import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  // TEST-ONLY in-memory auth. user = null when signed out, otherwise
  // { fullName, role }. Swap this out for real token/session handling
  // once a backend exists - the shape (isAuthenticated/user/login/signup/logout)
  // is what the rest of the app depends on, so keep that contract stable.
  const [user, setUser] = useState(null);

  const signup = (values) => {
    // Every signup is treated as an admin account for now so the dashboard
    // can be exercised end-to-end. Replace with the role returned by your
    // real signup API later.
    setUser({ fullName: values.fullName, role: "admin" });
  };

  const login = (values) => {
    // Same idea for login - any successful login becomes an admin session.
    setUser({ fullName: values.fullName, role: "admin" });
  };

  const logout = () => setUser(null);

  const value = {
    user,
    isAuthenticated: !!user,
    signup,
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return ctx;
};