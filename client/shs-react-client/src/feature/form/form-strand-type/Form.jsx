import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { action } from "../../../redux/action";
import { dashboardRoute } from "../../../route/routes";
import StrandType from "../../../js/model/StrandType";
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

function Form({ setNotif, strandtype, cb }) {
  const navigate = useNavigate();
  const [notifBtn, setNotifBtn] = useState(null);

  useEffect(() => {
    $(() => {
      setNotifBtn($("#notif-modal"));
    });
  }, []);

  // FUNCTION
  const submit = async (ev) => {
    ev.preventDefault();
    const strandTypeModel = new StrandType();
    const data = await strandTypeModel.create(strandtype);

    if (data?.error) {
      console.log(data.error);
      setNotif({
        title: "Strand Type Failed",
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
        {/*-- STRAND TYPE FORM --*/}
        <form onSubmit={submit} className="w-100">
          {/*-- NAME --*/}
          <div className="mb-4 w-100">
            <input
              type="text"
              className="form-control shs-input shadow"
              id="text"
              autoComplete="off"
              placeholder="Strand Group Name"
              value={strandtype.name}
              onChange={(ev) => {
                cb({ name: ev.target.value });
              }}
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary fs-6 px-4 text-uppercase text-light fw-semibold fs-6"
          >
            CREATE STRAND TYPE
          </button>
        </form>
      </section>
    </>
  );
}

export default connect(null, mapDispatchToProps)(Form);
