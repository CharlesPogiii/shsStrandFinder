import axios from "axios";

class StrandSubject {
  // API endpoint
  static endPoint = "https://shsstrandfinder-com.onrender.com/strandSubject";

  async create(subjectID, dataArr) {
    try {
      // Send a POST request to create the StrandSubject
      dataArr.forEach(async (strandID) => {
        const response = await axios.post(StrandSubject.endPoint, {
          subjectID,
          strandID,
        });
        console.log("StrandSubject created successfully: ", response.data);
      });
    } catch (error) {
      console.error("Error creating StrandSubject:", error.message);
      return error.response.data;
    }
  }
}

export default StrandSubject;
