import Link from "next/link";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleLoginInput } from "../_redux/Action/LoginAction";
import { useForm } from "react-hook-form";
import ErrorMessage from "../../master/ErrorMessage/ErrorMessage";
import { signIn, useSession } from 'next-auth/client'
import { isSignedIn } from "../../../_redux/store/action/globalAction";
import { useRouter } from 'next/router';
import { getUserDataAction } from "../../_redux/getUserData/Action/UserDataAction";
import { showToast } from "../../master/Helper/ToastHelper";

const LoginComponent = () => {
  const router = useRouter();
  const [showPassword, setShowPassword]    = useState(false);
  const dispatch                           = useDispatch();
  const loginInput                         = useSelector((state) => state.AuthReducer.loginInput);
  const [isLoading, setIsLoading]          = useState(false);
  const { register, handleSubmit, errors } = useForm();

  const handleLoginInputChange = (name, value) => {
    dispatch(handleLoginInput(name, value));
  };

  const handleLogin = async (e) => {
    setIsLoading(true);
    const res = await signIn('credentials', {
      email: loginInput.email,
      password: loginInput.password,
      redirect: false,
    })

    if(res.error) {
      showToast('error', res.error)
    }
    
    if(res) {
      dispatch(isSignedIn())
      setIsLoading(false);
    }
    
    if(!res.error) {
      router.replace('/')
      setIsLoading(false);
      dispatch(getUserDataAction());
    }
  };
  
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
                    {showPassword === false ? (
                      <span>
                        <i className="far fa-eye-slash"></i>
                      </span>
                    ) : (
                      <span>
                        <i className="far fa-eye"></i>
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div className="d-flex justify-content-between flex-column flex-sm-row pt-2 pt-sm-0" style={{ padding: '0 15px' }}>
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

            <div className="account_btn_group justify-content-end justify-content-sm-start">
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