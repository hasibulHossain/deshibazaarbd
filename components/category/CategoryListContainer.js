import React from 'react';
import Link from 'next/link';
import Button from '../master/Button/Button';
import CategoryList from './CategoryList';
import Translate from '../translation/Translate';
import { translate } from '../../services/translation/translation';

const CategoryListContainer = ({ parentID = null }) => {
    return (
        <section className="container product-container">
            <div className="product-heading">
                <h5>
                    <Translate>Shop by categories</Translate>
                </h5>
                {
                    parentID !== 'all' && 
                    <Link href="/categories">
                        <a href="/categories">
                            <Button buttonText={translate('View all')} isFontAwesome={true} />
                        </a>
                    </Link>
                }
            </div>

            <CategoryList parentID={parentID} />
        </section>
    );
};

export default CategoryListContainer;