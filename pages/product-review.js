import React from "react";
import MainLayout from "../components/layouts/MainLayout";
import Head from "next/head";
import ProductReview from '../components/product-review/ProductReview';

function productReview() {
    return (
            <MainLayout pageTitle="Deshi Bazaar BD || Sign In">
                <ProductReview />
            </MainLayout>
    );
}

export default productReview;