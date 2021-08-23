import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faColumns, faList } from "@fortawesome/free-solid-svg-icons";
import { Form } from "react-bootstrap";
import CategoryWiseMiniProduct from "./CategoryWiseMiniProduct";
import { useDispatch, useSelector } from "react-redux";
import {
  setFilterParams,
} from "./_redux/Action/CategoryWiseProductAction";
import LoadingSpinner from "../master/LoadingSpinner/LoadingSpinner";
import classNames from "classnames";
import {useRouter} from 'next/router';

const CategoryWishProductList = () => {
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

  const rowClasses = classNames({
    'row': true,
    'no-gutters': isMobile,
  });

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
        <div className="col-lg-6">
          <h5 className="category-search-title">{title}</h5>
          <p>
            {
              (paginate.total !== null ? paginate.total : '0') + ' items found in ' + title 
            }
          </p>
        </div>
        <div className="col-lg-6">
          <div className="d-flex justify-content-end">
            <div className="filter_view">
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
              />
              <FontAwesomeIcon
                className={
                  columns == "col-md-12"
                    ? "filter_columns column_active"
                    : "filter_columns"
                }
                icon={faList}
                onClick={() => setColumns("col-md-12")}
              />
            </div>
            <div className="filter_view d-flex">
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
