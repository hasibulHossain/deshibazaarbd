import Link from "next/link";
import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { faEye, faEyeSlash } from "@fortawesome/free-regular-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/dist/client/router";
import {
  emptyDispatch,
  handleLoginInput,
  loginAction,
} from "../_redux/Action/LoginAction";
import { useForm } from "react-hook-form";
import ErrorMessage from "../../master/ErrorMessage/ErrorMessage";
import { getUserDataAction } from "../../_redux/getUserData/Action/UserDataAction";

const LoginComponent = () => {
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();
  const loginInput = useSelector((state) => state.AuthReducer.loginInput);
  const isLoading = useSelector((state) => state.AuthReducer.isLoading);
  const isLogging = useSelector((state) => state.AuthReducer.isLogging);
  const { register, handleSubmit, errors, setValue } = useForm();

  const handleLoginInputChange = (name, value) => {
    dispatch(handleLoginInput(name, value));
  };

  const handleLogin = (e) => {
    dispatch(loginAction(loginInput));
    // e.preventDefault();
  };

  const router = useRouter();

  if (isLogging === true) {
    router.push("/profile").then((_) => window.scrollTo(0, 0));
    dispatch(emptyDispatch());
  }

  const userData = useSelector((state) => state.UserDataReducer.userData);

  useEffect(() => {
    dispatch(getUserDataAction());
  }, []);

  return (
    <>
      <div className="account_info_body mt-5">
        {typeof loginInput !== "undefined" && (
          <form
            onSubmit={handleSubmit(handleLogin)}
            method="post"
            autoComplete="off"
            encType="multipart/form-data"
          >
            <div className="row">
              <div className="col-md-6">
                <div className="mb-3">
                  <label htmlFor="lastName" className="form-label">
                    Email Or Phone Number
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder=""
                    name="email"
                    value={loginInput.email}
                    onChange={(e) =>
                      handleLoginInputChange("email", e.target.value)
                    }
                    ref={register({
                      required: true,
                      maxLength: 100,
                    })}
                  />
                  {errors.email && errors.email.type === "required" && (
                    <ErrorMessage errorText="Email or Phone can't be blank!" />
                  )}
                </div>
              </div>

              <div className="col-md-6">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <div className="account_input_group">
                  <input
                    type={showPassword === true ? "text" : "password"}
                    className="form-control"
                    id="inlineFormInputGroup"
                    placeholder=""
                    name="password"
                    value={loginInput.password}
                    onChange={(e) =>
                      handleLoginInputChange("password", e.target.value)
                    }
                    ref={register({
                      required: true,
                      maxLength: 100,
                    })}
                  />
                  {errors.password && errors.password.type === "required" && (
                    <ErrorMessage errorText="Password can't be blank!" />
                  )}

                  <div
                    className="account_input_group_prepend"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword === true ? (
                      <FontAwesomeIcon icon={faEyeSlash} />
                    ) : (
                      <FontAwesomeIcon icon={faEye} />
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div className="d-flex justify-content-between">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="loginRememberMe"
                />
                <label
                  className="account_info_label pointer"
                  htmlFor="loginRememberMe"
                >
                  Remember me
                </label>
              </div>
              <p className="forget_password_link">
                <Link href="/user/forget-password">
                  <a>Forget password?</a>
                </Link>
              </p>
            </div>

            <div className="account_btn_group">
              {!isLoading && (
                <button className="btn account_btn mt-2">SIGN IN</button>
              )}
              {isLoading && (
                <button
                  disabled={true}
                  type="submit"
                  className="btn account_btn mt-2"
                >
                  <span
                    className="spinner-border spinner-border-sm"
                    role="status"
                    aria-hidden="true"
                  ></span>{" "}
                  Signing in...
                </button>
              )}

              <p className="mt-2">or Sign up with</p>
              <button className="btn google_btn mr-3 mt-2">
                <FontAwesomeIcon className="mr-2" icon={faGoogle} />
                Google
              </button>
              <button className="btn facebook_btn mt-2">
                <FontAwesomeIcon className="mr-2" icon={faFacebookF} />
                Google
              </button>
            </div>
          </form>
        )}

        <p className="already_account">
          Don't have an account?
          <Link href="/register">
            <a> Sign up </a>
          </Link>
        </p>
      </div>
    </>
  );
};

export default LoginComponent;
