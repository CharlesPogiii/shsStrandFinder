import SubjectHeader from "./SubjectHeader";
import SubjectType from "./SubjectType";
import PEResult from "../layout/PEResult";
import DashboardSidebar from "../dashboard/DashboardSidebar";
import SubjectStrand from "./SubjectStrand";

function SubjectNoSidebar({ data, type, setType }) {
  return (
    <>
      {/*-- NO SIDEBAR --*/}
      <div className="container">
        <div className="row">
          <section className="col-12 pb-4">
            <SubjectHeader user={data?.user} setType={setType} />
            {type === "subject-type"
              ? data?.subjectTypes.map((subjectType, i) => {
                  return (
                    <SubjectType
                      key={i}
                      user={data.user}
                      subjectType={subjectType}
                    />
                  );
                })
              : data?.strands.map((strand, i) => {
                  return (
                    <SubjectStrand key={i} user={data.user} strand={strand} />
                  );
                })}
          </section>
        </div>
      </div>
    </>
  );
}

function SubjectWithSidebar({
  viewablePE,
  data,
  type,
  setType,
  selectedStrand,
}) {
  return (
    <>
      {/*-- W/ SIDEBAR --*/}
      <div className={`row ${viewablePE ? "bg-dark" : ""} h-100`}>
        <section
          className={`col-12 col-md-6 col-lg-9 h-100 position-relative ${
            !viewablePE ? "auto-overflow pb-4 px-5" : "p-0"
          }`}
        >
          {!viewablePE ? (
            <>
              <SubjectHeader user={data?.user} setType={setType} />
              {type === "subject-type"
                ? data?.subjectTypes.map((subjectType, i) => {
                    return (
                      <SubjectType
                        key={i}
                        user={data.user}
                        subjectType={subjectType}
                      />
                    );
                  })
                : data?.strands.map((strand, i) => {
                    return (
                      <SubjectStrand key={i} user={data.user} strand={strand} />
                    );
                  })}
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
          selectedStrand={selectedStrand}
          subjects={data.subjects}
          pendingSubjects={data.pendingSubjects}
        />
      </div>
    </>
  );
}

export { SubjectNoSidebar, SubjectWithSidebar };
