import axios from "axios";

class DashboardD {
  // API endpoint
  static endPoint = "https://shsstrandfinder-com.onrender.com/dashboard";

  async read(token) {
    try {
      // Send a GET request to create the Dashboard
      const response = await axios.get(DashboardD.endPoint, {
        headers: {
          Authorization: `Bearer ${token}`, // Add the token as a bearer token
        },
      });
      return response.data;
    } catch (error) {
      return error;
    }
  }
}

export default DashboardD;
