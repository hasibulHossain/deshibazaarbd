import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Card } from 'react-bootstrap'
import { useForm } from 'react-hook-form';

import { handleApplyCouponCode, handleChangeCouponInput, handleShippingCost } from './_redux/action/OrderAction';
import { getCartsAction } from '../carts/_redux/action/CartAction';
import ErrorMessage from '../master/ErrorMessage/ErrorMessage'
import { activeCurrency, formatCurrency } from '../../services/currency';

const OrderSummary = ({ handleClick, buttonText }) => {
    const dispatch                           = useDispatch();
    const { register, handleSubmit, errors } = useForm();
    const isSubmitting                       = useSelector((state) => state.DeliveryInfoReducer.isSubmitting);
    const { carts, totalPrice }              = useSelector((state) => state.CartReducer);

    const { coupon, couponLoading, couponData, shippingCost, shippingCostLoading } = useSelector((state) => state.OrderReducer);

    useEffect(() => {
        dispatch(getCartsAction());
        dispatch(handleShippingCost(carts))
    }, []);


    const handleChangeCouponCode = (name, value) => {
        dispatch(handleChangeCouponInput(name, value))
    }

    const onSubmit = () => {
        dispatch(handleApplyCouponCode(coupon, carts))
    };

    let totalAmount;
    const updatedShippingCost = 50;

    if (couponData && couponData.discount_amount) {
        totalAmount = (totalPrice + updatedShippingCost) - discount_amount;
    } else {
        totalAmount = (totalPrice + updatedShippingCost);
    }

    return (
        <>
            <Card>
                <div className="cart__right-container">
                    <div className="cart__right-header">
                        <p>Order Summary </p>
                    </div>
                    <div className="cart__right-order_details">
                        <div className="cart__right-order_details_inner">
                            <div className="cart__right-order_details_item">
                                <p>Sub Total ({carts.length} items)</p>
                                <p>{formatCurrency(totalPrice)} {activeCurrency('code')}</p>
                            </div>
                            {/* <div className="cart__right-order_details_item">
                                <p>Delivery Fee</p>
                                <p>TK {deliveryFee} BDT</p>
                            </div> */}
                            <div className="cart__right-order_details_item">
                                <p>Delivery Fee</p>
                                {
                                    !shippingCostLoading && (
                                        <p>{formatCurrency(50)} {activeCurrency('code')}</p>
                                    )
                                }
                                {
                                    shippingCostLoading && (
                                        <p>
                                            <div class="spinner-border" role="status">
                                                <span class="sr-only">Loading...</span>
                                            </div>
                                        </p>
                                    )
                                }
                            </div>

                            <div className="cart__right-order_details_item">
                                <p> Discount</p>
                                <p>{formatCurrency(couponData && couponData.discount_amount ? couponData.discount_amount : 0)} {activeCurrency('code')} </p>
                            </div>

                            <div className="cart__right-order_details_item">
                                <p>Total</p>
                                <p>{formatCurrency(totalAmount)} {activeCurrency('code')}</p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="cart__right-footer">
                        <div className="cart__right-discount">
                            <div>
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <div className="d-flex justify-content-between">
                                        <input
                                            className="form-control mr-1"
                                            name="code"
                                            autoComplete="off"
                                            placeholder="Discount Code"
                                            value={coupon.code && coupon.code}
                                            onChange={(e) => handleChangeCouponCode("code", e.target.value)}
                                            ref={register({ required: true })} /> <br />
                                        {
                                            !couponLoading && (
                                                <button className="btn btn-success ml-2" type="submit"> APPLY </button>
                                            )
                                        }

                                        {couponLoading && (
                                            <button disabled={true} className="btn btn-success d-flex">
                                                <span className="spinner-border spinner-border-sm mr-2" role="status" aria-hidden="true"></span> APPLY
                                            </button>
                                        )}
                                    </div>
                                    <p> {errors.code ?
                                        <ErrorMessage errorText="Please insert your discount code if you have." />
                                        :
                                        (couponData && !couponData.errors && couponData.message ? (
                                            <p className="text-success font-weight-bold mt-2">{couponData.message}</p>
                                        ) : couponData && couponData.errors && (
                                            <ErrorMessage errorText={couponData.errors.message} />
                                        )
                                        )
                                    }</p>
                                </form> <hr />
                            </div>
                        </div>
                        <div className="cart__proceed-btn">
                            {/* <button className="simple-btn btn-danger" onClick={() => handleClick()} disabled={carts.length === 0 ? true : false} >
                                {buttonText}
                            </button> */}
                            {
                                !isSubmitting && (
                                    <button className="simple-btn btn-danger" onClick={handleClick} disabled={carts.length === 0 ? true : false} >
                                        {buttonText}
                                    </button>
                                )
                            }
                            {
                                isSubmitting &&
                                (<button disabled={true} className="simple-btn btn-danger d-flex">
                                    <span className="spinner-border spinner-border-sm mr-2" role="status" aria-hidden="true"></span>  {buttonText}
                                </button>)
                            }

                        </div>
                    </div>
                </div>
            </Card>
        </>
    );
};

export default OrderSummary;