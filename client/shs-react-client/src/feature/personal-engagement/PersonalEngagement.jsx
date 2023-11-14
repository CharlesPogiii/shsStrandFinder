import PEAnswered from "./PEAnswered";
import PEUnanswer from "./PEUnanswer";
import DashboardSidebar from "../dashboard/DashboardSidebar";
import PEResult from "../layout/PEResult";
import { connect } from "react-redux";
import { useEffect, useState } from "react";
import { modalType } from "../modal/modalType";
import { personalEngagementData } from "../../js/json-structure/personal-engagement";
import $ from "jquery";

const mapStateToProps = (state) => {
  return {
    viewableSidebar: state.store.viewableSidebar,
    viewablePE: state.store.viewablePE,
  };
};

function PersonalEngagement({ viewableSidebar, viewablePE }) {
  // FETCH
  const [data, fetchData] = useState(personalEngagementData);

  // UML
  const [currentPE, setCurrentPE] = useState({
    userID: "user123",
    peID: "PE123",
    yes: null,
  });

  const [simpleCloseBtn, setSimpleCloseBtn] = useState(null);
  const [isAnswers, setAnswers] = useState([]);

  useEffect(() => {
    const tempArr = [];
    data.peQuestions.forEach(() => {
      tempArr.push(false);
    });
    setAnswers(tempArr);

    $(() => {
      setSimpleCloseBtn($("#simple-close-btn"));
    });
  }, []);

  // ELEMENTS
  const getPEUnanswer = (key, quesNo, peQues, cb) => {
    return (
      <PEUnanswer
        key={key}
        questionNo={quesNo}
        peQuestion={peQues}
        answerCb={cb}
      />
    );
  };

  const getPEAnswered = (key, i, cb) => {
    return <PEAnswered key={key} questionNo={i} submitCb={cb} />;
  };

  // FUNCTION
  const answerCb = (id, b, i) => {
    if (currentPE.yes == null) {
      const tempArr = [...isAnswers];
      tempArr[i] = true;
      setCurrentPE({ userID: data.user.id, peID: id, yes: b });
      setAnswers(tempArr);
    } else {
      simpleCloseBtn.click();
    }
  };

  // SAVE
  const submit = (quesNo) => {
    $(() => {
      $(`#question${quesNo}`)
        .removeClass("card grd-pri-sec_ position-relative col-3 p-2 g-3")
        .hide();
      setCurrentPE({ ...currentPE, yes: null });
    });
  };

  return (
    <>
      {/*-- MAIN --*/}
      <main
        className={`login container-fluid ${
          !viewableSidebar ? "auto-overflow" : "position-relative"
        }`}
        style={{ height: "94vh" }}
      >
        <button
          className="d-none"
          id="simple-close-btn"
          data-bs-toggle="modal"
          data-bs-target={`#${modalType.QUESTION_NOT_SUBMIT_YET}`}
        ></button>
        {!viewableSidebar ? (
          <>
            {/*-- NO SIDEBAR --*/}
            <div className="container">
              <div className="row">
                <section className="col-12 pb-4">
                  {/*-- STRAND TYPE CONTAINER --*/}
                  <section className="strand-type-container mt-5">
                    <h5 className="w-100 poppins border-bottom border-dark text-uppercase fw-semibold">
                      PERSONAL ENGAGEMENT
                    </h5>
                    <section className="row" style={{ gap: "0.75rem" }}>
                      {isAnswers.map((bool, i) => {
                        const peQuestion = data.peQuestions[i];
                        const uniqueKey = peQuestion.id;

                        return !bool
                          ? getPEUnanswer(uniqueKey, i + 1, peQuestion, (b) =>
                              answerCb(peQuestion.id, b, i)
                            )
                          : getPEAnswered(uniqueKey, i + 1, () =>
                              submit(i + 1)
                            );
                      })}
                    </section>
                  </section>
                </section>
                {/*-- <section className="col-4 d-flex justify-content-end bg-danger">D</section>  --*/}
              </div>
            </div>
          </>
        ) : (
          <>
            {/*-- W/ SIDEBAR --*/}
            <div className={`row ${viewablePE ? "bg-dark" : ""} h-100`}>
              <section
                className={`col-12 col-md-6 col-lg-9 h-100 auto-overflow position-relative ${
                  !viewablePE ? "pb-4 px-5" : "p-0"
                }`}
              >
                {!viewablePE ? (
                  <>
                    {/*-- STRAND TYPE CONTAINER --*/}
                    <section className="strand-type-container mt-5">
                      <h5 className="w-100 poppins border-bottom border-dark text-uppercase fw-semibold">
                        PERSONAL ENGAGEMENT
                      </h5>
                      <section className="row" style={{ gap: "0.75rem" }}>
                        {isAnswers.map((bool, i) => {
                          const peQuestion = data.peQuestions[i];
                          const uniqueKey = peQuestion.id;

                          return !bool
                            ? getPEUnanswer(uniqueKey, i + 1, peQuestion, (b) =>
                                answerCb(peQuestion.id, b, i)
                              )
                            : getPEAnswered(uniqueKey, () => submit());
                        })}
                      </section>
                    </section>
                  </>
                ) : (
                  <>
                    <PEResult
                      preferredStrand={data.preferredStrand}
                      personalEngagements={data.personalEngagements}
                    />
                    ;
                  </>
                )}
              </section>
              <DashboardSidebar
                user={data.user}
                selectedStrand={data.selectedStrand}
                subjects={data.subjects}
                pendingSubjects={data.pendingSubjects}
              />
            </div>
          </>
        )}
      </main>
    </>
  );
}

export default connect(mapStateToProps, null)(PersonalEngagement);
