import React from 'react';
import CategoryFilter from './CategoryFilter';
import CategoryWishProductList from './CategoryWishProductList';

const CategoryWishProductContainer = () => {
    return (
        <section className="product-container">
            <div className="row">
                <div className="col-md-3">
                    <CategoryFilter />
                </div>
                <div className="col-md-9">
                    <CategoryWishProductList />
                </div>
            </div>
        </section>
    );
};

export default CategoryWishProductContainer;