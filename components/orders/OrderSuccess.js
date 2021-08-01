import React, {useEffect} from 'react';
import OrderInvoice from './OrderInvoice';
import { translate } from '../../services/translation/translation';
import { useDispatch, useSelector } from 'react-redux';
import { getOrderDetails } from './_redux/action/OrderAction';

const OrderSuccess = ({ invoice }) => {
    const dispatch = useDispatch();
    const { orderDetails, isLoading } = useSelector((state) => state.OrderReducer);

    useEffect(() => {
        dispatch(getOrderDetails(invoice))
    }, []);

    return (
        <OrderInvoice title={translate('Order Successfull')} id={52} />
    );
}

export default OrderSuccess;