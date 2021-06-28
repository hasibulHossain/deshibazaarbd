import React from "react";
import MainLayout from "../components/layouts/MainLayout";
import ProfileSideBar from "../components/myprofile/ProfileSideBar";
import MyOrder from '../components/myOrder/MyOrder'
export default function Order() {
    return (
        <MainLayout pageTitle="Order">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-3">
                        <ProfileSideBar />
                    </div>
                    <div className="col-md-9">
                        {/** user order list here */}
                        <MyOrder />
                    </div>
                </div>
            </div>
        </MainLayout>
    );
}
