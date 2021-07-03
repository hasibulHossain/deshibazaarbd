import React from 'react';
import Button from '../master/Button/Button';
import CategoryList from './CategoryList';

const CategoryListContainer = () => {
    return (
        <section className="product-container">
            <div className="product-heading">
                <h5>Shop by categories</h5>
                <Button buttonText="view all" isFontAwesome={true} />
            </div>

            <CategoryList parentID={null} />
        </section>
    );
};

export default CategoryListContainer;