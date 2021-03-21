import React, { Component, useEffect } from "react";
import ReactStars from "react-rating-stars-component";
import Rater from "react-rater";
import { getReviewListByUser } from "./_redux/Action/ReviewAction";
import { useDispatch, useSelector } from "react-redux";

const ProductRatings = ({ product }) => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getReviewListByUser(product.id, 0, 1));
  }, []);

  const reviewList = useSelector((state) => state.ReviewReducer.reviewList);

  return (
    <>
      <div className="ratingbanner pb-3">
        <div className="container">
          <div className="elegentratingsection">
            <div className="row">
              <div className="col-xl-10 col-lg-10 col-md-10 col-12">
                <div className="elegentratingreview">
                  <h1>Ratings & Reviews</h1>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-3 col-lg-3 col-md-3 col-6">
                <div className="elegentratingreview one">
                  <p>{product.average_rating}/5</p>
                  <div className="review two">
                    <Rater total={5} rating={product.average_rating} interactive={false} />
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-3 col-6">
                <div className="elegentratingreview two">
                  <span>{product.total_rating} Ratings</span>
                  {/* <div className="review">
                    <Rater total={5} rating={2} />
                    <span>56</span>
                    <br></br>
                    <Rater total={5} rating={2} />
                    <span>02</span>
                    <br></br>
                    <Rater total={5} rating={2} />
                    <span>0</span>
                    <br></br>
                    <Rater total={5} rating={2} />
                    <span>0</span>
                    <br></br>
                    <Rater total={5} rating={2} />
                    <span>0</span>
                  </div> */}
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <div className="chairreview">
                  <div className="chair-border"></div>
                  <div className="chairreview one">
                    <h1>Product Reviews</h1>
                  </div>
                  <div className="chairreview two">
                    <p>Sort by default</p>
                  </div>
                </div>
              </div>


              {
                reviewList.length > 0 && reviewList.map((item, index) => (
                  <>
                    <div className="col-12 ratingborder">
                      <div className="chairreview comment borderless">
                        <div className="chairreviewcomment one">
                          <i class="fas fa-user"></i>
                        </div>

                        <div className="chairreviewcomment two">
                          <h1>by {item.rating_by}</h1>
                          <ReactStars
                            count={5}
                            size={20}
                            value={item.rating_value}
                            edit={false}
                            activeColor="#ffab00"
                          />
                          <p> <span className="font-weight-bold">Customer Review : </span> {item.comment ? item.comment : "----"}</p>
                        </div>
                      </div> 
                    </div> 
                  </>
                ))
              }
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductRatings;
