import DashboardHeader from "./DashboardHeader";
import DashboardStrandType from "./DashboardStrandType";
import PEResult from "../layout/PEResult";
import DashboardSidebar from "./DashboardSidebar";

function DashboardNoSideBar({ data, isFinish, cb }) {
  return (
    <>
      {/*-- NO SIDEBAR --*/}
      <div className="container">
        <div className="row">
          <section className="col-12 pb-4">
            <DashboardHeader user={data.user} finish={isFinish} />
            {data.strandTypes.map((strandType, i) => (
              <DashboardStrandType
                key={i}
                user={data.user}
                strandType={strandType}
                strandCb={cb}
              />
            ))}
          </section>
        </div>
      </div>
    </>
  );
}

function DashboardWithSidebar({
  viewablePE,
  data,
  selectedStrand,
  isFinish,
  cb,
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
              <DashboardHeader user={data.user} finish={isFinish} />
              {data.strandTypes.map((strandType, i) => (
                <DashboardStrandType
                  key={i}
                  user={data.user}
                  strandType={strandType}
                  strandCb={cb}
                />
              ))}
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

export { DashboardNoSideBar, DashboardWithSidebar };
