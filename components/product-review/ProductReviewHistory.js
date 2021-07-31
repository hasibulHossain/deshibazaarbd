import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import LoadingSkeleton from '../master/skelleton/LoadingSkelleton';
import { getReviewListByUser } from './_redux/action/reviewAction';
import ReactStars from "react-rating-stars-component";

const ProductReviewHistory = () => {
    const dispatch = useDispatch();
    const {isLoading, reviewList} = useSelector((state) => state.ProductReviewReducer);

    useEffect(() => {
        const itemID = 0;
        const { userData } = JSON.parse(localStorage.getItem('loginData'));
        const userID = userData.id

        dispatch(getReviewListByUser(itemID, userID));
    }, []);

    console.log('reviewList :>> ', reviewList);
    return (
        <>
            {isLoading && (
                <div className="p-3">
                    <LoadingSkeleton
                        alignment="vertical"
                        count={1}
                        width={800}
                        height={120}
                    />
                </div>
            )}
            {
                reviewList.length > 0 && (
                    <>
                        {reviewList.map((item, index) => (
                            <div key={index} className="card m-1 p-2">
                                <div className="row">
                                    <div className="col-3">
                                        <img src="/images/default/chair.png" />
                                    </div>
                                    <div className="col-7">
                                        <h5>{item.item_name && item.item_name}</h5>
                                        <h6>By: {item.rating_by}</h6>
                                        <ReactStars
                                            count={5}
                                            size={24}
                                            value={item.rating_value}
                                            edit={false}
                                            activeColor="#ffd700"
                                        />,
                                        {
                                            item.comment && (
                                                    <p> <span className="font-weight-bold">Description : </span> {item.comment}</p>
                                            )
                                        }
                                    </div>
                                    <div className="col-2">
                                        <h3 className="float-right mt-5">
                                            {item.rating_value}/5
                                        </h3>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </>
                )
            }
        </>
    );
};

export default ProductReviewHistory;