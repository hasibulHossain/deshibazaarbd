import React, { useState, useEffect, useCallback } from "react";
import { Form } from "react-bootstrap";
import InputRange from "react-input-range";
import "react-input-range/lib/css/index.css";
import Button from "@material-ui/core/Button";
import { useDispatch, useSelector } from "react-redux";
import {
  getCategories,
  getFilteredProducts,
} from "./_redux/Action/CategoryWiseProductAction";

const CategoryFilter = () => {
  const dispatch = useDispatch();
  const { categories } = useSelector(
    (state) => state.CategoryWiseProductReducer
  );
  const [value, setValue] = useState({ min: 100, max: 90000 });
  const [isChecked, setIsChecked] = useState(false);
  const [filterParam, setFilterParam] = useState({
    search: "",
    category: [],
    brand: [],
    min_price: null,
    max_price: null,
    attributes: null,
    rating: null,
  });
  const { search, category, brand, min_price, max_price, attributes, rating } =
    filterParam;

  // checkbox handler
  const handleChecked = (e, category) => {
    const filterParamClone = { ...filterParam };
    // conditionally insert and remove category id from category array
    if (e.target.checked) {
      filterParamClone.category.push(category);
    } else {
      const updatedCategory = filterParamClone.category.filter(
        (item) => item !== category
      );
      filterParamClone.category = updatedCategory;
    }
    setFilterParam(filterParamClone);
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
      const filterParamClone = { ...filterParam };
      filterParamClone.min_price = newValue.min;
      filterParamClone.max_price = newValue.max;
      setFilterParam(filterParamClone);
    }, 500),
    []
  );

  const priceRangeHandler = (newValue) => {
    debounceReturn(newValue);
    setValue(newValue);
  };

  useEffect(() => {
    dispatch(getCategories());
  }, []);

  useEffect(() => {
    dispatch(getFilteredProducts(filterParam));
  }, [
    attributes,
    brand.length,
    category.length,
    max_price,
    min_price,
    rating,
    search,
  ]);

  return (
    <section className="prodcut_filter_section shadow-sm p-3 mb-5 bg-white rounded">
      <h3 className="product_filter_heading">Product Category</h3>
      {/**filter by categories */}
      <div className="filter_by_category">
        <p>Category</p>
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

      {/**filter by price range */}
      <div className="filter_by_price_range">
        <p className="filter_title">Filter By Price</p>
        <div className="price_range">
          <InputRange
            maxValue={99999}
            formatLabel={(value) => `$${value}`}
            minValue={100}
            value={value}
            onChange={priceRangeHandler}
          />
        </div>
      </div>
    </section>
  );
};

export default CategoryFilter;
