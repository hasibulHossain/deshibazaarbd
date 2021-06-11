import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";

function Modal(props) {
  const [modalRoot, setModalRoot] = useState(null);
  const { children, closeModalHandler, visible, style } = props;

  let modalContent = (
    <div className="modal__modal-wrapper">
      <div
        onClick={() => closeModalHandler()}
        className="modal__backdrop"
      ></div>
      <div style={{ ...style }} className="modal__modal-box modal-scrollbar">
        <div className="modal__children">{children}</div>
      </div>
    </div>
  );

  useEffect(() => {
    const modalDom = window.document.getElementById("modal-root");
    setModalRoot(modalDom);
  });

  if (visible && modalRoot) {
    return ReactDOM.createPortal(modalContent, modalRoot);
  } else {
    return null;
  }
}

export default Modal;
