import { useRouter } from "next/router";
import React from "react";
import MainLayout from "../../../components/layouts/MainLayout";
import OrderInvoice from "../../../components/orders/OrderInvoice";
import { translate } from "../../../services/translation/translation";

export default function invoice() {
    const router      = useRouter();
    const { invoice } = router.query

    return (
        <MainLayout pageTitle={`Invoice #${invoice}`}>
            <div className="container" id="order-success-page">
                <OrderInvoice title={translate('Invoice')} id={invoice} is_invoice={true} />
            </div>
        </MainLayout>
    );
}