// import DashboardHeader from "./DashboardHeader";
// import DashboardSidebar from "./DashboardSidebar";
// import DashboardStrandType from "./DashboardStrandType";
// import PEResult from "../layout/PEResult";
import Loading from "../loading/Loading";
import { DashboardNoSideBar, DashboardWithSidebar } from "./DashboardLayout";
import DashboardD from "../../js/model/Dashboard";
import Localhost from "../../js/model/LocalHost";
import SelectedStrand from "../../js/model/SelectedStrand";
import { connect } from "react-redux";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { dashboardData } from "../../js/json-structure/dashboard";
import { indexRoute } from "../../route/routes";
import { action } from "../../redux/action";
import $ from "jquery";

const mapStateToProps = (state) => {
  return {
    viewableSidebar: state.store.viewableSidebar,
    viewablePE: state.store.viewablePE,
    isWelcome: state.store.isWelcome,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loginUser: (user) => dispatch({ type: action.LOGIN_USER, user }),
    welcome: (isWelcome) => dispatch({ type: action.SET_WELCOME, isWelcome }),
  };
};

function Dashboard({
  viewableSidebar,
  viewablePE,
  isWelcome,
  loginUser,
  welcome,
}) {
  console.log("RENDER TRIGGER: DASHBOARD");
  const navigate = useNavigate();

  // FETCH
  const [data, setData] = useState(dashboardData);

  // UML
  const [selectedStrand, setSelectedStrand] = useState(null);
  const [loading, load] = useState(true);
  const [isFinish, finish] = useState(false);

  // FUNCTION
  const setStrand = async (strand) => {
    // VALIDATION
    const user = data?.user;

    if (user.isAdmin) {
      console.log("Student can only use this feature!");
    } else {
      const selectedStrand = new SelectedStrand();
      await selectedStrand.create(data.user.id, strand._id);
      setSelectedStrand({
        ...strand,
        userID: data.user.id,
      });
    }
  };

  const fetchData = async () => {
    load(true);

    // CHECK IF SESSION EXIST
    if (!Localhost.has("user")) {
      navigate(indexRoute.path);
    }

    const token = Localhost.sessionKey("user");
    const dataD = await new DashboardD().read(token);

    if (dataD?.response?.data?.error) {
      navigate(indexRoute.path);
    } else {
      loginUser(dataD.user);
      setData({
        ...dataD,
        /*
        ...data,
        user: dataD.user,
        preferredStrand: dataD.preferredStrand,
        personalEngagements: dataD.personalEngagements,
        subjects: dataD.subjects,
        pendingSubjects: dataD.pendingSubjects,
        strandTypes: dataD.strandTypes,
        */
      });
      setSelectedStrand(dataD.selectedStrand);
      finish(
        dataD.pendingSubjects.length == 0 &&
          dataD.personalEngagements.length != 0
      );
      load(false);

      // SET WELCOME NOTIF IN FIRST VISIT
      if (isWelcome == true) {
        $(() => {
          $("#welcome-modal").click();
        });
        welcome(false);
      }
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
        className={`login container-fluid ${
          !viewableSidebar ? "auto-overflow" : "position-relative"
        }`}
        style={{ height: "94vh" }}
      >
        {!viewableSidebar ? (
          <DashboardNoSideBar data={data} isFinish={isFinish} cb={setStrand} />
        ) : (
          <DashboardWithSidebar
            viewablePE={viewablePE}
            data={data}
            selectedStrand={selectedStrand}
            isFinish={isFinish}
            cb={setStrand}
          />
        )}
      </main>
    </>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
