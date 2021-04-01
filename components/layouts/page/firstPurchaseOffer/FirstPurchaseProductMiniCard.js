
import React, { useState } from "react";
import Link from "next/link";
import LazyLoad from 'react-lazyload';
import ReactImageFallback from "react-image-fallback";
import WishList from "../../../WishList/WishList";
import RatingDisplay from "../../../rating/RatingDisplay";
import { useDispatch } from "react-redux";
import { addToCartAction } from "../../../../store/actions/orders/CartAction";

const FirstPurchaseProductMiniCard = (props) => {
  const { product } = props;
  const dispatch = useDispatch();

  const [quantity, setQuantity] = useState(1);

  const cartProduct = {
    productID: product.id,
    productName: product.name,
    quantity: quantity,
    price: product.default_selling_price,
    offerPrice: product.offer_selling_price,
    productImage: `${process.env.NEXT_PUBLIC_URL}images/products/${product.featured_image}`,
    business: {
      businessID: product.business_id,
      businessName: "product.business.name",
      businessLogo: `${process.env.NEXT_PUBLIC_URL}images/vendors/${product.featured_image}`,
    },
  };

  const addToCart = (cartProduct, id) => {
    dispatch(addToCartAction(cartProduct, id));
  };
  return (
    <>
      {typeof product != "undefined" && (

        <div className="singleProduct singleproductborder">
          <Link href={`/products/${product.sku}`}>
            <div className="productImg">
              <LazyLoad height={200} once>
                <ReactImageFallback
                  src={`${process.env.NEXT_PUBLIC_URL}images/products/${product.featured_image}`}
                  fallbackImage="/images/default/fallback-image.png"
                  initialImage="/images/default/fallback-image.png"
                  alt={product.name}
                  className="pointer" />
              </LazyLoad>
            </div>
          </Link>
          <Link href="">
            <a>
              <div className="product-review">
                <WishList product={product} />
              </div>
            </a>
          </Link>
          <div className="productDetails ">
            <Link href={`/products/${product.sku}`}>
              <a>
                <div className="productTitle">
                  <h3>{product.name}</h3>
                  <p>{product.category ? product.category.name : ''}</p>
                </div>
              </a>
            </Link>


            <div className="productPrice pt-2 float-left">
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
           
              <a>
                <div className="float-right product-cart" onClick={() => addToCart(cartProduct, product.id)}>
                  <img src="/images/default/cart.png" className=" p-2" alt="" />
                </div>
              </a>
            <div className="ratepoint ">
              <RatingDisplay total={5} rating={product.average_rating} />
            </div>
          </div>
        </div>
      )}

    </>
  );
};

export default FirstPurchaseProductMiniCard;
