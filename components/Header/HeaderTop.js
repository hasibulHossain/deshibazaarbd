import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShippingFast, faUser } from '@fortawesome/free-solid-svg-icons'
import { languages } from '../../assets/FakeData/FakeData';

const HeaderTop = () => {
    
    return (
        <section className="header-top">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-5">
                        <p className="heading-top-text">Get Your <span className="holyday-shopping">Holiday Shopping</span> On Wholesale Pricing</p>
                    </div>
                    <div className="col-md-7">
                        <div className="row justify-content-end">
                            <p className="heading-top-text pointer"><FontAwesomeIcon className="custome-fontAwesome" icon={faShippingFast} /> Track My Order</p>
                            <p className="heading-top-text pointer"><FontAwesomeIcon className="custome-fontAwesome" icon={faUser} /> My Account</p>
                            <select class="form-select custome-select" aria-label="Default select example">
                                {
                                    languages.length > 0 && languages.map((lan, index) => (
                                        <option className="text-dark" value={lan.value} key={index}>
                                            <span>{lan.label}</span>
                                        </option>
                                    ))
                                }
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeaderTop;