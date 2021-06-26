import React, { useState, useEffect, useCallback } from "react";
import { Form } from "react-bootstrap";
import InputRange from "react-input-range";
import "react-input-range/lib/css/index.css";
import Button from "@material-ui/core/Button";
import { useDispatch, useSelector } from "react-redux";
import {
  getCategories,
  getFilteredProducts,
  setFilterParams,
} from "./_redux/Action/CategoryWiseProductAction";
import { getShopList } from "../Shop/_redux/Action/ShopAction";
import ReactStars from "react-rating-stars-component";
import { activeCurrency } from "../../services/currency";

const CategoryFilter = () => {
  const dispatch = useDispatch();
  const { categories, filterParams } = useSelector(
    (state) => state.CategoryWiseProductReducer
  );
  const { ShopList } = useSelector((state) => state.ShopReducer);

  const [value, setValue] = useState({ min: 100, max: 90000 });
  const [isChecked, setIsChecked] = useState(false);
  const {
    search,
    category,
    brand,
    min_price,
    max_price,
    attributes,
    rating,
    paginate_no,
  } = filterParams;

  // checkbox handler
  const handleChecked = (e, category) => {
    const filterParamClone = { ...filterParams };
    // conditionally insert and remove category id from category array
    if (e.target.checked) {
      filterParamClone.category.push(category);
    } else {
      const updatedCategory = filterParamClone.category.filter(
        (item) => item !== category
      );
      filterParamClone.category = updatedCategory;
    }
    dispatch(setFilterParams(filterParamClone));
  };

  // checkbox handler
  const brandCheckboxHandler = (e, brand) => {
    const filterParamClone = { ...filterParams };
    // conditionally insert and remove brand id from brand array
    if (e.target.checked) {
      filterParamClone.brand.push(brand);
    } else {
      const updatedCategory = filterParamClone.brand.filter(
        (item) => item !== brand
      );
      filterParamClone.brand = updatedCategory;
    }
    dispatch(setFilterParams(filterParamClone));
  };

  // use debounce fn to prevent multiple api call at the same time
  function debounce(fn, delay) {
    let timeoutId;
    return function (...args) {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      timeoutId = setTimeout(() => {
        fn(...args);
      }, delay);
    };
  }

  const debounceReturn = useCallback(
    debounce((newValue) => {
      const filterParamClone = { ...filterParams };
      filterParamClone.min_price = newValue.min;
      filterParamClone.max_price = newValue.max;
      dispatch(setFilterParams(filterParamClone));
    }, 500),
    []
  );

  const priceRangeHandler = (newValue) => {
    debounceReturn(newValue);
    setValue(newValue);
  };

  const reactStarProps = {
    size: 40,
    count: 5,
    isHalf: false,
    value: 0,
    color: "#ddd",
    activeColor: "#ffd700",
    onChange: (newValue) => {
      const filterParamClone = { ...filterParams };
      filterParamClone.rating = newValue;
      dispatch(setFilterParams(filterParamClone));
    },
  };

  useEffect(() => {
    dispatch(getCategories());
    dispatch(getShopList());
  }, []);

  useEffect(() => {
    dispatch(getFilteredProducts(filterParams));
  }, [
    attributes,
    brand.length,
    category.length,
    max_price,
    min_price,
    rating,
    search,
    paginate_no,
  ]);

  return (
    <section className="prodcut_filter_section shadow-sm p-3 mb-5 bg-white rounded">
      <h3 className="product_filter_heading">Filter Products</h3>

      <div>
        <p>Filter By Rating</p>
        <ReactStars {...reactStarProps} />
      </div>

      {/**filter by categories */}
      <div className="filter_by_category">
        <p className="filter_title">Category</p>
        {categories.map((item) => (
          <Form.Group key={item.id} controlId={item.id}>
            <Form.Check
              type="checkbox"
              label={item.name}
              className={
                isChecked == true ? "active_category" : "isNot_active_category"
              }
              onChange={(e) => handleChecked(e, item.id)}
            />
          </Form.Group>
        ))}
      </div>

      {/**filter by categories */}
      <div className="filter_by_category">
        <p className="filter_title">Brand</p>
        {ShopList.map((item) => (
          <Form.Group key={item.id} controlId={item.id}>
            <Form.Check
              type="checkbox"
              label={item.name}
              className={
                isChecked == true ? "active_category" : "isNot_active_category"
              }
              onChange={(e) => brandCheckboxHandler(e, item.id)}
            />
          </Form.Group>
        ))}
      </div>

      {/**filter by price range */}
      <div className="filter_by_price_range">
        <p className="filter_title">Filter By Price</p>
        <div className="price_range">
          <InputRange
            maxValue={99999}
            formatLabel={(value) => `${activeCurrency('sign')}${value}`}
            minValue={0}
            value={value}
            onChange={priceRangeHandler}
          />
        </div>
      </div>
    </section>
  );
};

export default CategoryFilter;
