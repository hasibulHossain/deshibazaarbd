import React from "react";
import MainLayout from "../../components/layouts/MainLayout";
import OrderSuccess from "../../components/orders/OrderSuccess";

export default function CheckoutSuccess() {
    return (
        <MainLayout pageTitle="Order Successfull">
            <div className="container" id="order-success-page">
                <OrderSuccess />
            </div>
        </MainLayout>
    );
}