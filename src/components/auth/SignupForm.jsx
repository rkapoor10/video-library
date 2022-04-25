import { useNavigate } from "react-router-dom";
const SignupForm = () => {
  const navigate = useNavigate();
  return (
    <div className="form-background">
      <div className="auth-form">
        <div className="child center-flex-column pad-2">
          <div className="login-form-grid-layout ">
            <div className="banner-layout banner-style">
              <div className="banner-flex">
                <div className="form-head">
                  <h1 className="white">SignUp</h1>
                  <p className="form-content txt-s">
                    Looks like you're new here!
                  </p>
                  <p className="form-content txt-s">
                    Sign up with your mobile number to get started
                  </p>
                </div>

                <img
                  className="form-hero"
                  src="/assets/signup-hero.svg"
                  alt="form-hero"
                />
              </div>
            </div>
            <div className="form-layout">
              <div className="form-container">
                <div className="tabs-layout">
                  <button
                    className="txt-m form-tabs "
                    onClick={() => navigate("/login")}
                  >
                    Login
                  </button>
                  <span className="lightgray">|</span>
                  <button className="txt-m form-tabs active">SignUp</button>
                </div>
                <form className="form-styles" action="submit">
                  <input
                    className="input-field fs-1r fw-semibold"
                    type="text"
                    placeholder="First Name"
                  />
                  <input
                    className="input-field fs-1r fw-semibold"
                    type="email"
                    placeholder="Last Name"
                  />
                  <input
                    className="input-field fs-1r fw-semibold"
                    type="email"
                    placeholder="Enter Email/Mobile number"
                  />
                  <input
                    className="input-field fs-1r fw-semibold"
                    type="password"
                    placeholder="Enter Password"
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
                  <button className="btn btn-padding txt-s white bg-basered w-80 ">
                    LOGIN
                  </button>
                  <span>OR</span>
                  <button className="btn-secondary txt-s w-80">
                    Request OTP
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

export default SignupForm;
