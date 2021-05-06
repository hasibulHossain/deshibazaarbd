import React from 'react';
import Button from '../master/Button/Button';
import ProductList from './ProductList';

const FeaturedProductsContainer = () => {
    return (
        <section className="product-container">
            <div className="product-heading">
                <h5>Featured Products</h5>
                <Button buttonText="view all" isFontAwesome={true} />
            </div>
            <ProductList />
        </section>
    );
};

export default FeaturedProductsContainer;