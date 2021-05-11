import React from 'react';
import Modal from 'react-bootstrap/Modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const SimpleModal = (props) => {

    const { show, handleClose, handleShow, size, modalTitle, status, id } = props;
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
                    <FontAwesomeIcon icon={faTimes} onClick={() => handleClose()} />
                </div>
                {props.children}
            </Modal.Body>
        </Modal>
    );
}
export default SimpleModal;