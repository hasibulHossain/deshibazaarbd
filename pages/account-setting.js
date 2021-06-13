import React from "react";
import MainLayout from "../components/layouts/MainLayout";
import Head from "next/head";
import ProfileAccountSetting from "../components/ProfileAccountSetting/ProfileAccountSetting";

export default function Home(props) {
  return (
    <>
      <Head>
        <title>
          Deshi Bazaar BD || Profile
        </title>
        <meta name="description" content="Meta" />
      </Head>
      <MainLayout>
        <ProfileAccountSetting />
      </MainLayout>
    </>
  );
}
