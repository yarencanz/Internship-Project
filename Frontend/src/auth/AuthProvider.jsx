import { createContext, useContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useLocalStorage("user", null);

  const login = async (userData) => {
    setUser(userData);
  };

  const logout = () => {
    setUser(null);
  };

  const value = {
      user,
      login,
      logout
    }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};


export const useAuth = ( ) => {
  return useContext(AuthContext);
}
