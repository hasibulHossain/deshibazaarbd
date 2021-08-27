import React from 'react';
import MainLayout from '../components/layouts/MainLayout';
import BrandListFullContainer from '../components/Shop/BrandListFullContainer';

function Brands() {
    return (
            <MainLayout pageTitle="Brands" >
                <div className="container">
                    <div className="row my-3 pl-1 pl-sm-2">
                        <h4>
                            All brands
                        </h4>
                    </div>
                    <BrandListFullContainer />
                </div>
            </MainLayout>
    )
}

export default Brands;
