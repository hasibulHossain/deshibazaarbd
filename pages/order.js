import React from "react";
import MainLayout from "../components/layouts/MainLayout";
import ProfileSideBar from "../components/myprofile/ProfileSideBar";
import OrderList from "../components/orders/OrderList";

export default function Order() {

    return (
        <MainLayout pageTitle="Order">
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <ProfileSideBar />
                    </div>
                    <div className="col-md-9">
                        {/** user order list here */}
                        <OrderList />
                    </div>
                </div>
            </div>
        </MainLayout>
    );
}
