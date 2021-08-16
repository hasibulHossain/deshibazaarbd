import React, {useEffect} from 'react'
import {Tab, Tabs} from 'react-bootstrap';
import {useSelector} from 'react-redux'
import StoreProductList from './StoreProductList';
import StoreProfile from './StoreProfile';
import { router } from 'next/router'

function StoreInfoContainer() {
    const { storeInfo } = useSelector(state => state.StoreInfoReducer);
    return (
        <div className="container">
            <div className="store-info-container">
                {
                    storeInfo && storeInfo.banner_url && (
                        <div className="store-info-container__banner">
                            <div className="store-info-container__banner-box">
                                <img src={storeInfo.banner_url} alt={storeInfo.banner} />
                            </div>
                        </div>
                    )
                }
                <div className="row">
                    <div className="col-md-12">
                        <div className="store-info-container__tabs mt-2">
                            <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="mb-3">
                                <Tab eventKey="products" title="All products">
                                    <StoreProductList />
                                </Tab>
                                <Tab eventKey="profile" title="profile">
                                    <StoreProfile />
                                </Tab>
                            </Tabs>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StoreInfoContainer;
