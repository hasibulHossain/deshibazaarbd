import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Link from 'next/link'
import FooterBottom from './FooterBottom';
import SocialMedia from './SocialMedia';
const Footer = () => {
    return (
        <section className="footer-section">
            <Container>
                <Row>
                    <Col md={3} xs={6}>
                        <div className="footer-info">
                            <h5>information</h5>
                            <Link href="/">
                                <a>Shipping Methods</a>
                            </Link>
                            <Link href="/">
                                <a>Privacy Policy</a>
                            </Link>
                            <Link href="/">
                                <a>Terms & Condition</a>
                            </Link>
                            <Link href="/">
                                <a>FAQ</a>
                            </Link>
                            <Link href="/">
                                <a>How It's Work</a>
                            </Link>
                        </div>
                    </Col>
                    <Col md={3} xs={6}>
                        <div className="footer-info">
                            <h5>customer care</h5>
                            <Link href="/">
                                <a>About us</a>
                            </Link>
                            <Link href="/">
                                <a>Contact</a>
                            </Link>
                            <Link href="/">
                                <a>Shop</a>
                            </Link>
                            <Link href="/">
                                <a>Blog</a>
                            </Link>
                            <Link href="/">
                                <a>Product Support</a>
                            </Link>
                        </div>
                    </Col>
                    <Col md={2} xs={6}>
                        <div className="footer-info">
                            <h5>my account</h5>
                            <Link href="/">
                                <a>My Account</a>
                            </Link>
                            <Link href="/">
                                <a>Order Tracking</a>
                            </Link>
                            <Link href="/">
                                <a>Wishlist</a>
                            </Link>
                            <Link href="/">
                                <a>Affiliate</a>
                            </Link>
                        </div>
                    </Col>
                    <Col md={4} sm={6}>
                        <div className="footer-info">
                            <h5>nesletter</h5>
                            <p>Suscribe to our newsletter to get notification about discount information</p>
                            <input type="text" className="form-control" />
                            <button className="brand-btn mt-2">Subscribe</button>
                        </div>
                        <SocialMedia />
                    </Col>
                </Row>
            </Container>
            <FooterBottom />
        </section>
    );
};

export default Footer;