import { action } from "../../redux/action";
import { useEffect, useState } from "react";
import { connect } from "react-redux";
import $ from "jquery";
import AssessmentChoice from "./AssessmentChoice";

const mapDispatchToProps = (dispatch) => {
  return {
    viewSidebar: (bool) =>
      dispatch({ type: action.VIEW_SIDEBAR, viewableSidebar: bool }),
  };
};

function AssessmentSidebar({ viewSidebar, question, otherCb, submitCb }) {
  // UML
  const [answer, setAnswer] = useState(null);
  const [disable, setDisable] = useState(true);
  const [selectArr, setSelectArr] = useState([]);
  const [closeBtn, setCloseBtn] = useState(null);

  const submit = () => {
    setDisable(true);
    selectArr.fill(false);
    closeBtn.click();
    submitCb();
    console.log("YOUR ANSWER ", answer);
  };

  useEffect(() => {
    const tempArr = [];

    question.answerKeys.forEach(() => {
      tempArr.push(false);
    });

    setSelectArr(tempArr);
  }, []);

  return (
    <>
      {/*-- ASSESSMENT SIDEBAR --*/}
      <section
        className="col-3 auto-overflow position-sticky top-0 end-0 justify-content-end bg-dark m-0 p-0"
        style={{ height: "94vh" }}
      >
        {/*-- QUESTION BODY --*/}
        <h6 className="roboto text-light position-relative border-bottom border-light px-4 py-3">
          <i className="fa-solid fa-question me-3"></i>
          Question {question.quesNo}
          <a
            onClick={(event) => {
              event.preventDefault();
              viewSidebar(false);
            }}
            className="nav-link"
            id="close-btn"
            style={{ cursor: "pointer" }}
          >
            <i className="fa-solid fa-xmark text-light fs-3 position-absolute top-0 end-0 m-2"></i>
          </a>
        </h6>
        <div className="w-100 border-bottom border-light d-flex flex-column align-items-center justify-content-center py-3">
          <p className="roboto text-light px-4">{question.question}</p>
          <section className="w-100 p-4">
            {question.questionImagePath != null ? (
              <img
                className="w-100 rounded shadow"
                src={question.questionImagePath}
                alt="strand image display"
                style={{ height: "175px" }}
              />
            ) : (
              <></>
            )}
          </section>
        </div>
        {/*-- CHOICES --*/}
        <section className="p-4">
          {question.answerKeys.map((answerKey, i) => {
            return (
              <AssessmentChoice
                key={answerKey.id}
                index={i}
                answerKey={answerKey}
                isSelected={selectArr[i]}
                cb={() => {
                  $(() => {
                    setCloseBtn($("#close-btn").get(0));
                    const tempArr = selectArr.fill(false);
                    tempArr[i] = true;

                    setAnswer(answerKey);
                    setDisable(false);
                    setSelectArr(tempArr);
                    otherCb();
                  });
                }}
              />
            );
          })}
          <button
            className="btn btn-dark roboto w-100 p-4 fs-6 fw-semibold mt-4"
            disabled={disable}
            onClick={() => submit()}
          >
            SUBMIT
          </button>
        </section>
      </section>
    </>
  );
}

export default connect(null, mapDispatchToProps)(AssessmentSidebar);
