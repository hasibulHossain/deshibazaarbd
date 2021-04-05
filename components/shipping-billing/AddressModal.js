
import React from 'react';
import { Modal } from 'react-bootstrap';
import AddressForm from './AddressForm';
import AddressList from './AddressList';

const AddressAddModal = (props) => {
    const type = props.type ? props.type : 'billing_address';
    const modalTitle = type === 'billing_address' ? 'Billing Address' : 'Shipping Address';

    return (
        <>
            <Modal size={'xl'} show={props.show} onHide={props.onhandleClose}>
                <Modal.Header closeButton={true}>
                    <Modal.Title>{modalTitle}</Modal.Title>
                    <p className='text-danger pointer'><i className="fa fa-times" onClick={props.onhandleClose}></i></p>
                </Modal.Header>
                <Modal.Body>
                    <AddressForm type={type} />
                    <AddressList type={type} />
                </Modal.Body>
            </Modal>
        </>
    );
}

export default AddressAddModal;