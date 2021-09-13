import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faColumns, faList, faFilter, faSlidersH } from "@fortawesome/free-solid-svg-icons";
import { Form } from "react-bootstrap";
import CategoryWiseMiniProduct from "./CategoryWiseMiniProduct";
import { useDispatch, useSelector } from "react-redux";
import {
  setFilterParams,
} from "./_redux/Action/CategoryWiseProductAction";
import LoadingSpinner from "../master/LoadingSpinner/LoadingSpinner";
import classNames from "classnames";
import {useRouter} from 'next/router';

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

  const filterHeadingClasses = classNames({
    "category_wise_product_list_heading": true,
    show: showFilter
  })

  let title = "";

  if(categoryBrandDetails.name) {
    title = categoryBrandDetails.name;
  }

  if(filterParams.seller_id) {
    title = filterParams.seller_id;
  }

  const {type} = router.query;

  if(type) {
    title = type;
  }

  return (
    <section className="category_wise_product_list">
      <div className="row justify-content-between">
        <div className="col-lg-6 col-sm-12">
          <div className={filterHeadingClasses}>
            <h5 className="category-search-title">{title}</h5>
            {
              isMobile && (
                <div>
                  <span style={{marginRight: '5px'}}>
                    Filter 
                  </span>
                  <span>
                    <FontAwesomeIcon
                      className={filterClasses}
                      icon={faSlidersH}
                      onClick={showFilterHandler}
                    />
                  </span>
                </div>
              )
            }
          </div>
          <p>
            {
              (paginate.total !== null ? paginate.total : '0') + ' items found in ' + title 
            }
          </p>
        </div>
        <div className="col-lg-6 col-sm-12">
          <div className="d-flex justify-content-start justify-content-sm-end">
            {/* <div className="filter_view">
              {
                !isMobile && (
                  <span>View</span>
                )
              }
              
              <FontAwesomeIcon
                className={
                  columns == "col-md-3"
                    ? "filter_columns column_active"
                    : "filter_columns"
                }
                icon={faColumns}
                onClick={() => setColumns("col-md-3")}
              /> */}
              {/* <FontAwesomeIcon
                className={
                  columns == "col-md-12"
                    ? "filter_columns column_active"
                    : "filter_columns"
                }
                icon={faList}
                onClick={() => setColumns("col-md-12")}
              /> */}
            {/* </div> */}
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
          <div className="d-flex justify-content-center">
            <LoadingSpinner text="Loading Products...." />
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
