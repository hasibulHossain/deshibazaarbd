import React, { useState } from 'react'
import SimpleModal from '../master/Modal/SimpleModal';
import { useDispatch, useSelector } from 'react-redux';
import AddressUpdate from './AddressUpdate';
import { getSingleAddress, deleteAddress } from './_redux/Action/ProfileAccountSettingAction';
import SimpleConfirmComponent from '../master/Modal/SimpleConfirmComponent';

function SingleAddress(props) {
    const dispatch = useDispatch();
    const { id, type, name, phone_no, location, userName, city, area, street1, street2, is_default } = props;
    const isLoading = useSelector((state)=> state.ProfileAccountSettingReducer.isLoading);
    const [show, setShow] = useState(false);
    const [deleteShow, setDeleteShow] = useState(false);

    const toggleShowHandler = () => {
        setShow(preState => !preState);
    }

    const toggleDeleteModal = () =>{
        setDeleteShow(preState => !preState);
    }

    const editHandler = (id, type) => {
        dispatch(getSingleAddress(id, type));
        setShow(preState => !preState);
    }

    const handleDeleteAddress = () => {
        dispatch(deleteAddress(id, toggleDeleteModal));
        setDeleteShow(preState => !preState);
    }

    return (
        <>
            <li className="single-address" >
                <div className="single-address__item">
                    <div>
                        {name ? name : "N/A"}
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
                        {phone_no ? phone_no : "N/A"}
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
                <div onClick={() => toggleDeleteModal()} className="single-address__edit single-address__item" >
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

            <SimpleModal
                size="md"
                show={deleteShow}
                handleClose={toggleDeleteModal}
            >
                <SimpleConfirmComponent
                    text="Are you sure to delete your address?"
                    isLoading={isLoading}
                    confirmClick={handleDeleteAddress}
                    closeModal={toggleDeleteModal}
                    confirmBtnVariant="simple_btn_bg"
                    closeBtnVariant="secondary"
                />
            </SimpleModal>
        </>
    );

}

export default SingleAddress
