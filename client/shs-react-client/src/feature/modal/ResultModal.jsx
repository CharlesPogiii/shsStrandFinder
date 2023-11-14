import { useEffect, useState } from "react";
import welcomeImg1 from "../../asset/welcome/welcome1.jpg";
import resultImg from "../../asset/result/result.jpg";
import $ from "jquery";

function ResultModal({ id, user }) {
  const [closeBtn, setCloseBtn] = useState(null);
  const [top1, seTop1] = useState(null);
  const [top2, seTop2] = useState(null);
  const [top3, seTop3] = useState(null);

  useEffect(() => {
    if (user?.orderedFinalResult) {
      seTop1(user.orderedFinalResult[0]);
      seTop2(user.orderedFinalResult[1]);
      seTop3(user.orderedFinalResult[2]);
    }
    $(() => {
      setCloseBtn($(".btn-close"));
    });
  }, [user?.orderedFinalResult]);

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
        aria-hidden="false"
      >
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content bg-dark position-relative">
            <section className="background">
              <img
                className="w-100 rounded-top position-absolute"
                src={resultImg}
                style={{ height: "650px" }}
                alt="welcome img"
              />
              <span
                className="w-100 rounded-top position-absolute"
                style={{
                  height: "650px",
                  background:
                    "linear-gradient(to bottom, rgba(0, 0, 0, 0.3) 50%, #212529)",
                }}
              ></span>
            </section>
            <div className="modal-header p-0" style={{ height: "250px" }}>
              <section
                className="w-100 h-100 position-relative"
                style={{
                  overflow: "hidden",
                }}
              >
                <h1
                  className="modal-title roboto w-100 fw-5 text-light text-center position-absolute top-50 start-50 translate-middle"
                  id={`${id}Label`}
                  style={{
                    fontSize: "2.5rem",
                    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
                  }}
                >
                  Best 3 Recommended
                  <br />
                  <span className="text-warning">STRAND</span>
                </h1>
                <button
                  type="button"
                  className="btn-close d-none m-2 position-absolute top-0 end-0"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
                <a
                  className="nav-link text-light fs-3 mt-2 me-3 position-absolute top-0 end-0"
                  href="#"
                  onClick={(ev) => {
                    ev.preventDefault();
                    closeBtn.click();
                  }}
                >
                  <i class="fa-solid fa-xmark"></i>
                </a>
              </section>
            </div>
            <div className="modal-body p-5">
              <section>
                <h5
                  className="poppins text-light text-center"
                  style={{
                    textShadow: "1px 1px 2px rgba(0, 0, 0, 0.5)",
                  }}
                >
                  Thank you{" "}
                  <span className="text-secondary">{user?.email}</span>
                  <br />
                  for answering the assessment! We wish you good luck!
                </h5>
              </section>

              {/* TOP 3 STRANDS CONTAINER */}
              <section className="my-5">
                {/* FIRST LAYER TOP 1 */}
                <section className="d-flex justify-content-center align-items-center">
                  <div
                    className="position-relative text-center"
                    style={{ marginTop: "3rem" }}
                  >
                    <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-warning text-dark">
                      TOP 1
                    </span>
                    <img
                      className="shadow rounded"
                      src={welcomeImg1}
                      alt="welcome img"
                      style={{ width: "200px", height: "300px" }}
                    />
                    <span
                      className="w-100 h-100 position-absolute top-50 start-50 translate-middle"
                      style={{
                        width: "200px",
                        height: "300px",
                        background:
                          "linear-gradient(to bottom, transparent, #212529)",
                      }}
                    ></span>
                    <div className="w-100 position-absolute top-100 start-50 translate-middle pt-4">
                      <h5 className="text-center poppins text-light">
                        {top1?.name}
                      </h5>
                      <h1 className="text-center poppins text-warning">
                        {top1?.percentage}%
                      </h1>
                    </div>
                  </div>
                </section>
                {/* SECOND LAYER */}
                <section className="mt-5 row">
                  {/* TOP 2 */}
                  <div
                    className="col-6 d-flex justify-content-center align-items-center"
                    style={{ marginTop: "3rem" }}
                  >
                    <div
                      className="position-relative"
                      style={{ width: "200px", height: "300px" }}
                    >
                      <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                        TOP 2
                      </span>
                      <img
                        className="w-100 h-100 shadow rounded"
                        src={welcomeImg1}
                        alt="welcome img"
                      />
                      <span
                        className="w-100 h-100 position-absolute top-50 start-50 translate-middle"
                        style={{
                          background:
                            "linear-gradient(to bottom, transparent, #212529)",
                        }}
                      ></span>
                      <div className="w-100 position-absolute top-100 start-50 translate-middle pt-4">
                        <h5 className="text-center poppins text-light">
                          {top2?.name}
                        </h5>
                        <h3 className="text-center poppins text-light">
                          {top2?.percentage}%
                        </h3>
                      </div>
                    </div>
                  </div>
                  {/* TOP 3 */}
                  <div
                    className="col-6 d-flex justify-content-center align-items-center"
                    style={{ marginTop: "3rem" }}
                  >
                    <div
                      className="position-relative"
                      style={{ width: "200px", height: "300px" }}
                    >
                      <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-info">
                        TOP 3
                      </span>
                      <img
                        className="w-100 h-100 shadow rounded"
                        src={welcomeImg1}
                        alt="welcome img"
                      />
                      <span
                        className="w-100 h-100 position-absolute top-50 start-50 translate-middle"
                        style={{
                          background:
                            "linear-gradient(to bottom, transparent, #212529)",
                        }}
                      ></span>
                      <div className="w-100 position-absolute top-100 start-50 translate-middle pt-4">
                        <h5 className="text-center poppins text-light">
                          {top3?.name}
                        </h5>
                        <h3 className="text-center poppins text-light">
                          {top3?.percentage}%
                        </h3>
                      </div>
                    </div>
                  </div>
                </section>
              </section>
              <section className="pt-5">
                <p className="roboto text-light">
                  The page presents a comprehensive analysis of assessment
                  results through visually informative charts and employs
                  various charts showcase detailed insights into the performance
                  of the assessed elements, allowing for a thorough examination
                  of scores. The incorporation of{" "}
                  <span className="text-warning">Google Chart API</span> serves
                  to facilitate a more immersive and intuitive visualization of
                  the KNN algorithm results.
                </p>
              </section>
              <section className="mb-3">
                <p className="roboto text-light">
                  Each individual score from the assessment is meticulously
                  scrutinized and analyzed, providing a granular breakdown to
                  better comprehend the nuances and patterns within the
                  evaluation. Overall, the page offers a dynamic and interactive
                  approach to assessing and interpreting the outcomes of the
                  evaluation process.
                </p>
              </section>
            </div>
            <div className="modal-footer w-100">
              <div className="row w-100 justify-content-center align-items-center">
                <div className="col-6 p-2">
                  <button
                    type="button"
                    onClick={() => closeBtn.click()}
                    className="roboto fw-semibold btn btn-primary text-light w-100"
                  >
                    View Result Page fore more details
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

export default ResultModal;
