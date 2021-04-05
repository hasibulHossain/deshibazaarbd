
import axios from 'axios';
import * as Types from './types';

export const getAddresses = (type = null) => async (dispatch) => {
    dispatch({ type: Types.LOADING_ADDRESS, payload: true });
    let url = `${process.env.NEXT_PUBLIC_API_URL}address?user_id=1&transaction_id=`;
    let dispatch_key = '';

    if( type !== null ) {
        url += `&type=${type}`;
        dispatch_key = ( type === 'billing_address' ) ? Types.GET_BILLING_ADDRESS : Types.GET_SHIPPING_ADDRESS;
    }

    axios.get(url)
        .then(res => {
            console.log(`address data`, res.data.data);
            dispatch({ type: Types.LOADING_ADDRESS, payload: false });
            if( type !== null ) {
                dispatch({ type: dispatch_key, payload: res.data.data });
            } else {
                const billing_addresses = res.data.data.filter(x => x.type === 'billing_address');
                dispatch({ type: Types.GET_BILLING_ADDRESS, payload: billing_addresses });

                const shipping_addresses = res.data.data.filter(x => x.type === 'shipping_address');
                dispatch({ type: Types.GET_SHIPPING_ADDRESS, payload: shipping_addresses });
            }
        }).catch(err => {
            dispatch({ type: Types.LOADING_ADDRESS, payload: false });
        })
};