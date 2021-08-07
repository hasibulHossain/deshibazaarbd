import * as Types from "../Types/Types";
import Axios from "axios";
import { showToast } from "../../../master/Helper/ToastHelper";

const baseUrl = `${process.env.NEXT_PUBLIC_API_URL}`;

export const getFooterInformation = () => (dispatch) => {
    const data         = [
        {
            footerTitle: "Information",
            footerArray: [
                { title: "Shipping Method", linkID  : "shipping-method" },
                { title: "Privacy Policy", linkID   : "privacy-policy" },
                { title: "Terms & Condition", linkID: "terms-&-condition" },
                { title: "FAQ", linkID              : "faq" },
                { title: "How It's Work", linkID    : "how-it's-work" },
            ]
        },
        {
            footerTitle: "customer care",
            footerArray: [
                { title: "About us", linkID         : "about-us" },
                { title: "Contact", linkID          : "contact" },
                { title: "Shop", linkID             : "shop" },
                { title: "Blog", linkID             : "blog" },
                { title: "Product Support", linkID  : "product-support" },
            ]
        },
        {
            footerTitle: "my account",
            footerArray: [
                { title: "My Account", linkID       : "my-account" },
                { title: "Order Tracking", linkID   : "order-tracking" },
                { title: "Wishlist", linkID         : "wishlist" },
                { title: "Affiliate", linkID        : "affiliate" },
            ]
        },
    ]
    dispatch({ type: Types.GET_FOOTER_INFORMATION_DATA, payload: data })
}

/**
 * subscribe to newsletter
 * 
 * since 1.0.0
 * 
 * @param email
 * 
 */

export const subscribeNewsletter = email => async dispatch => {
    let response = {
        loading: true
    }

    const url = baseUrl + "subscriber/subscribe";
    const data = {
        email: email
    }
    
    try {
        dispatch({type: Types.POST_SUBSCRIBE_NEWSLETTER, payload: response})
        response.loading = false;
        const res = await Axios.post(url, data);
        dispatch({type: Types.POST_SUBSCRIBE_NEWSLETTER, payload: response})
        showToast('success', res.data.message);
    } catch (err) {
        const message = JSON.parse(err.request.response).message;
        response.loading = false;
        dispatch({type: Types.POST_SUBSCRIBE_NEWSLETTER, payload: response})
        showToast('error', message);
    }
}