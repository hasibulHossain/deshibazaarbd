import React from 'react';
import ProtectedRoute from '../components/master/protectedRoute/ProtectedRoute';
import MainLayout from "../components/layouts/MainLayout";
// import ProfileAccountSetting from "../components/ProfileAccountSetting/ProfileAccountSetting";

import dynamic from 'next/dynamic';
const ProfileAccountSetting = dynamic(() => import('../components/ProfileAccountSetting/ProfileAccountSetting'));

const AccountSetting = () => {
  return (
      <MainLayout pageTitle="Dashboard">
        <ProfileAccountSetting />
      </MainLayout>
  );
};

export default ProtectedRoute(AccountSetting);
