import { connect } from "react-redux";
import { action } from "../../redux/action";
import { modalType } from "../modal/modalType";
import Localhost from "../../js/model/LocalHost";

const mapDispatchToProps = (dispatch) => {
  return {
    deleteStrand: (strand) =>
      dispatch({
        type: action.DELETE_STRAND,
        strandForDeletion: strand,
      }),
    viewSidebar: (bool) =>
      dispatch({ type: action.VIEW_SIDEBAR, viewableSidebar: bool }),
  };
};

function DashboardStrand({
  deleteStrand,
  viewSidebar,
  user,
  strand,
  strandCb = null,
}) {
  return (
    <section className="col-6 col-lg-3 m-0 p-2">
      {/*-- STRAND CONTAINER --*/}
      <div
        onClick={() => {
          if (strandCb) {
            strandCb();
          }
          viewSidebar(true);
        }}
        className="strand-card-child card position-relative text-bg-dark p-0"
        id={`strand-card-${strand._id}`}
        style={{ height: "350px", cursor: "pointer" }}
      >
        <img
          src={Localhost.path() + strand.imagePath}
          className="card-img h-100"
          alt="strand img"
        />
        {user.isAdmin == true ? (
          <a
            onClick={(event) => {
              event.preventDefault();
              event.stopPropagation();
              deleteStrand(strand);
            }}
            data-bs-toggle="modal"
            data-bs-target={"#" + modalType.STRAND_DELETION}
            className="nav-link"
          >
            <i className="fa-solid fa-rectangle-xmark text-danger fs-3 position-absolute top-0 end-0 m-2"></i>
          </a>
        ) : (
          <></>
        )}
        <div className="bg-dark position-absolute p-2 bottom-0 w-100">
          <h6 className="card-title poppins">{strand.name}</h6>
        </div>
      </div>
    </section>
  );
}

export default connect(null, mapDispatchToProps)(DashboardStrand);
