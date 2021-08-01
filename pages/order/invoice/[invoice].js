import { useRouter } from "next/router";
import React from "react";
import MainLayout from "../../../components/layouts/MainLayout";
import OrderSuccess from "../../../components/orders/OrderSuccess";

export default function invoice() {
    const router = useRouter();
    const { invoice } = router.query

    return (
        <MainLayout pageTitle="Invoice">
            <div className="container" id="order-success-page">
                <OrderSuccess invoice={invoice} />
            </div>
        </MainLayout>
    );
}