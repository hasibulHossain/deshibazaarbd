import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

function ViewAll({ viewAllHandler }) {
  return (
    <div
      style={{ cursor: "pointer" }}
      onClick={viewAllHandler}
      className="custom-button-component"
    >
      View all
      <FontAwesomeIcon className="ml-2" icon={faArrowRight} />
    </div>
  );
}

export default ViewAll;
