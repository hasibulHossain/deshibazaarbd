import React from "react";

function SimpleBtn(props) {
  const { children, variant, style } = props;
  return (
    <button className={`simple-btn ${variant}`} style={{ ...style }}>
      {children}
    </button>
  );
}

export default SimpleBtn;
