import React, { useEffect } from "react";
import MainLayout from "../../components/layouts/MainLayout";
import ProductNoFound from "../../components/master/productNoFound/ProductNoFound";
import LoadingSkelleton from "../../components/master/skelleton/LoadingSkelleton";
import ProductDetailInfo from "../../components/product-detail/ProductDetailInfo";

export default function ProductBySlug({ product }) {
    return (
        <>
            <MainLayout pageTitle={product !== "undefined" && product !== null ? product.name : "Not found"}>
                <div className="container">
                    {
                        product !== "undefined" && product !== null ?
                            <ProductDetailInfo product={product} /> :
                            <ProductNoFound
                                title="Product details no found !"
                                description="We're sorry. We cannot find this product details at this moment."
                            />
                    }
                </div>
            </MainLayout>
        </>
    );
}

export const getServerSideProps = async (context) => {
    const productBySlug = context.params.productBySlug;
    const uri = encodeURI(`${process.env.NEXT_PUBLIC_API_URL}get-item-detail/${productBySlug}`);
    // Don't delete the base api_url from here.
    const res = await fetch(uri);

    const dataJSON = await res.json();
    const data = dataJSON.data;
    return {
        props: { product: data }
    }
}