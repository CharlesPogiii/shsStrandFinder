// import { strandTypeData } from "../../../js/json-structure/form/strand-type";
// import { subjectTypeData } from "../../../js/json-structure/form/subject-type";
// import SubjectType from "../../../js/model/SubjectType";
// import Strand from "../../../js/model/Strand";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { subjectRoute } from "../../../route/routes";
import { connect } from "react-redux";
import { action } from "../../../redux/action";
import Subject from "../../../js/model/Subject";
import StrandSubject from "../../../js/model/StrandSubject";
import FormCheckBox from "../component/FormCheckbox.jsx";
import FormRadioBtn from "../component/FormRadioBtn.jsx";
import subject1 from "../../../asset/subject/subject1.jpg";
import $ from "jquery";

const mapDispatchToProps = (dispatch) => {
  return {
    setNotif: (message) =>
      dispatch({
        type: action.SET_NOTIF,
        notifMessage: message,
      }),
  };
};

function Form({ setNotif, subject, cb, strandTypes, strands }) {
  const navigate = useNavigate();

  // UML
  const [uploadBtn, setUploadBtn] = useState(null);

  const handleFileInputChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        cb({
          ...subject,
          image: file,
          display: e.target.result,
        });
      };
      reader.readAsDataURL(file);
    }
  };
  const [notifBtn, setNotifBtn] = useState(null);

  useEffect(() => {
    $(() => {
      setNotifBtn($("#notif-modal"));
    });
  }, []);

  useEffect(() => {
    $(() => {
      setUploadBtn($("#uploadBtn"));
    });
  }, []);

  const onStrandChange = (ev) => {
    const { id, checked } = ev.target;
    const tempStrandTypeIDs = [...subject.strandTypeIDs];

    if (checked) {
      tempStrandTypeIDs.push(id);
      cb({ ...subject, strandTypeIDs: tempStrandTypeIDs });
    } else {
      const updatedValues = subject.strandTypeIDs.filter((item) => item !== id);
      cb({ ...subject, strandTypeIDs: updatedValues });
    }
  };

  const submit = async (ev) => {
    ev.preventDefault();
    const strandTypeIDs = subject.strandTypeIDs;
    const subjectModel = new Subject();
    const subjectID = await subjectModel.create(subject);

    if (subjectID?.error) {
      console.log(subjectID.error);
      setNotif({
        title: "Subject Failed",
        body: subjectID.error,
      });
      notifBtn.click();
    } else {
      await new StrandSubject().create(subjectID, strandTypeIDs);
      navigate(subjectRoute.path);
    }
  };

  return (
    <>
      {/*-- FORM CONTAINER --*/}
      <section className="strand-type-container position-relative mt-5">
        <h5 className="w-100 poppins border-bottom border-dark text-uppercase fw-semibold">
          FILL IN THE BLANKS
        </h5>
        <div className="row">
          <section className="col-3">
            <img
              className="w-100 rounded-top"
              src={subject.display ? subject.display : subject1}
              alt="file img input"
            />
            <button
              onClick={() => uploadBtn.click()}
              className="btn btn-dark w-100 fs-6 px-4 rounded-0 rounded-bottom text-uppercase text-light fw-semibold fs-6"
            >
              UPLOAD FILE
            </button>
          </section>
          <section className="col-9">
            {/*-- SUBJECT FORM --*/}
            <form onSubmit={submit} className="w-100">
              {/*-- NAME --*/}
              <div className="mb-4 w-100">
                <input
                  type="text"
                  className="form-control shs-input shadow"
                  id="text"
                  autoComplete="off"
                  placeholder="Subject Name"
                  value={subject.name}
                  onChange={(ev) => {
                    cb({ ...subject, name: ev.target.value });
                  }}
                />
              </div>

              {/*-- Description --*/}
              <div className="mb-4 w-100">
                <textarea
                  className="form-control shs-textarea shadow w-100"
                  id="text"
                  placeholder="Description"
                  value={subject.description}
                  onChange={(ev) => {
                    cb({ ...subject, description: ev.target.value });
                  }}
                ></textarea>
              </div>

              {/*-- IMAGE FILE --*/}
              <input
                className="d-none"
                type="file"
                id="uploadBtn"
                accept="image/*"
                onChange={handleFileInputChange}
              />
              <h5 className="w-100 poppins border-bottom border-dark text-uppercase fw-semibold">
                SELECT STRAND TYPES
              </h5>

              {/*-- SUBJECT TYPE SELECTION --*/}
              <div
                className="btn-group d-flex flex-row flex-wrap mb-4"
                role="group"
                aria-label="Basic checkbox toggle button group"
              >
                {strandTypes?.map((subjectType, i) => {
                  return (
                    <FormRadioBtn
                      key={i}
                      onChangeCb={() =>
                        cb({
                          ...subject,
                          subjectTypeID: subjectType._id,
                        })
                      }
                      checked={subject.subjectTypeID === subjectType._id}
                      name={"subjectType"}
                      subjectType={subjectType}
                    />
                  );
                })}
              </div>
              <h5 className="w-100 poppins border-bottom border-dark text-uppercase fw-semibold">
                SELECT ASSOCIATED STRANDS
              </h5>

              {/*-- STRAND SELECTION --*/}
              <div
                className="btn-group d-flex flex-row flex-wrap mb-4"
                role="group"
                aria-label="Basic checkbox toggle button group"
              >
                {strands?.map((strand, i) => {
                  console.log("CALL 1", subject.strandTypeIDs, strand._id);
                  return (
                    <FormCheckBox
                      key={i}
                      checked={subject.strandTypeIDs.includes(strand._id)}
                      onChangeCb={onStrandChange}
                      strandType={strand}
                    />
                  );
                })}
              </div>
              <button
                type="submit"
                className="btn btn-primary fs-6 px-4 text-uppercase text-light fw-semibold fs-6"
              >
                CREATE SUBJECT
              </button>
            </form>
          </section>
        </div>
      </section>
    </>
  );
}

export default connect(null, mapDispatchToProps)(Form);
