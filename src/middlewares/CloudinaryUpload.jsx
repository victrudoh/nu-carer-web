import axios from "axios";
import { success, error } from "../helpers/Alert";

const CloudinaryUpload = async (e) => {
  try {
    const formData = new FormData();
    formData.append("file", e.target.files[0]);
    formData.append("upload_preset", "nxevguyi");

    const response = await axios.post(
      "https://api.cloudinary.com/v1_1/damaged/image/upload",
      formData
    );
    console.log(
      "🚀 ~ file: CloudinaryUpload.jsx ~ line 14 ~ CloudinaryUpload ~ response",
      response.data.secure_url
    );

    return response.data.secure_url;
  } catch (err) {
    error(err.data.message);
  }
};

export default CloudinaryUpload;
