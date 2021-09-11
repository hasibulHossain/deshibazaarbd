import React from "react";
import MainLayout from "../components/layouts/MainLayout";
// import PaymentMethod from '../components/PaymentMethod/PaymentMethod'

import dynamic from 'next/dynamic';
const PaymentMethod = dynamic(() => import('../components/PaymentMethod/PaymentMethod'));

export default function paymentSystem() {
  return (
    <>
      <MainLayout pageTitle="payment">
        <PaymentMethod />
      </MainLayout>
    </>
  );
}
