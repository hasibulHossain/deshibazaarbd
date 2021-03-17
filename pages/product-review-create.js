import React from 'react';
import ProductReviewCreate from '../components/layouts/page/productdetails/ProductReviewCreate';
import ProfileLayout from "../components/layouts/ProfileLayout";
import { withRouter } from 'next/router';

const product_review_create = ({query}) => {
    // const object = JSON.parse(query.item);

    console.log(`object`, query)
    return (
        <>
            <ProfileLayout>
                <ProductReviewCreate />
            </ProfileLayout>

        </>
    );
};

export default product_review_create;