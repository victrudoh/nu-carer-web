import { createContext, useState } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  /*
    ********
    *********
    ***********
    MISC
    ***********
    *********
    ********
  */
  // Topbar Title
  const [topbarTitle, setTopbarTitle] = useState("Dashboard");

  /*
    ********
    *********
    ***********
    ADMIN
    ***********
    *********
    ********
  */

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
