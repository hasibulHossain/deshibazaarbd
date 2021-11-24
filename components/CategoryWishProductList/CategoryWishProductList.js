import React, { useState } from "react";
import { Form } from "react-bootstrap";
import CategoryWiseMiniProduct from "./CategoryWiseMiniProduct";
import { useDispatch, useSelector } from "react-redux";
import {
  setFilterParams,
} from "./_redux/Action/CategoryWiseProductAction";
import LoadingSpinner from "../master/LoadingSpinner/LoadingSpinner";
import classNames from "classnames";
import {useRouter} from 'next/router';
import LoadingPlaceHolder from "../master/skelleton/LoadingPlaceholder";


const CategoryWishProductList = ({showFilter, showFilterHandler}) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { isLoading, categoryBrandDetails, paginate } = useSelector(
    (state) => state.CategoryWiseProductReducer
  );
  const {isMobile} = useSelector(state => state.GlobalReducer);


  const { filterParams } = useSelector(
    (state) => state.CategoryWiseProductReducer
  );

  const [columns, setColumns] = useState("col-md-3");

  const selectHandler = (e) => {
    let filterParamClone = { ...filterParams };

    switch (e.target.value) {
      case "best_match":
        filterParamClone.order_by = ""
        filterParamClone.order = ""
        break;
      case "price_low_high":
        filterParamClone.order_by = "price"
        filterParamClone.order = "asc"
        break;
      case "price_high_low":
        filterParamClone.order_by = "price"
        filterParamClone.order = "desc"
        break;
      case "rating_high":
        filterParamClone.order_by = "rating"
        filterParamClone.order = "desc"
        break;
      case "stock_high":
        filterParamClone.order_by = "stock"
        filterParamClone.order = "desc"
        break;
    }
    dispatch(setFilterParams(filterParamClone));
  }
  const perPageHandler = (e) => {
    let filterParamClone = { ...filterParams };

    switch (e.target.value) {
      case "20":
        filterParamClone.paginate_no = 20
        break;

      case "40":
        filterParamClone.paginate_no = 40
        break;

      case "60":
        filterParamClone.paginate_no = 60
        break;

      case "100":
        filterParamClone.paginate_no = 100
        break;
    }

    dispatch(setFilterParams(filterParamClone));
  }

  const rowClasses = classNames({
    'row': true,
    'no-gutters': isMobile,
  });

  const filterClasses = classNames({
    column_active: showFilter
  })

  // const filterHeadingClasses = classNames({
  //   "category_wise_product_list_heading": true,
  //   show: showFilter
  // })

  let title = "";

  if(categoryBrandDetails.name) {
    title = categoryBrandDetails.name;
  }

  if(filterParams.seller_id) {
    title = filterParams.seller_id;
  }

  const {type, search} = router.query;

  if(type || search) {
    title = type || search
  }

  return (
    <section className="category_wise_product_list">
      <div className="row justify-content-between my-2 my-md-4">
        <div className="col-lg-6 col-sm-12">
          <div className="category_wise_product_list_heading">
            <h5 className="category-search-title">{title.replace(/-/g, " ")}</h5>
          </div>
          <p>
            {
              !isLoading &&
              (paginate.total !== null ? paginate.total : '0') + ` items found in ${title.replace(/-/g, " ")}`
            }
          </p>
        </div>
        <div className="col-lg-6 col-sm-12">
          <div className="d-flex justify-content-start justify-content-sm-end">
            <div className="filter_view mr-2 d-flex align-items-center" onClick={() => showFilterHandler()}> 
              <div className="product-filter">
                <span style={{marginRight: '5px'}}>
                  Filter 
                </span>
                <span>
                <i className="fas fa-sliders-h"></i>
                </span>
              </div>
            </div>
            <div className="filter_view d-flex mr-2 align-items-center">
              {
                !isMobile && (
                  <span>Sort by</span>
                )
              }
              <Form>
                <Form.Group controlId="exampleFormSelectCustom">
                  <Form.Control onChange={selectHandler} as="select" custom>
                    <option value="best_match">Best Match</option>
                    <option value="price_low_high">Price Low to High</option>
                    <option value="price_high_low">Price High to Low</option>
                    <option value="rating_high">Rating</option>
                    <option value="stock_high">Stock</option>
                  </Form.Control>
                </Form.Group>
              </Form>
            </div>
            <div className="filter_view d-flex align-items-center">
              {
                !isMobile && (
                  <span>Per page</span>
                )
              }
              <Form>
                <Form.Group controlId="exampleFormSelectCustom">
                  <Form.Control onChange={perPageHandler} as="select" custom>
                    <option value="20">20</option>
                    <option value="40">40</option>
                    <option value="60">60</option>
                    <option value="100">100</option>
                  </Form.Control>
                </Form.Group>
              </Form>
            </div>
          </div>
        </div>
      </div>
      {
        isLoading && (
          <div className="row no-gutters">
            <LoadingPlaceHolder className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-6 p-1 px-md-3 pb-2" count={4} height={isMobile ? 250 : 370}  />
          </div>
        )
      }
      <div className={rowClasses}>
        {
          !isLoading && (
            <CategoryWiseMiniProduct columns={columns} />
          )
        }
      </div>
    </section>
  );
};

export default CategoryWishProductList;
