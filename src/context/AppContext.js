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
  // Admin (Residets)
  const [residentLoading, setResidentLoading] = useState(false);
  const [assignCaregiverLoading, setAssignCaregiverLoading] = useState(false);
  const [residentListLoading, setResidentListLoading] = useState(false);
  const [addResidentLoading, setAddResidentLoading] = useState(false);

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
    id: "",
    action: "list",
  });

  // all residents
  const [allResidents, setAllResidents] = useState([]);

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
      console.log(
        "🚀 ~ file: AppContext.js ~ line 145 ~ getAllCaregivers ~ error",
        error
      );
    }
  };

  // get all residents
  const getAllResidents = async () => {
    try {
      setResidentListLoading(true);
      const response = await axios.get(
        `https://nu-carer-api.herokuapp.com/api/admin/resident/all`,
        {
          headers: {
            "content-type": "application/json",
          },
        }
      );
      console.log(
        "🚀 ~ file: AppContext.js ~ line 111 ~ getAllResidents ~ response",
        response
      );
      setResidentListLoading(false);
      setAllResidents(response.data.data);
    } catch (error) {
      setResidentListLoading(false);
      console.log(
        "🚀 ~ file: AppContext.js ~ line 115 ~ getAllResidents ~ error",
        error
      );
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

    // ADMIN (Resident)
    getAllResidents();
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

        // Resident loaders
        residentLoading,
        addResidentLoading,
        residentListLoading,
        assignCaregiverLoading,

        setResidentLoading,
        setAddResidentLoading,
        setResidentListLoading,
        setAssignCaregiverLoading,

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
        allResidents,
        residentHandler,

        setAllResidents,
        setResidentHandler,

        getAllResidents,

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
