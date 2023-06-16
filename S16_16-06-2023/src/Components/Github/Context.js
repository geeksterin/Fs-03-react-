import { createContext, useState } from "react";

let githubContext = createContext();

export default githubContext;

export function GithubProvider({ children }) {
  const [data, setData] = useState({});

  const addData = (userData) => {
    setData(userData);
  };

  return (
    <githubContext.Provider value={{ data, addData }}>
      {children}
    </githubContext.Provider>
  );
}
