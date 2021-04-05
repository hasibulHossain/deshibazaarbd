import React from 'react';
import { useSelector } from 'react-redux';
import LoadingSpinner from '../../components/loading/LoadingSpinner';

const AddressList = ({ type = 'billing_address' }) => {
    // const dispatch = useDispatch();

    const loading = useSelector((state) => state.address.loading);
    const addresses = (type === 'billing_address') ? useSelector((state) => state.address.billingAddress) :
        useSelector((state) => state.address.shippingAddress);

    // useEffect(() => {
    //     dispatch(getAddresses());
    // }, []);

    return (
        <div className="address-list">
            <h4>{ type === 'billingAddress' ? 'Billing Address' : 'Shipping Address' }</h4>

            { loading ? <p className="text-center"><LoadingSpinner /></p> : '' }

            <table className="table table-bordered table-striped">
                <thead>
                    <tr>
                        <th>Sl</th>
                        <th>Address Line 1</th>
                        <th>Address Line 2</th>
                        <th>Area</th>
                        <th>City</th>
                        <th>Default</th>
                        <th>Edit</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        addresses.map((address, index) => (
                            <tr>
                                <td>{index + 1}</td>
                                <td>{address.street1}</td>
                                <td>{address.street2}</td>
                                <td>{address.area}</td>
                                <td>{address.city}</td>
                                <td>{address.is_default ? 'Yes' : 'No'}</td>
                                <td>
                                    <button title="Make Default" className="btn btn-sm btn-outline-primary">
                                        <i className="fa fa-check"></i>
                                    </button>

                                    <button title="Edit" className="ml-2 btn btn-sm btn-outline-primary">
                                        <i className="fa fa-edit"></i>
                                    </button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
}

export default AddressList;
