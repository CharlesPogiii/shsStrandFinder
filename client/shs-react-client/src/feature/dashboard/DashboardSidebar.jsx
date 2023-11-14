import { action } from "../../redux/action";
import { connect } from "react-redux";
import { resetRoute } from "../../route/routes";
import { Link } from "react-router-dom";
import { modalType } from "../modal/modalType";
import SidebarButton from "./component/SidebarButton";
import SidebarGroup from "../layout/SidebarGroup";
import SidebarSubject from "./component/SidebarSubject";
import SidebarPendingSubject from "./component/SidebarPendingSubject";
import SidebarStrand from "./component/SidebarStrand";

const mapStateToProps = (state) => {
  return {
    viewablePE: state.store.viewablePE,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    viewSidebar: (bool) =>
      dispatch({ type: action.VIEW_SIDEBAR, viewableSidebar: bool }),
    viewPE: (bool) => dispatch({ type: action.VIEW_PE, viewablePE: bool }),
  };
};

function DashboardSidebar({
  viewablePE,
  viewSidebar,
  viewPE,
  user,
  selectedStrand = null,
  subjects,
  pendingSubjects,
}) {
  return (
    <>
      {/*-- SIDEBAR --*/}
      <section
        className="col-12 col-md-6 col-lg-3 auto-overflow position-sticky top-0 end-0 justify-content-end bg-dark m-0 p-0"
        style={{ height: "94vh" }}
      >
        <h6 className="roboto text-light position-relative border-bottom border-light px-4 py-3">
          <Link
            to={resetRoute.path}
            className="nav-link"
            style={{ cursor: "pointer" }}
          >
            <i className="fa-solid fa-user me-3"></i>
            {user?.email}
          </Link>
          <a
            onClick={(event) => {
              event.preventDefault();
              viewSidebar(false);
              viewPE(false);
            }}
            className="nav-link"
            style={{ cursor: "pointer" }}
          >
            <i className="fa-solid fa-xmark text-light fs-3 position-absolute top-0 end-0 m-2"></i>
          </a>
        </h6>
        <SidebarStrand selectedStrand={selectedStrand} />
        <SidebarButton
          label="Personal Engagement"
          icon1="fa-regular fa-note-sticky"
          icon2="fa-solid fa-angle-left"
          cb={() => viewPE(!viewablePE)}
          toggle={false}
          target={modalType.LOGOUT}
        />
        <h6 className="roboto text-light border-bottom border-light px-4 py-3">
          <i className="fa-solid fa-clipboard-question me-3"></i>Assessments
        </h6>
        {/*-- SUBJECT SECTION --*/}
        <section>
          {/*-- ASSESSED SUBJECT --*/}
          {subjects?.map((subject, index) => (
            <SidebarSubject key={index} subject={subject} />
          ))}
          {/*-- PENDING SUBJECT --*/}
          {pendingSubjects?.map((pendingSubject) => {
            return (
              <SidebarPendingSubject
                key={pendingSubject._id}
                pendingSubject={pendingSubject}
              />
            );
          })}
        </section>
        <SidebarGroup user={user} />
      </section>
    </>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(DashboardSidebar);
