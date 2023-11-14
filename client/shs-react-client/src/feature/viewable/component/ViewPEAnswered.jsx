import { connect } from "react-redux";
import { action } from "../../../redux/action";
import { modalType } from "../../modal/modalType";

const mapDispatchToProps = (dispatch) => {
  return {
    deletePEQuestion: (peQuestion) =>
      dispatch({
        type: action.DELETE_PE_QUESTION,
        peQuestionForDeletion: peQuestion,
      }),
  };
};

function ViewPEAnswered({ deletePEQuestion, pe, peNo }) {
  return (
    <>
      {/*-- ANSWERED --*/}
      <div
        className="card bg-dark position-relative col-6 col-md-12 col-lg-3 g-2"
        id={`pe-card-${pe._id}`}
      >
        <div className="card-body position-relative">
          <h6 className="card-subtitle poppins mb-3 text-light">
            Question No. {peNo}
          </h6>
          <a
            onClick={(event) => {
              event.preventDefault();
              event.stopPropagation();
              deletePEQuestion(pe);
            }}
            data-bs-toggle="modal"
            data-bs-target={"#" + modalType.PE_QUESTION_DELETION}
            className="nav-link"
          >
            <i className="fa-solid fa-rectangle-xmark text-danger fs-3 position-absolute top-0 end-0 m-2"></i>
          </a>
          <p
            className="card-text roboto text-light"
            style={{ height: "200px", overflowY: "auto" }}
          >
            {pe.question}
          </p>
          {/*
            <button
              className={`btn btn-danger roboto w-100 mb-2 px-4 fs-6 fw-semibold`}
            >
              DELETE
            </button>
          */}
        </div>
      </div>
    </>
  );
}

export default connect(null, mapDispatchToProps)(ViewPEAnswered);
