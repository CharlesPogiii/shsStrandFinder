import axios from "axios";

class QuestionP {
  // API endpoint
  static endPoint = "https://shsstrandfinder-com.onrender.com/question";

  // create Question
  async create(data) {
    try {
      // Send a POST request to create the Question
      const response = await axios.post(QuestionP.endPoint, data);
      console.log("Question created successfully");
      return response.data;
    } catch (error) {
      console.error("Error creating Question:", error.message);
      return error.response.data;
    }
  }

  async delete(questionID) {
    try {
      // Send a DELETE request to delete the Question
      const response = await axios.delete(
        QuestionP.endPoint + "/" + questionID
      );
      return response.data;
    } catch (error) {
      return error;
    }
  }
}

export default QuestionP;
