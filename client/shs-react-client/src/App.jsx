import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { connect } from "react-redux";
import {
  indexRoute,
  registerRoute,
  dashboardRoute,
  dashboardBurgerRoute,
  personalEngagementRoute,
  assessmentRoute,
  _assessmentRoute,
  _personalEngagementRoute,
  assessmentBurgerRoute,
  subjectRoute,
  accessRoute,
  resultRoute,
  forgotRoute,
  resetRoute,
  errorRoute,

  /* FORM */
  formStrandTypeRoute,
  formStrandRoute,
  formSubjectTypeRoute,
  formSubjectRoute,
  formPersonalEngagementRoute,
  formAssessmentRoute,

  /* VIEW */
  viewPERoute,
  viewSubjectRoute,
} from "./route/routes";
import { action } from "./redux/action";
import { modalType } from "./feature/modal/modalType";
import Nav from "./feature/nav/Nav.jsx";
import SimpleModal from "./feature/modal/SimpleModal";
import AssessmentModal from "./feature/modal/AssessmentModal";
import NotifModal from "./feature/modal/NotifModal";
import WelcomeModal from "./feature/modal/WelcomeModal.jsx";
import Localhost from "./js/model/LocalHost";
import Login from "./js/model/Login";
import $ from "jquery";

// MODEL
import Strand from "./js/model/Strand.js";
import StrandType from "./js/model/StrandType.js";
import Subject from "./js/model/Subject.js";
import SubjectType from "./js/model/SubjectType.js";
import QuestionP from "./js/model/Question.js";
import PEP from "./js/model/PEP.js";
import ResultModal from "./feature/modal/ResultModal.jsx";

const mapStateToProps = (state) => {
  return {
    strandTypeForDeletion: state.store.strandTypeForDeletion,
    strandForDeletion: state.store.strandForDeletion,
    subjectTypeForDeletion: state.store.subjectTypeForDeletion,
    subjectForDeletion: state.store.subjectForDeletion,
    peQuestionForDeletion: state.store.peQuestionForDeletion,
    assessmentQuestionForDeletion: state.store.assessmentQuestionForDeletion,
    subjectForPreparation: state.store.subjectForPreparation,
    notifMessage: state.store.notifMessage,
    user: state.store.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteStrand: (strand) =>
      dispatch({
        type: action.DELETE_STRAND,
        strandForDeletion: strand,
      }),
    deleteStrandType: (strandType) =>
      dispatch({
        type: action.DELETE_STRAND_TYPE,
        strandTypeForDeletion: strandType,
      }),
    deleteSubjectType: (subjectType) =>
      dispatch({
        type: action.DELETE_SUBJECT_TYPE,
        subjectTypeForDeletion: subjectType,
      }),
    deleteSubject: (subject) =>
      dispatch({
        type: action.DELETE_SUBJECT,
        subjectForDeletion: subject,
      }),
    deleteAssessmentQuestion: (question) =>
      dispatch({
        type: action.DELETE_ASSESSMENT_QUESTION,
        assessmentQuestionForDeletion: question,
      }),
    deletePEQuestion: (peQuestion) =>
      dispatch({
        type: action.DELETE_PE_QUESTION,
        peQuestionForDeletion: peQuestion,
      }),
    logoutUser: () => dispatch({ type: action.LOGOUT_USER }),
  };
};

function App({
  strandTypeForDeletion,
  strandForDeletion,
  subjectTypeForDeletion,
  subjectForDeletion,
  peQuestionForDeletion,
  assessmentQuestionForDeletion,
  subjectForPreparation,
  deleteStrand,
  deleteStrandType,
  deleteSubject,
  deleteSubjectType,
  deleteAssessmentQuestion,
  deletePEQuestion,
  notifMessage,
  user,
  logoutUser,
}) {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route exact path={indexRoute.path} element={indexRoute.element} />
        <Route path={registerRoute.path} element={registerRoute.element} />
        <Route path={dashboardRoute.path} element={dashboardRoute.element} />
        <Route
          path={dashboardBurgerRoute.path}
          element={dashboardBurgerRoute.element}
        />
        <Route
          path={personalEngagementRoute.path}
          element={personalEngagementRoute.element}
        />
        <Route
          path={_personalEngagementRoute.path}
          element={_personalEngagementRoute.element}
        />
        <Route path={assessmentRoute.path} element={assessmentRoute.element} />
        <Route
          path={_assessmentRoute.path}
          element={_assessmentRoute.element}
        />
        <Route
          path={assessmentBurgerRoute.path}
          element={assessmentBurgerRoute.element}
        />
        <Route path={subjectRoute.path} element={subjectRoute.element} />
        <Route exact path={accessRoute.path} element={accessRoute.element} />
        <Route exact path={resultRoute.path} element={resultRoute.element} />
        <Route exact path={forgotRoute.path} element={forgotRoute.element} />
        <Route exact path={resetRoute.path} element={resetRoute.element} />
        <Route exact path={errorRoute.path} element={errorRoute.element} />

        {/*-- FORM --*/}
        <Route
          path={formStrandTypeRoute.path}
          element={formStrandTypeRoute.element}
        />
        <Route path={formStrandRoute.path} element={formStrandRoute.element} />
        <Route
          path={formSubjectTypeRoute.path}
          element={formSubjectTypeRoute.element}
        />
        <Route
          path={formSubjectRoute.path}
          element={formSubjectRoute.element}
        />
        <Route
          path={formPersonalEngagementRoute.path}
          element={formPersonalEngagementRoute.element}
        />
        <Route
          path={formAssessmentRoute.path}
          element={formAssessmentRoute.element}
        />

        {/*-- VIEW --*/}
        <Route path={viewPERoute.path} element={viewPERoute.element} />
        <Route
          path={viewSubjectRoute.path}
          element={viewSubjectRoute.element}
        />

        {/*-- REDIRECT --*/}
        <Route path="*" element={<Navigate to={errorRoute.path} />} />
      </Routes>

      {/* LOGOUT */}
      <SimpleModal
        id={modalType.LOGOUT}
        path={indexRoute.path}
        title="Logout Account"
        body="Do you want to logout your account?"
        yes="YES"
        no="CANCEL"
        cb={async () => {
          logoutUser();
          const login = new Login();
          const data = await login.logout();
          if (data.success) {
            Localhost.deleteSession("user");
          }
        }}
      />

      {/* STRAND TYPE DELETION */}
      <SimpleModal
        id={modalType.STRAND_TYPE_DELETION}
        path={dashboardRoute.path}
        title={`Delete Strand Type ${
          strandTypeForDeletion ? strandTypeForDeletion.name : "FAILED"
        }`}
        body={
          strandTypeForDeletion
            ? `Do you want to delete ${strandTypeForDeletion.name} ? This will not be recover once deleted.`
            : "For security, you should delete all the strands first before deleting the Strand Type."
        }
        yes="DELETE"
        no="CANCEL"
        cb={async () => {
          if (!strandTypeForDeletion) return;

          const result = await new StrandType().delete(
            strandTypeForDeletion.id
          );
          deleteStrandType(null);

          if (result?.acknowledged) {
            $(() => {
              $(`#strand-type-card-${strandTypeForDeletion.id}`).remove();
            });
          }

          console.log("DELETION: ", result);
        }}
      />

      {/* STRAND DELETION */}
      <SimpleModal
        id={modalType.STRAND_DELETION}
        path={dashboardRoute.path}
        title={`Delete Strand ${
          strandForDeletion ? strandForDeletion.name : "UNKNOWN"
        }`}
        body={`Do you want to delete ${
          strandForDeletion ? strandForDeletion.name : "UNKNOWN"
        }? This will not be recover once deleted.`}
        yes="DELETE"
        no="CANCEL"
        cb={async () => {
          const result = await new Strand().delete(strandForDeletion._id);
          deleteStrand(null);

          if (result?.deletedStrand?.acknowledged) {
            $(() => {
              $(`#strand-card-${strandForDeletion._id}`).remove();
            });
          }

          console.log("DELETION: ", result);
        }}
      />

      {/* SUBJECT TYPE DELETION */}
      <SimpleModal
        id={modalType.SUBJECT_TYPE_DELETION}
        path={subjectRoute.path}
        title={`Delete Subject Type ${
          subjectTypeForDeletion ? subjectTypeForDeletion.name : "FAILED"
        }`}
        body={
          subjectTypeForDeletion
            ? `Do you want to delete ${subjectTypeForDeletion.name} ? This will not be recover once deleted.`
            : "For security, you should delete all the subjects first before deleting the Subject Type."
        }
        yes="DELETE"
        no="CANCEL"
        cb={async () => {
          if (!subjectTypeForDeletion) return;

          const result = await new SubjectType().delete(
            subjectTypeForDeletion.id
          );
          deleteSubjectType(null);

          if (result?.acknowledged) {
            $(() => {
              $(`#subject-type-card-${subjectTypeForDeletion.id}`).remove();
            });
          }

          console.log("DELETION: ", result);
        }}
      />

      {/* SUBJECT DELETION */}
      <SimpleModal
        id={modalType.SUBJECT_DELETION}
        path={subjectRoute.path}
        title={`Delete Subject ${
          subjectForDeletion ? subjectForDeletion.name : "UNKNOWN"
        }`}
        body={`Do you want to delete ${
          subjectForDeletion ? subjectForDeletion.name : "UNKNOWN"
        }? This will not be recover once deleted.`}
        yes="DELETE"
        no="CANCEL"
        cb={async () => {
          const result = await new Subject().delete(subjectForDeletion._id);
          deleteSubject(null);

          if (result?.deletedSubject?.acknowledged) {
            $(() => {
              $(`#subject-card-${subjectForDeletion._id}`).remove();
            });
          }

          console.log("DELETION: ", result);
        }}
      />

      {/* PERSONAL ENGAGEMENT QUESTION DELETION */}
      <SimpleModal
        id={modalType.PE_QUESTION_DELETION}
        path={null}
        title={`Delete Personal Engagement Question ${
          peQuestionForDeletion ? peQuestionForDeletion._id : "UNKNOWN"
        }`}
        body={`Do you want to delete ${
          peQuestionForDeletion ? peQuestionForDeletion._id : "UNKNOWN"
        }? This will not be recover once deleted.`}
        yes="DELETE"
        no="CANCEL"
        cb={async () => {
          const result = await new PEP().delete(peQuestionForDeletion._id);
          deletePEQuestion(null);

          if (result?.pe?.acknowledged) {
            $(() => {
              $(`#pe-card-${peQuestionForDeletion._id}`).remove();
            });
          }

          console.log("DELETION: ", result);
        }}
      />

      {/* ASSESSMENT QUESTION DELETION */}
      <SimpleModal
        id={modalType.ASSESSMENT_QUESTION_DELETION}
        path={null}
        title={`Delete Assessment Question ${
          assessmentQuestionForDeletion
            ? assessmentQuestionForDeletion._id
            : "UNKNOWN"
        }`}
        body={`Do you want to delete Question ${
          assessmentQuestionForDeletion
            ? assessmentQuestionForDeletion._id
            : "UNKNOWN"
        }? This will not be recover once deleted.`}
        yes="DELETE"
        no="CANCEL"
        cb={async () => {
          const result = await new QuestionP().delete(
            assessmentQuestionForDeletion._id
          );
          deleteAssessmentQuestion(null);

          if (result?.deletedQuestion?.acknowledged) {
            $(() => {
              $(`#question-card-${assessmentQuestionForDeletion._id}`).remove();
            });
          }

          console.log("DELETION: ", result);
        }}
      />

      {/* ASSESSMENT QUESTION PREPARATION */}
      <AssessmentModal
        id={modalType.ASSESSMENT_PREPARATION}
        path={_assessmentRoute.replace("subjectID", subjectForPreparation?._id)}
        subject={subjectForPreparation}
        cb={(subjectID) => {
          console.log(subjectID);
        }}
      />

      {/* NOTIFICATION */}
      {/* POP-UP MESSAGES */}
      <button
        type="button"
        data-bs-toggle="modal"
        data-bs-target={"#" + modalType.NOTIFICATION}
        id="notif-modal"
        className="nav-link d-none"
      >
        ...
      </button>
      <NotifModal
        id={modalType.NOTIFICATION}
        title={notifMessage.title}
        body={notifMessage.body}
      />

      {/* WELCOME MESSAGE */}
      <button
        type="button"
        data-bs-toggle="modal"
        data-bs-target={"#" + modalType.WELCOME}
        id="welcome-modal"
        className="nav-link d-none"
      >
        ...
      </button>
      <WelcomeModal id={modalType.WELCOME} email={user?.email} />

      {/* RESULT NOTIFICATION */}
      <button
        type="button"
        data-bs-toggle="modal"
        data-bs-target={"#" + modalType.RESULT}
        id="result-modal"
        className="nav-link d-none"
      >
        ...
      </button>
      <ResultModal id={modalType.RESULT} user={user} />
    </Router>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
