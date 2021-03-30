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
import PageTitle from '../../../page-title/PageTitle';

const CheckoutPayment = () => {

  const dispatch = useDispatch()
  const paymentMethod = useSelector((state) => state.CheckoutPaymentReducer.paymentMethod);
  const isLoading = useSelector((state) => state.CheckoutPaymentReducer.isLoading);

  const [payMethod, setPayMethod] = useState('bkash');

  useEffect(() => {
    dispatch(getPaymentMethodList())
  }, []);

  return (
    <div>
      <div className="checkoutPayment">
        <div className="container">
          <PageTitle title='Payment' description='Select Payment Method' />
          <div className="row">
            <div className="col-md-8">
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
                  paymentMethod.map((item) => (
                    <Nav.Item className={`payment-method ${payMethod === item.code ? 'active' : ''}`} onClick={() => setPayMethod(item.code)} key={item.id}>
                      <h6 className="text-center">{item.name}</h6>
                      <img className="img-fluid text-center" src={item.image_url} alt={item.name} />
                    </Nav.Item>
                  ))
                )}
              </Nav>

              {payMethod === "bkash" && <Bkash />}
              {payMethod === "rocket" && <Rocket />}
              {payMethod === "card" && <MasterCard />}
              {payMethod === "cash_in" && <CashOnDelivery />}

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