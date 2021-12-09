import React, { useState } from 'react'
import SimpleModal from '../master/Modal/SimpleModal';
import Modal from '../master/Modal/Modal';
import { useDispatch, useSelector } from 'react-redux';
import AddressUpdate from './AddressUpdate';
import { getSingleAddress, deleteAddress } from './_redux/Action/ProfileAccountSettingAction';
import SimpleConfirmComponent from '../master/Modal/SimpleConfirmComponent';

function SingleAddress(props) {
    const dispatch = useDispatch();
    const { id, type, name, phone_no, location, userName, city, area, street1, street2, is_default } = props;
    const isLoading = useSelector((state)=> state.ProfileAccountSettingReducer.isLoading);
    const {userData} = useSelector(state => state.UserDataReducer)
    const [show, setShow] = useState(false);
    const [deleteShow, setDeleteShow] = useState(false);

    let street = "";
    if(street1) {
        street += street1
    }

    if(street2) {
        street += ', ' + street2
    }

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
        dispatch(deleteAddress(id, toggleDeleteModal, userData.id));
        setDeleteShow(preState => !preState);
    }

    const isDefaultAddress = (type, isDefault) => {
        if(type === 'billing_address' && isDefault === 1) {
            return 'Default Billing Address'
        }

        if(type === 'billing_address' && isDefault === 0) {
            return 'Billing Address'
        }

        if(type === 'shipping_address' && isDefault === 1) {
            return 'Default Shipping Address'
        }

        if(type === 'shipping_address' && isDefault === 0) {
            return 'Shipping Address'
        }
    }

    return (
        <>
            <Modal closeModalHandler={toggleDeleteModal} visible={deleteShow}>
                <div className="mb-3">Are you sure to delete your address?</div>
                <div className="d-flex justify-content-end">
                    <button
                    className="custom_secondary_btn custom-button-component"
                    onClick={toggleDeleteModal} >
                    Cancel
                    </button>
                    <button
                    className="custom-button-component ml-3"
                    style={{ padding: "5px 10px" }}
                    onClick={handleDeleteAddress} >
                        Delete
                    </button>
                </div>
            </Modal>

            <li className="single-address" >
                <div className="single-address__item">
                    <div>
                        {name ? name : "N/A"}
                    </div>
                </div>
                <div className="single-address__item">
                    <div>{street}</div>
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
                            (type === 'billing_address' && +is_default === 1) ? 'Default Billing Address' : (type === 'billing_address' && +is_default === 0) && 'Billing Address'
                        }
                        {
                            (type === 'shipping_address' && +is_default === 1) ? 'Default Shipping Address' : (type === 'shipping_address' && +is_default === 0) && 'Shipping Address'
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
{/* 
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
            </SimpleModal> */}
        </>
    );

}

export default SingleAddress
