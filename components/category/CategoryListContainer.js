import React from 'react';
import Link from 'next/link';
import Button from '../master/Button/Button';
import CategoryList from './CategoryList';

const CategoryListContainer = ({ parentID = null }) => {
    return (
        <section className="product-container">
            <div className="product-heading">
                <h5>Shop by categories</h5>
                {
                    parentID !== 'all' && 
                    <Link href="/categories">
                        <a href="/categories">
                            <Button buttonText="View All" isFontAwesome={true} />
                        </a>
                    </Link>
                }
            </div>

            <CategoryList parentID={parentID} />
        </section>
    );
};

export default CategoryListContainer;