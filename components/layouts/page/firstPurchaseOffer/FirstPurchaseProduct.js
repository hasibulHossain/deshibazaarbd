import React, { useEffect } from "react";
import { useRouter } from 'next/router'
import { GetCategoryList, getBrandList, handleChangeCategoryFilter } from "../../../../store/redux/products/actions/ProductAction";
import { useDispatch, useSelector } from "react-redux";
import { windowScrollPosition } from "../../../utils/WindowHelper";
import PageTitle from "../../../page-title/PageTitle";
import FirstPurchaseProductList from "./FirstPurchaseProductList";

const FirstPurchaseProduct = (props) => {
  const dispatch = useDispatch()
  const router = useRouter()
  const category = useSelector((state) => state.product.category);
  const brands = useSelector((state) => state.product.brands);
  const filterProduct = useSelector((state) => state.product.filterProduct);
  const pushDataString = useSelector((state) => state.product.pushDataString);
  const ratingsArray = [5, 4, 3, 2, 1];

  const { cat } = props;

  useEffect(() => {
    dispatch(GetCategoryList())
    dispatch(getBrandList())
  }, []);

  const handleChangeProductFilter = (name, value, e) => {
    windowScrollPosition(0, 50);
    dispatch(handleChangeCategoryFilter(name, value));
  };

  useEffect(() => {
    let routerPath = '';

    if (router.pathname === '/products') {
      routerPath = router.pathname;
    } else if (router.pathname === '/categories/[categorySlug]') {
      const { categorySlug } = router.query;
      routerPath = '/categories/' + categorySlug;
    } else if (router.pathname === '/brand/[brand]') {
      const { brand } = router.query;
      routerPath = '/brand/' + brand;
    } else if (router.pathname === '/shop/[shopSlug]') {
      const { shopSlug } = router.query;
      routerPath = '/shop/' + shopSlug;
    }

    router.push({
      pathname: routerPath,
      search: pushDataString
    })
  }, [filterProduct, pushDataString]);

  return (
    <>
      <div className="HomeProduct">
        <div className="container-fluid">
          <div className="ml-4">
            <PageTitle title="First Purchase Offer" />
          </div>
          <div className="row m-2">
            <div className="col-lg-12">
              <FirstPurchaseProductList cat={cat} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FirstPurchaseProduct;
