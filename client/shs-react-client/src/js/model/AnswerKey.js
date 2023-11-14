import axios from "axios";

class AnswerKeyP {
  // API endpoint
  static endPoint = "https://shsstrandfinder-com.onrender.com/answerKey";

  // create Answer Key
  async create(data) {
    try {
      // Send a POST request to create the Answer Key
      const response = await axios.post(AnswerKeyP.endPoint, data);
      console.log("Answer Key created successfully");
      return response.data;
    } catch (error) {
      console.error("Error creating Answer Key:", error.message);
      return error.response.data;
    }
  }
}

export default AnswerKeyP;
