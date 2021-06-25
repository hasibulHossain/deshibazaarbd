import React from 'react';
import Button from '../master/Button/Button';
import CategoryListHome from './CategoryListHome';

const ShopByCategoryContainer = () => {
    return (
        <section className="product-container">
            <div className="product-heading">
                <h5>Shop by categories</h5>
                <Button buttonText="view all" isFontAwesome={true} />
            </div>
            <CategoryListHome />
        </section>
    );
};

export default ShopByCategoryContainer;