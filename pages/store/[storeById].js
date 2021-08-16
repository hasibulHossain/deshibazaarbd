import React from 'react'
import MainLayout from '../../components/layouts/MainLayout'
import StoreInfoContainer from '../../components/store-info/StoreInfoContainer';

function StoreById() {
    return (
        <MainLayout pageTitle='store information'>
            <StoreInfoContainer />
        </MainLayout>
    )
}

export default StoreById
