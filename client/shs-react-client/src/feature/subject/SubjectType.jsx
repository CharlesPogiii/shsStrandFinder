import { connect } from "react-redux";
import { action } from "../../redux/action";
import { modalType } from "../modal/modalType";
import SubjectC from "./SubjectC";
import $ from "jquery";

const mapDispatchToProps = (dispatch) => {
  return {
    deleteSubjectType: (subjectType) =>
      dispatch({
        type: action.DELETE_SUBJECT_TYPE,
        subjectTypeForDeletion: subjectType,
      }),
  };
};

function SubjectType({ deleteSubjectType, user, subjectType }) {
  return (
    <>
      {/*-- SUBJECT TYPE CONTAINER --*/}
      <section
        className="subject-type-container position-relative mt-5"
        id={`subject-type-card-${subjectType.id}`}
      >
        <a
          onClick={(event) => {
            event.preventDefault();

            $(() => {
              const strandChildren = $(
                `#subject-type-card-${subjectType.id}`
              ).find(".subject-card-child");

              const strandSize = strandChildren.length;

              if (strandSize == 0) {
                deleteSubjectType(subjectType);
              } else {
                deleteSubjectType(null);
              }
            });
          }}
          data-bs-toggle="modal"
          data-bs-target={"#" + modalType.SUBJECT_TYPE_DELETION}
          className="nav-link"
        >
          {user.isAdmin == true ? (
            <i className="fa-solid fa-rectangle-xmark text-dark fs-3 position-absolute top-0 end-0"></i>
          ) : (
            <></>
          )}
        </a>
        <h4 className="w-100 text-primary poppins border-bottom border-dark text-uppercase fw-semibold">
          {subjectType.name}
        </h4>
        <section className="row">
          {subjectType.subjects.map((subject, i) => {
            return <SubjectC key={i} user={user} subject={subject} />;
          })}
        </section>
      </section>
    </>
  );
}

export default connect(null, mapDispatchToProps)(SubjectType);
