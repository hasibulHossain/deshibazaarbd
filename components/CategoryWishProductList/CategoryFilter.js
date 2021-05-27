import React, { useState } from 'react';
import InputRange from 'react-input-range';

const CategoryFilter = () => {
    const [value, setValue] = useState({
        min: 2, max: 10
    });
    return (
        <section className="prodcut_filter_section shadow-sm p-3 mb-5 bg-white rounded">
            <h3 className="product_filter_heading">
                Product Category
            </h3>
            {/**filter by categories */}
            <div className="filter_by_category">
                <p>Category</p>
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" />
                    <label class="form-check-label" for="defaultCheck1"> Electronics </label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" />
                    <label class="form-check-label" for="defaultCheck1"> Cell Phones(5) </label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" />
                    <label class="form-check-label" for="defaultCheck1"> GPS & Navigation(5) </label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" />
                    <label class="form-check-label" for="defaultCheck1"> Home Audio & Threater(5) </label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" />
                    <label class="form-check-label" for="defaultCheck1"> Smart Home(15) </label>
                </div>
            </div>

            {/**filter by delivery & pickup */}
            <div className="filter_by_delivery_pickup">
                <p className="filter_title">Delivery & Pickup</p>
                <div class="form-check">
                    <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked />
                    <label class="form-check-label" for="exampleRadios1">  Show All </label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2" />
                    <label class="form-check-label" for="exampleRadios2"> Delivery To Home </label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios3" value="option3" />
                    <label class="form-check-label" for="exampleRadios3"> 2-Days Delivery </label>
                </div>
            </div>
            {/**filter by delivery & pickup */}
            <div className="filter_by_price_range">
                <p className="filter_title">Filter By Price</p>
                {/* <InputRange
                    formatLabel={value => `$ ${value}`}
                    value={this.state.value}
                    onChange={value => this.setState({ value })} /> */}
                <InputRange
                    maxValue={20}
                    minValue={0}
                    value={value}
                    onChange={vnewValuealue => setValue({ newValue })} />
            </div>
        </section>
    );
};

export default CategoryFilter;