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

function PEAnswered({ pe, peNo }) {
  return (
    <>
      {/*-- ANSWERED --*/}
      <div className="card bg-dark position-relative col-3 p-2 g-3">
        <div className="card-body position-relative">
          <h6 className="card-subtitle poppins mb-3 text-light">
            Question No. {peNo}
          </h6>
          <p
            className="card-text roboto text-light"
            style={{ height: "200px", overflowY: "auto" }}
          >
            {pe.question}
          </p>
          <button
            className={`btn btn-${
              pe.yes ? "success" : "dark"
            } roboto w-100 mb-2 px-4 fs-6 fw-semibold`}
            disabled={true}
          >
            YES
          </button>
          <button
            className={`btn btn-${
              !pe.yes ? "danger" : "dark"
            } roboto w-100 px-4 fs-6 fw-semibold`}
            disabled={true}
          >
            NO
          </button>
        </div>
      </div>
    </>
  );
}

export default connect(null, mapDispatchToProps)(PEAnswered);
