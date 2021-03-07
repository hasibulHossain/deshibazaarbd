import React from "react";
import Payment from "../components/layouts/page/payment/Payment";
import ProfileLayout from "../components/layouts/ProfileLayout";

export default function Home(props) {
  return (
    <>
      <ProfileLayout>
        <Payment />
      </ProfileLayout>
    </>
  );
}
