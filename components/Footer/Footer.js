import React, { useState, memo } from 'react';
import dynamic from 'next/dynamic';
import Link from 'next/link'
import { useDispatch, useSelector } from 'react-redux';

import FooterBottom from './FooterBottom';
import SocialMedia from './SocialMedia';
import SimpleModal from '../master/Modal/SimpleModal';
import SimpleBtn from '../master/SimpleBtn/SimpleBtn';
import { subscribeNewsletter } from './_redux/Action/FooterAction';
const TrackingForm = dynamic(() => import('../Header/TrackingForm'));

const Footer = () => {
    const {isLoading}       = useSelector(state => state.FooterReducer)
    const dispatch          = useDispatch();
    const [show, setShow]   = useState(false);
    const [email, setEmail] = useState("");
    const handleClose       = () => setShow(false);
    const handleShow        = () => setShow(true);

    const onSubmit = () => {
        dispatch(subscribeNewsletter(email));
    }

    return (
        <>
            <section className="footer-section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 col-xs-6 ">
                            <div className="footer-info">
                                <h3>Customer Care</h3>
                                <h3>
                                    <Link href="/p/help-center">
                                        <a>Help Center</a>
                                    </Link>
                                </h3>
                                <h3>
                                    <Link href="/p/how-to-buy">
                                        <a>How To Buy</a>
                                    </Link>
                                </h3>
                                <h3>
                                    <Link href="/p/return-and-refund-policy">
                                        <a>Return &amp; Refund Policy </a>
                                    </Link>
                                </h3>
                                <h3>
                                    <Link href="/p/shipping-method">
                                        <a>Payment &amp; Shipping Methods</a>
                                    </Link>
                                </h3>
                                <h3>
                                    <Link href="/p/same-day-delivery">
                                        <a>Same Day Delivery</a>
                                    </Link>
                                </h3>
                                <h3>
                                    <Link href="/p/site-map">
                                        <a>Site Map</a>
                                    </Link>
                                </h3>
                                <h3>
                                    <Link href="/p/faq">
                                        <a>FAQ</a>
                                    </Link>
                                </h3>
                            </div>
                        </div>
                        <div className="col-md-3 col-xs-6">
                            <div className="footer-info">
                                <h3>Information</h3>
                                <h3>
                                    <Link href="/p/about-us">
                                        <a>About us</a>
                                    </Link>
                                </h3>
                                <h3>
                                    <Link href="/p/career">
                                        <a>Career</a>
                                    </Link>
                                </h3>
                                <h3>
                                    <Link href="/p/affiliate">
                                        <a>Affiliate</a>
                                    </Link>
                                </h3>
                                <h3>
                                    <Link href="/p/wholesale">
                                        <a>Wholesale</a>
                                    </Link>
                                </h3>
                                <h3>
                                    <Link href="/p/contact">
                                        <a>Contact</a>
                                    </Link>
                                </h3>
                                <h3>
                                    <Link href="/p/terms-&-condition">
                                        <a>Terms &amp; Condition</a>
                                    </Link>
                                </h3>
                                <h3>
                                    <Link href="/p/privacy-policy">
                                        <a>Privacy Policy</a>
                                    </Link>
                                </h3>
                                <h3>
                                    <Link href="/p/blog">
                                        <a>Blog</a>
                                    </Link>
                                </h3>
                                {/* <h3>
                                    <Link href="/profile">
                                        <a>My Account</a>
                                    </Link>
                                </h3>
                                
                                <p className="pointer" onClick={() => handleShow()}>
                                    Order Tracking
                                </p> */}
                            </div>
                        </div>
                        <div className="col-md-3 col-xs-6">
                            <div className="footer-info">
                                <h3>Contact info</h3>
                                <div className="mb-2">
                                    <div>Address</div>
                                    <div style={{fontSize: '14px'}}>Sumi Tower 12th Floor, 66/1  Zoo Road, Mirpur-2, Dhaka-1216</div>
                                </div>

                                <div className="mb-2">
                                    <div>Phone</div>
                                    <div style={{fontSize: '14px'}}>+880 9696 848858</div>
                                </div>

                                <div className="mb-2">
                                    <div>Email</div>
                                    <div style={{fontSize: '14px'}}>info@deshibazaarbd.com</div>
                                </div>
                                <div>
                                    <Link href="https://play.google.com/store/apps/details?id=com.deshibazaarbd" passHref={true}>
                                        <a target="_blank">
                                            <img src="/images/google-play-badge.png" alt="google-play-badge" />
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <div className="footer-info">
                                <div className="footer-info__follow-us">
                                    <h3>FOLLOW US: </h3>
                                    <SocialMedia />
                                </div>
                                <h3>Newsletter</h3>
                                <p>Subscribe to our newsletter to get notification about discount information</p>
                                <input onChange={(e) => setEmail(e.target.value)} type="text" className="form-control mb-3" placeholder="Enter your Email here" />
                                <SimpleBtn onClick={onSubmit} type="submit" variant="danger" style={{width: 'fit-content'}}>
                                    Subscribe
                                    &#8203;
                                        {
                                            isLoading && (
                                                <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                                            )
                                        }
                                </SimpleBtn>
                                {/* <div className="pt-3">
                                    <img src={"/images/payment-methods.png"} alt="Deshi BazaarBD"/>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="bg-white">
                <div className="container">
                    <div className="row">
                        <div className="col-12 pt-4">
                            <div className="mt-3 mb-2">
                                <img className="img-responsive" src="/images/footer/shurjoPay.png" alt="shurjoPay" width={1240} height={188} />
                            </div>
                            <div className="my-5">
                                <img className="img-responsive" src="/images/footer/payment-line.png" alt="payment-line" width={1240} height={45} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-section">
                <FooterBottom />
            </div>

            <SimpleModal
                handleClose={handleClose}
                size={"md"}
                show={show}
            >
                <TrackingForm show={show} setShow={setShow} />
            </SimpleModal>
        </>
    );
};

export default memo(Footer);