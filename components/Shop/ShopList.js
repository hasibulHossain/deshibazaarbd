import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Slider from "react-slick";
import { getShopList } from "./_redux/Action/ShopAction";
import SlickSlideSetting from "./SlickSlideSetting";
const ShopList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getShopList());
  }, []);

  const { ShopList } = useSelector((state) => state.ShopReducer);

  return (
    <div className="productList-body p-3">
      <Slider {...SlickSlideSetting}>
        {ShopList.length > 0 &&
          ShopList.map((item, index) => (
            <div key={index} className="shop-card">
              <div className="shop-logo">
                <img src={item.image_url} alt={item.name} />
              </div>
            </div>
          ))}
      </Slider>
    </div>
  );
};

export default ShopList;
