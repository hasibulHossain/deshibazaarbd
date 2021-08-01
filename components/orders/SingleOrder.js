import React, { useState, useEffect } from 'react';
import moment from 'moment';
import SimpleBtn from '../master/SimpleBtn/SimpleBtn.js';
import Link from 'next/link'
import { handleCancelOrder } from './_redux/action/OrderAction.js';
import { getUserDataAction } from '../_redux/getUserData/Action/UserDataAction.js';
import { useDispatch, useSelector } from 'react-redux';
import SimpleModal from '../master/Modal/SimpleModal.js';
import SimpleConfirmComponent from '../master/Modal/SimpleConfirmComponent.js';

import { faEye, faPrint, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SingleOrder = ({ item, isManageable = true }) => {

    const dispatch = useDispatch();
    const [show, setShow] = useState(false);
    const [orderItem, setOrderItem] = useState(null);
    const userData = useSelector((state) => state.UserDataReducer.userData);
    const { isDeleting } = useSelector((state) => state.OrderReducer);

    const toggleShowHandler = (item) => {
        setShow(preState => !preState);
        setOrderItem(item)
    }

    const cancelOrder = () => {
        if (userData !== null) {
            dispatch(handleCancelOrder
                (orderItem.id, toggleShowHandler, userData.id));
        }
    }

    useEffect(() => {
        dispatch(getUserDataAction());
    }, [])

    return (
        <>
            <div className="card shadow-sm mt-3">
                <div className="d-flex justify-content-between align-items-start order_list_filtered p-2">
                    <div className="order_header">
                        {
                            isManageable && (
                                <>
                                    <h6 className="order">Order : <span className="text-primary">#{item.id}</span></h6>
                                    <p className="text-secondary">Placed on {moment(item.transaction_date).format("dddd, MMMM Do YYYY")}</p>
                                </>
                            )
                        }
                        {
                            !isManageable && <h6>{item.delivery_status && item.delivery_status == "not_delivered" ? "Not Delivered" : "Delivered"}</h6>
                        }
                    </div>
                    <div>
                        <div className="d-flex mb-2">
                            {
                                isManageable && (
                                    <Link href={`/order/${item.id}`}>
                                        <a>
                                            <button class="btn btn-info btn-sm mr-2">
                                                <FontAwesomeIcon icon={faEye} /> View
                                            </button>
                                        </a>
                                    </Link>
                                )
                            }
                            <Link href={`/order/invoice/${item.id}`}>
                                <a>
                                    <button class="btn btn-danger btn-sm">
                                        <FontAwesomeIcon icon={faPrint} /> Invoice
                                    </button>
                                </a>
                            </Link>
                        </div>
                        {
                            isManageable && item.is_suspend == 0 && (
                                <div className="float-right">
                                    <SimpleBtn variant="simple_btn_bg" style={{ width: 'fit-content' }} onClick={() => toggleShowHandler(item)}>
                                        <FontAwesomeIcon icon={faTimes} /> Cancel
                                    </SimpleBtn>
                                </div>
                            )
                        }
                    </div>

                    {/* {
                        isManageable && (
                            <div>
                                {
                                    item.is_suspend == 0 && (
                                        <div className="d-block">
                                            <SimpleBtn variant="simple_btn_bg" style={{ width: 'fit-content' }} onClick={() => toggleShowHandler(item)}>
                                                Cancel
                                            </SimpleBtn>
                                        </div>
                                    )
                                }
                            </div>
                        )
                    } */}

                </div>
                <div className="order_product_list p-3">
                    {
                        item.items && item.items.length > 0 && item.items.map((product, indexProduct) => (
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
                                            <div className="badge badge-secondary p-1">
                                                {
                                                    item.is_suspend == 0 ? "Processing" : "Cancel"
                                                }
                                            </div>
                                        </div>
                                        {
                                            item.is_suspend == 0 && (
                                                <div className="col-5">
                                                    <p className="text-success">Estimated Delivery By {moment(product.approx_delivery_date).format("dddd, MMMM Do YYYY")}</p>
                                                </div>
                                            )
                                        }
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>

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

export default SingleOrder;