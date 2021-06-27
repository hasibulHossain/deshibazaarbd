import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBag } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { getDealFlashList } from "./_redux/Action/DealFlashAction";
import ReactStars from "react-rating-stars-component";
import CountdownTimer from "react-component-countdown-timer";
import { toggleFloatingCart } from "../../_redux/store/action/globalAction";
import { getCartsAction, handleCombineCarts } from "../carts/_redux/action/CartAction";
import { formatCurrency, activeCurrency } from '../../services/currency';

const DealFlash = () => {

  const dispatch = useDispatch();
  const flashDealList = useSelector(state => state.DealFlashReducer.flashDealList);
  const carts = useSelector(state => state.CartReducer.carts)
  const totalPrice = useSelector(state => state.CartReducer.totalPrice)
  const combineCartList = useSelector((state) => state.CartReducer.combineCartList)

  const flashDealBtnHandler = () => {
    dispatch(toggleFloatingCart());
  };

  useEffect(() => {
    dispatch(getDealFlashList());
    dispatch(getCartsAction())
  }, []);

  return (
    <section className="product-container">
      <div className="product-heading">
        <h5 className="section-heading">Deals OF The Day</h5>
        <button
          onClick={flashDealBtnHandler}
          className="flashDealButton d-flex align-items-center"
        >
          <span className="mr-2">
            {" "}
            {combineCartList.length} items 
            <br /> 
            { formatCurrency(totalPrice) } { activeCurrency('code') }
          </span>
          <span>
            {" "}
            <FontAwesomeIcon className="ml-2" icon={faShoppingBag} />
          </span>
        </button>
      </div>

      <div className="flash-deal-section">
        <div className="row">
          {flashDealList.length > 0 &&
            flashDealList.map((item, index) => (
              <div className="col-md-6" key={index + 1}>
                <div className="flash-deal-card p-3">
                  <div className="flash-deal-img">
                    <img
                      src={item.productImg}
                      alt={item.title}
                      className="img-fluid"
                    />
                  </div>
                  <div className="flash-deal-detail">
                    <h3 className="title">{item.title}</h3>
                    <ReactStars
                      value={item.rating}
                      // onChange={ratingChanged}
                      size={24}
                      edit={false}
                      activeColor="#ffd700"
                    />
                    <p className="price">
                      <del>{item.price} </del>
                      <span className="offerPrice">${item.offerPrice}</span>
                    </p>
                    <p className="inStock">
                      Availability : <span>{item.stock} in stock</span>
                    </p>
                    <div className="flash-count">
                      <CountdownTimer
                        count={item.countTime}
                        showTitle
                        size={20}
                        labelSize={18}
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default DealFlash;
