import { createContext, useEffect, useState } from "react";
import axios from "axios";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  /*
    ********
    *********
    ***********
    MISC
  */

  // Topbar Title
  const [topbarTitle, setTopbarTitle] = useState("Dashboard");

  // Loadings
  const [authLoading, setAuthLoading] = useState(false);
  // Admin (Caregiver)
  const [caregiverLoading, setCaregiverLoading] = useState(false);
  const [caregiverListLoading, setCaregiverListLoading] = useState(false);
  const [addCaregiverLoading, setAddCaregiverLoading] = useState(false);

  /************
   *********
   ********
   */

  /*
    ********
    *********
    ***********
    ADMIN
  */

  // active admin
  const [activeAdmin, setActiveAdmin] = useState();

  // ***ADMIN CAREGIVER*** //
  // When an option for a caregiver is selected
  const [caregiverHandler, setCaregiverHandler] = useState({
    id: "",
    action: "list",
  });

  // all caregivers
  const [allCaregivers, setAllCaregivers] = useState([]);

  // ***ADMIN RESIDENT***//
  // When an option for a resident is selected
  const [residentHandler, setResidentHandler] = useState({
    resident: {},
    action: "list",
  });

  /************
   *********
   ********
   */

  /*
    ********
    *********
    ***********
    FUNCTIONS
  */

  // ADMIN
  // get active admin
  const activeUser = async () => {
    try {
      const userId = localStorage.getItem("userId");
      const response = await axios.get(
        `https://nu-carer-api.herokuapp.com/api/admin/active?id=${userId}`,
        {
          headers: {
            "content-type": "application/json",
          },
        }
      );
      // console.log(
      //   "🚀 ~ file: AppContext.js ~ line 72 ~ activeUser ~ response",
      //   response
      // );
      setActiveAdmin(response.data.data.admin);
    } catch (error) {
      console.log("~ activeUser ~ error", error);
    }
  };

  // get all caregivers
  const getAllCaregivers = async () => {
    try {
      setCaregiverListLoading(true);
      const response = await axios.get(
        `https://nu-carer-api.herokuapp.com/api/admin/caregiver/all`,
        {
          headers: {
            "content-type": "application/json",
          },
        }
      );
      // console.log(
      //   "🚀 ~ file: AppContext.js ~ line 99 ~ getAllCaregivers ~ response",
      //   response
      // );
      setCaregiverListLoading(false);
      setAllCaregivers(response.data.data);
    } catch (error) {
      setCaregiverListLoading(false);
      console.log("~ activeUser ~ error", error);
    }
  };

  /* ***********
   *********
   ********
   */

  // ****Fetch Everything ****//
  useEffect(() => {
    activeUser();

    // ADMIN (Caregiver)
    getAllCaregivers();
  }, []);

  return (
    <AppContext.Provider
      value={{
        /*
          ********
          *********
          ***********
          MISC
        */
        topbarTitle,
        authLoading,

        setTopbarTitle,
        setAuthLoading,

        // Caregiver loaders
        caregiverLoading,
        addCaregiverLoading,
        caregiverListLoading,

        setCaregiverLoading,
        setAddCaregiverLoading,
        setCaregiverListLoading,

        /* ***********
         *********
         ********
         */
        /*
          ********
          *********
          ***********
          ADMIN
        */
        activeAdmin,

        setActiveAdmin,

        // Admin Caregiver
        allCaregivers,
        caregiverHandler,

        setAllCaregivers,
        setCaregiverHandler,

        getAllCaregivers,

        // Admin Resident
        residentHandler,

        setResidentHandler,

        /* ***********
         *********
         ********
         */
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
