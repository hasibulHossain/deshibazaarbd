// import React, { useEffect } from "react";
// import MainLayout from "../components/layouts/MainLayout";
// import Head from "next/head";
// import ProductProfile from "../components/myprofile/ProductProfile";
// import { useDispatch, useSelector } from "react-redux";
// import { getUserDataAction } from "../components/_redux/getUserData/Action/UserDataAction";
// import { useRouter } from "next/router";

// export default function profile(props) {

//     const router    = useRouter();
// 	const dispatch     = useDispatch();
// 	const { userData } = useSelector((state) => state.UserDataReducer);

//     useEffect(() => {

//         if (typeof window === "undefined") {
//             global.window = {};
//         }

//     }, []);

//     return (
//         <>
//             <Head>
//                 <title>
//                     Deshi Bazaar BD || Sign In
//                 </title>
//                 <meta name="description" content="Meta" />
//             </Head>
//             <MainLayout>
//                 <ProductProfile />
//             </MainLayout>
//         </>
//     );
// }

import React, { useEffect } from "react";
import MainLayout from "../components/layouts/MainLayout";
import Head from "next/head";
import ProductProfile from "../components/myprofile/ProductProfile";
import ProtectedRoute from "../components/master/protectedRoute/ProtectedRoute";

const profile = () => {

    return (
        <MainLayout pageTitle={`Profile Manage`}>
            <ProductProfile />
        </MainLayout>
    );
};

export default ProtectedRoute(profile);