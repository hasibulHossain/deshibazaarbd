import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Slider from "react-slick";
import { getFastestDeliveryProductList } from "./_redux/Action/FastestDeliveryAction";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faListAlt,
  faShoppingBag,
} from "@fortawesome/free-solid-svg-icons";
import ReactStars from "react-rating-stars-component";
import SlickSetting from "../master/slickSetting/SlickSetting";
import SimpleModal from "../master/Modal/SimpleModal";
import FastestDeliveryDetails from "./FastestDeliveryDetails";
import LoadingSkelleton from './../master/skelleton/LoadingSkelleton.jsx'
import { addToCartAction } from "../_redux/CartProduct/Action/CartAction";
const ProductList = () => {
  const [show, setShow] = useState(false);
  const [product, setProduct] = useState("");
  const [quantity, setQuantity] = useState(1);
  const { ProductList, isLoading } = useSelector((state) => state.FastestDeliveryReducer);

  const dispatch = useDispatch();

  const handleClose = () => setShow(false);
  const handleShow = (item) => {
    setShow(true);
    setProduct(item);
  };

  useEffect(() => {
    dispatch(getFastestDeliveryProductList());
  }, []);

  const addToCart = (item) => {
    const cartProduct = {
      productID: item.id,
      productName: item.name,
      quantity: quantity,
      isOffer: item.is_offer_enable,
      price: item.default_selling_price,
      offerPrice: item.offer_selling_price,
      productImage: `${process.env.NEXT_PUBLIC_URL}images/products/${item.featured_image}`,
    };
    dispatch(addToCartAction(cartProduct, item.id));
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
        {ProductList.length > 0 &&
          ProductList.map((item, index) => (
            <div key={index} className="product-card">
              <div className="product-purchase-section">
                <button>
                  <FontAwesomeIcon className="add_to_cart" icon={faShoppingBag} onClick={() => addToCart(item)} />
                </button>
                <button>
                  <FontAwesomeIcon className="withlist" icon={faHeart} />
                </button>
                <button>
                  <FontAwesomeIcon className="details" icon={faListAlt} />
                </button>
              </div>
              <div className="product-card-body" onClick={() => handleShow(item)}
              >
                <img
                  src={`${process.env.NEXT_PUBLIC_URL}images/products/${item.featured_image}`}
                  alt={item.name}
                  className="img-fluid"
                />
                <p className="product-title">{item.name}</p>
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
      {/* <SimpleModal
        size="xl"
        show={show}
        handleClose={handleClose}

      >
        <FastestDeliveryDetails product={product} />
      </SimpleModal> */}
    </div>
  );
};

export default ProductList;
