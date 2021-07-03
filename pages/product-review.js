import React from "react";
import MainLayout from "../components/layouts/MainLayout";
import Head from "next/head";
import ProductReview from '../components/ProductReview/ProductReview';

function productReview() {
    return (
        <>
            <Head>
                <title>
                    Deshi Bazaar BD || Sign In
                </title>
                <meta name="description" content="Meta" />
            </Head>
            <MainLayout>
                <ProductReview />
            </MainLayout>
        </>
    );
}

export default productReview;