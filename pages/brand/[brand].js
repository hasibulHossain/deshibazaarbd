import React from "react"
import { useRouter } from 'next/router'
import MainLayout from "../../components/layouts/Layout"
import LoadingSkelleton from "../../components/master/skelleton/LoadingSkelleton";
import Head from 'next/head';
import MultipleProducts from "../../components/layouts/page/product/MultipleProducts";

export default function brandBySlug({ brand }) {
    const loading = false;
    return (
        <>
            <Head>
                <title>
                    {brand.name} Brand || Ecommerce
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

                        <div className="row m-1">
                            <div className="col-md-2">
                                <p>Related Brands</p>
                                {/* <h6>Apple</h6> */}
                                <hr />
                            </div>
                            <div className="col-md-4">
                                <h4 className="mt-3"> {brand && brand.name && brand.name}</h4>
                                <small>{brand.count_products} item{ brand.count_products > 1 ? 's' : ''} found in {brand && brand.name && brand.name} Brand</small>
                            </div>
                        </div>

                    </div>
                    <MultipleProducts brand={brand} />
                </div>

            </MainLayout>
        </>
    );
}

export const getServerSideProps = async (context) => {
    const brand = context.params.brand;
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}brands/${brand}?count_products=1`);
    const dataJSON = await res.json();
    const data = dataJSON.data;

    return {
        props: {
            brand: data,
            products: []
        }
    }
}