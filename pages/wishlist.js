import React, { useEffect } from "react";
import MainLayout from "../components/layouts/MainLayout";
import ProtectedRoute from "../components/master/protectedRoute/ProtectedRoute";
import { redirectRouter } from "../components/master/utils/RedirectRouterHelper";
import ProductWishList from "../components/Wishlist/ProductWishList";

const wishlist = () => {

    // useEffect(() => {
    //     redirectRouter("wishlist");
    // }, []);

    return (
        <MainLayout pageTitle="Wish List">
            <ProductWishList />
        </MainLayout>
    );
}

export default ProtectedRoute(wishlist);
