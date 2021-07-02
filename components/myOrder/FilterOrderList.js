import React from 'react';
import Select from 'react-select';
import LoadingSkelleton from '../master/skelleton/LoadingSkelleton.jsx';
import Link from 'next/link'

const FilterOrderList = ({ orderList, isLoading }) => {

    const options = [
        { value   : 'All',           label: 'all' },
        { value   : 'last_5_orders', label: 'Last 5 Orders' },
        { value   : 'last_15_days',  label: 'Last 15 Days' },
        { value   : 'last_30_days',  label: 'Last 30 Days' },
        { value   : 'last_2_month',  label: 'Last 2 Months' },
        { value   : 'last_6_month',  label: 'Last 6 Months' },
    ]

    return (
        <>
            <div className="card shadow-sm p-2 mt-3">
                <div className="d-flex align-items-center">
                    <h6>Show :</h6>
                    <div className="filter_selection ml-2">
                        <Select
                            className       = "basic-single"
                            classNamePrefix = "select"
                            defaultValue    = {options[0]}
                            isDisabled      = {false}
                            isLoading       = {false}
                            isClearable     = {true}
                            isSearchable    = {true}
                            name            = "color"
                            options         = {options}
                        />
                    </div>
                </div>
            </div>

            {isLoading && (
                <div className="card shadow-sm mt-3 p-1">
                    <LoadingSkelleton
                        alignment = "vertical"
                        count     = {1}
                        width     = "100%"
                        height    = {150}
                    />
                </div>
            )}

            {
                orderList.length > 0 && orderList.map((item, index) => (
                    <div className="card shadow-sm mt-3" key={index + 1}>
                        <div className="d-flex justify-content-between align-items-start order_list_filtered p-2">
                            <div className="order_header">
                                <h6 className="order">Order : <span className="text-primary">#d454ddf565d6fd</span></h6>
                                <p className="text-secondary">Placed on 28th June, 2021, 21:23:16</p>
                            </div>
                            <Link href={`/order/${item.id}`}>
                                <a><button className="btn text-primary">Manage</button></a>
                            </Link>
                        </div>
                        <div className="order_product_list p-3">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="row align-items-center">
                                        <div className="col-4">
                                            <img src="https://static-01.daraz.com.bd/p/a2a62d3c0dcbc4727545ee6e227a2980.jpg_340x340q80.jpg_.webp" alt="product img" className="img-fluid img-thumbnail" />
                                        </div>
                                        <div className="col-8">
                                            <h4 className="order_product_title">Colour T-Shirt</h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 mt-3">
                                    <div className="row">
                                        <div className="col-3">
                                            <p className="order_product_qty"> <span className="text-secondary">Qty : </span> 2</p>
                                        </div>
                                        <div className="col-4">
                                            <div className="badge badge-secondary">Processing</div>
                                        </div>
                                        <div className="col-5">
                                            <p className="text-success">Estimated Delivery By Sat, 03 July - Mon, 12 July 2021</p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                ))
            }

        </>
    );
};

export default FilterOrderList;