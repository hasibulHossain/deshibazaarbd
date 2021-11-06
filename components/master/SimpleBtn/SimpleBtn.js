import React from "react";

// variant
// success
// danger

function SimpleBtn(props) {
  const { children, variant, style = {}, onClick, type, disabled=false } = props;
  return (
    <button type={type ? type : 'button'} disabled={disabled} onClick={onClick && onClick} className={`simple-btn ${variant}`} style={{ ...style }}>
      {children}
    </button>
  );
}

export default SimpleBtn;
