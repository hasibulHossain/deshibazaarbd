import React, { useEffect, useState } from 'react';
import Select from 'react-select';
import moment from 'moment';
import LoadingSkelleton from '../master/skelleton/LoadingSkelleton.jsx';
import Link from 'next/link'
import { useDispatch, useSelector } from 'react-redux';
import { getFilterOptionDataForOrderList, getUserOrderList, handleCancelOrder } from './_redux/action/OrderAction.js';
import SimpleBtn from '../master/SimpleBtn/SimpleBtn.js';
import SimpleModal from '../master/Modal/SimpleModal.js';
import SimpleConfirmComponent from '../master/Modal/SimpleConfirmComponent.js';
import { getUserDataAction } from '../_redux/getUserData/Action/UserDataAction.js';
import WarningMessage from '../master/warningMessage/WarningMessage.js';

const FilterOrderList = () => {
    const dispatch                  = useDispatch();
    const userData                  = useSelector((state) => state.UserDataReducer.userData);
    const [orderItem, setOrderItem] = useState(null);
    const [show, setShow]           = useState(false);

    const { orderList, isLoading } = useSelector((state) => state.OrderReducer);
    const { filterOptionList, isDeleting } = useSelector((state) => state.OrderReducer);
    
    const toggleShowHandler = (item) => {
        setShow(preState => !preState);
        setOrderItem(item)
    }

    const cancelOrder = () => {
        if (userData !== null) {
            dispatch(handleCancelOrder(orderItem.id, toggleShowHandler, userData.id));
        }
    }

    useEffect(() => {
        dispatch(getUserDataAction());
        dispatch(getFilterOptionDataForOrderList());
    }, [])

    return (
        <>
            <div className="card shadow-sm p-2 mt-3">
                <div className="d-flex align-items-center">
                    <h6>Show :</h6>
                    <div className="filter_selection ml-2">
                        <Select
                            className     = "basic-single"
                            placeholder   = "Last 5 Orders"
                            selectedValue = {filterOptionList[0]}
                            defaultValue  = {filterOptionList[0]}
                            isDisabled    = {false}
                            isLoading     = {false}
                            isClearable   = {true}
                            isSearchable  = {true}
                            onChange={(option) => (
                                dispatch(getUserOrderList(option.value))
                            )}
                            name    = "color"
                            options = {filterOptionList}
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
                !isLoading && orderList.length === 0 && (
                    <div className="shadow-sm mt-3">
                        <WarningMessage text="Sorry! Order list not found..." />
                    </div>
                )
            }

            {
                !isLoading && orderList.length > 0 && orderList.map((item, index) => (
                    <div className="card shadow-sm mt-3" key={index + 1}>
                        <div className="d-flex justify-content-between align-items-start order_list_filtered p-2">
                            <div className="order_header">
                                <h6 className="order">Order : <span className="text-primary">#{item.id}</span></h6>
                                <p className="text-secondary">Placed on {moment(item.transaction_date).format("dddd, MMMM Do YYYY")}</p>
                            </div>
                            <div>
                                <Link href={`/order/${item.id}`}>
                                    <a><button className="btn text-primary">Manage</button></a>
                                </Link>
                                <div className="d-block">
                                    <SimpleBtn variant="simple_btn_bg" style={{ width: 'fit-content' }} onClick={() => toggleShowHandler(item)}>
                                        Cancel
                                    </SimpleBtn>
                                </div>
                            </div>
                        </div>
                        <div className="order_product_list p-3">
                            {
                                item.items.map((product, indexProduct) => (
                                    <div className="row mt-2" key={indexProduct}>
                                        <div className="col-md-6">
                                            <div className="row align-items-center">
                                                <div className="col-4">
                                                    <img src={`${process.env.NEXT_PUBLIC_URL}images/products/${product.featured_image}`} alt="product img" className="img-fluid img-thumbnail" />
                                                </div>
                                                <div className="col-8">
                                                    <h5 className="order_product_title">
                                                        {product.name}
                                                    </h5>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 mt-3">
                                            <div className="row">
                                                <div className="col-3">
                                                    <p className="order_product_qty">
                                                        <span className="text-secondary">Qty : </span> {product.quantity}
                                                    </p>
                                                </div>
                                                <div className="col-4">
                                                    <div className="badge badge-secondary">Processing</div>
                                                </div>
                                                <div className="col-5">
                                                    <p className="text-success">Estimated Delivery By {moment(product.approx_delivery_date).format("dddd, MMMM Do YYYY")}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                ))
            }

            <SimpleModal
                size="md"
                show={show}
                handleClose={toggleShowHandler}
            >
                <SimpleConfirmComponent
                    text="Are you sure to cancel your order ?"
                    isLoading={isDeleting}
                    confirmClick={cancelOrder}
                    closeModal={toggleShowHandler}
                    confirmBtnVariant="simple_btn_bg"
                    closeBtnVariant="secondary"
                />
            </SimpleModal>
        </>
    );
};

export default FilterOrderList;