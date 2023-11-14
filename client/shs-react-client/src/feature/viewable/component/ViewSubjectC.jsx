import Localhost from "../../../js/model/LocalHost";
import ViewAssessment from "./ViewAssessment";

function ViewSubjectC({ subjects }) {
  return subjects?.map((subject) => {
    return (
      <section className="mt-5" key={subject._id}>
        <h5 className="poppins text-warning position-relative px-4 py-3">
          {subject.name}
        </h5>
        <section className="row">
          <section className="col-12 col-lg-2">
            <img
              src={Localhost.path() + subject.imagePath}
              className="card-img h-100"
              alt="strand img"
              style={{ height: "250px", maxHeight: "250px", cursor: "pointer" }}
            />
          </section>
          <section className="col-12 col-lg-10">
            <section className="row">
              {subject?.questions?.map((question, i) => (
                <ViewAssessment
                  key={question._id}
                  question={question}
                  quesNo={i + 1}
                />
              ))}
            </section>
          </section>
        </section>
      </section>
    );
  });
}

export default ViewSubjectC;
