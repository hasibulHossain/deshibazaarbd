import React from 'react';
import OrderInvoice from './OrderInvoice';

import { translate } from '../../services/translation/translation';

const OrderSuccess = () => {
    return (
        <OrderInvoice title={translate('Order Successfull')} id={52} />
     );
}
 
export default OrderSuccess;