import React from "react";
import CheckoutPayment from "../components/layouts/page/CheckoutPayment/CheckoutPayment";
import ProfileLayout from "../components/layouts/ProfileLayout";

export default function Home(props) {

  return (
    <>
      <ProfileLayout>
        <CheckoutPayment />
      </ProfileLayout>
    </>
  );
}
