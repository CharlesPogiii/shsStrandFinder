import axios from "axios";

class SubjectType {
  // API endpoint
  static endPoint = "https://shsstrandfinder-com.onrender.com/subjectType";

  async create(data) {
    try {
      // Send a POST request to create the SubjectType
      const response = await axios.post(SubjectType.endPoint, data);
      console.log("SubjectType created successfully");
      return response.data;
    } catch (error) {
      console.error("Error creating SubjectType:", error.message);
      return error.response.data;
    }
  }

  async read() {
    try {
      // Send a POST request to create the SubjectType
      const response = await axios.get(SubjectType.endPoint);
      return response.data;
    } catch (error) {
      return error;
    }
  }

  async delete(subjectTypeID) {
    try {
      // Send a DELETE request to delete the Subject Type
      const response = await axios.delete(
        SubjectType.endPoint + "/" + subjectTypeID
      );
      return response.data;
    } catch (error) {
      return error;
    }
  }
}

export default SubjectType;
