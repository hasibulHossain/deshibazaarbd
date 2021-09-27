import React from 'react';
import Parser from 'html-react-parser';
import { Tab, Tabs } from 'react-bootstrap';

const ProductDetailsDescription = ({ product }) => {

    return (
        <div className="product_description">
                <p className="product-description__head">Description</p>
                    <div className="product-details__rich-text">
                                    {
                                        Parser(product.description)
                                    }
                        {/* <Tabs defaultActiveKey="description" id="uncontrolled-tab-example" className="mb-3">
                            <Tab eventKey="description" title="Description">
                            </Tab>
                            <Tab eventKey="purchase_delivery" title="Purchase Delivery">
                                <p className="product_title">Purchase Delivery</p>
                            </Tab>
                            <Tab eventKey="refund_policy" title="Refund Policy">
                                <p className="product_title">Refund Policy</p>
                            </Tab>
                            <Tab eventKey="replace_policy" title="Replace Policy">
                                <p className="product_title">Replace Policy</p>
                            </Tab>
                        </Tabs> */}
                    </div>
        </div>
    );
};

export default ProductDetailsDescription;