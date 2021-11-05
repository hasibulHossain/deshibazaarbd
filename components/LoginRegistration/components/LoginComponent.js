import Link from "next/link";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { signIn } from 'next-auth/client'
import { isSignedIn } from "../../../_redux/store/action/globalAction";
import { useRouter } from 'next/router';
import { getUserDataAction } from "../../_redux/getUserData/Action/UserDataAction";
import { showToast } from "../../master/Helper/ToastHelper";

import * as yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";

const LoginComponent = () => {
  const router                             = useRouter();
  const dispatch                           = useDispatch();
  const [showPassword, setShowPassword]    = useState(false);
  const [isLoading, setIsLoading]    = useState(false);

  const initialValues = {
    email: "",
    password: "",
    remember: false
  };

  const loginPost = async (values) => {
    setIsLoading(true);
    const res = await signIn('credentials', {
        email: values.email,
        password: values.password,
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
  }

  const onSubmit = (values) => {
    loginPost(values)
  };

  const validationSchema = yup.object().shape({
    email: yup.string()
    .required("Required")
    .test('email&pass', 'Enter a valid phone number or email address', value => {
      const emailRegex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
      const phoneRegex = /^[0][1-9]\d{9}$|^[1-9]\d{9}$/; // Change this regex based on requirement

      let isValidEmail = emailRegex.test(value);
      let isValidPhone = phoneRegex.test(value);
      
      if(!isValidEmail && !isValidPhone) return false
      return true
    }),
    password: yup.string()
    .min(8, 'Minimum 8 characters required')
    .required('Required')
  });

  return (
    <div className="account_info_body mt-5">
      <Formik
        initialValues={ initialValues }
        onSubmit={ onSubmit }
        validationSchema={ validationSchema }
        validateOnMount >
      {() => {
        return (
          <Form>
            <div className="row">
              <div className="col-md-6">
                <div className="mb-3">
                  <div className="input-box">
                    <label htmlFor="email" className="form-label required">Email / Phone</label>
                    <Field class="form-control" type="text" id="email" name="email" />
                    <ErrorMessage name="email" component={ ValidationError } />
                  </div>
                </div>
              </div>

              <div className="col-md-6">
                <label htmlFor="password" className="form-label required">password</label>
                <div className="account_input_group">
                    <Field class="form-control" type={showPassword ? 'text' : 'password'} id="password" name="password" />
                    <div
                      className="account_input_group_prepend"
                      onClick={() => setShowPassword(!showPassword)} >
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
                    <ErrorMessage name="password" component={ ValidationError } />
                </div>
              </div>

              <div className="col-md-6">
                  <div>
                    <Field type="checkbox" id="remember" name="remember" />
                    <label htmlFor="remember" className="form-label pl-2">Remember me</label>
                  </div>
              </div>

              <div className="col-md-6">
                <p className="forget_password_link text-right m-0">
                  <Link href="/user/forget-password">
                    <a>Forgot password?</a>
                  </Link>
                </p>
              </div>
              <div className="col-md-6">
                <div className="account_btn_group justify-content-end justify-content-sm-start">
                  <button type="submit" className="btn account_btn mt-2" disabled={isLoading}>
                    Login
                  </button>
                </div>
              </div>

            </div>

          </Form>
        );
      } }
      </Formik>
      <p className="already_account">
        Don't have an account?
        <Link href="/register">
          <a> Sign up </a>
        </Link>
      </p>
    </div>
  )
};

function ValidationError(props) {
  return <small className="err-mss color-main" >{props.children}</small>;
}


export default LoginComponent;