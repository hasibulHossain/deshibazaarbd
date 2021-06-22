import React, { useEffect, useState } from "react";

// third party imports
import Slider from "react-slick";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faListAlt,
  faShoppingBag,
} from "@fortawesome/free-solid-svg-icons";
import ReactStars from "react-rating-stars-component";

// local imports
// import { addToCartAction } from "../_redux/CartProduct/Action/CartAction";

import SlickSetting from "../master/slickSetting/SlickSetting";
import SimpleModal from "../master/Modal/SimpleModal";
import ProductDetails from "../ProductDetails/ProductDetails";
import LoadingSkelleton from "./../master/skelleton/LoadingSkelleton.jsx";
import { useDispatch } from "react-redux";
import { addToCartAction } from "../_redux/CartProduct/Action/CartAction";
import { showToast } from "../master/Helper/ToastHelper";

const ProductList = (props) => {
  const { show, handleShow, handleClose, productList, product, isLoading, type } =
    props;
  const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(getProductListAction(type));
  // }, []);

  console.log('productList :>> ', productList);
  const [quantity, setQuantity] = useState(1);
  const addToCart = (item) => {
    const cartProduct = {
      productID: item.id,
      productName: item.name,
      quantity: quantity,
      isOffer: item.is_offer_enable,
      price: item.default_selling_price,
      offerPrice: item.offer_selling_price,
      productImage: `${process.env.NEXT_PUBLIC_URL}images/products/${item.featured_image}`,
      sellerID: item.seller_id,
      sellerName: item.seller_name,
      sku: item.sku,
    };
    if (item.current_stock == 0) {
      showToast('error', "Product is not available in the stock!")
    } else {
      dispatch(addToCartAction(cartProduct, item.id));
    }
  };

  return (
    <div className="productList-body">
      {isLoading && (
        <LoadingSkelleton
          alignment="vertical"
          count={3}
          width={350}
          height={200}
        />
      )}
      <Slider {...SlickSetting}>
        {productList.length > 0 &&
          productList.map((item, index) => (
            <div key={index} className="product-card">
              <div className="product-purchase-section">
                <button>
                  <FontAwesomeIcon
                    className="add_to_cart"
                    icon={faShoppingBag}
                    onClick={() => addToCart(item)}
                  />
                </button>
                <button>
                  <FontAwesomeIcon className="withlist" icon={faHeart} />
                </button>
                <button>
                  <FontAwesomeIcon className="details" icon={faListAlt} />
                </button>
              </div>
              <div
                className="product-card-body"
                onClick={() => handleShow(item)}
              >
                <img
                  src={`${process.env.NEXT_PUBLIC_URL}images/products/${item.featured_image}`}
                  alt={item.name}
                  className="img-fluid"
                />
                <p className="product-title">{item.name}</p>
                {/* <p>Stock : {item.current_stock}</p> */}
                <div className="rating">
                  <ReactStars
                    value={item.rating}
                    // onChange={ratingChanged}
                    size={24}
                    edit={false}
                    activeColor="#ffd700"
                  />
                </div>
              </div>
            </div>
          ))}
      </Slider>
      <SimpleModal size="xl" show={show} handleClose={handleClose}>
        <ProductDetails product={product} />
      </SimpleModal>
    </div>
  );
};

export default ProductList;
