import React, { useEffect } from "react";
import MainLayout from "../components/layouts/MainLayout";
import Head from "next/head";
import ProductProfile from "../components/myprofile/ProductProfile";
import { redirectRouter } from "../components/master/utils/RedirectRouterHelper";
import ProtectedRoute from "../components/master/protectedRoute/ProtectedRoute";
// import ProtectedRoute from "../components/master/protectedRoute/ProtectedRoute";

const profile = () => {

    // useEffect(() => {
    //     redirectRouter("profile");
    // }, []);

    return (
        <MainLayout pageTitle={`Profile Manage`}>
            <ProductProfile />
        </MainLayout>
    );
};

export default ProtectedRoute(profile);