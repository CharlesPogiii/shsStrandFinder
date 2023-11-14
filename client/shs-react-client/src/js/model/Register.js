import axios from "axios";

class Register {
  // API endpoint
  static endPoint = "https://shsstrandfinder-com.onrender.com/register";

  async register(data) {
    try {
      // Send a POST request to register new account
      const response = await axios.post(Register.endPoint, data);

      console.log("Account created successfully");
      return response.data;
    } catch (error) {
      return error.response.data;
    }
  }
}

export default Register;
