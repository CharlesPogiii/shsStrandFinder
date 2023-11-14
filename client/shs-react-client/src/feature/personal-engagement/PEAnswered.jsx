function PEAnswered({ questionNo, submitCb }) {
  return (
    <>
      {/*-- ANSWERED --*/}
      <div
        className="card grd-pri-sec_ position-relative col-3 p-2 g-3"
        id={`question${questionNo}`}
        style={{ height: "500px" }}
      >
        <span className="shs-glass grd-none-inf_"></span>
        <div className="card-body position-relative">
          <h6 className="card-subtitle poppins mb-3 text-light">
            Question No. 2
          </h6>
          <p
            className="card-text roboto text-light"
            style={{ height: "200px", overflowY: "auto" }}
          >
            Some quick example text to build on the card title and make up the
            bulk of the card's content?
          </p>
          <button className="btn btn-success roboto w-100 mb-2 px-4 fs-6 fw-semibold">
            YES
          </button>
          <button
            className="btn btn-danger roboto w-100 px-4 fs-6 fw-semibold"
            disabled={true}
          >
            NO
          </button>
          <div className="position-absolute bottom-0 start-0 w-100 p-3">
            <button
              onClick={() => submitCb()}
              className="btn btn-dark roboto w-100 p-4 fs-6 fw-semibold"
            >
              SUBMIT
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default PEAnswered;
