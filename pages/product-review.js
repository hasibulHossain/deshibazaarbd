import React from "react";
import MainLayout from "../components/layouts/MainLayout";
import ProductReview from '../components/product-review/ProductReview';

function productReview() {
    return (
        <MainLayout pageTitle="Deshi Bazaar BD || Product Revew">
            <div className="container">
                <ProductReview />
            </div>
        </MainLayout>
    );
}

export default productReview;