import React from 'react';
import MainLayout from '../../components/layouts/MainLayout';
// import ResetPassword from '../../components/forget-password/ResetPassword';


import dynamic from 'next/dynamic';
const ResetPassword = dynamic(() => import('../../components/forget-password/ResetPassword'));

export default function ResetPasswordPage() { 
    return (
        <MainLayout pageTitle="Reset Password" >
            <ResetPassword />
        </MainLayout>
    )
}