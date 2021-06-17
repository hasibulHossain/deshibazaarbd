import React from "react";

// variant
// success
// danger

function SimpleBtn(props) {
  const { children, variant, style, onClick, isDisabled } = props;
  return (
    <button onClick={onClick} className={`simple-btn ${variant}`} style={{ ...style }} disabled={isDisabled}>
      {children}
    </button>
  );
}

export default SimpleBtn;
