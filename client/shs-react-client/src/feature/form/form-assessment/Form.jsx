// import { subjectData } from "../../../js/json-structure/form/subject";
// import Subject from "../../../js/model/Subject";
// import DashboardD from "../../../js/model/Dashboard";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { action } from "../../../redux/action";
import { dashboardRoute } from "../../../route/routes";
import QuestionP from "../../../js/model/Question";
import AnswerKeyP from "../../../js/model/AnswerKey";
import FormRadioBtn from "../component/FormRadioBtn";
import question1 from "../../../asset/assessment/question1.jpg";
import answer1 from "../../../asset/answer/answer1.jpg";
import $ from "jquery";

const mapDispatchToProps = (dispatch) => {
  return {
    setNotif: (message) =>
      dispatch({
        type: action.SET_NOTIF,
        notifMessage: message,
      }),
  };
};

function Form({ setNotif, question, cb, subjects }) {
  const navigate = useNavigate();

  const [uploadBtn, setUploadBtn] = useState(null);

  const handleFileInputChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        cb({ ...question, questionImage: e.target.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleFileInputChangeAnswer = (e, i) => {
    const file = e.target.files[0];
    const tempAnswerKeys = question.answerKeys;

    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        tempAnswerKeys[i].image = e.target.result;
        cb({ ...question, answerKeys: tempAnswerKeys });
      };
      reader.readAsDataURL(file);
    }
  };

  useEffect(() => {
    $(() => {
      setUploadBtn($("#uploadBtn"));
    });
  }, []);
  const [notifBtn, setNotifBtn] = useState(null);

  useEffect(() => {
    $(() => {
      setNotifBtn($("#notif-modal"));
    });
  }, []);

  // FUNCTION
  const submit = async (ev) => {
    ev.preventDefault();
    if (question.answerKeys.length != 0) {
      const questionData = await new QuestionP().create(question);

      if (questionData?.error) {
        console.log(questionData.error);
        setNotif({
          title: "Creation of Assessment Failed",
          body: questionData.error,
        });
        notifBtn.click();
      } else {
        question.answerKeys.forEach(async (key) => {
          const keyForm = key;
          keyForm.questionID = questionData._id;
          const keyData = await new AnswerKeyP().create(keyForm);
          console.log(keyData);
        });
        navigate(dashboardRoute.path);
      }
    } else {
      console.log("Set at least 1 answer key!");
    }
  };

  return (
    <>
      {/*-- FORM CONTAINER --*/}
      <section className="strand-type-container position-relative mt-5">
        <h5 className="w-100 poppins border-bottom border-dark text-uppercase fw-semibold">
          FILL IN THE BLANKS
        </h5>
        <div className="row">
          <section className="col-3">
            <img
              className="w-100 rounded-top"
              src={question.questionImage ? question.questionImage : question1}
              alt="file img input"
            />
            <button
              onClick={() => uploadBtn.click()}
              className="btn btn-dark w-100 fs-6 px-4 rounded-0 rounded-bottom text-uppercase text-light fw-semibold fs-6"
            >
              UPLOAD FILE
            </button>
          </section>
          <section className="col-9">
            {/*-- ASSESSMENT FORM --*/}
            <form onSubmit={submit} className="w-100">
              {/*-- QUESTION --*/}
              <div className="mb-4 w-100">
                <textarea
                  className="form-control shs-textarea shadow w-100"
                  id="text"
                  placeholder="Type your question here"
                  value={question.question}
                  onChange={(ev) => {
                    cb({ ...question, question: ev.target.value });
                  }}
                ></textarea>
              </div>
              {/*-- IMAGE FILE --*/}
              <input
                className="d-none"
                type="file"
                id="uploadBtn"
                accept="image/*"
                onChange={handleFileInputChange}
              />
              <h5 className="w-100 poppins border-bottom border-dark text-uppercase fw-semibold">
                SELECT SUBJECT
              </h5>
              {/*-- SUBJECT SELECTION --*/}
              <div
                className="btn-group d-flex flex-row flex-wrap mb-4"
                role="group"
                aria-label="Basic checkbox toggle button group"
              >
                {subjects?.map((subject, i) => {
                  return (
                    <FormRadioBtn
                      key={i}
                      onChangeCb={(ev) => {
                        cb({ ...question, subjectID: ev.target.id });
                      }}
                      checked={question.subjectID === subject._id}
                      name={"subject"}
                      subjectType={subject}
                    />
                  );
                })}
              </div>

              {/*-- ANSWER KEY CONTAINER --*/}
              {question.answerKeys.map((answerKey, i) => {
                const uploadBtnId = `uploadBtn${i}`;

                return (
                  <section key={i} className="row mt-5">
                    <section className="col-3">
                      <img
                        className="w-100 rounded-top"
                        src={answerKey.image ? answerKey.image : answer1}
                        alt="file img input"
                      />
                      <button
                        type="button"
                        className="btn btn-dark w-100 fs-6 px-4 rounded-0 rounded-bottom text-uppercase text-light fw-semibold fs-6"
                        onClick={() => {
                          $(() => {
                            $("#" + uploadBtnId).click();
                          });
                        }}
                      >
                        UPLOAD FILE
                      </button>
                    </section>
                    <section className="col-9">
                      {/*-- IMAGE FILE --*/}
                      <input
                        className="d-none"
                        type="file"
                        id={uploadBtnId}
                        accept="image/*"
                        onChange={(ev) => handleFileInputChangeAnswer(ev, i)}
                      />
                      <h5 className="w-100 poppins position-relative border-bottom border-dark text-uppercase fw-semibold">
                        ANSWER KEY NO. {i + 1}
                        <a
                          onClick={(ev) => {
                            const tempAnswerKeys = question.answerKeys;
                            tempAnswerKeys.splice(i, 1);
                            cb({
                              ...question,
                              answerKeys: tempAnswerKeys,
                            });
                          }}
                          className="nav-link"
                          style={{ cursor: "pointer" }}
                        >
                          <i className="fa-solid fa-xmark text-danger fs-3 position-absolute top-0 end-0 "></i>
                        </a>
                      </h5>

                      {/*-- QUESTION --*/}
                      <div className="mb-4 w-100">
                        <textarea
                          className="form-control shs-textarea shadow w-100"
                          id="text"
                          placeholder="Type your question here"
                          value={answerKey.value}
                          onChange={(ev) => {
                            const tempAnswerKeys = question.answerKeys;
                            tempAnswerKeys[i].value = ev.target.value;
                            cb({
                              ...question,
                              answerKeys: tempAnswerKeys,
                            });
                          }}
                        ></textarea>
                      </div>

                      {/*-- ANSWER KEY SELECTION --*/}
                      <div
                        className="btn-group d-flex flex-row flex-wrap mb-4"
                        role="group"
                        aria-label="Basic checkbox toggle button group"
                      >
                        <input
                          type="radio"
                          className="btn-check"
                          id={"btncheck" + i}
                          name={"yes" + i}
                          autoComplete="off"
                          checked={answerKey.correct == true}
                          onChange={() => {
                            const tempAnswerKeys = question.answerKeys;
                            tempAnswerKeys[i].correct = true;
                            cb({
                              ...question,
                              answerKeys: tempAnswerKeys,
                            });
                          }}
                        />
                        <label
                          className="btn btn-outline-primary"
                          htmlFor={"btncheck" + i}
                        >
                          CORRECT
                        </label>

                        <input
                          type="radio"
                          className="btn-check"
                          id={"btncheck" + i + "a"}
                          name={"yes" + i}
                          autoComplete="off"
                          checked={answerKey.correct == false}
                          onChange={() => {
                            const tempAnswerKeys = question.answerKeys;
                            tempAnswerKeys[i].correct = false;
                            cb({
                              ...question,
                              answerKeys: tempAnswerKeys,
                            });
                          }}
                        />
                        <label
                          className="btn btn-outline-primary"
                          htmlFor={"btncheck" + i + "a"}
                        >
                          WRONG
                        </label>
                      </div>
                    </section>
                  </section>
                );
              })}

              <button
                type="submit"
                className="btn btn-primary fs-6 mt-4 px-4 text-uppercase text-light fw-semibold fs-6"
              >
                CREATE QUESTION
              </button>
              <button
                type="button"
                onClick={() => {
                  const tempAnswerKeys = question.answerKeys;
                  tempAnswerKeys.push({
                    value: ".",
                    image: null,
                    correct: true,
                  });
                  cb({
                    ...question,
                    answerKeys: tempAnswerKeys,
                  });
                }}
                className="btn btn-dark fs-6 ms-3 mt-4 px-4 text-uppercase text-light fw-semibold fs-6"
              >
                ADD NEW ANSWER KEY
              </button>
            </form>
          </section>
        </div>
      </section>
    </>
  );
}

export default connect(null, mapDispatchToProps)(Form);
