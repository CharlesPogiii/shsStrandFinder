import { connect } from "react-redux";
import { action } from "../../../redux/action";
import { modalType } from "../../modal/modalType";
import Localhost from "../../../js/model/LocalHost";
import { useState } from "react";

const mapDispatchToProps = (dispatch) => {
  return {
    deleteAssessmentQuestion: (question) =>
      dispatch({
        type: action.DELETE_ASSESSMENT_QUESTION,
        assessmentQuestionForDeletion: question,
      }),
  };
};

function ViewAssessment({ deleteAssessmentQuestion, question, quesNo }) {
  const [letter] = useState([
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ]);

  return (
    <>
      {/*-- ANSWERED --*/}
      <div
        className="card bg-dark position-relative col-6 col-md-12 col-lg-4 p-2"
        id={`question-card-${question._id}`}
      >
        <div
          className="card-body position-relative"
          style={{
            width: "100%",
            height: "250px",
            overflowY: "auto",
          }}
        >
          <a
            onClick={(event) => {
              event.preventDefault();
              event.stopPropagation();
              deleteAssessmentQuestion(question);
            }}
            data-bs-toggle="modal"
            data-bs-target={"#" + modalType.ASSESSMENT_QUESTION_DELETION}
            className="nav-link"
          >
            <i className="fa-solid fa-rectangle-xmark text-danger fs-3 position-absolute top-0 end-0 m-2"></i>
          </a>
          {question?.questionImagePath ? (
            <section className="p-0 m-0">
              <img
                className="mb-3"
                src={Localhost.path() + question?.questionImagePath}
                alt="answer key image"
                style={{ maxWidth: "100%" }}
              />
            </section>
          ) : (
            <></>
          )}
          <h6 className="card-subtitle poppins mb-3 text-light">
            Question No. {quesNo}
          </h6>
          <p className="card-text roboto text-light">{question.question}</p>

          {/*-- ANSWER KEYS --*/}
          {question?.answerKeys?.map((answerKey, i) => {
            return (
              <button
                key={answerKey._id}
                className={`btn btn-dark text-start roboto w-100 mb-2 px-2 fs-6`}
              >
                {answerKey?.imagePath ? (
                  <section className="p-0 m-0">
                    <img
                      className="mb-3"
                      src={Localhost.path() + answerKey?.imagePath}
                      alt="answer key image"
                      style={{ maxWidth: "100%" }}
                    />
                  </section>
                ) : (
                  <></>
                )}
                {letter[i].toUpperCase()}. {answerKey.value}
              </button>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default connect(null, mapDispatchToProps)(ViewAssessment);
