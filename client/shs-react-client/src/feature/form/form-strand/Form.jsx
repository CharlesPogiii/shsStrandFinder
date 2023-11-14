// import { strandTypeData } from "../../../js/json-structure/form/strand-type";
// import StrandType from "../../../js/model/StrandType";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { action } from "../../../redux/action";
import { dashboardRoute } from "../../../route/routes";
import Strand from "../../../js/model/Strand";
import FormRadioBtn from "../component/FormRadioBtn";
import strand2 from "../../../asset/strand/strand2.jpg";
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

function Form({ setNotif, strand, cb, strandTypes }) {
  const navigate = useNavigate();

  // UML
  const [uploadBtn, setUploadBtn] = useState(null);

  const handleFileInputChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        cb({ ...strand, image: file, display: e.target.result });
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

  const submit = async (ev) => {
    ev.preventDefault();
    const strandModel = new Strand();
    const data = await strandModel.create(strand);

    if (data?.error) {
      console.log(data.error);
      setNotif({
        title: "Strand Creation Failed",
        body: data.error,
      });
      notifBtn.click();
    } else {
      navigate(dashboardRoute.path);
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
              src={strand.display ? strand.display : strand2}
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
            {/*-- STRAND FORM --*/}
            <form onSubmit={submit} className="w-100">
              {/*-- NAME --*/}
              <div className="mb-4 w-100">
                <input
                  type="text"
                  className="form-control shs-input shadow"
                  id="text"
                  autoComplete="off"
                  placeholder="Strand Name"
                  value={strand.name}
                  onChange={(ev) => {
                    cb({ ...strand, name: ev.target.value });
                  }}
                />
              </div>

              {/*-- DESCRIPTION --*/}
              <div className="mb-4 w-100">
                <textarea
                  className="form-control shs-textarea shadow w-100"
                  id="text"
                  placeholder="Description"
                  value={strand.description}
                  onChange={(ev) => {
                    cb({ ...strand, description: ev.target.value });
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

              {/*-- STRAND TYPE SELECTION --*/}
              <div
                className="btn-group d-flex flex-row flex-wrap mb-4"
                role="group"
                aria-label="Basic checkbox toggle button group"
              >
                {strandTypes?.map((strandType, i) => {
                  return (
                    <FormRadioBtn
                      key={i}
                      onChangeCb={(ev) => {
                        cb({ ...strand, strandTypeID: ev.target.id });
                      }}
                      name={"strandType"}
                      checked={strand.strandTypeID === strandType._id}
                      subjectType={strandType}
                    />
                  );
                })}
              </div>
              <button
                type="submit"
                className="btn btn-primary fs-6 px-4 text-uppercase text-light fw-semibold fs-6"
              >
                CREATE STRAND
              </button>
            </form>
          </section>
        </div>
      </section>
    </>
  );
}

export default connect(null, mapDispatchToProps)(Form);
