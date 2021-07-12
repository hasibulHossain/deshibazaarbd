import React, { useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Link from 'next/link'
import FooterBottom from './FooterBottom';
import SocialMedia from './SocialMedia';
import Button from '../master/Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { getFooterInformation } from './_redux/Action/FooterAction';

const Footer = () => {
    const dispatch       = useDispatch();
    const { footerInfo } = useSelector((state) => state.FooterReducer);

    useEffect(() => {
        dispatch(getFooterInformation())
    }, [])

    return (
        <section className="footer-section">
            <Container>
                <Row>
                    {
                        footerInfo.length > 0 && footerInfo.map((item, index) => (
                            <Col md={3} xs={6} key={index + 1}>
                                <div className="footer-info">
                                    <h5>{item.footerTitle}</h5>
                                    {
                                        item.footerArray.length > 0 && item.footerArray.map((info, i) => (
                                            <Link href={"/p/" + info.linkID} key={i}>
                                                <a>{info.title}</a>
                                            </Link>
                                        ))
                                    }
                                </div>
                            </Col>
                        ))
                    }

                    <Col md={3} sm={6}>
                        <div className="footer-info">
                            <h5>Newsletter</h5>
                            <p>Subscribe to our newsletter to get notification about discount information</p>
                            <input type="text" className="form-control mb-3" placeholder="Enter your Email here" />
                            <Button buttonText="Subscribe" />
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