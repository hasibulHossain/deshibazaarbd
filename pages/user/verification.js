import React from 'react'
import UserVerification from '../../components/forget-password/UserVerification'
import MainLayout from '../../components/layouts/MainLayout'

export default function Verification() { 
    return (
        <MainLayout pageTitle="User Verification" >
            <UserVerification />
        </MainLayout>
    )
}