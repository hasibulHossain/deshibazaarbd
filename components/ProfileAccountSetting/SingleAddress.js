import React, { useState } from 'react'
import SimpleModal from '../master/Modal/SimpleModal';
import Modal from '../master/Modal/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { deleteAddress, addAddress } from './_redux/Action/ProfileAccountSettingAction';
import { handleShippingCost } from '../orders/_redux/action/OrderAction';
import DeliveryInfo from '../Delivery/DeliveryInfo';

function SingleAddress(props) {
    const dispatch = useDispatch();
    const { id } = props;
    const {userData} = useSelector(state => state.UserDataReducer)
    const [show, setShow] = useState(false);
    const [deleteShow, setDeleteShow] = useState(false);

    const toggleShowHandler = () => {
        setShow(preState => !preState);
    }

    const toggleDeleteModal = () =>{
        setDeleteShow(preState => !preState);
    }

    const handleDeleteAddress = () => {
        dispatch(deleteAddress(id, toggleDeleteModal, userData.id));
        setDeleteShow(preState => !preState);

        dispatch(handleShippingCost([]));
    }

    const defaultAddressHandler = () => {
        const addressData = {
            name: props.name,
            phone_no: props.phone_no,
            area: props.area,
            area_id: props.area_id,
            is_default: 1,
            street1: props.street1
        }

        dispatch(addAddress(addressData, 'update_address' , () => {}, userData.id, false, props?.id));
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

            <div className="single-address shadow-sm p-2 pointer d-flex align-items-center mb-3">
                <div style={{flexBasis: '80%'}} onClick={defaultAddressHandler} >
                <div className='d-flex'>
                    {
                        props?.is_default == 1 && (
                            <span className='mr-2' style={{color: 'var(--color-green-light)'}}>
                                <i style={{fontSize: '1rem'}} className="far fa-check-circle"></i>
                            </span>
                        )
                    }

                    <div>
                        <div className='font-15'>
                            {
                                props?.area + ', ' + (props?.city || '')
                            }
                        </div>
                        <div className='font-14'>
                            {
                                props?.phone_no
                            }
                        </div>
                    </div>
                </div>

                </div>
                <div style={{flexBasis: '20%'}} className='text-right'>
                    <span className='pr-2 font-12 font-weight-500' onClick={toggleShowHandler}>edit</span>
                    <span className='color-main font-12 font-weight-500' onClick={toggleDeleteModal}>delete</span>
                </div>
            </div>

            <SimpleModal
                size="xl"
                show={show}
                handleClose={toggleShowHandler}
            >
                <DeliveryInfo closeModal={toggleShowHandler} address={props} isUpdate={true} />
            </SimpleModal>
        </>
    );

}

export default SingleAddress;