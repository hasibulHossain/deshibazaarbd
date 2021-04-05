import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAddresses } from './redux/AddressAction';
import AddressAddModal from './AddressModal';
import LoadingSpinner from '../../components/loading/LoadingSpinner';

const SidebarShippingBilling = () => {
    const dispatch = useDispatch();

    // Check if user has any shipping address set or not and do actions based on that.
    const [openBillingModal, setOpenBillingModal] = useState(false);
    const [openShippingModal, setOpenShippingModal] = useState(false);

    const loading = useSelector((state) => state.address.loading);
    const billingAddress = useSelector((state) => state.address.billingAddress);
    const shippingAddress = useSelector((state) => state.address.shippingAddress);

    useEffect(() => {
        dispatch(getAddresses());
    }, []);

    return (
        <div className="sidebar-shipping-billing">
            <h4>Shipping & Billing</h4>
            {
                loading ? <p className="text-center"><LoadingSpinner /></p> :
                    <div>
                        <p className="ecom-label">
                            <span className="text-danger">
                                {shippingAddress.length === 0 ? 'No shipping address found' : ''}
                            </span>

                            <span className="text-success">
                                {shippingAddress.length > 0 ? 'Shipping address added.' : ''}
                            </span>

                             {"  "}
                            <button onClick={() => setOpenShippingModal(true)} className="btn btn-sm btn-outline-primary">
                                {shippingAddress.length === 0 ? <i className="fa fa-plus-circle"></i> : <i className="fa fa-edit"></i> }
                                {shippingAddress.length === 0 ? ' Add' : ' Edit'} Now
                            </button>
                        </p>

                        <p className="ecom-label">
                            <span className="text-danger">
                                {billingAddress.length === 0 ? 'No billing address found' : ''}
                            </span>

                            <span className="text-success">
                                {billingAddress.length > 0 ? 'Billing address added.' : ''}
                            </span>

                             {"  "}
                            <button onClick={() => setOpenBillingModal(true)} className="btn btn-sm btn-outline-primary">
                                {billingAddress.length === 0 ? <i className="fa fa-plus-circle"></i> : <i className="fa fa-edit"></i> }
                                {billingAddress.length === 0 ? ' Add' : ' Edit'} Now
                            </button>
                        </p>

                    </div>
            }
            <div>
                {
                    openBillingModal && 
                    <AddressAddModal 
                        type="billingAddress"
                        show={openBillingModal}
                        onhandleClose={() => setOpenBillingModal(false)}
                    />
                }

                {
                    openShippingModal && 
                    <AddressAddModal 
                        type="billingAddress"
                        show={openShippingModal}
                        onhandleClose={() => setOpenShippingModal(false)}
                    />
                }
                
            </div>
        </div>
    );
}

export default SidebarShippingBilling;