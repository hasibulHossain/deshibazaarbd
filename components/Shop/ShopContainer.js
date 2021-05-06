import React from 'react';
import Button from '../master/Button/Button';
import ShopList from './ShopList';

const ShopContainer = () => {
    return (
        <section className="product-container">
            <div className="product-heading">
                <h5>shop by brands</h5>
                <Button buttonText="view all" isFontAwesome={true} />
            </div>
            <ShopList />
        </section>
    );
};

export default ShopContainer;