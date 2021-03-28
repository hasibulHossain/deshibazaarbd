import React, { useEffect } from 'react';
import Head from "next/head";
import MainLayout from '../components/layouts/Layout';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBrands } from '../store/redux/brands/actions/BrandAction';
import LoadingSkelleton from '../components/master/skelleton/LoadingSkelleton';
import Link from 'next/link';

const giftcard = () => {
    const dispatch = useDispatch();
    const loading = useSelector((state) => state.brand.loading);
    const brands = useSelector((state) => state.brand.brands);
  
    useEffect(() => {
      dispatch(fetchBrands());
    }, []);
    return (
        <>
            <Head>
                <title>
                    Brands || Ecommerce
                </title>
                <meta name="description" content="All Products | Ecommerce Store" />
            </Head>

            <MainLayout>
                <div className="HomeBrand bp">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="sectionTitle">
                                    <h2>Shop by Brand</h2>
                                </div>
                            </div>
                        </div>

                        {loading && (
                            <LoadingSkelleton
                                alignment="vertical"
                                count={3}
                                width={330}
                                height={100}
                            />
                        )}

                        <div className="row pt">
                            {!loading && brands.map.length === 0 && (
                                <div>No Brand Found !!</div>
                            )}

                            {brands.map.length > 0 && (
                                <>
                                    {brands.map((brand, index) => (
                                        <Link href={`/brand/${brand.slug}`}>
                                            <div className="col-xl-4" key={index}>
                                                <div className="singleBrandBox">
                                                    <div className="brandImg">
                                                        <img
                                                            src={`${process.env.NEXT_PUBLIC_URL}images/brands/${brand.image}`}
                                                            alt=""
                                                        />
                                                    </div>
                                                    <div className="brandTitle">
                                                        <h3>{brand.name}</h3>
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                    ))}
                                </>
                            )}

                        </div>

                    </div>
                </div>
            </MainLayout>
        </>
    );
};

export default giftcard;