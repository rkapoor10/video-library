import axios from "axios";
const signupService = async (newUser) => {
  try {
    const response = await axios.post("/api/auth/signup", newUser);
    return response;
  } catch (error) {
    console.error(error);
  }
};

export default signupService;
