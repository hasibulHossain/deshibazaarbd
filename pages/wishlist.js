import React from "react";
import ProtectedRoute from "../components/master/protectedRoute/ProtectedRoute";
// import { redirectRouter } from "../components/master/utils/RedirectRouterHelper";
// import ProductWishList from "";

import dynamic from 'next/dynamic'

const ProductWishList = dynamic(() => import('../components/Wishlist/ProductWishList'));

const wishlist = () => {

    // useEffect(() => {
    //     redirectRouter("wishlist");
    // }, []);

    return (
        <ProductWishList />
    );
}

export default ProtectedRoute(wishlist);
