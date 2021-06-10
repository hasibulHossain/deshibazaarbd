import React from 'react';
import ReactDOM from 'react-dom';
let modalRoot;
if (typeof window === 'object') {
    modalRoot = document.getElementById('modal-root');
}

function Modal(props) {
    const {children, closeModalHandler, visible} = props;
    let modalContent = (
        <div className="modal-wrapper">
            <div onClick={ () => closeModalHandler() } className="modal-backdrop"></div>
            <div className="modal-box modal-scrollbar">
                <div className="modal-children">
                    { children }
                </div>
            </div>
        </div>
    )

    if(visible && modalRoot) {
        return ReactDOM.createPortal(modalContent, modalRoot);
    } else {
        return null;
    }

}

export default Modal;