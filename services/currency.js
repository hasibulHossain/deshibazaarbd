
/**
 * Get all currencies in this system
 * 
 * @since 1.0.0
 * 
 * @return array currencies as array
 */
export function getCurrencies () {
    const currencies = [
        {
            'code'     : 'USD',
            'sign'     : '$',
            'flag_link': '/images/languages/usa.png',
            'active'   : false
        },
        {
            'code'     : 'BDT',
            'sign'     : '৳',
            'flag_link': '/images/languages/bn.png',
            'active'   : true
        }
    ];

    return currencies;
}

/**
 * Get active currency
 * 
 * @since 1.0.0
 * 
 * @param string printableLabel the params of currencies array
 * 
 * @return string|null|object active currency data
 */
export function activeCurrency ( printableLabel = '' ) {
    let activeCurrency     = null;
    const currencies       = getCurrencies();
    const activeCurrencies = currencies.filter(cur => cur.active === true);

    if ( typeof activeCurrencies !== 'undefined' && activeCurrencies !== null && activeCurrencies.length > 0 ) {
        activeCurrency = activeCurrencies[0];
    }

    if ( printableLabel === '' || printableLabel === null || activeCurrency === null ) return activeCurrency;

    return activeCurrency[printableLabel] || '';
}

/**
 * Format Currency amount to nice formatting
 * 
 * @since 1.0.0
 * 
 * @param float amount 
 * @param string thousandSeparator 
 * @param string prefix by default it would be the sign of taka
 * 
 * @return string Currency format component with data
 */
export function formatCurrency (amount, thousandSeparator = true, prefix = activeCurrency('sign')) {
    var CurrencyFormat = require('react-currency-format');

    return <CurrencyFormat value={amount} displayType={'text'} thousandSeparator={thousandSeparator} prefix={prefix} />;
}