function AssessmentAnswered({ questionNo }) {
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
          <h6 className="roboto w-100 text-center position-absolute top-50 start-50 translate-middle fw-semibold">
            SUBMIT YOUR ANSWER
          </h6>
        </div>
      </div>
    </>
  );
}

export default AssessmentAnswered;
