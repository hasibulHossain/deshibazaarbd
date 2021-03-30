import React from "react"
import { useRouter } from 'next/router'
import { useDispatch, useSelector } from "react-redux"
import MainLayout from "../../components/layouts/Layout"
import LoadingSkelleton from "./../../components/master/skelleton/LoadingSkelleton";
import Head from 'next/head';
import MultipleProducts from "../../components/layouts/page/product/MultipleProducts";
import ChildCategory from "../../components/ChildCategory/ChildCategory";

export default function CategoryBySlug({ category }) {
    const router = useRouter();
    const loading = false;
  
    return (
        <>
            <Head>
                <title>
                    {category.name} Category || Ecommerce
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
                        <div className="row m-2">
                            <ChildCategory category={category} />
                        </div>
                        <div className="row m-1">
                            <div className="col-md-2">
                                <p>Related Category</p>
                                {/* <h6>Mobile</h6> */}
                                <hr />
                            </div>
                            <div className="col-md-4">
                                <h4 className="mt-3"> {category && category.name && category.name}</h4>
                                <small>{category.count_products} item{ category.count_products > 1 ? 's' : ''} found in {category && category.name && category.name} Category</small>
                            </div>
                        </div>

                    </div>
                    <MultipleProducts cat={category} />
                </div>

            </MainLayout>
        </>
    );
}

export const getServerSideProps = async (context) => {
    const categorySlug = context.params.categorySlug;
    console.log(`categorySlug`, categorySlug)
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}categories/${categorySlug}?count_products=1`);
    const dataJSON = await res.json();
    const data = dataJSON.data;

    return {
        props: {
            category: data,
            products: []
        }
    }
}