import React from "react";
// import ProductProfile from "../components/myprofile/ProductProfile";
import ProtectedRoute from "../components/master/protectedRoute/ProtectedRoute";

import dynamic from 'next/dynamic';
const ProductProfile = dynamic(() => import('../components/myprofile/ProductProfile'));

const profile = () => {
    return (
        <ProductProfile />
    );
};

export default ProtectedRoute(profile);