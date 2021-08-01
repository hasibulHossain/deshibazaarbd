import React from 'react';
import { translate } from '../../services/translation/translation';
import Button from '../master/Button/Button';
import Translate from '../translation/Translate';
import ShopList from './ShopList';

const ShopContainer = () => {
    return (
        <section className="product-container">
            <div className="product-heading">
                <h5>
                    <Translate>Shop by brands</Translate>
                </h5>
                <Button buttonText={translate('View all')} isFontAwesome={true} />
            </div>
            <ShopList />
        </section>
    );
};

export default ShopContainer;