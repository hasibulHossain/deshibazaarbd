import React from 'react';
import { Badge, Button } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
// import './css/model.css'
const SimpleModal = (props) => {

    const { show, handleClose, handleShow, size, modalTitle, status, id } = props;
    return (
        <Modal
            onClose={handleClose}
            size={size}
            show={show}
            onHide={handleClose} >

            <Modal.Header closeButton>
                <Modal.Title>
                    {modalTitle}
                    {
                        id && <Badge className="ml-2" variant="info"> {id} </Badge>
                    }
                    <div className="row custom-modal">
                        <div className="col-6">
                        </div>
                        {
                            status && <div className="col-6 float-right">
                                <button className={status === "Rejected" ? "btn rejected-status booking-list-btn text-danger" : (status === "Pending" ? "btn pending-status booking-list-btn text-warning" : "btn approve-status booking-list-btn text-success")}>
                                    {status !== null && status !== '' ? status : 'Status Not Found'}
                                </button>
                            </div>
                        }
                    </div>
                </Modal.Title>
                <p className="btn-modal-close" onClick={() => handleClose()}>
                    <i className="fa fa-times text-danger" ></i>
                </p>
            </Modal.Header>
            <Modal.Body>{props.children}</Modal.Body>
        </Modal>
    );
}
export default SimpleModal;