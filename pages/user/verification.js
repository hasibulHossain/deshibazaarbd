import React from 'react'
// import UserVerification from '../../components/forget-password/UserVerification';
import MainLayout from '../../components/layouts/MainLayout';

import dynamic from 'next/dynamic';
const UserVerification = dynamic(() => import('../../components/forget-password/UserVerification'));

export default function Verification() { 
    return (
        <MainLayout pageTitle="User Verification" >
            <UserVerification />
        </MainLayout>
    )
}