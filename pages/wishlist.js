import React, { useEffect } from "react";
import MainLayout from "../components/layouts/MainLayout";
import ProductWishList from "../components/Wishlist/ProductWishList";

export default function wishlist() {

    useEffect(() => {
        if (typeof window === "undefined") {
            global.window = {};
        }
    }, []);

    return (
        <MainLayout pageTitle="Wish List">
            <ProductWishList />
        </MainLayout>
    );
}
