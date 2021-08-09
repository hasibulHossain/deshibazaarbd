import React from "react";
import MainLayout from "../components/layouts/MainLayout";
import ProductWishList from "../components/Wishlist/ProductWishList";

export default function wishlist() {
    return (
        <MainLayout pageTitle="Wish List">
            <ProductWishList />
        </MainLayout>
    );
}
