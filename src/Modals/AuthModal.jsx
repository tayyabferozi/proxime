import React, { useState } from "react";
import clsx from "clsx";

import GridContainer from "../components/GridContainer/GridContainer";
import PasswordInput from "../components/PasswordInput/PasswordInput";

const Modal = ({ isModalActive, hideModal }) => {
  const [isSignup, setIsSignup] = useState(false);

  const toggleForm = () => {
    setIsSignup((prevState) => !prevState);
  };

  return (
    <>
      <div
        className={clsx("overlay", { active: isModalActive })}
        onClick={hideModal}
      />
      <div
        id="auth-modal"
        className={clsx("modal", { isSignup, active: isModalActive })}
      >
        <div className="left"></div>
        <div className="right">
          <div className="main">
            <h3>Sign {isSignup ? "Up" : "In"} Now</h3>

            <p className="mt-3">
              Placeholder text is the label for possible content in a text box.
              It can normally be found Placeholder.
            </p>

            <GridContainer rowClassName="gy-4 mt-2">
              {isSignup ? (
                <>
                  <div className="col-lg-6">
                    <input
                      name="firstName"
                      type="text"
                      placeholder="First Name"
                    />
                  </div>
                  <div className="col-lg-6">
                    <input
                      name="lastName"
                      type="text"
                      placeholder="Last Name"
                    />
                  </div>
                  <div className="col-lg-6">
                    <input
                      name="email"
                      type="email"
                      placeholder="Email address"
                    />
                  </div>
                  <div className="col-lg-6">
                    <input name="phone" type="tel" placeholder="Phone Number" />
                  </div>
                  <div className="col-lg-6">
                    <PasswordInput placeholder="Password" />
                  </div>
                  <div className="col-lg-6">
                    <PasswordInput placeholder="Confirm Password" />
                  </div>
                </>
              ) : (
                <>
                  <div className="col-12">
                    <input type="email" placeholder="Email" />
                  </div>
                  <div className="col-12">
                    <PasswordInput placeholder="Password" />
                  </div>
                </>
              )}
            </GridContainer>

            <div className="text-underlined mt-3 fw-500">Forget Password?</div>

            <button className="btn btn-grey mt-4" onClick={hideModal}>
              {isSignup ? "Sign up" : "Sign In"}
            </button>

            {isSignup ? (
              <div className="fw-500 mt-3">
                Already Have An Account?{" "}
                <span
                  onClick={toggleForm}
                  className="form-toggler text-primary-1 text-underlined c-pointer"
                >
                  Sign In
                </span>
              </div>
            ) : (
              <div className="fw-500 mt-3">
                Don't Have An Account?{" "}
                <span
                  onClick={toggleForm}
                  className="form-toggler text-primary-1 text-underlined c-pointer"
                >
                  {" "}
                  Sign up
                </span>
              </div>
            )}

            <div className="text-center mt-4">
              <h5 className="text-light-1">Or Sign Up With</h5>

              <div className="signup-options">
                <button className="btn">
                  <img
                    src="./assets/vectors/signup-option-1.svg"
                    alt="signup-option-1"
                  />
                </button>
                <button className="btn">
                  <img
                    src="./assets/vectors/signup-option-2.svg"
                    alt="signup-option-2"
                  />
                </button>
                <button className="btn">
                  <img
                    src="./assets/vectors/signup-option-3.svg"
                    alt="signup-option-3"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
