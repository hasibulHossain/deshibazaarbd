import React, { useState, useEffect, memo } from 'react';
import { Dropdown } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShippingFast, faUser } from '@fortawesome/free-solid-svg-icons'
import { getCurrencies, activeCurrency } from '../../services/currency';
import SimpleModal from '../master/Modal/SimpleModal';
import TrackingForm from './TrackingForm';
import Translate from '../translation/Translate';

const HeaderTop = () => {
    const [currencies, setCurrencies] = useState([]);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {
        setCurrencies(getCurrencies());
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
                            Get Your <span className="holyday-shopping">Holiday Shopping</span> On Wholesale Pricing
                        </p>
                    </div>
                    <div className="col-md-7 heading-top-right">
                        <div className="row justify-content-end">
                            <p className="heading-top-text pointer mr-3">
                                <a 
                                    href="http://seller.deshibazaarbd.com/login" 
                                    target="_blank" 
                                    style={{color: '#fff', textDecoration: 'none'}} >
                                    <FontAwesomeIcon className="custom-fontAwesome" icon={faUser} /> 
                                    <Translate>Become a Seller</Translate>
                                </a>
                            </p>

                            <p className="heading-top-text pointer" onClick={() => handleShow()}>
                                <FontAwesomeIcon className="custom-fontAwesome" icon={faShippingFast} /> 
                                <Translate>Track My Order</Translate>
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