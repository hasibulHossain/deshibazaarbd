import React from "react"
import { useRouter } from 'next/router'
import { useDispatch, useSelector } from "react-redux"
import MainLayout from "../../components/layouts/Layout"
import LoadingSkelleton from "../../components/master/skelleton/LoadingSkelleton";
import Head from 'next/head';
import MultipleProducts from "../../components/layouts/page/product/MultipleProducts";
import { Tab, Tabs } from "react-bootstrap";
import ShopProfile from "../../components/ShopProfile/ShopProfile";

export default function CategoryBySlug({ category }) {
    console.log(`category`, category)
    const router = useRouter();
    const loading = false;

    return (
        <>
            <Head>
                <title>
                    shop || Ecommerce
                </title>
            </Head>
            <MainLayout>

                {
                    loading &&
                    <div className="mb-5">
                        {loading && (
                            <LoadingSkelleton
                                alignment="vertical"
                                count={1}
                                width={730}
                                height={200}
                            />
                        )}
                    </div>
                }

                <div className="container-fluid mt-2">
                    <div className="container-fluid">
                        <div className="bg-light">
                            <div className="row p-2">
                                <div className="col-md-6">
                                    <div className="d-flex bg-white p-2">
                                        {
                                            category.logo_url !== null ? <img style={{ height: "50px" }} src={category.logo_url} alt="business logo" className="img-thumbnail" />
                                                : <i style={{ fontSize: "50px", height: "60px" }} class="fas fa-store img-thumbnail"></i>
                                        }

                                        <div className="m-2 ml-3">
                                            <h6>{category.name && category.name}</h6>
                                            <p>80% Positive Seller Ratings</p>
                                            {
                                                category.is_main_shop !== 0 && (
                                                    <p className="shopName"><span className="maccaf">Maccaf Mall</span> <span className="business">{category.name && category.name}</span></p>
                                                )
                                            }
                                        </div>
                                        <div className="shop-follower">
                                            <i class="fa fa-plus mr-2"></i>
                                            <i class="fas fa-store"></i>
                                            <p>FOLLOW</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/**Tabs */}
                            <div className="businessTab bg-white">
                                <Tabs defaultActiveKey="products" id="uncontrolled-tab-example">
                                    {/* <Tab eventKey="home" title="Home Page">
                                        <h2>Home Page</h2>
                                    </Tab> */}
                                    <Tab eventKey="products" title="All Products">
                                        <MultipleProducts category={category} />
                                    </Tab>
                                    <Tab eventKey="profile" title="Profile">
                                        <ShopProfile />
                                    </Tab>
                                </Tabs>
                            </div>
                        </div>
                    </div>
                </div>

            </MainLayout>
        </>
    );
}

export const getServerSideProps = async (context) => {
    const shopSlug = context.params.shopSlug;
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}business/${shopSlug}`);
    const dataJSON = await res.json();
    const data = dataJSON.data;

    return {
        props: {
            category: data,
            products: []
        }
    }
}