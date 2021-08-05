import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import LoadingSkelleton from "../master/skelleton/LoadingSkelleton.jsx";
import ProfileSideBar from "../myprofile/ProfileSideBar";
import { getWishListData } from "./_redux/Action/WishlistAction";
import PriceCalculation from "../products/partials/PriceCalculation.js";
import RemoveWishlist from "./RemoveWishlist.js";
import { Button } from '@material-ui/core';
import Translate from "../translation/Translate.js";
import WarningMessage from "../master/warningMessage/WarningMessage.js";

const ProductWishList = () => {

  const dispatch = useDispatch();
  const { wishList, isLoading } = useSelector((state) => state.WishlistReducer);

  useEffect(() => {
    dispatch(getWishListData());
  }, []);

  return (
    <>
      <div className="container-fluid ">
        <div className="row">
          <div className="col-md-3">
            <ProfileSideBar />
          </div>

          <div className="col-md-8 mt-3">
            <div className="user_profile_setting_body">
              <div className="card">
                <div className="card-header bg-white">
                  <h5 className="card-title">
                    <Translate> My Wishlist </Translate>
                  </h5>
                </div>
                <div className="card-body">
                  {!isLoading && wishList.length === 0 && (
                    <WarningMessage text="Sorry! Wishlist not found..." />
                  )}

                  {isLoading && (
                    <LoadingSkelleton
                      alignment="vertical"
                      count={1}
                      width={"100%"}
                      height={150}
                    />
                  )}

                  {wishList.map.length > 0 && wishList.map((item, index) => (
                    <div className="border-bottom">
                      <div className="inner_product_list" key={index}>
                        <div className="row">

                          <div className="wishlist_product col-2">
                            <img className="img-fluid p-2" style={{ maxHeight: 100 }} src={`${process.env.NEXT_PUBLIC_URL}images/products/${item.featured_image}`} />
                          </div>

                          <div className="wishlist_list_product_details col-9">
                            <h5 className="product_name">{item.name}</h5>
                            <div className="h3 product_price">
                              <PriceCalculation item={item} />
                            </div>
                          </div>

                          <div className="wishlist_wishIcon pointer">
                            <Button>
                              <RemoveWishlist product={item} />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductWishList;
