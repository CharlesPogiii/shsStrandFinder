import Localhost from "../../js/model/LocalHost";

function AssessmentQuestion({ question }) {
  return (
    <>
      {/*-- QUESTION --*/}
      <h5 className="w-100 mt-5 poppins border-bottom border-dark text-uppercase fw-semibold">
        Assessment No. {question ? question?.index : 0}
      </h5>
      <section
        className={`my-4 p-4 border border-secondary rounded d-flex flex-column align-items-${
          question?.questionImagePath ? "center" : "start"
        }`}
        style={{ minHeight: "250px" }}
      >
        {question?.questionImagePath ? (
          <img
            className="mb-3"
            src={Localhost.path() + question?.questionImagePath}
            alt="answer key image"
            style={{ maxWidth: "250px" }}
          />
        ) : (
          <></>
        )}
        <h5 className="poppins fw-light">
          {question
            ? question.question
            : "Lorem ipsum dolor sit amet consectetur adipisicing elit?"}
        </h5>
      </section>
    </>
  );
}

export default AssessmentQuestion;
