import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem("mushadUser");

    return savedUser
      ? JSON.parse(savedUser)
      : null;
  });

  const register = (userData) => {
    const newUser = {
      id: Date.now(),
      name: userData.name,
      email: userData.email,
      phone: userData.phone,
      address: userData.address || "",
    };

    localStorage.setItem(
      "mushadUser",
      JSON.stringify(newUser)
    );

    setUser(newUser);
  };

  const login = (email) => {
    const savedUser = localStorage.getItem("mushadUser");

    if (!savedUser) {
      return false;
    }

    const existingUser = JSON.parse(savedUser);

    if (existingUser.email !== email) {
      return false;
    }

    setUser(existingUser);

    return true;
  };

  const logout = () => {
    localStorage.removeItem("mushadUser");
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        register,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}