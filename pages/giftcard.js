import React from 'react';
import Head from "next/head";
import MainLayout from '../components/layouts/Layout';
import GiftCardList from '../components/GiftCardList/GiftCardList';

const giftcard = () => {
    return (
        <>
            <Head>
                <title>
                    All Products | Gift Card
                </title>
                <meta name="description" content="All Products | Ecommerce Store" />
            </Head>

            <MainLayout>
                <GiftCardList />
            </MainLayout>
        </>
    );
};

export default giftcard;