import RouteLink from "./RouteLink";

// elements
import Index from "../feature/index/Index";
import Register from "../feature/register/Register";
import Dashboard from "../feature/dashboard/Dashboard";
import DashboardBurger from "../feature/dashboard/DashboardBurger";
import PersonalEngagement from "../feature/personal-engagement/PersonalEngagement";
import Assessment from "../feature/assessment/Assessment";
import _Assessment from "../feature/_assessment/_Assessment";
import _PE from "../feature/_personal-engagement/_PE";
import AssessmentBurger from "../feature/assessment/AssessmentBurger";
import Subject from "../feature/subject/Subject";
import Access from "../feature/access/Access";
import Result from "../feature/result/Result";
import Forgot from "../feature/forgot/Forgot";
import Reset from "../feature/reset/Reset";
import Error from "../feature/error/Error";

/* FORM */
import FormStrandType from "../feature/form/form-strand-type/FormStrandType";
import FormStrand from "../feature/form/form-strand/FormStrand";
import FormSubjectType from "../feature/form/form-subject-type/FormSubjectType";
import FormSubject from "../feature/form/form-subject/FormSubject";
import FormPersonalEngagement from "../feature/form/form-personal-engagement/FormPersonalEngagement";
import FormAssessment from "../feature/form/form-assessment/FormAssessment";

/* VIEW */
import ViewPE from "../feature/viewable/ViewPE";
import ViewSubject from "../feature/viewable/ViewSubject";

const indexRoute = new RouteLink("/", <Index />);
const registerRoute = new RouteLink("/register", <Register />);
const dashboardRoute = new RouteLink("/dashboard", <Dashboard />);
const dashboardBurgerRoute = new RouteLink(
  "/dashboard-burger",
  <DashboardBurger />
);
const personalEngagementRoute = new RouteLink(
  "/personal-engagement",
  <PersonalEngagement />
);
const _personalEngagementRoute = new RouteLink(
  "/_personal-engagement",
  <_PE />
);
const assessmentRoute = new RouteLink("/assessment", <Assessment />);
const _assessmentRoute = new RouteLink("/_assessment", <_Assessment />).with(
  "subjectID"
);
const assessmentBurgerRoute = new RouteLink(
  "/assessment-burger",
  <AssessmentBurger />
);
const subjectRoute = new RouteLink("/subject", <Subject />);
const resultRoute = new RouteLink("/result", <Result />);
const forgotRoute = new RouteLink("/forgot", <Forgot />);
const resetRoute = new RouteLink("/reset", <Reset />);
const errorRoute = new RouteLink("/error", <Error />);

/* FORM */
const formStrandTypeRoute = new RouteLink(
  "/form/strand-type",
  <FormStrandType />
);
const formStrandRoute = new RouteLink("/form/strand", <FormStrand />);
const formSubjectTypeRoute = new RouteLink(
  "/form/subject-type",
  <FormSubjectType />
);
const formSubjectRoute = new RouteLink("/form/subject", <FormSubject />);
const formPersonalEngagementRoute = new RouteLink(
  "/form/personal-engagement",
  <FormPersonalEngagement />
);
const formAssessmentRoute = new RouteLink(
  "/form/assessment",
  <FormAssessment />
);
const accessRoute = new RouteLink("/admin/access", <Access />);

/* VIEW */
const viewPERoute = new RouteLink("/view/personal-engagement", <ViewPE />);
const viewSubjectRoute = new RouteLink("/view/subject", <ViewSubject />);

export {
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
};
