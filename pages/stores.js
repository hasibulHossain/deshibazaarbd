import React from 'react';
import dynamic from 'next/dynamic'

import MainLayout from '../components/layouts/MainLayout';
// import StoreFilter from '../components/store/StoreFilter';
// import StoreListFull from '../components/store/StoreListFull';

const StoreFilter = dynamic(() => import('../components/store/StoreFilter'))
const StoreListFull = dynamic(() => import('../components/store/StoreListFull'))

function Stores() {
    return (
            <MainLayout pageTitle="stores" >
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <StoreFilter />
                        </div>
                        <div className="col-md-9">
                            <StoreListFull />
                        </div>
                    </div>
                </div>
            </MainLayout>
    )
}

export default Stores
