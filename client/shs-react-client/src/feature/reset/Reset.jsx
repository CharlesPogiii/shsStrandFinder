import Form from "./Form";
import Image from "./Image";
import DashboardSidebar from "../dashboard/DashboardSidebar";
import PEResult from "../layout/PEResult";
import ResetD from "../../js/model/Reset";
import Localhost from "../../js/model/LocalHost";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { formData } from "../../js/json-structure/form";
import { indexRoute } from "../../route/routes";
import { action } from "../../redux/action";
import Loading from "../loading/Loading";

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

function Reset({ viewableSidebar, viewablePE, loginUser }) {
  const navigate = useNavigate();

  // FETCH
  const [data, fetchAccess] = useState(formData);

  // UML
  const [selectedStrand, setSelectedStrand] = useState({
    userID: "user123",
    id: "strand123",
    imagePath: null,
    accessToken: "access-token",
  });
  const [loading, load] = useState(true);

  const [logoutUser, setLogoutUser] = useState({
    accessToken: "access-token",
  });

  useEffect(() => {
    load(true);

    const fetchData = async () => {
      const token = Localhost.sessionKey("user");
      const dataD = await new ResetD().auth(token);

      if (dataD?.response?.data?.error) {
        navigate(indexRoute.path);
      } else {
        loginUser(dataD.user);
        fetchAccess({
          ...dataD,
          /*
          user: dataD.user,
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

    fetchData();
  }, []);

  // UPDATE dashboard data
  useEffect(() => {}, [data]);

  return loading ? (
    <Loading />
  ) : (
    <>
      {/*-- MAIN --*/}
      <main
        className={`login d-lg-flex align-items-center px-0 ${
          !viewableSidebar
            ? "auto-overflow container"
            : "position-relative container-fluid"
        }`}
        style={{ height: "94vh" }}
      >
        {!viewableSidebar ? (
          <>
            {/*-- NO SIDEBAR --*/}
            <div className="row w-100">
              <section className="col-8">
                <Form />
              </section>
              <Image />
            </div>
          </>
        ) : (
          <>
            {/*-- W/ SIDEBAR --*/}
            <div
              className={`row align-items-center w-100 m-0 ${
                viewablePE ? "bg-dark" : ""
              } h-100`}
            >
              <section
                className={`col-12 col-md-6 col-lg-9 h-100 position-relative ${
                  !viewablePE
                    ? "auto-overflow pb-4 px-5 d-flex flex-column justify-content-center"
                    : "p-0"
                }`}
              >
                {!viewablePE ? (
                  <>
                    <Form />
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

      {/*-- DESIGN --*/}
      <span className="shs-design verticalOval-1"></span>
      <span className="shs-design verticalOval-2"></span>
      <span className="shs-design verticalOval-3"></span>
      <span className="shs-design verticalOval-4"></span>
      <span className="shs-design verticalOval-6"></span>
      <span className="shs-design verticalOval-5"></span>
    </>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Reset);
