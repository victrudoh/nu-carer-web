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
  // Admin (Residents)
  const [residentLoading, setResidentLoading] = useState(false);
  const [assignCaregiverLoading, setAssignCaregiverLoading] = useState(false);
  const [residentListLoading, setResidentListLoading] = useState(false);
  const [addResidentLoading, setAddResidentLoading] = useState(false);
  const [careplanLoading, setCareplanLoading] = useState(false);
  const [careplanListLoading, setCareplanListLoading] = useState(false);
  // Caregiver
  const [carerLoading, setCarerloading] = useState(false);
  const [checkInOutLoading, setCheckInOutloading] = useState(false);
  const [assignedResidentLoading, setAssignedResidentLoading] = useState(false);

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
  const [activeUser, setActiveUser] = useState();

  // ***ADMIN CAREGIVER*** //
  // When an option for a caregiver is selected
  const [caregiverHandler, setCaregiverHandler] = useState({
    id: "",
    caregiver: {},
    action: "list",
  });

  // all caregivers
  const [allCaregivers, setAllCaregivers] = useState([]);

  // ***ADMIN RESIDENT***//
  // When an option for a resident is selected
  const [residentHandler, setResidentHandler] = useState({
    id: "",
    action: "list",
    resident: {},
    careplan: {
      action: "",
      items: {
        careplan: {},
        activity: {},
      },
    },
  });

  // all residents
  const [allResidents, setAllResidents] = useState([]);

  // careplan
  const [allActivities, setAllActivities] = useState([]);
  const [careplan, setCareplan] = useState([]);

  // ***CAREGIVER*** //
  const [assignedResidents, setAssignedResidents] = useState([]);

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
  const getActiveUser = async () => {
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
      setActiveUser(response.data.data.user);
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

  // fetch Caregiver by ID
  const getCaregiver = async () => {
    try {
      setAddCaregiverLoading(true);
      const response = await axios.get(
        `https://nu-carer-api.herokuapp.com/api/admin/caregiver/one?id=${caregiverHandler.id}`,
        {
          headers: {
            "content-type": "application/json",
          },
        }
      );
      console.log(
        "🚀 ~ file: AppContext.js ~ line 138 ~ getCaregiver ~ response",
        response
      );
      setCaregiverHandler({
        ...caregiverHandler,
        caregiver: response.data.data.caregiver,
      });
      // setEditCaregiver({
      //   name: response.data.data.caregiver.name,
      //   email: response.data.data.caregiver.email,
      //   password: "",
      //   phone: response.data.data.caregiver.phone,
      //   address: response.data.data.caregiver.address,
      //   licenseNo: response.data.data.caregiver.licenseNo,
      //   gender: response.data.data.caregiver.gender,
      // });
      setAddCaregiverLoading(false);
    } catch (error) {
      setAddCaregiverLoading(false);
      console.log(
        "🚀 ~ file: Edit.jsx ~ line 59 ~ getCaregiver ~ error",
        error
      );
    }
  };

  // ADMIN RESIDENTS
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
      // console.log(
      //   "🚀 ~ file: AppContext.js ~ line 111 ~ getAllResidents ~ response",
      //   response
      // );
      setAllResidents(response.data.data);
      setResidentListLoading(false);
    } catch (error) {
      setResidentListLoading(false);
      console.log(
        "🚀 ~ file: AppContext.js ~ line 115 ~ getAllResidents ~ error",
        error
      );
    }
  };

  // fetch Resident by ID
  const getResident = async () => {
    try {
      setAddResidentLoading(true);
      const response = await axios.get(
        `https://nu-carer-api.herokuapp.com/api/admin/resident/one?id=${residentHandler.id}`,
        {
          headers: {
            "content-type": "application/json",
          },
        }
      );
      console.log(
        "🚀 ~ file: AppContext.js ~ line 227 ~ getResident ~ response",
        response
      );
      setResidentHandler({
        ...residentHandler,
        resident: response.data.data.resident,
      });
      setAddResidentLoading(false);
    } catch (error) {
      console.log(
        "🚀 ~ file: AppContext.js ~ line 246 ~ getResident ~ error",
        error
      );
      setAddResidentLoading(false);
    }
  };

  // fetch all activities
  const getAllActivities = async () => {
    try {
      const response = axios.get(
        // `http://localhost:4000/api/admin/activity/all`,
        `https://nu-carer-api.herokuapp.com/api/admin/activity/all`,
        {
          headers: {
            "content-type": "application/json",
          },
        }
      );
      // console.log(
      //   "🚀 ~ file: CareplanActivityWidget.jsx ~ line 30 ~ allActivities ~ response",
      //   response
      // );
      setAllActivities((await response).data.data.activities);
    } catch (error) {
      console.log(
        "🚀 ~ file: CareplanActivityWidget.jsx ~ line 29 ~ allActivities ~ error",
        error
      );
    }
  };

  // get careplan with residentID
  const getCareplan = async () => {
    try {
      setCareplanLoading(true);
      setCareplanListLoading(true);
      const response = await axios.get(
        `https://nu-carer-api.herokuapp.com/api/admin/resident/careplan?residentId=${residentHandler.id}`,
        {
          headers: {
            "content-type": "application/json",
          },
        }
      );
      // console.log("getCareplan ~ response", response);
      setCareplan(response.data.data);
      setCareplanLoading(false);
      setCareplanListLoading(false);
    } catch (error) {
      setCareplanLoading(false);
      setCareplanListLoading(false);
      console.log(
        "🚀 ~ file: CareplanActivityWidget.jsx ~ line 32 ~ getCareplan ~ error",
        error
      );
    }
  };

  // CAREGIVERS
  // get all assigned residents
  const getAssignedResidents = async () => {
    try {
      // console.log("acttive user: ", activeUser);
      setCarerloading(true);
      const response = await axios.get(
        `https://nu-carer-api.herokuapp.com/api/caregiver/residents?id=${activeUser?._id}`,
        {
          headers: {
            "content-type": "application/json",
          },
        }
      );
      // console.log(
      //   "🚀 ~ file: AppContext.js ~ line 318 ~ getAssignedResidents ~ response",
      //   response
      // );
      setAssignedResidents(response.data.data.residents);
      setCarerloading(false);
    } catch (error) {
      console.log(
        "🚀 ~ file: AppContext.js ~ line 320 ~ getAssignedResidents ~ error",
        error
      );
      setCarerloading(false);
    }
  };

  /* ***********
   *********
   ********
   */

  // ****Fetch Everything ****//
  useEffect(() => {
    getActiveUser();
  }, []);

  useEffect(() => {
    // admin
    if (activeUser?.role === "admin") {
      // ADMIN (Caregiver)
      getAllCaregivers();

      // ADMIN (Resident)
      getAllResidents();
    }

    getAllActivities();

    // caregiver
    if (activeUser?.role === "care-giver") {
      getAssignedResidents();
    }
  }, [activeUser]);

  useEffect(() => {
    getCaregiver();
  }, [caregiverHandler.action === "edit"]);

  useEffect(() => {
    getResident();
  }, [residentHandler.action === "edit"]);

  useEffect(() => {
    getCareplan();
  }, [residentHandler.action === "careplan"]);

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
        careplanLoading,
        residentLoading,
        addResidentLoading,
        residentListLoading,
        careplanListLoading,
        assignCaregiverLoading,

        setCareplanLoading,
        setResidentLoading,
        setAddResidentLoading,
        setResidentListLoading,
        setCareplanListLoading,
        setAssignCaregiverLoading,

        //  Regular caregiver
        carerLoading,
        checkInOutLoading,
        assignedResidentLoading,

        setCarerloading,
        setCheckInOutloading,
        setAssignedResidentLoading,

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
        activeUser,

        setActiveUser,

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

        // careplan
        careplan,
        allActivities,

        setCareplan,
        setAllActivities,

        getCareplan,

        // CAREGIVERS
        assignedResidents,

        setAssignedResidents,

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
