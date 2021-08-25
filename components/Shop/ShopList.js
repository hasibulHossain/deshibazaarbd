import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getShopList } from "./_redux/Action/ShopAction";
import { useRouter } from "next/router";

const ShopList = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { ShopList } = useSelector((state) => state.ShopReducer);

  const routeHandler = (brandId) => {
    router
      .push(`/products?brand=${brandId}`)
      .then((_) => window.scrollTo(0, 0));
  };

  useEffect(() => {
    dispatch(getShopList());
  }, []);

  return (
    <div className="productList-body p-3">
      <div className="row">
        {ShopList.length > 0 &&
          ShopList.slice(0, 18).map((item, index) => (
            <div className="col-4 col-md-2 col-lg-2" key={index}>
              <div className="shop-card" onClick={() => routeHandler(item.id)}>
                {item.image !== null && item.image !== "" ? (
                  <div className="shop-logo">
                    <img src={item.image_url} alt={item.name} />
                  </div>
                ) : (
                  <div className="shop-logo">{item.name}</div>
                )}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ShopList;
