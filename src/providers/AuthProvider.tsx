import { createContext, useContext, useState, ReactNode, useEffect } from "react";

interface UserData {
  id: string;
  username: string;
  email: string;
  password: string;
  isAuth: boolean;
  isAgreed: boolean;
  name: string;
}

interface AuthContextType {
  user: UserData | null;
  signin: (username: string, password: string, callback: VoidFunction) => void;
  signout: (callback: VoidFunction) => void;
}

const AuthContext = createContext<AuthContextType>(null!);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<UserData | null>(null);

  useEffect(() => {
    const activeUserRaw = localStorage.getItem("activeUser");
    if (activeUserRaw) {
      try {
        const activeUser = JSON.parse(activeUserRaw);
        setUser(activeUser);
      } catch {
        setUser(null);
      }
    }
  }, []);

  const signin = (username: string, password: string, callback: VoidFunction) => {
    const usersRaw = localStorage.getItem("users");
    const users: UserData[] = usersRaw ? JSON.parse(usersRaw) : [];
    const foundUser = users.find(
      (u) => (u.username === username || u.email === username) && u.password === password
    );
    if (foundUser) {
      const activeUser = { ...foundUser, isAuth: true };
      localStorage.setItem("activeUser", JSON.stringify(activeUser));
      setUser(activeUser);
      callback();
    } else {

      callback();
    }
  };

  const signout = (callback: VoidFunction) => {
    localStorage.removeItem("activeUser");
    setUser(null);
    callback();
  };

  const value = { user, signin, signout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  return useContext(AuthContext);
}