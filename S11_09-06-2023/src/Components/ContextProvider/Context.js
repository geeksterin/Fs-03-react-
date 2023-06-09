import { createContext, useState } from "react";

const AuthContext = createContext();

export default AuthContext;

export function CustomContextProvider({ children }) {
  const [isLoggedIn, setIsloggedIn] = useState(false);

  const login = () => {
    setIsloggedIn(true);
  };

  const logout = () => {
    setIsloggedIn(false);
  };
  //   return (
  //     <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
  //       <App />
  //     </AuthContext.Provider>
  //   );
  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
