import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import {
  // personalEngagementRoute,
  _personalEngagementRoute,
  subjectRoute,
  resultRoute,
  viewPERoute,
} from "../../route/routes";

function DashboardHeader({ user, finish }) {
  const navigate = useNavigate();

  return (
    <>
      {/*-- PANEL DISPLAY --*/}
      <header className="card mt-5">
        <div className="card-body p-5">
          <h2 className="card-title poppins">Welcome to SHS Strand Finder</h2>
          <p className="card-text my-4 roboto">
            Hello, {user.email}! SHS Strand Finder is a website use to aid your
            SHS career by providing recomendaded strand that commonly take by a
            SHS student. All you have to do is to answer two assessments:
            Personal Engagement and Assessment on each subject. After answering
            all the assessment, the result button will be display for you to see
            all the results and a graph for data analysis.
          </p>
          <a
            onClick={(ev) => {
              ev.preventDefault();
              if (user.isAdmin) navigate(viewPERoute.path);
              else navigate(_personalEngagementRoute.path);
            }}
            className="nav-link d-inline"
          >
            <button className="btn btn-dark roboto px-4 me-3 fs-6 fw-semibold">
              PERSONAL ENGAGEMENTS
            </button>
          </a>
          <a
            onClick={(ev) => {
              ev.preventDefault();
              navigate(subjectRoute.path);
            }}
            className="nav-link d-inline"
          >
            <button className="btn btn-primary text-light roboto px-4 me-3 fs-6 fw-semibold">
              TAKE ASSESSMENT
            </button>
          </a>
          {finish ? (
            <Link to={resultRoute.path} className="nav-link d-inline">
              <button className="btn btn-success text-light roboto px-4 me-3 fs-6 fw-semibold">
                SEE RESULTS
              </button>
            </Link>
          ) : (
            <></>
          )}
        </div>
      </header>
    </>
  );
}

export default DashboardHeader;
