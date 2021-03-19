import React, { useEffect, useState } from 'react';
import { Nav } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import LoadingSkelleton from '../../../master/skelleton/LoadingSkelleton';
import PaymentAmount from './PaymentAmount';
import Bkash from './PayMethod/Bkash/Bkash';
import MasterCard from './PayMethod/MasterCard/MasterCard';
import CashOnDelivery from './PayMethod/CashOnDelivery/CashOnDelivery';
import Rocket from './PayMethod/Rocket/Rocket';
import { getPaymentMethodList } from './_redux/Action/CheckoutPayment';

const CheckoutPayment = () => {
  const dispatch = useDispatch()
  const paymentMethod = useSelector((state) => state.CheckoutPaymentReducer.paymentMethod);
  const isLoading = useSelector((state) => state.CheckoutPaymentReducer.isLoading);

  console.log(`paymentMethod`, paymentMethod)
  const [payMethod, setPayMethod] = useState(null);
  useEffect(() => {
    dispatch(getPaymentMethodList())
  }, []);
  return (
    <div>
      <div className="checkoutPayment">
        <div className="container">
          <h2>Payment</h2>
          <div className="row">
            <div className="col-md-8">
              <h4>Select Payment Method </h4>
              {isLoading && (
                <div className="p-3">
                  <LoadingSkelleton
                    alignment="vertical"
                    count={1}
                    width={700}
                    height={120}
                  />
                </div>
              )}
              <Nav defaultActiveKey={''}>
                {paymentMethod.length > 0 && (
                  paymentMethod.map((item, index) => (
                    <Nav.Item className={`payment-method`} onClick={() => setPayMethod(item.code)}>
                      <h6 className="text-center">{item.name}</h6>
                      <img className="img-fluid text-center" src={item.image_url} alt={item.name} />
                    </Nav.Item>
                  ))
                )}
              </Nav>
              {
                payMethod !== null && (
                  payMethod === "card" && (
                    <MasterCard />
                  )
                )
              }
              {
                payMethod !== null && (
                  payMethod === "bkash" && (
                    <Bkash />
                  )
                )
              }
              {
                payMethod !== null && (
                  payMethod === "rocket" && (
                    <Rocket />
                  )
                )
              }
              {
                payMethod !== null && (
                  payMethod === "cash_in" && (
                    <CashOnDelivery />
                  )
                )
              }
            </div>
            <div className="col-md-4">
              <div className="card m-2">
                <PaymentAmount />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPayment;