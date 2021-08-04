import Link from 'next/link';
import React, { useRef, useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faEye, faEyeSlash } from '@fortawesome/free-regular-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
// import ReactSwipeButton from 'react-swipe-button'
import { useForm } from "react-hook-form";
import ErrorMessage from '../../master/ErrorMessage/ErrorMessage';
import { ChangeRegisterInputField, customerRegister, RegisterFirstStep } from '../_redux/Action/RegisterAction';
import { Spinner } from 'react-bootstrap';
import CountDown from '../../master/countDown/CountDown';

const RegistrationComponent = () => {

    const dispatch = useDispatch()
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const { register, handleSubmit, errors, setValue, watch } = useForm();
    const registerInput = useSelector((state) => state.RegisterReducer.registerInput)
    const isLoading = useSelector((state) => state.RegisterReducer.isLoading);
    const getOTP = useSelector((state) => state.RegisterReducer.getOTP);
    const isCreating = useSelector((state) => state.RegisterReducer.isCreating);
    const [isOTP, setIsOTP] = useState(false);

    const password = useRef({});
    password.current = watch("password", "");
    //handle change input 
    const handleChangeTextInput = (name, value) => {
        dispatch(ChangeRegisterInputField(name, value))
    }
    //get otp by first step register
    const handleRegisterFirstStep = () => {
        dispatch(RegisterFirstStep(registerInput))
    }

    // final customer register
    const handleRegister = async (e) => {
        dispatch(customerRegister(registerInput));
    };

    useEffect(() => {
        if (getOTP) {
            setIsOTP(true)
        }
    }, [getOTP])

    setTimeout(
        () => setIsOTP(false),
        300000
    );
    return (
        <>
            <h5 className="account_title">New Customers</h5>
            <p className="account_sub_tite">Creating an account has many benefits : check out faster, keep more than one <br /> address, track orders and more</p>
            <div className="account_info_body">
                <form
                    onSubmit={handleSubmit(handleRegisterFirstStep)}
                    method="post"
                    autoComplete="off"
                    encType="multipart/form-data"
                    autoSave="off"
                >
                    <div className="row">
                        <div className="col-md-6">
                            <div className="mb-3">
                                <label htmlFor="firstName" className="form-label">First Name</label>
                                <input type="text"
                                    className="form-control"
                                    placeholder=""
                                    name="first_name"
                                    value={registerInput.first_name}
                                    onChange={(e) => handleChangeTextInput('first_name', e.target.value)}
                                    ref={register({
                                        required: true,
                                        maxLength: 100,
                                    })}
                                />
                                {
                                    errors.first_name && errors.first_name.type === 'required' && (
                                        <ErrorMessage errorText="First name can't be blank!" />
                                    )
                                }
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="mb-3">
                                <label htmlFor="lastName" className="form-label">Last Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder=""
                                    name="last_name"
                                    value={registerInput.last_name}
                                    onChange={(e) => handleChangeTextInput('last_name', e.target.value)}
                                    ref={register({
                                        required: true,
                                        maxLength: 100,
                                    })}
                                />
                                {
                                    errors.last_name && errors.last_name.type === 'required' && (
                                        <ErrorMessage errorText="Last name can't be blank!" />
                                    )
                                }
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="mb-3">
                                <label htmlFor="lastName" className="form-label">Phone Number</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder=""
                                    name="phone_no"
                                    value={registerInput.phone_no}
                                    onChange={(e) => handleChangeTextInput('phone_no', e.target.value)}
                                    ref={register({
                                        required: true,
                                        maxLength: 100,
                                    })}
                                />
                                {
                                    errors.phone_no && errors.phone_no.type === 'required' && (
                                        <ErrorMessage errorText="Phone number can't be blank!" />
                                    )
                                }
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="mb-3">
                                <label htmlFor="lastName" className="form-label">Email Address</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    placeholder=""
                                    name="email"
                                    value={registerInput.email}
                                    onChange={(e) => handleChangeTextInput('email', e.target.value)}
                                    ref={register({
                                        required: true,
                                        maxLength: 100,
                                    })}
                                />
                                {
                                    errors.email && errors.email.type === 'required' && (
                                        <ErrorMessage errorText="Email address can't be blank!" />
                                    )
                                }
                            </div>
                        </div>


                        <div className="col-md-6 mt-3">
                            {isLoading && (
                                <div className="mb-3 mt-4">
                                    <button disabled={true} className="btn btn-primary btn-sm mt-1">
                                        <div className="d-flex align-items-center">
                                            <Spinner animation="border" role="status" size="sm">
                                            </Spinner>
                                            <span className="ml-2"> Getting OTP...</span>
                                        </div>
                                    </button>
                                </div>
                            )}
                            {!isLoading && (
                                <div className="mb-3 mt-4">
                                    <button type="submit"
                                        // className="btn btn-sm btn-primary mt-1 d-flex"
                                        className={isOTP ? "btn btn-primary btn-sm d-flex btn-get-otp button_disabled d-block" : "d-block btn btn-primary btn-sm d-flex btn-get-otp"}
                                        disabled={isOTP ? true : false}
                                    >
                                        <div>
                                            <span>GET OTP </span>
                                        </div>
                                    </button>
                                </div>
                            )}
                        </div>

                        {/* <div className="col-md-6">
                            <div className="mb-3">
                                <ReactSwipeButton
                                    text='Slide to get SMS Code'
                                    color='#f00'
                                    onSuccess={onSucces}
                                />
                            </div>
                        </div> */}

                        <div className="col-md-6">
                            <div className="mb-3">
                                <label htmlFor="lastName" className="form-label">OTP</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder=""
                                    name="otp"
                                    value={registerInput.otp}
                                    onChange={(e) => handleChangeTextInput('otp', e.target.value)}
                                    ref={register({
                                        required: false,
                                        maxLength: 100,
                                    })}
                                />
                                {
                                    errors.otp && errors.otp.type === 'required' && (
                                        <ErrorMessage errorText="Please enter your one time password!" />
                                    )
                                }
                            </div>
                        </div>
                        {
                            isOTP && (
                                <div className="col-md-12">
                                    <div className="mb-3">
                                        <CountDown alert_bg="alert_warning_bg" minutes={5} countDownText="Please wait! Resend OTP After" expireText="Resend OTP" />
                                    </div>
                                </div>
                            )
                        }

                        <div className="col-md-6">
                            <label htmlFor="password" className="form-label">Password</label>
                            <div className="account_input_group">
                                <input
                                    type={showPassword === true ? "text" : "password"}
                                    className="form-control" id="inlineFormInputGroup"
                                    placeholder=""
                                    name="password"
                                    value={registerInput.password}
                                    onChange={(e) => handleChangeTextInput("password", e.target.value)}
                                // ref={register({
                                //     required: "⚠ You must specify a password",
                                //     minLength: {
                                //         value: 8,
                                //         message: "Password must have at least 8 characters"
                                //     }
                                // })}
                                />
                                {
                                    errors.password && (
                                        <ErrorMessage errorText={errors.password.message} />
                                    )
                                }


                                <div className="account_input_group_prepend" onClick={() => setShowPassword(!showPassword)}>
                                    {
                                        showPassword === true ? <FontAwesomeIcon icon={faEyeSlash} /> : <FontAwesomeIcon icon={faEye} />
                                    }
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="Confirm_password" className="form-label">Confirm Password</label>
                            <div className="account_input_group">
                                <input
                                    type={showConfirmPassword === true ? "text" : "password"}
                                    className="form-control" id="inlineFormInputGroup"
                                    placeholder=""
                                    name="password_confirmation"
                                    value={registerInput.password_confirmation}
                                    onChange={(e) =>
                                        handleChangeTextInput("password_confirmation", e.target.value)
                                    }
                                // ref={register({
                                //     validate: (value) =>
                                //         value === password.current || "The passwords do not match",
                                // })}
                                />
                                {errors.password_confirmation && (
                                    <ErrorMessage errorText={errors.password_confirmation.message} />
                                )}


                                <div className="account_input_group_prepend" onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
                                    {
                                        showConfirmPassword === true ? <FontAwesomeIcon icon={faEyeSlash} /> : <FontAwesomeIcon icon={faEye} />
                                    }
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="form-check custome_form_checkbox mt-3">
                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                        <label className="account_info_label pointer" htmlFor="flexCheckDefault">
                            I want to receive exclusive offers and promotions from
                            <Link href="/">
                                <a>
                                    Deshibazaarbd
                                </a>
                            </Link>
                        </label>
                    </div>

                    <div className="account_btn_group">
                        {/* <button className="btn account_btn mt-2">Create an account</button> */}


                        {isCreating === true && (
                            <>
                                <button disabled={true} className="btn account_btn mt-2">
                                    <Spinner animation="border" role="status">
                                        {" "}
                                    </Spinner>{" "}
                                    Creating account...
                                </button>
                            </>
                        )}

                        {
                            !isCreating && (
                                <button type="submit" className="btn account_btn mt-2" onClick={handleSubmit(handleRegister)} >
                                    Create an account
                                </button>
                            )
                        }

                        <p className="mt-2">or Sign up with</p>
                        <button className="btn google_btn mr-3 mt-2"><FontAwesomeIcon className="mr-2" icon={faGoogle} />Google</button>
                        <button className="btn facebook_btn mt-2"><FontAwesomeIcon className="mr-2" icon={faFacebookF} />Google</button>
                    </div>
                </form>

                <p className="account_info_label mt-4">By clicking Create Account, you acknowledge</p>
                <p className="account_info_label">
                    you have read and agreed to our
                    <Link href="/">
                        <a> Terms of Use </a>
                    </Link>
                    and
                    <Link href="/">
                        <a> Privacy Policy </a>
                    </Link>
                </p>

                <p className="already_account">
                    Already have an account ?
                    <Link href="/login">
                        <a> Sign In </a>
                    </Link>
                </p>
            </div>
        </>
    );
};

export default RegistrationComponent;