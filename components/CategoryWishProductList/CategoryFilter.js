import React, { useState, useEffect } from "react";
import { Form } from "react-bootstrap";
import InputRange from "react-input-range";
import "react-input-range/lib/css/index.css";
import Button from "@material-ui/core/Button";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "./_redux/Action/CategoryWiseProductAction";

const CategoryFilter = () => {
  const dispatch = useDispatch();
  const { categories } = useSelector(
    (state) => state.CategoryWiseProductReducer
  );
  const [value, setValue] = useState({ min: 1, max: 35 });

  const filterByCategory = [
    { controllID: "1", label: "Electronics" },
    { controllID: "2", label: "Cell Phones(5)" },
    { controllID: "3", label: "GPS & Navigation(5)" },
    { controllID: "4", label: "Home Audio & Threater(5)" },
    { controllID: "5", label: "Smart Home(15)" },
  ];
  const [isChecked, setIsChecked] = useState(false);
  const handleChecked = (e, category) => {
    console.log("category name => ", category);
    // setIsChecked(e.target.checked);
  };
  const filterColors = [
    { code: "#32a85c" },
    { code: "#e86427" },
    { code: "#e82794" },
    { code: "#27d8e8" },
    { code: "#27e867" },
    { code: "#e827d1" },
    { code: "#63c7f2" },
    { code: "#07e8bf" },
    { code: "#fcba03" },
    { code: "#ff0004" },
    { code: "#000000" },
    { code: "#ff03b7" },
  ];
  const sizeFilter = [
    { size: "XM" },
    { size: "M" },
    { size: "L" },
    { size: "XL" },
  ];

  useEffect(() => {
    dispatch(getCategories());
  }, []);

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

      {/**filter by delivery & pickup */}
      <div className="filter_by_delivery_pickup">
        <p className="filter_title">Delivery & Pickup</p>
        <div class="form-check">
          <input
            class="form-check-input"
            type="radio"
            name="exampleRadios"
            id="exampleRadios1"
            value="option1"
            checked
          />
          <label class="form-check-label" for="exampleRadios1">
            {" "}
            Show All{" "}
          </label>
        </div>
        <div class="form-check">
          <input
            class="form-check-input"
            type="radio"
            name="exampleRadios"
            id="exampleRadios2"
            value="option2"
          />
          <label class="form-check-label" for="exampleRadios2">
            {" "}
            Delivery To Home{" "}
          </label>
        </div>
        <div class="form-check">
          <input
            class="form-check-input"
            type="radio"
            name="exampleRadios"
            id="exampleRadios3"
            value="option3"
          />
          <label class="form-check-label" for="exampleRadios3">
            {" "}
            2-Days Delivery{" "}
          </label>
        </div>
      </div>
      {/**filter by delivery & pickup */}
      <div className="filter_by_price_range">
        <p className="filter_title">Filter By Price</p>
        <div className="price_range">
          <InputRange
            maxValue={100}
            formatLabel={(value) => `$${value}`}
            minValue={1}
            value={value}
            onChange={(newValue) => setValue(newValue)}
          />
        </div>
      </div>
      {/**filter by color*/}
      <div className="filter_by_color">
        <p className="filter_title">Filter By Color</p>
        {filterColors.length > 0 &&
          filterColors.map((item, index) => (
            <div className="filter_by_colour_outer" key={index}>
              <div
                className="color_filter"
                style={{ backgroundColor: item.code }}
              ></div>
            </div>
          ))}
      </div>
      {/**filter by size */}
      <div className="filter_by_size">
        <p className="filter_title">Filter By Size</p>
        {sizeFilter.length > 0 &&
          sizeFilter.map((item, index) => (
            <Button className="filter_size_btn" variant="outlined">
              {item.size}
            </Button>
          ))}
      </div>
    </section>
  );
};

export default CategoryFilter;
