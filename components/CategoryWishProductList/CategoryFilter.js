import React, { useState, useEffect, useCallback } from "react";
import { Form } from "react-bootstrap";
import InputRange from "react-input-range";
import "react-input-range/lib/css/index.css";
import { useDispatch, useSelector } from "react-redux";
import {
  getFilteredProducts,
  setFilterParams,
} from "./_redux/Action/CategoryWiseProductAction";
import { getShopList } from "../Shop/_redux/Action/ShopAction";
import ReactStars from "react-rating-stars-component";
import { activeCurrency } from "../../services/currency";
import { getCategories } from "../category/_redux/Action/CategoryAction";
import {useRouter} from 'next/router'

const CategoryFilter = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { filterParams } = useSelector(
    (state) => state.CategoryWiseProductReducer
  );
  const { ShopList } = useSelector((state) => state.ShopReducer);
  const { categories } = useSelector((state) => state.CategoryReducer);

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
    size: 20,
    count: 5,
    isHalf: false,
    value: 0,
    color: "#ddd",
    activeColor: '#ffd700',
    onChange: (newValue) => {
      const filterParamClone = { ...filterParams };
      filterParamClone.rating = newValue;
      dispatch(setFilterParams(filterParamClone));
    },
  };
  
  const resetRatingHandler = () => {
    const filterParamClone = { ...filterParams };
    filterParamClone.rating = null;

    dispatch(setFilterParams(filterParamClone));
  }

  useEffect(() => {
    const queries = router.query;
    const cloneFilterParams = {...filterParams};
    for(const query in queries) {
      if(query === 'brand') {
        cloneFilterParams[query] = [];
        cloneFilterParams[query].push(+queries[query]);
      }
      if(query === 'category') {
        cloneFilterParams[query] = [];
        cloneFilterParams[query].push(+queries[query])
      }
    }
    dispatch(setFilterParams(cloneFilterParams))

    dispatch(getCategories(null));
    dispatch(getShopList());
  }, [router.query]);

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

      <div>
        <p className="filter_title">Filter By Rating</p>
        <div style={{display: 'flex', justifyContent: 'space-between'}}>
          <ReactStars {...reactStarProps} />
          <span style={{cursor: 'pointer'}} onClick={resetRatingHandler}>Clear</span>
        </div>
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

    </section>
  );
};

export default CategoryFilter;
