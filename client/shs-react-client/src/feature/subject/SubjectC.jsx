import { connect } from "react-redux";
import { action } from "../../redux/action";
import { modalType } from "../modal/modalType";
import Localhost from "../../js/model/LocalHost";

const mapDispatchToProps = (dispatch) => {
  return {
    deleteSubject: (subject) =>
      dispatch({
        type: action.DELETE_SUBJECT,
        subjectForDeletion: subject,
      }),
    prepareSubject: (preparedSubject) =>
      dispatch({
        type: action.PREPARE_SUBJECT,
        subjectForPreparation: preparedSubject,
      }),
  };
};

function SubjectC({ deleteSubject, prepareSubject, user, subject }) {
  return (
    <section className="col-6 col-lg-3 m-0 p-2">
      {/*-- SUBJECT CONTAINER --*/}
      <div
        data-bs-toggle="modal"
        data-bs-target={"#" + modalType.ASSESSMENT_PREPARATION}
        className="subject-card-child card position-relative text-bg-dark"
        id={`subject-card-${subject._id}`}
        style={{ height: "250px", cursor: "pointer" }}
        onClick={(event) => {
          event.preventDefault();
          prepareSubject(subject);
        }}
      >
        <img
          src={Localhost.path() + subject.imagePath}
          className="card-img h-100"
          alt="subject img"
        />
        <a
          onClick={(event) => {
            event.preventDefault();
            event.stopPropagation();
            deleteSubject(subject);
          }}
          data-bs-toggle="modal"
          data-bs-target={"#" + modalType.SUBJECT_DELETION}
          className="nav-link"
        >
          {subject.count == 0 && user.isAdmin == true ? (
            <i className="fa-solid fa-rectangle-xmark text-danger fs-3 position-absolute top-0 end-0 m-2"></i>
          ) : (
            <></>
          )}
        </a>
        <div className="bg-dark position-absolute p-2 bottom-0 w-100">
          <h6 className="card-title poppins">{subject.name}</h6>
        </div>
      </div>
    </section>
  );
}

export default connect(null, mapDispatchToProps)(SubjectC);
