import React from 'react'
// import ForgetPassword from '../../components/forget-password/ForgetPassword'
import MainLayout from '../../components/layouts/MainLayout'

import dynamic from 'next/dynamic';
const ForgetPassword = dynamic(() => import('../../components/forget-password/ForgetPassword'));

export default function ForgetPasswordPage() { 
    return (
        <MainLayout pageTitle="Forget Password">
            <ForgetPassword />
        </MainLayout>
    )
}

