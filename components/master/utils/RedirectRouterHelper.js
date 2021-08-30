/**
/**
 * Redirect Router 
 * 
 * @param string redirectTo //current page name
 * 
 * @return redirectRouter;
 */

import router from "next/router";
import { showToast } from "../Helper/ToastHelper";

export const redirectRouter = (redirectTo) => {
    if (process.browser) {
        const userData = localStorage.getItem('loginData');
        if (typeof userData === 'undefined' || userData === null) {
            showToast('error', 'Please Login First!');
            localStorage.setItem("redirectTo", (redirectTo))
            router.push('/login');
        }
    }
}