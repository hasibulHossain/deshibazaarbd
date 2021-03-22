import React, { useEffect, useState } from "react"
import { useRouter } from 'next/router'
import { useDispatch, useSelector } from "react-redux"
import MainLayout from "../../components/layouts/Layout"
import HomeFeaturList from "../../components/layouts/page/home/HomeFeaturList"
import ProductDetailInfo from "../../components/layouts/page/productdetails/ProductDetailInfo"
import ProductDetailsDescrition from "../../components/layouts/page/productdetails/ProductDetailsDescrition"
import ProductRatings from "../../components/layouts/page/productdetails/ProductRatings"
import LoadingSkelleton from "./../../components/master/skelleton/LoadingSkelleton";
import Head from 'next/head'

export default function ProductBySlug({ product }) {
    const router = useRouter();
    const loading = false;

    return (
        <>
            <Head>
                <title>
                    {product.name} || Ecommerce
                </title>
            </Head>
            <MainLayout>
                <>
                    <ProductDetailInfo product={product} />
                </>
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

            </MainLayout>
        </>
    );
}

export const getServerSideProps = async (context) => {
    const categorySlug = context.params.categorySlug;
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}get-item-detail/${categorySlug}`);
    const dataJSON = await res.json();
    const data = dataJSON.data;

    return {
        props: {
            category: null,
            products: data 
        }
    }
}