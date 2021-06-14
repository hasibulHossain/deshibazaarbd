import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Slider from "react-slick";
import { getFeaturedProductList } from "./_redux/Action/FeaturedProductsAction";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faListAlt,
  faShoppingBag,
} from "@fortawesome/free-solid-svg-icons";
import ReactStars from "react-rating-stars-component";
import SlickSetting from "../master/slickSetting/SlickSetting";
import SimpleModal from "../master/Modal/SimpleModal";
import FeaturedProductDetails from "./FeaturedProductDetails";

const ProductList = () => {
  const [show, setShow] = useState(false);
  const [product, setProduct] = useState("");

  const { ProductList } = useSelector((state) => state.FeaturedProductsReducer);

  const dispatch = useDispatch();

  const handleClose = () => setShow(false);

  const handleShow = (item) => {
    setShow(true);
    setProduct(item);
  };

  useEffect(() => {
    dispatch(getFeaturedProductList());
  }, []);

  return (
    <div className="productList-body">
      <Slider {...SlickSetting}>
        {ProductList.length > 0 &&
          ProductList.map((item, index) => (
            <div key={index} className="product-card">
              <div className="product-purchase-section">
                <button>
                  <FontAwesomeIcon className="add_to_cart" icon={faShoppingBag} />
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
                  src={`${process.env.NEXT_PUBLIC_URL}/images/products/${item.featured_image}`}
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
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const [product, setProduct] = useState('');
    const handleShow = (item) => {
        setShow(true);
        setProduct(item);
    };
    return (
        <div className="productList-body">
            <Slider {...SlickSetting}>
                {
                    ProductList.length > 0 && ProductList.map((item, index) => (
                        <div key={index} className="product-card">
                            <div className="product-purchase-section">
                                <button>
                                    <FontAwesomeIcon className="add_to_cart" icon={faShoppingBag} />
                                </button>
                                <button>
                                    <FontAwesomeIcon className="withlist" icon={faHeart} />
                                </button>
                                <button>
                                    <FontAwesomeIcon className="details" icon={faListAlt} />
                                </button>
                            </div>
                            <div className="product-card-body" onClick={(() => handleShow(item))}>
                                <img src={item.productImg} alt={item.title} className="img-fluid" />
                                <p className="product-title">{item.title}</p>
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
                    ))
                }
            </Slider>
            <SimpleModal
                size="xl"
                show={show}
                handleClose={handleClose}

            >
                <FeaturedProductDetails product={product} />
            </SimpleModal> */}
    </div>
  );
};

export default ProductList;
