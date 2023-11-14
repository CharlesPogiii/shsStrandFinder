// import AssessmentPanel from "./AssessmentPanel";
// import DashboardSidebar from "../dashboard/DashboardSidebar";
// import PEResult from "../layout/PEResult";
import Localhost from "../../js/model/LocalHost";
import SubjectP from "../../js/model/SubjectP";
import AnswerP from "../../js/model/Answer";
import { connect } from "react-redux";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { assessmentData } from "../../js/json-structure/assessment";
import {
  indexRoute,
  dashboardRoute,
  // viewSubjectRoute,
} from "../../route/routes";
import { action } from "../../redux/action";
import { AssessmentNoSidebar, AssessmentWithSidebar } from "./AssessmentLayout";
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
  console.log("RENDER TRIGGER: _ASSESSMENT");
  const navigate = useNavigate();
  const { subjectID } = useParams();

  // FETCH
  const [data, setData] = useState(assessmentData);
  const [leaveCount, setLeaveCount] = useState(0);

  // UML
  const [selectedStrand, setSelectedStrand] = useState(null);
  const [loading, load] = useState(true);
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [currentIndex, nextIndex] = useState(0);
  const [choice, setChoice] = useState(null);

  const callAccess = async () => {
    load(true);
    setLeaveCount(0);
    const token = Localhost.sessionKey("user");
    const dataD = await new SubjectP().readAssessment(subjectID, token);

    if (dataD?.error) {
      setNotif({
        title: "Assessment Finished",
        body: "This assessment was already answered. You can now check your result at your sidebar. After receiving this notification, you will be redirect to your Dashboard.",
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
      setCurrentQuestion(dataD.questions[currentIndex]);
      setData({
        ...dataD,
        /*
        ...data,
        user: dataD.user,
        isLast: dataD.isLast,
        subject: dataD.subject,
        questions: dataD.questions,
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
    callAccess();
  }, []);

  // UPDATE assessment data
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden) {
        // User has switched to a different tab or performed an action outside the tab
        // Place your code here to handle the user's inactivity
        setLeaveCount(leaveCount + 1);
        console.log(
          "USER WAS DETECTED OUTSIDE THE SYSTEM WHILE DOING AN ASSESSMENT: " +
            (leaveCount + 1)
        );
      } else {
        // User has returned to the tab
        // Place your code here to handle the user's return
        console.log("USER IS DOING AN ASSESSMENT");
      }
    };

    // Add event listener for visibility change
    document.addEventListener(
      "visibilitychange",
      handleVisibilityChange,
      false
    );

    // Clean up the event listener when the component unmounts
    return () => {
      document.removeEventListener(
        "visibilitychange",
        handleVisibilityChange,
        false
      );
    };
  }, [leaveCount]);

  // FUNCTION
  const select = (user, answerKey, correct, letter) => {
    setChoice({ user, answerKey, correct, noOfUnVisit: leaveCount, letter });
  };

  const submit = async () => {
    if (choice.length != 0) {
      await new AnswerP().create(choice);
      setCurrentQuestion(data.questions[currentIndex + 1]);
      nextIndex(currentIndex + 1);
      setChoice(null);
      setLeaveCount(0);

      if (currentIndex >= data.questions.length - 1) {
        navigate(dashboardRoute.path);
        return;
      }

      $(() => {
        $(!viewableSidebar ? "main" : ".scrollable-section").animate({
          scrollTop: 0,
        });
      });
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
          <AssessmentNoSidebar
            data={data}
            choice={choice}
            currentQuestion={currentQuestion}
            select={select}
            submit={submit}
            currentIndex={currentIndex}
          />
        ) : (
          <AssessmentWithSidebar
            viewablePE={viewablePE}
            data={data}
            choice={choice}
            currentQuestion={currentQuestion}
            select={select}
            submit={submit}
            currentIndex={currentIndex}
            selectedStrand={selectedStrand}
          />
        )}
      </main>
    </>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(_Assessment);
