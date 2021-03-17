import React from 'react';
import { Tab, Tabs } from 'react-bootstrap';
import ProfileSideBar from '../myprofile/profileSideBar';
import ProductListForReview from './ProductListForReview';
import ProductReviewCreate from './ProductReviewCreate';
import ProductReviewHistory from './ProductReviewHistory';

const ProductReview = () => {
    return (
        <div class="container">
            <div className="row">
                <div className="col-md-3">
                    <ProfileSideBar />
                </div>
                <div className="col-md-9">
                    <div className="card card-middle">
                        <div className="sidebar-card-title">
                            <Tabs defaultActiveKey="waitingForReview" id="uncontrolled-tab-example">
                                <Tab eventKey="waitingForReview" title="To Be Reviewed">
                                    {/* <ProductReviewCreate /> */}
                                    <ProductListForReview />
                                </Tab>
                                <Tab eventKey="history" title="Review History">
                                    <ProductReviewHistory />
                                </Tab>
                            </Tabs>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ProductReview;