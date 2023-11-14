import PEPanel from "./PEPanel";
import PEResult from "../layout/PEResult";
import DashboardSidebar from "../dashboard/DashboardSidebar";

function PENoSidebar({ currentPE, choice, setChoice, cb, isLast }) {
  return (
    <>
      {/*-- NO SIDEBAR --*/}
      <div className="container">
        <div className="row">
          <section className="col-12 pb-4">
            <PEPanel
              pe={currentPE}
              choice={choice}
              cb1={() => setChoice("a")}
              cb2={() => setChoice("b")}
            />
            {/*-- NEXT --*/}
            {choice.length != 0 ? (
              <button
                className="btn btn-dark float-end roboto px-4"
                onClick={cb}
              >
                {isLast ? "NEXT" : "SUBMIT"}
              </button>
            ) : (
              <></>
            )}
          </section>
          {/*-- <section className="col-4 d-flex justify-content-end bg-danger">D</section> --*/}
        </div>
      </div>
      ;
    </>
  );
}

function PEWithSidebar({
  viewablePE,
  pe,
  currentPE,
  choice,
  setChoice,
  cb,
  isLast,
  selectedStrand,
}) {
  return (
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
              {/*-- NO SIDEBAR --*/}
              <div className="container">
                <div className="row">
                  <section className="col-12 pb-4">
                    <PEPanel
                      pe={currentPE}
                      choice={choice}
                      cb1={() => setChoice("a")}
                      cb2={() => setChoice("b")}
                    />
                    {/*-- NEXT --*/}
                    {choice.length != 0 ? (
                      <button
                        className="btn btn-dark float-end roboto px-4"
                        onClick={cb}
                      >
                        {isLast ? "NEXT" : "SUBMIT"}
                      </button>
                    ) : (
                      <></>
                    )}
                  </section>
                  {/*-- <section className="col-4 d-flex justify-content-end bg-danger">D</section> --*/}
                </div>
              </div>
            </>
          ) : (
            <>
              <PEResult
                preferredStrand={pe?.preferredStrand}
                personalEngagements={pe.personalEngagements}
              />
              ;
            </>
          )}
        </section>
        <DashboardSidebar
          user={pe.user}
          selectedStrand={selectedStrand}
          subjects={pe.subjects}
          pendingSubjects={pe.pendingSubjects}
        />
      </div>
    </>
  );
}

export { PENoSidebar, PEWithSidebar };
