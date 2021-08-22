import React from "react";

// variant
// success
// danger

function SimpleBtn(props) {
  const { children, variant, style = {}, onClick, type } = props;
  return (
    <button type={type ? type : 'button'} onClick={onClick} className={`simple-btn ${variant}`} style={{ ...style }}>
      {children}
    </button>
  );
}

export default SimpleBtn;
