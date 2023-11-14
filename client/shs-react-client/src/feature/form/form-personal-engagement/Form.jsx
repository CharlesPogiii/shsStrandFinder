// import { strandData } from "../../../js/json-structure/form/strand";
// import Strand from "../../../js/model/Strand";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { action } from "../../../redux/action";
import { dashboardRoute } from "../../../route/routes";
import PEP from "../../../js/model/PEP";
import FormRadioBtn from "../component/FormRadioBtn";
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

function Form({ setNotif, personalEngagement, cb, strands }) {
  const navigate = useNavigate();

  // UML
  const [notifBtn, setNotifBtn] = useState(null);

  useEffect(() => {
    $(() => {
      setNotifBtn($("#notif-modal"));
    });
  }, []);

  // FUNCTION
  const submit = async (ev) => {
    ev.preventDefault();
    const data = await new PEP().create(personalEngagement);

    if (data?.error) {
      console.log(data.error);
      setNotif({
        title: "Personal Engagement Failed",
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
          <section className="col-12">
            {/*-- PERSONAL ENGAGEMENT FORM --*/}
            <form onSubmit={submit} className="w-100">
              {/*-- QUESTION --*/}
              <div className="mb-4 w-100">
                <textarea
                  className="form-control shs-textarea shadow w-100"
                  id="text"
                  placeholder="Type your question here"
                  value={personalEngagement.question}
                  onChange={(ev) => {
                    cb({
                      ...personalEngagement,
                      question: ev.target.value,
                    });
                  }}
                ></textarea>
              </div>
              <h5 className="w-100 poppins border-bottom border-dark text-uppercase fw-semibold">
                SELECT STRAND
              </h5>

              {/*-- STRAND SELECTION --*/}
              <div
                className="btn-group d-flex flex-row flex-wrap mb-4"
                role="group"
                aria-label="Basic checkbox toggle button group"
              >
                {strands?.map((strand, i) => {
                  return (
                    <FormRadioBtn
                      key={i}
                      onChangeCb={(ev) => {
                        cb({
                          ...personalEngagement,
                          strandID: ev.target.id,
                        });
                      }}
                      checked={personalEngagement.strandID === strand._id}
                      name={"strand"}
                      subjectType={strand}
                    />
                  );
                })}
              </div>
              <button
                type="submit"
                className="btn btn-primary fs-6 px-4 text-uppercase text-light fw-semibold fs-6"
              >
                CREATE QUESTION
              </button>
            </form>
          </section>
        </div>
      </section>
    </>
  );
}

export default connect(null, mapDispatchToProps)(Form);
