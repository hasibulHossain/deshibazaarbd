import React, { useState, useEffect, useCallback } from "react";
import { Form } from "react-bootstrap";
import InputRange from "react-input-range";
import "react-input-range/lib/css/index.css";
import { useDispatch, useSelector } from "react-redux";
import {
  getCategoryOrBrandDetails,
  getFilteredProducts,
  resetFilterParams,
  setFilterParams,
} from "./_redux/Action/CategoryWiseProductAction";
import { getShopList } from "../Shop/_redux/Action/ShopAction";
import ReactStars from "react-rating-stars-component";
import { activeCurrency } from "../../services/currency";
import {useRouter} from 'next/router'
import classNames from "classnames";
import Axios from 'axios'

const ProductFilter = ({show}) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { filterParams } = useSelector(
    (state) => state.CategoryWiseProductReducer
  );
  const { ShopList } = useSelector((state) => state.ShopReducer);
  const { categories } = useSelector((state) => state.CategoryReducer);
  const {isMobile} = useSelector(state => state.GlobalReducer);

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
    order_by,
    seller_id,
    order,
    type,
    page
  } = filterParams;

  const classes = classNames({
    'product_filter_section modal-scrollbar shadow-sm p-3 mb-md-5 mb-sm-2 bg-white rounded': true,
    show: show || !isMobile,
  });

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

  // console.log('router => ', router)

  const {brand: brandQuery = "", category: categoryQuery = "", type: typeQuery = "", storeById = ""} = router.query;

  useEffect(() => {
    const queries = router.query;
    const cloneFilterParams = {...filterParams};
    for(const query in queries) {
      if(Array.isArray(cloneFilterParams[query])) {
        cloneFilterParams[query] = [];
        if(query === 'brand') {
          cloneFilterParams[query].push(+queries[query]);

          dispatch(getCategoryOrBrandDetails('brands/' + +queries[query]));
        }
        if(query === 'category') {
          cloneFilterParams[query].push(+queries[query]);

          dispatch(getCategoryOrBrandDetails('categories/' + +queries[query]));
        }

      } else {
        if(query === 'storeById') {
          cloneFilterParams['seller_id'] = queries[query]
        }
        // cloneFilterParams[query] = queries[query];
      }
    }
    dispatch(setFilterParams(cloneFilterParams));

    dispatch(getShopList());

  }, [brandQuery, categoryQuery, typeQuery, storeById]);

  useEffect(() => {
    return () => {
      dispatch(resetFilterParams())
    }
  }, [])

  useEffect(() => {
    const source = Axios.CancelToken.source();
    dispatch(getFilteredProducts(filterParams, source));
    return () => {
      source.cancel()
    }
  }, [
    attributes,
    JSON.stringify(brand),
    JSON.stringify(category),
    max_price,
    min_price,
    rating,
    search,
    paginate_no,
    order_by,
    order,
    type,
    page,
    seller_id
  ]);

  return (
    <section className={classes} >
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
          <span style={{cursor: 'pointer', fontSize: 12, color: 'var(--color-primary)'}} onClick={resetRatingHandler}>Clear</span>
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

export default ProductFilter;
