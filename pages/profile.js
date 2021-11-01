import React from "react";
// import ProductProfile from "../components/myprofile/ProductProfile";
// import ProtectedRoute from "../components/master/protectedRoute/ProtectedRoute";

import dynamic from 'next/dynamic';
import withProtectedRoute from "../components/master/hoc/withProtectedRoute";
const ProductProfile = dynamic(() => import('../components/myprofile/ProductProfile'));

const profile = () => {
    return (
        <ProductProfile />
    );
};

// export default ProtectedRoute(profile);
export default withProtectedRoute(profile);