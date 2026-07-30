import React, { createContext, useContext, useState } from "react";

const RoleContext = createContext(null);

/**
 * UI-only, in-memory "which role is this demo showing" state. NOT real
 * auth - no tokens, no API calls, nothing persisted to storage. Exists
 * purely so every module (Dashboard, Jobs, Applicants, etc.) can ask
 * "admin or employer?" without each page needing its own query param.
 */
export const RoleProvider = ({ children }) => {
  const [role, setRole] = useState(null); // "admin" | "employer" | null

  return (
    <RoleContext.Provider value={{ role, setRole }}>
      {children}
    </RoleContext.Provider>
  );
};

export const useRole = () => {
  const ctx = useContext(RoleContext);
  if (!ctx) {
    throw new Error("useRole must be used within a RoleProvider");
  }
  return ctx;
};