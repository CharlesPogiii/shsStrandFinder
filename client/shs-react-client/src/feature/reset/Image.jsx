import login1 from "../../asset/login/login1.png";
import login2 from "../../asset/login/login2.png";

function Image() {
  return (
    <>
      <section className="col-4 d-flex justify-content-end pe-0">
        {/*-- IMAGE DESIGN --*/}
        <div className="login-img-1 position-relative">
          <img
            className="w-100 h-100 shadow"
            src={login1}
            alt="login image 1"
          />
          <span className="position-absolute">
            <img
              className="w-100 h-100 shadow"
              src={login2}
              alt="login image 2"
            />
          </span>
        </div>
      </section>
    </>
  );
}

export default Image;
