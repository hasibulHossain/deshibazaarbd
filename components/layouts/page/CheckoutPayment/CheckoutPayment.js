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
import { getLastTransactionData } from '../../../../store/actions/orders/OrderAction';
import { showToast } from '../../../master/Helper/ToastHelper';

const CheckoutPayment = () => {
  const [ transaction, setTransaction ] = useState(-1);

  const dispatch = useDispatch()
  const paymentMethod = useSelector((state) => state.CheckoutPaymentReducer.paymentMethod);
  const isLoading = useSelector((state) => state.CheckoutPaymentReducer.isLoading);

  const [payMethod, setPayMethod] = useState('bkash');

  useEffect(() => {
    dispatch(getPaymentMethodList());
    setTransactionInformation();
  }, []);

  useEffect(() => {
    if( transaction === null) {
      showToast('error', 'No Order found. Please buy some product first !');
      
      setTimeout(() => {
        window.location.href = '/';
      }, 1000);
    }
  }, [transaction]);

  const setTransactionInformation = async () => {
    const transaction = await getLastTransactionData();
    console.log(`transaction`, transaction);
    setTransaction(transaction);
  }

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

              {payMethod === "bkash" && <Bkash transaction={transaction} />}
              {payMethod === "rocket" && <Rocket transaction={transaction} />}
              {payMethod === "card" && <MasterCard transaction={transaction} />}
              {payMethod === "cash_in" && <CashOnDelivery transaction={transaction} />}

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