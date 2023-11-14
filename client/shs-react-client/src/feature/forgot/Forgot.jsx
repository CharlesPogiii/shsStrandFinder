import login1 from "../../asset/login/login1.png";
import login2 from "../../asset/login/login2.png";
import Loading from "../loading/Loading";
import Form from "./Form";
import Localhost from "../../js/model/LocalHost";
import { dashboardRoute } from "../../route/routes";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import FormAuth from "../../js/model/FormAuth";

function Forgot() {
  const navigate = useNavigate();

  // UML
  const [loading, load] = useState(true);

  const fetchData = async () => {
    load(true);
    const token = Localhost.sessionKey("user");

    if (token) {
      const dataD = await new FormAuth().authAccess(token);
      if (!dataD?.response?.data?.error) navigate(dashboardRoute.path);
    }

    load(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return loading ? (
    <Loading />
  ) : (
    <>
      {/*-- MAIN --*/}
      <main
        className="login container d-lg-flex align-items-center"
        style={{ height: "94vh" }}
      >
        <div className="row w-100">
          <section className="col-8">
            <Form load={load} />
          </section>
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
        </div>
      </main>

      {/*-- DESIGN --*/}
      <span className="shs-design verticalOval-1"></span>
      <span className="shs-design verticalOval-2"></span>
      <span className="shs-design verticalOval-3"></span>
      <span className="shs-design verticalOval-4"></span>
      <span className="shs-design verticalOval-6"></span>
      <span className="shs-design verticalOval-5"></span>
    </>
  );
}

export default Forgot;
