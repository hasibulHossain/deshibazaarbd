import React from 'react'
import ResetPassword from '../../components/forget-password/ResetPassword'
import MainLayout from '../../components/layouts/MainLayout'

export default function ResetPasswordPage() { 
    return (
        <MainLayout pageTitle="Reset Password" >
            <ResetPassword />
        </MainLayout>
    )
}