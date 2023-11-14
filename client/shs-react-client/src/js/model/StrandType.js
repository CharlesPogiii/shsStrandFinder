import axios from "axios";

class StrandType {
  // API endpoint
  static endPoint = "https://shsstrandfinder-com.onrender.com/strandType";

  async create(data) {
    try {
      // Send a POST request to create the StrandType
      const response = await axios.post(StrandType.endPoint, data);
      console.log("StrandType created successfully");
      return response.data;
    } catch (error) {
      console.error("Error creating StrandType:", error.message);
      return error.response.data;
    }
  }

  async read() {
    try {
      // Send a POST request to create the StrandType
      const response = await axios.get(StrandType.endPoint);
      return response.data;
    } catch (error) {
      return error;
    }
  }

  async delete(strandTypeID) {
    try {
      // Send a DELETE request to delete the Strand Type
      const response = await axios.delete(
        StrandType.endPoint + "/" + strandTypeID
      );
      return response.data;
    } catch (error) {
      return error;
    }
  }
}

export default StrandType;
