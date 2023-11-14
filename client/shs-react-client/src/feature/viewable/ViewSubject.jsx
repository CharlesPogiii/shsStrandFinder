import DashboardSidebar from "../dashboard/DashboardSidebar";
import Localhost from "../../js/model/LocalHost";
import ViewD from "../../js/model/View";
import Loading from "../loading/Loading";
import PEResult from "../layout/PEResult";
import ViewSubjectC from "./component/ViewSubjectC";
import { connect } from "react-redux";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { indexRoute } from "../../route/routes";
import { dashboardData } from "../../js/json-structure/dashboard";
import { action } from "../../redux/action";

const mapStateToProps = (state) => {
  return {
    viewableSidebar: state.store.viewableSidebar,
    viewablePE: state.store.viewablePE,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loginUser: (user) => dispatch({ type: action.LOGIN_USER, user }),
  };
};

function ViewSubject({ viewableSidebar, viewablePE, loginUser }) {
  const navigate = useNavigate();

  // FETCH
  const [data, setData] = useState(dashboardData);

  // UML
  const [selectedStrand, setSelectedStrand] = useState(null);
  const [loading, load] = useState(true);

  const fetchData = async () => {
    load(true);
    const token = Localhost.sessionKey("user");
    const dataD = await new ViewD().viewSubject(token);

    if (dataD?.response?.data?.error) {
      navigate(indexRoute.path);
    } else {
      loginUser(dataD.user);
      setData({
        ...dataD,
        /*
        user: dataD.user,
        viewableSubjects: dataD.viewableSubjects,
        preferredStrand: dataD.preferredStrand,
        personalEngagements: dataD.personalEngagements,
        subjects: dataD.subjects,
        pendingSubjects: dataD.pendingSubjects,
        strandTypes: dataD.strandTypes,
        */
      });
      setSelectedStrand(dataD.selectedStrand);
      load(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return loading ? (
    <Loading />
  ) : (
    <>
      {/*-- MAIN --*/}
      <main
        className={`login bg-dark container-fluid ${
          !viewableSidebar ? "auto-overflow" : "position-relative"
        }`}
        style={{ height: "94vh" }}
      >
        {!viewableSidebar ? (
          <>
            {/*-- NO SIDEBAR --*/}
            <div className="container">
              <div className="row">
                <section className="col-12 pb-4">
                  <h6 className="roboto border-bottom border-light text-light position-relative px-4 py-3">
                    Personal Engagement Result
                  </h6>

                  {/*-- SUBJECT CONTAINER --*/}
                  <ViewSubjectC subjects={data.viewableSubjects} />
                </section>
                {/*-- <section className="col-4 d-flex justify-content-end bg-danger">D</section> --*/}
              </div>
            </div>
          </>
        ) : (
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
                    <h6 className="roboto border-bottom border-light text-light position-relative px-4 py-3">
                      Personal Engagement Result
                    </h6>

                    {/*-- SUBJECT CONTAINER --*/}
                    <ViewSubjectC subjects={data.viewableSubjects} />
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
        )}
      </main>
    </>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(ViewSubject);
