import React, { useState } from 'react'
import SimpleModal from '../master/Modal/SimpleModal';
import {useDispatch} from 'react-redux';
import AddressUpdate from './AddressUpdate';
import { getSingleAddress, deleteAddress } from './_redux/Action/ProfileAccountSettingAction';

function SingleAddress(props) {
    const dispatch = useDispatch();
    const {id, type, userName, city, area, street1, street2, is_default} = props;
    const [show, setShow] = useState(false);
    const toggleShowHandler = () => {
        setShow(preState => !preState);
    }

    const editHandler = (id, type) => {
        dispatch(getSingleAddress(id, type));
        setShow(preState => !preState);
    }

    return (
        <>
        <li className="single-address" >
            <div className="single-address__item">
                <div>
                    {userName}
                </div>
            </div>
            <div className="single-address__item">
                <div>{`${street1}, ${street2}`}</div>
            </div>
            <div className="single-address__item">
                <div>{`${city} - ${area}`}</div>
            </div>
            <div className="single-address__item">
                <div>
                    01211111119
                </div>
            </div>
            <div className="single-address__item">
                <div>
                    {
                        (type === 'billing_address' && +is_default === 1) && 'Default billing Address'
                    }
                    {
                        (type === 'shipping_address' && +is_default === 1) && 'Default Shipping Address'
                    }
                </div>
            </div>
            <div onClick={() => editHandler(id, type)} className="single-address__edit single-address__item" >
                <div>edit</div>
            </div>
            <div onClick={() => dispatch(deleteAddress(id))} className="single-address__edit single-address__item" >
                <div>delete</div>
            </div>
        </li>
        <SimpleModal
                size="xl"
                show={show}
                handleClose={toggleShowHandler}
            >
                <AddressUpdate type={type} closeModal={toggleShowHandler} />
        </SimpleModal>
        </>
    );

}

export default SingleAddress
