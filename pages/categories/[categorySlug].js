import React from "react"
import { useRouter } from 'next/router'
import { useDispatch, useSelector } from "react-redux"
import MainLayout from "../../components/layouts/Layout"
import LoadingSkelleton from "./../../components/master/skelleton/LoadingSkelleton";
import Head from 'next/head';
import MultipleProducts from "../../components/layouts/page/product/MultipleProducts";
import ChildCategory from "../../components/ChildCategory/ChildCategory";

export default function CategoryBySlug({ category }) {
    console.log(`category`, category)
    const router = useRouter();
    const loading = false;
    const childCategoryData = [
        {
            title: "Samsung",
        },
        {
            title: "Sony",
        },
        {
            title: "iPhone",
        },
        {
            title: "Smart Winer",
        },
        {
            title: "Apple",
        },
        {
            title: "Nokia",
        },
    ]
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
                        <div className="row shadow-sm mb-2 bg-body rounded">
                            <ChildCategory childCategoryData={childCategoryData} />
                        </div>
                        <h4>Category - {category.name}</h4>
                    </div>
                    <MultipleProducts category={category} />
                </div>

            </MainLayout>
        </>
    );
}

export const getServerSideProps = async (context) => {
    const categorySlug = context.params.categorySlug;
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}categories/${categorySlug}`);
    const dataJSON = await res.json();
    const data = dataJSON.data;

    return {
        props: {
            category: data,
            products: []
        }
    }
}