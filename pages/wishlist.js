import React, { useEffect } from "react";
import MainLayout from "../components/layouts/MainLayout";
import Head from "next/head";
import ProductWishList from "../components/Wishlist/ProductWishList";

export default function wishlist(props) {
    useEffect(() => {
        if (typeof window === "undefined") {
            global.window = {};
        }
    }, []);
    return (
        <>
            <Head>
                <title>
                    Deshi Bazaar BD || Wishlist
                </title>
                <meta name="description" content="Meta" />
            </Head>
            <MainLayout>
                <ProductWishList />
            </MainLayout>
        </>
    );
}
