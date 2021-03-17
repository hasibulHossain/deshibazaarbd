import React from 'react';
import ProductReviewCreate from '../components/layouts/page/productdetails/ProductReviewCreate';
import ProfileLayout from "../components/layouts/ProfileLayout";

const product_review_create = () => {
    return (
        <>
            <ProfileLayout>
                <ProductReviewCreate />
            </ProfileLayout>

        </>
    );
};

export default product_review_create;