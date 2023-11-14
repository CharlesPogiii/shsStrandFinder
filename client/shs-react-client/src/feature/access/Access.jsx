import AccessHeader from "./AccessHeader";
import AccessTable from "./AccessTable";
import DashboardSidebar from "../dashboard/DashboardSidebar";
import PEResult from "../layout/PEResult";
import Localhost from "../../js/model/LocalHost";
import FormAuth from "../../js/model/FormAuth";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { formData } from "../../js/json-structure/form";
import { accessData } from "../../js/json-structure/access";
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

function Access({ viewableSidebar, viewablePE, loginUser }) {
  const navigate = useNavigate();

  // FETCH
  const [data, fetchAuth] = useState(formData);
  const [access, fetchAccess] = useState(accessData);

  // UML
  const [loading, load] = useState(true);
  const [selectedStrand, setSelectedStrand] = useState(null);

  const fetchData = async () => {
    load(true);

    const token = Localhost.sessionKey("user");
    const dataD = await new FormAuth().adminAuth(token);

    if (dataD?.response?.data?.error) {
      navigate(indexRoute.path);
    } else {
      loginUser(dataD.user);
      fetchAccess({ ...accessData, users: dataD.users });
      fetchAuth({
        ...dataD,
        /*
        ...data,
        user: dataD.user,
        users: dataD.users,
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

  // FUNCTION
  const allow = async (i) => {
    const tempUser = access.users[i];
    console.log(tempUser);
    const dataD = await new FormAuth().setAccess(
      tempUser._id,
      !tempUser.isAdmin
    );

    if (dataD?.response?.data?.error) {
      console.log(dataD.response.data.error);
    } else {
      access.users[i].isAdmin = !tempUser.isAdmin;
      fetchAccess({ ...access });
    }
  };

  return loading ? (
    <Loading />
  ) : (
    <>
      {/*-- MAIN --*/}
      <main
        className={`login container-fluid ${
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
                  <AccessHeader email={data?.user?.email} />
                  <AccessTable
                    mainUser={data?.user}
                    accessData={access}
                    cb={(i) => allow(i)}
                  />
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
                    <AccessHeader email={data?.user?.email} />
                    <AccessTable
                      mainUser={data?.user}
                      accessData={access}
                      cb={(i) => allow(i)}
                    />
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

export default connect(mapStateToProps, mapDispatchToProps)(Access);
