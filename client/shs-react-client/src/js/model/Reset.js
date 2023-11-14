import axios from "axios";

class ResetD {
  // API endpoint
  static endPoint = "https://shsstrandfinder-com.onrender.com/reset";

  async auth(token) {
    try {
      // Send a POST request to create the Dashboard
      const response = await axios.get(ResetD.endPoint + "/auth", {
        headers: {
          Authorization: `Bearer ${token}`, // Add the token as a bearer token
        },
      });
      return response.data;
    } catch (error) {
      return error;
    }
  }

  async reset(data) {
    try {
      // Send a PUT request to create the new password
      const response = await axios.put(ResetD.endPoint, data);
      return response.data;
    } catch (error) {
      console.log(error);
      return error;
    }
  }
}

export default ResetD;
