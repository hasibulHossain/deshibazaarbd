import React from 'react';
import Button from '../master/Button/Button';
import ProductList from './ProductList';

const ShopByCategoryContainer = () => {
    return (
        <section className="product-container">
            <div className="product-heading">
                <h5>shop by categories</h5>
                <Button buttonText="view all" isFontAwesome={true} />
            </div>
            <ProductList />
        </section>
    );
};

export default ShopByCategoryContainer;