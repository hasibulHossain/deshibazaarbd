import React from "react";
import MainLayout from "../../components/layouts/MainLayout";
import ProfileSideBar from "../../components/myprofile/ProfileSideBar";
import OrderDetails from "../../components/orders/OrderDetails";
import router from "next/router"
import { useDispatch } from "react-redux";
import axios from "axios";
export default function ManageOrder({ order }) {

    return (
        <MainLayout pageTitle="Manage-order">
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <ProfileSideBar />
                    </div>
                    <div className="col-md-9">
                        <OrderDetails />
                    </div>
                </div>
            </div>
        </MainLayout>
    );
}

export const getServerSideProps = async (context) => {
    const orderID = context.params.manageOrder;
    let data = {};
    // if (process.browser) {
    //     const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}sales/${orderID}`);
    //     const dataJSON = await res.json();
    //     data = dataJSON.data;
    // }

    return {
        props: {
            order: data,
        }
    }
}