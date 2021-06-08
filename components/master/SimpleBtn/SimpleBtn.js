import React from "react";

function SimpleBtn(props) {
  const { children, variant } = props;
  return <button className={`simple-btn ${variant}`}>{children}</button>;
}

export default SimpleBtn;
