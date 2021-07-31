import React from 'react';

const OrderSuccess = () => {
    return ( 
        <div className="row">
            <div className="col-md-7">
                <div className="card card-body order-success-left">
                    <h3>Order Successfull</h3>
                </div>
            </div>
            <div className="col-md-5">
                <div className="card card-body order-success-right">
                    <h3>Product History</h3>
                </div>
            </div>
        </div>
     );
}
 
export default OrderSuccess;