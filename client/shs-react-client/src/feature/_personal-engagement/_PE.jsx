// import { assessmentData } from "../../js/json-structure/assessment";
// import PEPanel from "./PEPanel";
// import DashboardSidebar from "../dashboard/DashboardSidebar";
// import PEResult from "../layout/PEResult";
import { PENoSidebar, PEWithSidebar } from "./PELayout";
import PEP from "../../js/model/PEP";
import Localhost from "../../js/model/LocalHost";
import { connect } from "react-redux";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { indexRoute, dashboardRoute } from "../../route/routes";
import { action } from "../../redux/action";
import Loading from "../loading/Loading";
import $ from "jquery";

const mapStateToProps = (state) => {
  return {
    viewableSidebar: state.store.viewableSidebar,
    viewablePE: state.store.viewablePE,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loginUser: (user) => dispatch({ type: action.LOGIN_USER, user }),
    setNotif: (message) =>
      dispatch({
        type: action.SET_NOTIF,
        notifMessage: message,
      }),
  };
};

function _Assessment({ viewableSidebar, viewablePE, loginUser, setNotif }) {
  console.log("RENDER TRIGGER: _PE");
  const navigate = useNavigate();

  // FETCH
  const [pe, setPE] = useState({});

  // UML
  const [selectedStrand, setSelectedStrand] = useState(null);
  const [loading, load] = useState(true);
  const [currentPE, setCurrentPE] = useState(null);
  const [currentIndex, nextIndex] = useState(0);
  const [choice, setChoice] = useState("");

  const fetchData = async () => {
    load(true);
    const token = Localhost.sessionKey("user");
    const dataD = await new PEP().assess(token);

    if (dataD?.error) {
      setNotif({
        title: "Assessment Finished",
        body: "This assessment was already answered. You can now check your result in Personal Engagement result at your sidebar. After receiving this notification, you will be redirect to your Dashboard.",
      });
      $("#notif-modal").click();
      return navigate(dashboardRoute.path);
    }

    if (dataD?.response?.data?.error) {
      setNotif({
        title: "Server Problem Detected",
        body: dataD?.response?.data?.error,
      });
      $("#notif-modal").click();
      navigate(indexRoute.path);
    } else {
      loginUser(dataD.user);
      setCurrentPE(dataD.filteredPes[currentIndex]);
      setPE({
        ...dataD,
        /*
        user: dataD.user,
        filteredPes: dataD.filteredPes,
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
  const answer = async () => {
    await new PEP().answer({
      user: pe.user.id,
      pe: currentPE._id,
      yes: choice === "a",
    });
  };

  const nextCall = async () => {
    if (choice.length != 0) {
      await answer();
      setCurrentPE(pe?.filteredPes[currentIndex + 1]);
      nextIndex(currentIndex + 1);
      setChoice("");
    }
  };

  const submit = async () => {
    if (choice.length != 0) {
      await answer();
      setCurrentPE(null);
      nextIndex(0);
      setChoice("");
      navigate(dashboardRoute.path);
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
          <PENoSidebar
            currentPE={currentPE}
            choice={choice}
            setChoice={setChoice}
            cb={() =>
              currentIndex < pe.filteredPes.length - 1 ? nextCall() : submit()
            }
            isLast={currentIndex < pe.filteredPes.length - 1}
          />
        ) : (
          <PEWithSidebar
            viewablePE={viewablePE}
            pe={pe}
            currentPE={currentPE}
            choice={choice}
            setChoice={setChoice}
            cb={() =>
              currentIndex < pe.filteredPes.length - 1 ? nextCall() : submit()
            }
            isLast={currentIndex < pe.filteredPes.length - 1}
            selectedStrand={selectedStrand}
          />
        )}
      </main>
    </>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(_Assessment);
