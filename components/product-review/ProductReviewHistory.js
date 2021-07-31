import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import LoadingSkeleton from '../master/skelleton/LoadingSkelleton';
import { getReviewListByUser } from './_redux/action/reviewAction';
import ReactStars from "react-rating-stars-component";
import WarningMessage from '../master/warningMessage/WarningMessage';
import PriceCalculation from '../products/partials/PriceCalculation';

const ProductReviewHistory = () => {
    const dispatch = useDispatch();
    const { isLoading, reviewList } = useSelector((state) => state.ProductReviewReducer);

    useEffect(() => {
        const itemID       = 0;
        const { userData } = JSON.parse(localStorage.getItem('loginData'));
        const userID       = userData.id

        dispatch(getReviewListByUser(itemID, userID));
    }, []);

    return (
        <>
            {isLoading && (
                <div className="p-3">
                    <LoadingSkeleton
                        alignment = "vertical"
                        count     = {1}
                        width     = {800}
                        height    = {120}
                    />
                </div>
            )}
            {
                !isLoading && reviewList.length === 0 && (
                    <div className="mt-1 p-2">
                        <WarningMessage text="Sorry ! Product review history not found....." />
                    </div>
                )
            }
            {
                reviewList.length > 0 && (
                    <>
                        {reviewList.map((item, index) => (
                            <div className="product_preview_inner_item" key={index + 1}>
                                <div className="row">
                                    <div className="col-lg-4">
                                        <div className="text-center">
                                            <img style={{ maxHeight: "150px" }} src={`${process.env.NEXT_PUBLIC_URL}images/products/${item.featured_image}`} alt={item.item_name} className="img-fluid" />
                                        </div>
                                    </div>
                                    <div className="col-lg-7">
                                        <div className="">
                                            <h4 className="product_preview_title">{item.item_name && item.item_name}</h4>
                                            <PriceCalculation item={item} />
                                            <h6> By : {item.rating_by}</h6>
                                            <ReactStars
                                                count       = {5}
                                                size        = {24}
                                                value       = {item.rating_value}
                                                edit        = {false}
                                                activeColor = "#ffd700"
                                            />
                                            {
                                                item.comment && (
                                                    <p> <span className="font-weight-bold">Description : </span> {item.comment}</p>
                                                )
                                            }

                                        </div>
                                        <div className="product_preview_button_section float-bottom">
                                            <h5>
                                                {item.rating_value}/5
                                            </h5>
                                        </div>
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