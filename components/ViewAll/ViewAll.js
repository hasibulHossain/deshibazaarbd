import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

function ViewAll({ type = '' }) {
  return (
    <Link href={{ pathname: '/products', query: { type: type }}}>
      <div className="custom-button-component pointer" >
        View all
        <FontAwesomeIcon className="ml-2" icon={faArrowRight} />
      </div>
    </Link>
  );
}

export default ViewAll;
