import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDealFlashList } from "./_redux/Action/DealFlashAction";
import ReactStars from "react-rating-stars-component";
import CountdownTimer from "react-component-countdown-timer";

const DealFlash = () => {

  const dispatch = useDispatch();
  const flashDealList = useSelector(state => state.DealFlashReducer.flashDealList);

  useEffect(() => {
    dispatch(getDealFlashList());
  }, []);

  return (
    <section className="product-container">
      <div className="product-heading">
        <h5 className="section-heading">Deals OF The Day</h5>
      </div>

      <div className="flash-deal-section">
        <div className="row">
          {flashDealList.length > 0 &&
            flashDealList.map((item, index) => (
              <div className="col-md-6" key={index + 1}>
                <div className="flash-deal-card p-3">
                  <div className="flash-deal-img">
                    <img
                      src={`${process.env.NEXT_PUBLIC_URL}images/products/${item.featured_image}`}
                      alt={item.name}
                      className="img-fluid"
                    />
                  </div>
                  <div className="flash-deal-detail">
                    <h3 className="title">{item.name}</h3>
                    <ReactStars
                      value={item.average_rating}
                      // onChange={ratingChanged}
                      size={24}
                      edit={false}
                      activeColor="#ffd700"
                    />
                    <p className="price">
                      <del>{item.default_selling_price} </del>
                      <span className="offerPrice">${item.offer_selling_price}</span>
                    </p>
                    <p className="inStock">
                      Availability : <span>{item.current_stock} in stock</span>
                    </p>
                    <div className="flash-count">
                      <CountdownTimer
                        count={999999}
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
