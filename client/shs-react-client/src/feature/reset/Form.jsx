import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { action } from "../../redux/action";
import { dashboardRoute } from "../../route/routes";
import { useEffect, useState } from "react";
import ResetD from "../../js/model/Reset";
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

function Form({ setNotif }) {
  const navigate = useNavigate();

  // UML
  const [resetUser, setResetUser] = useState({
    currentEmail: "",
    oldPassword: "",
    password: "",
    confirmPassword: "",
  });
  const [notifBtn, setNotifBtn] = useState(null);

  useEffect(() => {
    $(() => {
      setNotifBtn($("#notif-modal"));
    });
  }, []);

  // FUNCTION
  const submit = async (event) => {
    event.preventDefault();
    const error = await new ResetD().reset(resetUser);

    if (error?.response?.data?.error) {
      console.log(error?.response?.data?.error);
      setNotif({
        title: "Reset Authentication Failed",
        body: error?.response?.data?.error,
      });
      notifBtn.click();
    } else {
      console.log(error);
      navigate(dashboardRoute.path);
    }
  };

  return (
    <>
      <h1 className="header-size poppins">Reset your Password</h1>
      <p className="roboto w-50 my-5">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>

      {/*-- RESET PASSWORD FORM --*/}
      <form onSubmit={submit} className="w-75">
        {/*-- CURRENT EMAIL ADDRESS --*/}
        <div className="mb-4 w-100">
          <input
            type="email"
            className="form-control shs-input shadow"
            id="email"
            aria-describedby="emailHelp"
            autoComplete="off"
            placeholder="Email Address"
            onChange={(ev) => {
              setResetUser({ ...resetUser, email: ev.target.value });
            }}
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>

        {/*-- OLD PASSWORD --*/}
        <div className="mb-5 w-100">
          <input
            type="password"
            className="form-control shs-input shadow"
            id="oldPassword"
            autoComplete="off"
            placeholder="Old Password"
            onChange={(ev) => {
              setResetUser({ ...resetUser, oldPassword: ev.target.value });
            }}
          />
        </div>

        {/*-- NEW PASSWORD --*/}
        <div className="mb-5 w-100">
          <input
            type="password"
            className="form-control shs-input shadow"
            id="newPassword"
            autoComplete="off"
            placeholder="New Password"
            onChange={(ev) => {
              setResetUser({ ...resetUser, password: ev.target.value });
            }}
          />
        </div>

        {/*-- CONFIRM PASSWORD --*/}
        <div className="mb-5 w-100">
          <input
            type="password"
            className="form-control shs-input shadow"
            id="confirmNewPassword"
            autoComplete="off"
            placeholder="Confirm New Password"
            onChange={(ev) => {
              setResetUser({ ...resetUser, confirmPassword: ev.target.value });
            }}
          />
        </div>
        <button
          type="submit"
          className="btn btn-dark fs-6 px-4 text-uppercase text-light fw-semibold fs-6"
        >
          RESET
        </button>
      </form>
    </>
  );
}

export default connect(null, mapDispatchToProps)(Form);
