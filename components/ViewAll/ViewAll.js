import React from "react";
import Link from "next/link";
import Translate from "../translation/Translate";

function ViewAll({ type = '' }) {
  return (
    <Link href={{ pathname: '/products', query: { type: type }}}>
      <div className="custom-button-component pointer " >
        <Translate>View all</Translate>
        {' '}
        <span>
          <i className="fas fa-arrow-right"></i>
        </span>
      </div>
    </Link>
  );
}

export default ViewAll;
