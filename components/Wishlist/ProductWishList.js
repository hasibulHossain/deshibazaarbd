import React, { useEffect } from "react";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { useDispatch, useSelector } from "react-redux";
import LoadingSkelleton from "../master/skelleton/LoadingSkelleton.jsx";
import ProfileSideBar from "../myprofile/ProfileSideBar";
import { getWishListData } from "./_redux/Action/WishlistAction";

const ProductWishList = ({ router }, props) => {
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.WishlistReducer.isLoading);
  const wishList = useSelector((state) => state.WishlistReducer.wishList);

  useEffect(() => {
    dispatch(getWishListData());
  }, []);
  console.log('wishList :>> ', wishList);
  return (
    <>
      <div className="container-fluid ">
        <div className="row">
          <div className="col-md-3">
            <ProfileSideBar />
          </div>

          <div className="col-md-7 mt-3">
            <div className="user_profile_setting_body">
              <h5>My Wishlist</h5>
              {!isLoading && wishList.map.length === 0 && (
                <div>No Wishlist Found !!</div>
              )}

              {isLoading && (
                <LoadingSkelleton
                  alignment="vertical"
                  count={1}
                  width={850}
                  height={150}
                />
              )}
              {wishList.map.length > 0 && wishList.map((item, index) => (
                <div className="inner_product_list" key={index}>
                  <div className="row">
                    <div className="wishsingleproduct col-4">
                      <img src="/images/default/chair.png" />
                    </div>
                    <div className="wishsingleproductText col-7">
                      <h5 className="product_name">{item.item && item.item.name}</h5>
                      <h4>{item.item && item.item.final_selling_price !== null ? `৳ ${item.item.final_selling_price}` : ''}</h4>
                      <h6>Seller : Seller shop name</h6>
                    </div>
                    <div className="wishsingleproductIcon">
                      <FavoriteIcon />
                    </div>
                  </div>
                </div>
              )
              )}
            </div>
          </div>


        </div>
      </div>
    </>
  );
};

export default ProductWishList;
