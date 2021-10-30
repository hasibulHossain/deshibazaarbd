import React, { useState, useCallback, useRef, useEffect } from "react";
import { Form } from "react-bootstrap";
import InputRange from "react-input-range";
import "react-input-range/lib/css/index.css";
import { useDispatch, useSelector } from "react-redux";
import {
  setFilterParams,
} from "./_redux/Action/CategoryWiseProductAction";
import ReactStars from "react-rating-stars-component";
import { activeCurrency } from "../../services/currency";

const ProductFilter = () => {
  const dispatch = useDispatch();
  const { filterParams, categories, brands } = useSelector(
    (state) => state.CategoryWiseProductReducer
  );

  const [value, setValue] = useState({ min: 100, max: 90000 });
  const [isChecked, setIsChecked] = useState(false);

  const categoryCheckboxes = useRef([]);
  const brandCheckboxes = useRef([]);


  // checkbox handler
  const handleChecked = (e, category) => {
    // uncheck other checkbox
    categoryCheckboxes.current.forEach(checkbox => {
      if(checkbox.checked && +checkbox.id !== category) {
        checkbox.checked = false
      }
    })

    const filterParamClone = { ...filterParams };

    if (e.target.checked) {
      filterParamClone.category[1] = category;
    } else {
      filterParamClone.category.splice(1, 1)
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
    debounce((newValue, filterParams) => {
      const filterParamClone = { ...filterParams };
      filterParamClone.min_price = newValue.min;
      filterParamClone.max_price = newValue.max;
      dispatch(setFilterParams(filterParamClone));
    }, 500),
    []
  );

  const priceRangeHandler = (newValue) => {
    debounceReturn(newValue, filterParams);
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
    brandCheckboxes.current.forEach(brand => {
      if(filterParams.brand.includes(brand.id)) {
        brand.checked = true
      }
    });

    for (let index = 0; index < categoryCheckboxes.current.length; index++) {
      if(filterParams.category.length > 1 && filterParams.category[1] == categoryCheckboxes.current[index].id) {
        categoryCheckboxes.current[index].checked = true;
        break;
      }
    }
  }, [])

  return (
    <section className="w-100 product_filter_section modal-scrollbar bg-white" >
      <h3 className="product_filter_heading">Filter Products</h3>

      {/**filter by price range */}
      <div className="filter_by_price_range">
        <p className="filter_title">By Price</p>
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
        <p className="filter_title">By Rating</p>
        <div style={{display: 'flex', justifyContent: 'space-between'}}>
          <ReactStars {...reactStarProps} />
          <span style={{cursor: 'pointer', fontSize: 12, color: 'var(--color-primary)'}} onClick={resetRatingHandler}>Clear</span>
        </div>
      </div>

      {/**filter by categories */}
      {
        categories.length > 0 && (
          <div className="filter_by_category">
            <p className="filter_title">By Category</p>
            {categories.map((item, index) => (
              <Form.Group key={item.id} controlId={item.id}>
                <Form.Check
                  ref={chkbox => categoryCheckboxes.current[index] = chkbox}
                  type="checkbox"
                  label={item.name}
                  datatype={item.id}
                  className={
                    isChecked == true ? "active_category" : "isNot_active_category"
                  }
                  onChange={(e) => handleChecked(e, item.id)}
                />
              </Form.Group>
            ))}
          </div>
        )
      }

      {/**filter by categories */}
      {
        brands.length > 0 &&
        <div className="filter_by_category" style={{marginTop: '40px'}}>
          <p className="filter_title">Brand</p>
          {brands.map((item, index) => (
            <Form.Group key={item.id} controlId={item.id}>
              <Form.Check
                ref={checkbox => brandCheckboxes.current[index] = checkbox}
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
      }

    </section>
  );
};

export default ProductFilter;
