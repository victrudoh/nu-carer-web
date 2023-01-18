import axios from "axios";
import { error } from "../helpers/Alert";

const CloudinaryUpload = async (e) => {
  try {
    const formData = new FormData();
    formData.append("file", e.target.files[0]);
    formData.append("upload_preset", "ri2tcldy");

    const response = await axios.post(
      // dg5y5mq02 is the cloud name from cloudinary
      "https://api.cloudinary.com/v1_1/dg5y5mq02/image/upload",
      formData
    );
    console.log(
      "🚀 ~ file: CloudinaryUpload.jsx ~ line 14 ~ CloudinaryUpload ~ response",
      response.data.secure_url
    );

    return response.data.secure_url;
  } catch (err) {
    console.log(
      "🚀 ~ file: CloudinaryUpload.jsx:22 ~ CloudinaryUpload ~ err",
      err
    );
    error(err.data?.message);
  }
};

export default CloudinaryUpload;
