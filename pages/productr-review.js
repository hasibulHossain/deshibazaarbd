import React, { Component, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductReview from "../components/layouts/page/productdetails/ProductReview";
import ProfileLayout from "../components/layouts/ProfileLayout";

const Productr_Review = ({ router }, props) => {
    const dispatch = useDispatch()

    return (
        <>
            <ProfileLayout>
                <ProductReview />
            </ProfileLayout>
           
        </>
    );
};

export default Productr_Review;