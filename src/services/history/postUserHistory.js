import axios from "axios";
import { axiosConfig } from "../../utils/axios-config/axiosConfig";

import { toast } from "react-toastify";

export const postUserHistory = async (video) => {
  try {
    const responseFromHistory = await axios.post(
      "/api/user/history",
      {
        video,
      },
      axiosConfig
    );
    return responseFromHistory;
  } catch (error) {
    console.error(error);
    toast.error(error);
  }
};


