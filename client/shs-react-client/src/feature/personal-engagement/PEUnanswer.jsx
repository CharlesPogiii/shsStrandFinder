import { connect } from "react-redux";
import { action } from "../../redux/action";
import { modalType } from "../modal/modalType";

const mapDispatchToProps = (dispatch) => {
  return {
    deletePEQuestion: (peQuestion) =>
      dispatch({
        type: action.DELETE_PE_QUESTION,
        peQuestionForDeletion: peQuestion,
      }),
  };
};

function PEUnanswered({ deletePEQuestion, questionNo, peQuestion, answerCb }) {
  return (
    <>
      {/*-- UNANSWER --*/}
      <div
        className="card bg-dark position-relative col-3 p-2 g-3"
        style={{ height: "500px" }}
      >
        <div className="card-body position-relative">
          <a
            onClick={(event) => {
              event.preventDefault();
              deletePEQuestion(peQuestion);
            }}
            data-bs-toggle="modal"
            data-bs-target={"#" + modalType.PE_QUESTION_DELETION}
            className="nav-link"
          >
            <i className="fa-solid fa-rectangle-xmark text-danger fs-3 position-absolute top-0 end-0 m-2"></i>
          </a>
          <h6 className="card-subtitle poppins mb-3 text-light">
            Question No. {questionNo}
          </h6>
          <p
            className="card-text roboto text-light"
            style={{ height: "200px", overflowY: "auto" }}
          >
            {peQuestion.question}
          </p>
          <button
            onClick={() => answerCb(true)}
            className="btn btn-success roboto w-100 mb-2 px-4 fs-6 fw-semibold"
          >
            YES
          </button>
          <button
            onClick={() => answerCb(false)}
            className="btn btn-danger roboto w-100 px-4 fs-6 fw-semibold"
          >
            NO
          </button>
          <div className="position-absolute bottom-0 start-0 w-100 p-3">
            <button
              className="btn btn-dark roboto w-100 p-4 fs-6 fw-semibold"
              disabled={true}
            >
              SUBMIT
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default connect(null, mapDispatchToProps)(PEUnanswered);
