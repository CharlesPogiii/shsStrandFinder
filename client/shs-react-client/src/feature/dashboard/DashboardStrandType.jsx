import { connect } from "react-redux";
import { action } from "../../redux/action";
import { modalType } from "../modal/modalType";
import DashboardStrand from "./DashboardStrand";
import $ from "jquery";

const mapDispatchToProps = (dispatch) => {
  return {
    deleteStrandType: (strandType) =>
      dispatch({
        type: action.DELETE_STRAND_TYPE,
        strandTypeForDeletion: strandType,
      }),
  };
};

function DashboardStrandType({
  deleteStrandType,
  user,
  strandType,
  strandCb = null,
}) {
  return (
    <>
      {/*-- STRAND TYPE CONTAINER --*/}
      <section
        className="strand-type-container position-relative mt-5"
        id={`strand-type-card-${strandType.id}`}
      >
        <a
          onClick={(event) => {
            event.preventDefault();

            $(() => {
              const strandChildren = $(
                `#strand-type-card-${strandType.id}`
              ).find(".strand-card-child");

              const strandSize = strandChildren.length;

              if (strandSize == 0) {
                deleteStrandType(strandType);
              } else {
                deleteStrandType(null);
              }
            });
          }}
          data-bs-toggle="modal"
          data-bs-target={"#" + modalType.STRAND_TYPE_DELETION}
          className="nav-link"
        >
          {user.isAdmin == true ? (
            <i className="fa-solid fa-rectangle-xmark text-dark fs-3 position-absolute top-0 end-0"></i>
          ) : (
            <></>
          )}
        </a>
        <h5 className="w-100 poppins border-bottom border-dark text-uppercase fw-semibold">
          {strandType.name}
        </h5>
        <section className="row">
          {strandType.strands.map((strand, i) => (
            <DashboardStrand
              key={i}
              user={user}
              strand={strand}
              strandCb={() => strandCb(strand)}
            />
          ))}
        </section>
      </section>
    </>
  );
}

export default connect(null, mapDispatchToProps)(DashboardStrandType);
