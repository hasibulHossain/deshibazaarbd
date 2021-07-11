import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Slider from "react-slick";
import { getShopList } from "./_redux/Action/ShopAction";
import SlickSlideSetting from "./SlickSlideSetting";
import {useRouter} from 'next/router'

const ShopList = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { ShopList } = useSelector((state) => state.ShopReducer);

  const routeHandler = (brandId) => {
    router.push(`/products?brand=${brandId}`)
  }

  useEffect(() => {
    dispatch(getShopList());
  }, []);

  return (
    <div className="productList-body p-3">
      <Slider {...SlickSlideSetting}>
        {ShopList.length > 0 &&
          ShopList.map((item, index) => (
            <div key={index} className="shop-card" onClick={() => routeHandler(item.id)}>
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
