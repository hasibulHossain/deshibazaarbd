import React from 'react';
import CategoryList from './CategoryList';
import Translate from '../translation/Translate';

const CategoryListContainer = (props) => {
    return (
        <section className="container product-container">
            <div className="product-heading">
                <h2>
                    <Translate>Shop by categories</Translate>
                </h2>
                {/* {
                    parentID !== 'all' && 
                    <Link href="/categories">
                        <a href="/categories">
                            <Button buttonText={translate('View all')} isFontAwesome={true} />
                        </a>
                    </Link>
                } */}
            </div>

            <CategoryList homeCategory={props.homeCategory} />
        </section>
    );
};

export default CategoryListContainer;