import { useEffect, useState } from "react";
import welcomeImg from "../../asset/welcome/welcome.jpg";
import welcomeImg1 from "../../asset/welcome/welcome1.jpg";
import welcomeImg2 from "../../asset/welcome/welcome2.jpg";
import welcomeImg3 from "../../asset/welcome/welcome3.jpg";
import $ from "jquery";

function WelcomeModal({ id, email = "user@email.com" }) {
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
        aria-hidden="false"
      >
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content position-relative">
            <section className="background">
              <img
                className="w-100 rounded-top position-absolute"
                src={welcomeImg}
                style={{ height: "650px" }}
                alt="welcome img"
              />
              <span
                className="w-100 rounded-top position-absolute"
                style={{
                  height: "650px",
                  background:
                    "linear-gradient(to bottom, transparent 50%, white)",
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
                  Welcome to Dashboard
                </h1>
                <button
                  type="button"
                  className="btn-close m-2 position-absolute top-0 end-0"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
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
                  Welcome <span className="text-secondary">{email}</span>
                  <br />
                  to the StrandFinder Assessment!
                </h5>
              </section>
              <section className="row g-2 my-5">
                <img
                  className="col-4 shadow"
                  style={{ height: "300px" }}
                  src={welcomeImg1}
                  alt="welcome img"
                />
                <img
                  className="col-4 shadow"
                  style={{ height: "300px" }}
                  src={welcomeImg2}
                  alt="welcome img"
                />
                <img
                  className="col-4 shadow"
                  style={{ height: "300px" }}
                  src={welcomeImg3}
                  alt="welcome img"
                />
              </section>
              <section className="mb-4">
                <h5>
                  We're excited to help you discover the academic strand that
                  aligns with your strengths and interests. Here's how it works:
                </h5>
              </section>
              <section className="mb-3">
                <p className="roboto">
                  The assessment evaluates your knowledge across various
                  subjects within each strand. This comprehensive approach
                  allows us to predict the strand that best suits your unique
                  talents.
                </p>
              </section>
              <section className="mb-3">
                <p className="roboto">
                  Remember, our recommendations are designed to guide you, but
                  the final decision is entirely yours. We believe in empowering
                  you to choose the perfect strand that matches your aspirations
                  and dreams.
                </p>
              </section>
              <section className="mb-3">
                <p className="roboto">
                  So, let's get started on this exciting journey of
                  self-discovery. Take the assessment, explore your options, and
                  make the decision that feels right for you.
                </p>
              </section>
              <section className="mb-5">
                <p className="roboto">
                  Your future is full of potential, and together, we'll unlock
                  the path that's meant for you. Good luck!
                </p>
              </section>
              <section>
                <p className="roboto text-center text-primary">
                  Lets start the Assessment!!!
                </p>
              </section>
            </div>
            <div className="modal-footer w-100">
              <div className="row w-100 justify-content-center align-items-center">
                <div className="col-6 p-2">
                  <button
                    type="button"
                    onClick={() => closeBtn.click()}
                    className="roboto fw-semibold btn btn-dark w-100"
                  >
                    Continue to Dashboard
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

export default WelcomeModal;
