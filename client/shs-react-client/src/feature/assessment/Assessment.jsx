import AssessmentUnanswer from "./AssessmentUnanswer";
import AssessmentAnswered from "./AsessmentAnswered";
import AssessmentSidebar from "./AssessmentSidebar";
import { connect } from "react-redux";
import { useEffect, useState } from "react";
import { action } from "../../redux/action";
import { assessmentData } from "../../js/json-structure/assessment";
import $ from "jquery";

const mapStateToProps = (state) => {
  return {
    viewableSidebar: state.store.viewableSidebar,
    currentQuestion: state.store.currentQuestion,
    subjectForPreparation: state.store.subjectForPreparation,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setCurrentQuestion: (answer) =>
      dispatch({
        type: action.SET_CURRENT_QUESTION,
        currentQuestion: answer,
      }),
  };
};

function Assessment({
  viewableSidebar,
  currentQuestion,
  subjectForPreparation,
  setCurrentQuestion,
}) {
  // FETCH
  const [data, fetchData] = useState(assessmentData);

  const getAssessmentUnanswer = (question, quesNo, warning) => (
    <AssessmentUnanswer
      key={question.id}
      warning={warning}
      question={{ ...question, quesNo }}
      cb={() => {
        changeQuestionCb({ ...question, quesNo });

        if (warning) {
          console.log("INCREMENT LEAVE COUNT!");
        }
      }}
    />
  );

  const [simpleCloseBtn, setSimpleCloseBtn] = useState(null);
  const [isAnswers, setAnswers] = useState([]);
  const changeQuestionCb = (question) => {
    setCurrentQuestion(question);
  };

  useEffect(() => {
    const tempArr = [];
    data.subject.questions.forEach(() => {
      tempArr.push(false);
    });
    setAnswers(tempArr);
  }, []);

  return (
    <>
      {/*-- MAIN --*/}
      <main
        className={`login container-fluid ${
          !viewableSidebar ? "auto-overflow" : "position-relative"
        }`}
        style={{ height: "94vh" }}
      >
        {!viewableSidebar ? (
          <>
            {/*-- NO SIDEBAR --*/}
            <div className="container">
              <div className="row">
                <section className="col-12 pb-4">
                  {/*-- SUBJECT CONTAINER --*/}
                  <section className="strand-type-container mt-5">
                    <h5 className="w-100 poppins border-bottom border-dark text-uppercase fw-semibold">
                      {data.subject.name} ASSESSMENT
                    </h5>
                    <section className="row" style={{ gap: "0.75rem" }}>
                      {data.subject.questions.map((question, i) => {
                        const quesNo = i + 1;
                        return !isAnswers[i] ? (
                          getAssessmentUnanswer(question, quesNo)
                        ) : (
                          <></>
                        );
                      })}
                    </section>
                  </section>
                </section>
                {/*-- <section className="col-4 d-flex justify-content-end bg-danger">D</section> --*/}
              </div>
            </div>
          </>
        ) : (
          <>
            {/*-- W/ SIDEBAR --*/}
            <div className="row h-100">
              <section className="col-12 col-md-6 col-lg-9 h-100 auto-overflow position-relative pb-4 px-5">
                {/*-- STRAND TYPE CONTAINER --*/}
                <section className="strand-type-container mt-5">
                  <h5 className="w-100 poppins border-bottom border-dark text-uppercase fw-semibold">
                    {data.subject.name} ASSESSMENT
                  </h5>
                  <section className="row" style={{ gap: "0.75rem" }}>
                    {data.subject.questions.map((question, i) => {
                      const quesNo = i + 1;
                      return !isAnswers[i] ? (
                        getAssessmentUnanswer(question, quesNo, true)
                      ) : question.answered == null ? (
                        <AssessmentAnswered key={i} questionNo={quesNo} />
                      ) : (
                        <></>
                      );
                    })}
                  </section>
                </section>
              </section>
              {currentQuestion ? (
                <AssessmentSidebar
                  question={currentQuestion}
                  otherCb={() => {
                    const tempArr = [...isAnswers];
                    tempArr[currentQuestion.quesNo - 1] = true;
                    setAnswers(tempArr);
                  }}
                  submitCb={() => {
                    $(() => {
                      $(`#question${currentQuestion.quesNo}`).hide();
                      console.log("POSITION AT : ", currentQuestion.quesNo - 1);
                      data.subject.questions[
                        currentQuestion.quesNo - 1
                      ].answered = true;
                    });
                  }}
                />
              ) : (
                <></>
              )}
            </div>
          </>
        )}
      </main>
    </>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Assessment);
