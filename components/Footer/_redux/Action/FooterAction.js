import * as Types from "../Types/Types";
import Axios from "axios"

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