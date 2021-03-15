import React, { Component, useState, useEffect } from "react";
import FavoriteIcon from "@material-ui/icons/Favorite";
import Rater from "react-rater";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductWishes } from "../../../../store/redux/productWishes/actions/ProductWishAction";
import LoadingSkelleton from "../../../master/skelleton/LoadingSkelleton";
import ProfileSideBar from "../myprofile/profileSideBar";
import { getWishListData } from "../../../WishList/_redux/Action/wishListAction";

const ProductWishList = ({ router }, props) => {
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.wishListReducer.isLoading);
  const productWishes = useSelector((state) => state.productWish.productWishes);
  const wishList = useSelector((state) => state.wishListReducer.wishList);

  useEffect(() => {
    dispatch(getWishListData());
  }, []);

  return (
    <>
      <div className="wishbanner pb">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-3 offset-lg-1">
              <ProfileSideBar />
            </div>

            <div className="col-lg-7">
              <div className="wishlisttitle">
                <h1>My Wishlist</h1>
              </div>

              {!isLoading && wishList.map.length === 0 && (
                <div>No Wish Found !!</div>
              )}

              {isLoading && (
                <LoadingSkelleton
                  alignment="vertical"
                  count={1}
                  width={850}
                  height={150}
                />
              )}

              {wishList.map.length > 0 && (
                <>
                  {wishList.map((item, index) => (
                    <div className="mt-4" key={index}>
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
              )}

              {/* <div className="mt-2">
                <div className="innerwishlist">
                  <div className="wishsingleproduct">
                    <img src="/images/default/chair.png" />
                  </div>
                  <div className="wishsingleproductText">
                    <h1>Product title with link</h1>
                    <h4>৳ 500</h4>

                    <h5>Seller: Seller shop name</h5>
                  </div> 
                  <div className="wishsingleproductIcon red">
                    <FavoriteIcon />
                  </div>
                </div>
              </div> */}


            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductWishList;
