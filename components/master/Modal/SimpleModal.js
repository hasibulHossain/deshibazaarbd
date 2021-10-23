import React from 'react';
import Modal from 'react-bootstrap/Modal';

const SimpleModal = (props) => {

    const { show, handleClose, size, id } = props;
    return (
        <Modal
            onClose={handleClose}
            size={size}
            show={show}
            onHide={handleClose}
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Body>
                <div className="modal_close_btn">
                    <span onClick={() => handleClose()} >
                        <i className="fas fa-times"></i>
                    </span>
                </div>
                {props.children}
            </Modal.Body>
        </Modal>
    );
}
export default SimpleModal;