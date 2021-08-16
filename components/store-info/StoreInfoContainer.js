import React from 'react'
import {Tab, Tabs} from 'react-bootstrap';
import {useSelector} from 'react-redux'
import StoreProfile from './StoreProfile';

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
                    <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="mb-3">
                        <Tab eventKey="products" title="All products">
                            <h1>All products</h1>
                        </Tab>
                        <Tab eventKey="profile" title="profile">
                            <StoreProfile />
                        </Tab>
                    </Tabs>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StoreInfoContainer;
