import React from "react";
import Rater from "react-rater";
import Link from "next/link";

const ProductMiniCard = (props) => {
  const { product } = props;

  return (
    <>
      {typeof product != "undefined" && (
        <div className="singleProduct singleproductborder">
          <div className="productImg">
            <Link href="/singleproduct">
              <img
                src={`${process.env.NEXT_PUBLIC_URL}images/products/${product.featured_image}`}
              />
            </Link>
          </div>
          <div className="productDetails">
            <div className="productTitle">
              <h3>{product.name}</h3>
              <p>{product.category.name}</p>
            </div>
            <div className="productPrice pt-2">
              {product.is_offer_enable != true && (
                <h4>৳ {product.default_selling_price}</h4>
              )}

              {product.is_offer_enable != false && (
                <>
                  <h4>৳ {product.offer_selling_price}</h4>
                  <p>
                    <del>৳ {product.default_selling_price}</del>
                  </p>
                </>
              )}
            </div>

            <div className="ratepoint">
              <Rater total={5} rating={parseFloat(product.average_rating)} />{" "}
              <span> ({parseFloat(product.average_rating).toFixed(1)}) </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductMiniCard;