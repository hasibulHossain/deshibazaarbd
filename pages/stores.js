import React from 'react';
import dynamic from 'next/dynamic'

// import StoreFilter from '../components/store/StoreFilter';
// import StoreListFull from '../components/store/StoreListFull';

const StoreFilter = dynamic(() => import('../components/store/StoreFilter'), {ssr: false})
const StoreListFull = dynamic(() => import('../components/store/StoreListFull'), {ssr: false})

function Stores() {
    return (
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
    )
}

export default Stores
