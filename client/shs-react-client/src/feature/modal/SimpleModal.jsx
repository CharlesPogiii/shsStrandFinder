import $ from "jquery";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function SimpleModal({ id, path, title, body, yes, no, cb = () => {} }) {
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
                {title}
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <p className="roboto fs-5">{body}</p>
            </div>
            <div className="modal-footer w-100">
              <div className="row w-100">
                <div className="col-6 p-2">
                  <button
                    type="button"
                    onClick={() => {
                      cb();
                      navigate(path);
                    }}
                    className="roboto fw-semibold btn btn-dark w-100"
                    data-bs-dismiss="modal"
                  >
                    {yes}
                  </button>
                </div>
                <div className="col-6 p-2">
                  <button
                    type="button"
                    onClick={() => closeBtn.click()}
                    className="roboto fw-semibold btn btn-dark w-100"
                  >
                    {no}
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

export default SimpleModal;
