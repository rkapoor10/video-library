import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
import "./login.css";
import { useAuth } from "../../context/AuthContext/AuthContext";
import { toast } from "react-toastify";
import loginService from "../../services/loginService";
import validateInput from "../../utils/validateInput";

const LoginForm = () => {
  const navigate = useNavigate();
  const { setIsLogedIn } = useAuth();
  const location = useLocation();
  const [user, setUser] = useState({
    email: "",
    password: "",
    checkPolicy: false,
  });
  const { email, password } = user;
  const guest = {
    email: "adarshbalika@gmail.com",
    password: "adarshBalika123",
    checkPolicy: true,
  };
  const loginBtnHandler = (e, user) => {
    console.log(location, "location-login")
    e.preventDefault();
    if (validateInput(user)) {
      toast.error("Give Valid Credentials");
    } else {
      if (!user.checkPolicy)
        toast.warning(
          "tick the check box and agree to the terms and conditions"
        );
      else {
        const loggingIn = async () => {
          const response = await loginService(user);
          if (response.status === 200) {
            // how to to do it response and sethandler here ? and wich is a good practice ?
            setIsLogedIn(true);
            navigate(location?.state?.from?.pathname || "/", { replace: true });
            toast.success("Login Successful!");
          } else {
            // how to access status code here
            toast.error("Login Failed! Enter valid credentials");
          }
        };
        loggingIn();
      }
    }
  };
  return (
    <div className="form-background">
      <div className="auth-form">
        <div className="child center-flex-column pad-2">
          <div className="login-form-grid-layout">
            <div className="banner-layout banner-style">
              <div className="banner-flex">
                <div className="form-head">
                  <h1 className="white">Login</h1>
                  <p className="form-content txt-s">
                    Get access to your Orders, Wishlist and Recommendations
                  </p>
                </div>
                <img
                  className="form-hero"
                  src="/assets/login-hero.svg"
                  alt="form-hero"
                />
              </div>
            </div>
            <div className="form-layout">
              <div className="form-container">
                <div className="tabs-layout">
                  <button className="txt-m form-tabs active">Login</button>
                  <span className="lightgray">|</span>
                  <button
                    className="txt-m form-tabs"
                    onClick={() => navigate("/signup")}
                  >
                    SignUp
                  </button>
                </div>

                <form className="form-styles bg-lightblack">
                  <input
                    className="input-field fs-1r fw-semibold"
                    type="email"
                    value={email}
                    placeholder="Enter Email/Mobile number"
                    onChange={(event) =>
                      setUser({ ...user, email: event.target.value })
                    }
                  />
                  <input
                    className="input-field fs-1r fw-semibold"
                    type="password"
                    value={password}
                    placeholder="Enter Password"
                    onChange={(event) =>
                      setUser({ ...user, password: event.target.value })
                    }
                  />
                  <span className="w-80 gray">
                    <input
                      className="privacy-terms"
                      type="checkbox"
                      name="privacy-terms"
                      id="privacy-terms"
                      checked={user.checkPolicy}
                      onChange={() =>
                        setUser({ ...user, checkPolicy: !user.checkPolicy })
                      }
                    />
                    By continuing, you agree to Swift-UI
                    <span className="basered fw-semibold"> Terms of Use </span>
                    and
                    <span className="basered fw-semibold"> Privacy Policy</span>
                    .
                  </span>

                  <button
                    className="btn btn-padding txt-s white bg-basered w-80 "
                    onClick={(e) => loginBtnHandler(e, user)}
                  >
                    LOGIN
                  </button>
                  <span>OR</span>
                  <button
                    className="btn-secondary txt-s w-80"
                    onClick={(e) => {
                      e.preventDefault();
                      console.log("clicked", user);
                      loginBtnHandler(e, guest);
                    }}
                  >
                    Guest Login
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
