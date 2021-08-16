import React from 'react';
import { translate } from '../../services/translation/translation';
import Button from '../master/Button/Button';
import Translate from '../translation/Translate';
import StoreList from './StoreList';

const StoreContainer = () => {
    return (
        <section className="container product-container">
            <div className="product-heading">
                <h5>
                    <Translate>Shop by stores</Translate>
                </h5>
                <Button buttonText={translate('View all')} isFontAwesome={true} />
            </div>
            <StoreList />
        </section>
    );
};

export default StoreContainer;