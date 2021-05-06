import React from 'react';
import Button from '../master/Button/Button';
import BestSellerList from './BestSellerList';

const BestSellerContainer = () => {
    return (
        <section className="product-container">
            <div className="product-heading">
                <h5>Best Sellers</h5>
                <Button buttonText="view all" isFontAwesome={true} />
            </div>
            <BestSellerList />
        </section>
    );
};

export default BestSellerContainer;