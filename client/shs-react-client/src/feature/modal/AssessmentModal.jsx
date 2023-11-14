import $ from "jquery";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Localhost from "../../js/model/LocalHost";

function AssessmentModal({ id, path = null, subject = null, cb = () => {} }) {
  const navigate = useNavigate();
  const [closeBtn, setCloseBtn] = useState(null);

  useEffect(() => {
    $(() => {
      setCloseBtn($(".btn-close"));
    });
  }, []);
  return (
    <>
      {/*-- 
        Modal 
        data-bs-toggle="modal"
        data-bs-target="#id"
      --*/}
      <div
        className="modal fade"
        id={id}
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby={`${id}Label`}
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h1
                className="modal-title w-100 fs-5 text-center"
                id={`${id}Label`}
              >
                Take {subject ? subject.name : "UNKNOWN"} Assessment
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              {/*-- SUBJECT CARD --*/}
              <div className="row g-0">
                <div className="col-md-4">
                  <img
                    src={
                      subject ? Localhost.path() + subject.imagePath : "UNKNOWN"
                    }
                    className="img-fluid rounded-0"
                    alt="subject image"
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body ps-3">
                    <h6 className="card-title poppins fw-bold text-uppercase mb-3">
                      {subject ? subject.name : "UNKNOWN"}
                    </h6>
                    <p className="card-text mb-3">
                      Please review before answering the assessment. Good luck
                      to your assessment.
                      {/* Before taking an assessment, you should read first all the
                      rules while taking assessments. Click the button below to
                      read all the rules during the assessment. */}
                    </p>
                    {/* 
                    <button
                      type="button"
                      className="roboto fw-semibold btn btn-dark w-100"
                      data-bs-dismiss="modal"
                    >
                      READ ASSESSMENT RULES
                    </button>
                    */}
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-footer w-100">
              <div className="row w-100">
                <div className="col-6 p-2">
                  <button
                    type="button"
                    onClick={() => {
                      cb(subject._id);
                      console.log(path);
                      if (path) navigate(path);
                    }}
                    className="roboto fw-semibold btn btn-dark w-100"
                    data-bs-dismiss="modal"
                  >
                    YES
                  </button>
                </div>
                <div className="col-6 p-2">
                  <button
                    type="button"
                    onClick={() => closeBtn.click()}
                    className="roboto fw-semibold btn btn-dark w-100"
                  >
                    CANCEL
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AssessmentModal;
