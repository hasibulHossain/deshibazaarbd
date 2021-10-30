import React from "react";
import CategoryWishProductContainer from "../../components/CategoryWishProductList/CategoryWishProductContainer";
// import dynamic from 'next/dynamic';

// const CategoryWishProductContainer = dynamic(() => import('../components/CategoryWishProductList/CategoryWishProductContainer'));

export default function Products() {
  return (
      <div className="container">
        <CategoryWishProductContainer />
      </div>
  );
}