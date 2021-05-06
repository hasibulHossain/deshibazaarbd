import React from 'react';
import Button from '../master/Button/Button';
import ProductList from './ProductList';

const FastestDeliveryContainer = () => {
    return (
        <section className="product-container">
            <div className="product-heading">
                <h5>Fastest Delivery</h5>
                <Button buttonText="view all" isFontAwesome={true} />
            </div>
            <ProductList />
        </section>
    );
};

export default FastestDeliveryContainer;