import React from 'react';
import ProtectedRoute from '../components/master/protectedRoute/ProtectedRoute';
// import ProfileAccountSetting from "../components/ProfileAccountSetting/ProfileAccountSetting";

import dynamic from 'next/dynamic';
const ProfileAccountSetting = dynamic(() => import('../components/ProfileAccountSetting/ProfileAccountSetting'));

const AccountSetting = () => {
  return (
        <ProfileAccountSetting />
  );
};

export default ProtectedRoute(AccountSetting);
