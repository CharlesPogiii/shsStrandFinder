import axios from "axios";

class Forgot {
  // API endpoint
  static endPoint = "https://shsstrandfinder-com.onrender.com/forgot";

  async forgot(data) {
    try {
      // Send a PUT request to create the new password
      const response = await axios.put(Forgot.endPoint, data);
      return response.data;
    } catch (error) {
      console.log(error);
      return error;
    }
  }
}

export default Forgot;
