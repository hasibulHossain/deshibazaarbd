import React, { useState, useEffect, memo } from 'react';
import { useDispatch } from 'react-redux';
import { Dropdown } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShippingFast, faUser } from '@fortawesome/free-solid-svg-icons'
import { getCurrencies, activeCurrency } from '../../services/currency';
import SimpleModal from '../master/Modal/SimpleModal';
import TrackingForm from './TrackingForm';
import Translate from '../translation/Translate';
import { getUserDataAction } from '../_redux/getUserData/Action/UserDataAction';

const HeaderTop = () => {
    const dispatch                    = useDispatch();
    const [currencies, setCurrencies] = useState([]);
    const [show, setShow]             = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {
        setCurrencies(getCurrencies());
        dispatch(getUserDataAction());
    }, []);

    const toggleActiveLanguage = (currency) => {
        if (process.browser) {
            localStorage.setItem('lang', currency.slug);
            window.location.reload();
        }
    }

    return (
        <section className="header-top">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-5">
                        <p className="heading-top-text">
                          <span className="d-none d-lg-block">  Get Your <span className="holyday-shopping">Holiday Shopping</span> On Wholesale Pricing</span>
                        </p>
                    </div>
                    <div className="col-md-7 heading-top-right">
                        <div className="row justify-content-end">
                            <p className="heading-top-text pointer mr-3">
                                <a
                                    href="https://seller.programmingshikhi.com"
                                    target="_blank"
                                    style={{ color: '#fff', textDecoration: 'none' }} >
                                    <FontAwesomeIcon className="custom-fontAwesome" icon={faUser} />
                                    <Translate>Become a Seller</Translate>
                                </a>
                            </p>

                            {/* {
                                typeof userData !== "undefined" && userData !== null && (
                                    <p className="heading-top-text pointer" onClick={() => handleShow()}>
                                        <FontAwesomeIcon className="custom-fontAwesome" icon={faShippingFast} />
                                        <Translate>Track My Order</Translate>
                                    </p>
                                )
                            } */}

                            <p className="heading-top-text pointer" onClick={() => handleShow()}>
                                <FontAwesomeIcon className="custom-fontAwesome" icon={faShippingFast} />
                                <Translate>Track Order</Translate>
                            </p>

                            <Dropdown className="dropdown-currency">
                                <Dropdown.Toggle variant="default" id="dropdown-basic">
                                    <img src={activeCurrency('flag_link')} width={30} /> {activeCurrency('lang')}
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    {
                                        currencies.length > 0 && currencies.map((currency, index) => (
                                            <Dropdown.Item href="#" key={index} className={activeCurrency('code') === currency.code ? 'bg-light' : ''} onClick={() => toggleActiveLanguage(currency)}>
                                                <img src={currency.flag_link} width={30} />  {currency.lang}
                                            </Dropdown.Item>
                                        ))
                                    }
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                    </div>
                </div>
            </div>
            <SimpleModal
                handleClose={handleClose}
                size={"md"}
                show={show}
            >
                <TrackingForm show={show} setShow={setShow} />
            </SimpleModal>
        </section>
    );
};

export default memo(HeaderTop);