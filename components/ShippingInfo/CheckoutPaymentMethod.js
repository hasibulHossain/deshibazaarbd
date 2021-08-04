import React, { useEffect, useState } from 'react';
import { Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getCheckoutPaymentMethods } from './_redux/Action/ShippingInfoAction';

const CheckoutPaymentMethod = () => {

    const dispatch                  = useDispatch();
    const { paymentMethods }        = useSelector((state) => state.ShippingInfoReducer);
    const [payMethod, setPayMethod] = useState('cash');

    useEffect(() => {
        dispatch(getCheckoutPaymentMethods());
        const payment_method = localStorage.getItem('payment_method') || 'cash';
        localStorage.setItem('payment_method', payment_method);
    }, []);

    return (
        <div className="card shadow-md mb-2">
            <p className="checkout_payment_method_title p-3">Select Payment Method</p>
            <div className="checkout_payment">
                {
                    paymentMethods.length > 0 && paymentMethods.map((item, index) => (
                        <div className="shipping_payment_method_section" key={index + 1}>
                            <Form.Check
                                className={`shipping_method_checkbox ${payMethod === item.id ? 'active' : ''}`} 
                                onChange={() => {
                                    setPayMethod(item.id);
                                    localStorage.setItem('payment_method', item.id);
                                }}
                                type="radio"
                                label={item.name}
                                name="formHorizontalRadios"
                                id={item.id}
                                checked={payMethod === item.id ? true : false}
                            />
                            <div style={{ overflow: 'hidden', display: 'block' }}>
                                {
                                    item.methodImg.length > 0 && item.methodImg.map((img, indexValue) => (
                                        <img className="payment_method_in_shipping" src={img.img} alt="payment method img" key={indexValue} />
                                    ))
                                }
                            </div>
                        </div>
                    ))
                }

            </div>
        </div>
    );
};

export default CheckoutPaymentMethod;