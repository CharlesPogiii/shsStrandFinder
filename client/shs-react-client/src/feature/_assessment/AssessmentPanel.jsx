import AssessmentQuestion from "./AssessmentQuestion";
import AssessmentChoices from "./AssessmentChoices";

function AssessmentPanel({ user, choice, subject, question, cb }) {
  return (
    <>
      {/*-- STRAND TYPE CONTAINER --*/}
      <section className="strand-type-container mt-5">
        <h4 className="w-100 text-primary poppins text-uppercase fw-semibold">
          {subject ? subject.name : "SUBJECT NAME"} ASSESSMENT
        </h4>
      </section>
      <AssessmentQuestion question={question} />

      {/*-- CHOICES --*/}
      {question?.answerKeys?.map((answerKey, i) => (
        <AssessmentChoices
          key={answerKey._id}
          user={user}
          choice={choice}
          answerKey={answerKey}
          index={i}
          cb={cb}
        />
      ))}
    </>
  );
}

export default AssessmentPanel;
