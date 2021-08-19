import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const ProductNoFound = () => {
    return (
        <div className="search_product_no_found">
            <h4 className="product_no_found_title text-danger">No product found !</h4>
            <p className="product_no_found_description">We're sorry. We cannot find any matches for your search term.</p>
            <div className="search_product_not_found_img_box">
                <img src="/images/deshibazaarbd-not-found.png" alt="error" />
            </div>
        </div>
    );
};

export default ProductNoFound;