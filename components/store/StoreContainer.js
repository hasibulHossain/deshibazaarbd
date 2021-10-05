import React from 'react';
import { translate } from '../../services/translation/translation';
import Button from '../master/Button/Button';
import Translate from '../translation/Translate';
import StoreList from './StoreList';
import Link from 'next/link';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const StoreContainer = () => {
    return (
        <section className="container product-container">
            <div className="product-heading">
                <h2>
                    <Translate>Shop by stores</Translate>
                </h2>
                {/* <Button buttonText={translate('View all')} isFontAwesome={true} /> */}
                <Link href={{ pathname: '/stores'}}>
                    <div className="custom-button-component pointer " >
                        View all
                        <FontAwesomeIcon className="ml-2" icon={faArrowRight} />
                    </div>
                </Link>
            </div>
            <StoreList />
        </section>
    );
};

export default StoreContainer;