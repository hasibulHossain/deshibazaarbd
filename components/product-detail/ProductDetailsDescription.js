import React from 'react';
import Parser from 'html-react-parser';
import { Tab, Tabs } from 'react-bootstrap';

const ProductDetailsDescription = ({ product }) => {

    return (
        <div className="product_description">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <Tabs defaultActiveKey="description" id="uncontrolled-tab-example" className="mb-3">
                            <Tab eventKey="description" title="Description">
                                <p className="product_title text-center">Product Description</p>
                                <p className="product_details_description">
                                    {
                                        Parser(product.description)
                                    }
                                </p>
                            </Tab>
                            <Tab eventKey="purchase_delivery" title="Purchase Delivery">
                                <p className="product_title text-center">Purchase Delivery</p>
                            </Tab>
                            <Tab eventKey="refund_policy" title="Refund Policy">
                                <p className="product_title text-center">Refund Policy</p>
                            </Tab>
                            <Tab eventKey="replace_policy" title="Replace Policy">
                                <p className="product_title text-center">Replace Policy</p>
                            </Tab>
                        </Tabs>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetailsDescription;