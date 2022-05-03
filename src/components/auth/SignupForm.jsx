import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext/AuthContext";
import { useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import validateInput from "../../utils/validateInput";
import signupService from "../../services/auth/signupService";

const SignupForm = () => {
  const [newUser, setNewUser] = useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    checkPolicy: "",
  });
  const navigate = useNavigate();
  const location = useLocation();
  const { isLogedIn, setIsLogedIn } = useAuth();
  const signupHandler = (e) => {
    e.preventDefault();
    if (validateInput(newUser)) {
      toast.error("Give Valid Credentials");
    } else {
      if (!newUser.checkPolicy)
        toast.warning(
          "tick the check box and agree to the terms and conditions"
        );
      else {
        const signingUp = async () => {
          const response = await signupService(newUser);
          try{
            if (response.status === 201) {
              localStorage.setItem("user", JSON.stringify(response.data.createdUser))
              localStorage.setItem("token", response.data.encodedToken)
              setIsLogedIn(true);
              navigate(location?.state?.from?.pathname || "/", { replace: true });
              toast.success(`Welcome to PlayDesk, ${newUser.firstName} ✨`);
            }
            else{
              toast.error("SignUp Failed! Enter valid credentials");
            }
          }catch(error){
            toast.error("Email Already Exists!")
          }
          
        };
        signingUp();
      }
    }
  };
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
                    onChange={(e) =>
                      setNewUser({ ...newUser, firstName: e.target.value })
                    }
                  />
                  <input
                    className="input-field fs-1r fw-semibold"
                    type="text"
                    placeholder="Last Name"
                    onChange={(e) =>
                      setNewUser({ ...newUser, lastName: e.target.value })
                    }
                  />
                  <input
                    className="input-field fs-1r fw-semibold"
                    type="email"
                    placeholder="Enter Email ID"
                    onChange={(e) =>
                      setNewUser({ ...newUser, email: e.target.value })
                    }
                  />
                  <input
                    className="input-field fs-1r fw-semibold"
                    type="password"
                    placeholder="Enter Password"
                    onChange={(e) =>
                      setNewUser({ ...newUser, password: e.target.value })
                    }
                  />
                  <span className="w-80 gray">
                    <input
                      className="privacy-terms"
                      type="checkbox"
                      name="privacy-terms"
                      id="privacy-terms"
                      checked={newUser.checkPolicy}
                      onChange={() =>
                        setNewUser({
                          ...newUser,
                          checkPolicy: !newUser.checkPolicy,
                        })
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
                    onClick={signupHandler}
                  >
                    SIGNUP
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
