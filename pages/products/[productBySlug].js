import React from "react";
import { useRouter } from 'next/router';
import MainLayout from "../../components/layouts/MainLayout";
import LoadingSkelleton from "../../components/master/skelleton/LoadingSkelleton";
import ProductDetailInfo from "../../components/product-detail/ProductDetailInfo"

export default function ProductBySlug({ product }) {
    const router  = useRouter();
    const loading = false;

    return (
        <>
            <MainLayout pageTitle={product.name}>
                <div className="container">
                    <>
                        <ProductDetailInfo product={product} />
                    </>
                    {
                        loading &&
                        <div className="mb-5">
                            {loading && (
                                <LoadingSkelleton
                                    alignment = "vertical"
                                    count     = {1}
                                    width     = {730}
                                    height    = {200}
                                />
                            )}
                        </div>
                    }
                </div>
            </MainLayout>
        </>
    );
}

export const getServerSideProps = async (context) => {
    const productBySlug = context.params.productBySlug
    const res           = await fetch(`get-item-detail/${productBySlug}`)
    const dataJSON      = await res.json();
    const data          = dataJSON.data;
    return {
        props: { product: data }
    }
}