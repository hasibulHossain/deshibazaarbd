import React from 'react';
import { translate } from '../../services/translation/translation';
import Button from '../master/Button/Button';
import Translate from '../translation/Translate';
import ShopList from './ShopList';
import Link from 'next/link';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const ShopContainer = () => {
    return (
        <section className="container product-container">
            <div className="product-heading">
                <h5>
                    <Translate>Shop by brands</Translate>
                </h5>
                {/* <Button buttonText={translate('View all')} isFontAwesome={true} /> */}
                <Link href={{ pathname: '/brands'}}>
                    <div className="custom-button-component pointer" >
                        View all
                        <FontAwesomeIcon className="ml-2" icon={faArrowRight} />
                    </div>
                </Link>
            </div>
            <ShopList />
        </section>
    );
};

export default ShopContainer;