import React from "react";
import MainLayout from "../components/layouts/MainLayout";
// import ProductProfile from "../components/myprofile/ProductProfile";
import ProtectedRoute from "../components/master/protectedRoute/ProtectedRoute";

import dynamic from 'next/dynamic';
const ProductProfile = dynamic(() => import('../components/myprofile/ProductProfile'));

const profile = () => {
    return (
        <MainLayout pageTitle={`Profile Manage`}>
            <ProductProfile />
        </MainLayout>
    );
};

export default ProtectedRoute(profile);