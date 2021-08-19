import React from 'react';
import { formatCurrency } from '../../../services/currency';

const PriceCalculation = ({ item }) => {
    const { is_offer_enable, offer_selling_price, default_selling_price } = item;

    const selling_price    = ( typeof default_selling_price !== 'undefined' && default_selling_price !== null ) ? default_selling_price : 0;
    const default_price    = ( is_offer_enable && offer_selling_price !== 0 ) ? offer_selling_price: selling_price;
    const offer_price      = ( is_offer_enable && offer_selling_price !== 0 ) ? offer_selling_price: 0;
    const discount_percent = parseInt( ( ( selling_price - offer_price ) * 100 ) / selling_price );

    return ( 
        <div className="price-area">
            <p className="active-price">
                { formatCurrency(default_price) }
            </p>

            {
                (offer_price !== 0 && offer_price !== null && ! Number.isNaN(discount_percent) ) && 
                <p className="inactive-price">
                    <del>{ formatCurrency(selling_price) } </del>
                    &nbsp;
                    <span className="discount-percent">
                        {discount_percent}%
                    </span>
                </p>
            }
        </div>
    );
}

export default PriceCalculation;