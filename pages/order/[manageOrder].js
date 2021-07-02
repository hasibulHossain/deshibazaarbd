import React from "react";
import MainLayout from "../../components/layouts/MainLayout";
import ProfileSideBar from "../../components/myprofile/ProfileSideBar";
import OrderDetails from "../../components/myOrder/OrderDetails";

export default function ManageOrder({ order }) {

    return (
        <MainLayout pageTitle="Manage-order">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-3">
                        <ProfileSideBar />
                    </div>
                    <div className="col-md-9">
                        <OrderDetails order={order} />
                    </div>
                </div>
            </div>
        </MainLayout>
    );
}

export const getServerSideProps = async (context) => {
    const orderID  = context.params.manageOrder;
    const res      = await fetch(`${process.env.NEXT_PUBLIC_API_URL}sales/${orderID}`);
    const dataJSON = await res.json();
    const data     = dataJSON.data;

    return {
        props: {
            order: data,
        }
    }
}