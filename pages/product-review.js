import React from "react";
import MainLayout from "../components/layouts/MainLayout";
import ProtectedRoute from "../components/master/protectedRoute/ProtectedRoute";
// import ProductReview from '../components/product-review/ProductReview';


import dynamic from 'next/dynamic';
const ProductReview = dynamic(() => import('../components/product-review/ProductReview'));

function productReview() {
    return (
        <MainLayout pageTitle="Product Review">
            <div className="container">
                <ProductReview />
            </div>
        </MainLayout>
    );
}

export default ProtectedRoute(productReview);