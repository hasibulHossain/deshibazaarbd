import React, { useEffect } from 'react';
import { Tab, Tabs } from 'react-bootstrap';
import ProfileSideBar from '../myprofile/ProfileSideBar';
import ProductListForReview from './ProductListForReview';
import ProductReviewHistory from './ProductReviewHistory';
import { useDispatch, useSelector } from 'react-redux';
import { getItemListByUser, getReviewListByUser } from './_redux/action/reviewAction';

const ProductReview = () => {
    const dispatch = useDispatch();

    const {itemList, reviewList} = useSelector((state) => state.ProductReviewReducer);

    useEffect(() => {
        dispatch(getItemListByUser());
        dispatch(getReviewListByUser());

    }, []);

    return (
        <div class="container">
            <div className="row">
                <div className="col-md-3">
                    <ProfileSideBar />
                </div>
                <div className="col-md-9 mt-5 mb-2">
                    <div className="card card-middle">
                        <div className="sidebar-card-title">
                            <Tabs defaultActiveKey="waitingForReview" id="uncontrolled-tab-example">
                                <Tab eventKey="waitingForReview" title={`To Be Reviewed (${itemList.length})`}>
                                    <ProductListForReview />
                                </Tab>
                                <Tab eventKey="history" title={`Review History (${reviewList.length})`}>
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