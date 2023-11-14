import { action } from "../../redux/action";
import { connect } from "react-redux";
import { modalType } from "../modal/modalType";
import { Link } from "react-router-dom";
import { resetRoute } from "../../route/routes";
import Localhost from "../../js/model/LocalHost";
import SidebarSubject from "../dashboard/component/SidebarSubject";
import SidebarPendingSubject from "../dashboard/component/SidebarPendingSubject";
import SidebarButton from "../dashboard/component/SidebarButton";
import SidebarGroup from "../layout/SidebarGroup";
import strandNone from "../../asset/strand/strand-none.avif";

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

function ResultSidebar({
  viewablePE,
  viewSidebar,
  viewPE,
  user,
  subjects,
  predictedStrand,
}) {
  return (
    <>
      {/*-- SIDEBAR --*/}
      <section
        className="col-3 auto-overflow position-sticky top-0 end-0 justify-content-end bg-dark m-0 p-0"
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
            }}
            className="nav-link"
            style={{ cursor: "pointer" }}
          >
            <i className="fa-solid fa-xmark text-light fs-3 position-absolute top-0 end-0 m-2"></i>
          </a>
        </h6>
        <h6 className="roboto text-secondary px-4 py-3">Predicted Strand</h6>
        <div className="w-100 border-bottom border-light d-flex flex-column align-items-center justify-content-center py-3">
          <img
            src={
              predictedStrand?.imagePath
                ? Localhost.path() + predictedStrand.imagePath
                : strandNone
            }
            alt="strand image display"
            style={{ height: "175px" }}
          />
          <h6 className="roboto text-light my-3 px-4 py-3">
            {predictedStrand?.name}
          </h6>
          <p className="roboto text-light px-4">
            {predictedStrand?.description}
          </p>
        </div>
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
          {subjects?.map((subject) => {
            return <SidebarSubject key={subject.id} subject={subject} />;
          })}
        </section>
        <SidebarGroup />
      </section>
    </>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(ResultSidebar);
