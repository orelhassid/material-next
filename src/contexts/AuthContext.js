import React, { useState, createContext } from "react";

const AuthContext = createContext(null);

export default function AuthContextProvider({ children }) {
  const [user, setUser] = useState({});
  return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
}
