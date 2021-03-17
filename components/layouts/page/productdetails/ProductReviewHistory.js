import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getWishListData } from '../../../WishList/_redux/Action/wishListAction';
import FavoriteIcon from "@material-ui/icons/Favorite";
import LoadingSkelleton from '../../../master/skelleton/LoadingSkelleton';

const ProductReviewHistory = () => {
    const dispatch = useDispatch();
    const isLoading = useSelector((state) => state.wishListReducer.isLoading);
    const productWishes = useSelector((state) => state.productWish.productWishes);
    const wishList = useSelector((state) => state.wishListReducer.wishList);

    useEffect(() => {
        dispatch(getWishListData());
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
                wishList.map.length > 0 && (
                    <>
                        {wishList.map((item, index) => (
                            <div className="mt-2 p-2" key={index}>
                                <div className="innerwishlist">
                                    <div className="wishsingleproduct">
                                        <img src="/images/default/chair.png" />
                                    </div>
                                    <div className="wishsingleproductText">
                                        <h1>{item.item && item.item.name}</h1>
                                        <h4>{item.item && item.item.final_selling_price !== null ? `৳ ${item.item.final_selling_price}` : ''}</h4>
                                        <h5>Seller: Seller shop name</h5>
                                    </div>
                                    <div className="wishsingleproductIcon">
                                        <FavoriteIcon />
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