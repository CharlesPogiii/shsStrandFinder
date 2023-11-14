import axios from "axios";

class AnswerP {
  // API endpoint
  static endPoint = "https://shsstrandfinder-com.onrender.com/answer";

  // create Answer
  async create(data) {
    try {
      // Send a POST request to create the Answer
      const response = await axios.post(AnswerP.endPoint, data);
      console.log("Answer created successfully");
      return response.data;
    } catch (error) {
      console.error("Error creating Answer:", error.message);
    }
  }
}

export default AnswerP;
