import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getWishListData } from '../../../WishList/_redux/Action/wishListAction';
import FavoriteIcon from "@material-ui/icons/Favorite";
import LoadingSkelleton from '../../../master/skelleton/LoadingSkelleton';
import { getReviewListByUser } from './_redux/Action/ReviewAction';
import ReactStars from "react-rating-stars-component";

const ProductReviewHistory = () => {
    const dispatch = useDispatch();
    const productWishes = useSelector((state) => state.productWish.productWishes);
    const wishList = useSelector((state) => state.wishListReducer.wishList);
    const isLoading = useSelector((state) => state.ReviewReducer.isLoading);
    const reviewList = useSelector((state) => state.ReviewReducer.reviewList);

    console.log(`reviewList`, reviewList)
    useEffect(() => {
        dispatch(getWishListData());
        dispatch(getReviewListByUser());
    }, []);
    return (
        <>
            {isLoading && (
                <div className="p-3">
                    <LoadingSkelleton
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
                            <div className="mt-2 p-2" key={index}>
                                <div className="innerwishlist">
                                    <div className="wishsingleproduct">
                                        <img src="/images/default/chair.png" />
                                    </div>
                                    <div className="wishsingleproductText">
                                        <h1>{item.item_name && item.item_name}</h1>
                                        <h5>By: {item.rating_by}</h5>
                                        <ReactStars
                                            count={5}
                                            size={24}
                                            value={item.rating_value}
                                            edit={false}
                                            activeColor="#ffd700"
                                        />,
                                        <h3 className="float-right">
                                            {item.rating_value}/5
                                        </h3>
                                    </div>
                                    {/* <div className="wishsingleproductIcon">
                                        <FavoriteIcon />
                                    </div> */}
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