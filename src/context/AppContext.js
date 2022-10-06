import { createContext, useState } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  // Topbar Title
  const [topbarTitle, setTopbarTitle] = useState("Dashboard");

  return (
    <AppContext.Provider
      value={{
        // Topbar
        topbarTitle,

        setTopbarTitle,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
