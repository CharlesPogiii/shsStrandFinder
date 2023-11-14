import AssessmentUnanswer from "./AssessmentUnanswer";
import AssessmentAnswered from "./AsessmentAnswered";
import AssessmentSidebar from "./AssessmentSidebar";

function AssessmentBurger() {
  return (
    <>
      {/*-- MAIN - NO FLEX --*/}
      <main
        className="login container-fluid position-relative"
        style={{ height: "94vh" }}
      >
        <div className="row h-100">
          <section className="col-9 h-100 auto-overflow position-relative pb-4 px-5">
            {/*-- STRAND TYPE CONTAINER --*/}
            <section className="strand-type-container mt-5">
              <h5 className="w-100 poppins border-bottom border-dark text-uppercase fw-semibold">
                SUBJECT NAME ASSESSMENT
              </h5>
              <section className="row" style={{ gap: "0.75rem" }}>
                <AssessmentUnanswer />
                <AssessmentAnswered />
              </section>
            </section>
          </section>
          <AssessmentSidebar />
        </div>
      </main>
    </>
  );
}

export default AssessmentBurger;
