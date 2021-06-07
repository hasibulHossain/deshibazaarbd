import Link from 'next/link';
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faFacebookF, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faEye, faEyeSlash } from '@fortawesome/free-regular-svg-icons';

const LoginComponent = () => {
    const [showPassword, setShowPassword] = useState(false);
    return (
        <>
            <div className="account_info_body mt-5">
                <form action="">
                    <div className="row">
                        <div className="col-md-6">
                            <div class="mb-3">
                                <label for="lastName" class="form-label">Email Or Phone Number</label>
                                <input type="text" class="form-control" placeholder="" />
                            </div>
                        </div>

                        <div className="col-md-6">
                            <label for="password" class="form-label">Password</label>
                            <div class="account_input_group">
                                <input type={showPassword === true ? "text" : "password"} class="form-control" id="inlineFormInputGroup" placeholder="" />
                                <div class="account_input_group_prepend" onClick={() => setShowPassword(!showPassword)}>
                                    {
                                        showPassword === true ? <FontAwesomeIcon icon={faEyeSlash} /> : <FontAwesomeIcon icon={faEye} />
                                    }
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="d-flex justify-content-between">
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="loginRememberMe" />
                            <label class="account_info_label pointer" for="loginRememberMe">
                                Remember me
                            </label>
                        </div>
                        <p className="forget_password_link">
                            <Link href="/">
                                <a>Forget your password?</a>
                            </Link>
                        </p>
                    </div>

                    <div className="account_btn_group">
                        <button className="btn account_btn mt-2">Create an account</button>
                        <p className="mt-2">or Sign up with</p>
                        <button className="btn google_btn mr-3 mt-2"><FontAwesomeIcon className="mr-2" icon={faGoogle} />Google</button>
                        <button className="btn facebook_btn mt-2"><FontAwesomeIcon className="mr-2" icon={faFacebookF} />Google</button>
                    </div>
                </form>

                <p className="already_account">
                    Don't have an account?
                    <Link href="/">
                        <a> Sign up </a>
                    </Link>
                </p>
            </div>
        </>
    );
};

export default LoginComponent;