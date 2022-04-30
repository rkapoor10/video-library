import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
import "./login.css";
import { useAuth } from "../../context/AuthContext/AuthContext";

const LoginForm = () => {
  const navigate = useNavigate();
  const {isLogedIn, setIsLogedIn} = useAuth()
  const location = useLocation()
  const [user, setUser] = useState({ email: "", password: "" });
  const { email, password } = user;
  const loginBtnHandler = (e) => {
    e.preventDefault();
    console.log(user);
    setIsLogedIn(true)
    navigate(location?.state?.from?.pathname || "/",  { replace: true })
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
                    />
                    By continuing, you agree to Swift-UI
                    <span className="basered fw-semibold"> Terms of Use </span>
                    and
                    <span className="basered fw-semibold"> Privacy Policy</span>
                    .
                  </span>

                  <button
                    className="btn btn-padding txt-s white bg-basered w-80 "
                    onClick={loginBtnHandler}
                  >
                    LOGIN
                  </button>
                  <span>OR</span>
                  <button className="btn-secondary txt-s w-80">
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
