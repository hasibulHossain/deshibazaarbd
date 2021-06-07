import Link from 'next/link';
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faFacebookF, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faEye, faEyeSlash } from '@fortawesome/free-regular-svg-icons';

const RegistrationComponent = () => {
    const [showPassword, setShowPassword] = useState(false);
    return (
        <>
            <h5 className="account_title">New Customers</h5>
            <p className="account_sub_tite">Creating an account has many benefits : check out faster, keep more than one <br /> address, track orders and more</p>
            <div className="account_info_body">
                <form action="">
                    <div className="row">
                        <div className="col-md-6">
                            <div class="mb-3">
                                <label for="firstName" class="form-label">First Name</label>
                                <input type="text" class="form-control" placeholder="" />
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div class="mb-3">
                                <label for="lastName" class="form-label">Last Name</label>
                                <input type="text" class="form-control" placeholder="" />
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div class="mb-3">
                                <label for="lastName" class="form-label">Phone Number</label>
                                <input type="text" class="form-control" placeholder="" />
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div class="mb-3">
                                <label for="lastName" class="form-label">Email Address</label>
                                <input type="text" class="form-control" placeholder="" />
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div class="mb-3">
                                <label for="lastName" class="form-label">This is swip button area</label>
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

                    <div class="form-check custome_form_checkbox">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                        <label class="account_info_label pointer" for="flexCheckDefault">
                            I want to receive exclusive offers and promotions from
                            <Link href="/">
                                <a>
                                    Deshibazaarbd
                                </a>
                            </Link>
                        </label>
                    </div>

                    <div className="account_btn_group">
                        <button className="btn account_btn mt-2">Create an account</button>
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
                    <Link href="/">
                        <a> Sign In </a>
                    </Link>
                </p>
            </div>
        </>
    );
};

export default RegistrationComponent;