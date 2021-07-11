import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Card } from 'react-bootstrap'
import { useForm } from 'react-hook-form';
import { handleApplyCouponCode, handleChangeCouponInput, handleShippingCost } from './_redux/action/OrderAction';
import { getCartsAction } from '../carts/_redux/action/CartAction';
import ErrorMessage from '../master/ErrorMessage/ErrorMessage'
import { activeCurrency, formatCurrency } from '../../services/currency';

const OrderSummery = ({ handleClick, buttonText }) => {
    const dispatch = useDispatch();
    const { register, handleSubmit, errors } = useForm();
    const isSubmitting = useSelector((state) => state.DeliveryInfoReducer.isSubmitting);
    const { carts, totalPrice } = useSelector((state) => state.CartReducer);

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
            <Card className="mb-3">
                <div className="cart__right-container">
                    <div className="cart__right-header">
                        <p>Order Summary </p>
                    </div>
                    <div className="cart__right-order_details">
                        <div className="cart__right-order_details_inner">
                            <div className="cart__right-order_details_item">
                                <p className="font-weight-bold">Sub Total ({carts.length} items)</p>
                                <p className="font-weight-bold">{formatCurrency(totalPrice)} {activeCurrency('code')}</p>
                            </div>
                            <div className="cart__right-order_details_item">
                                <p className="font-weight-bold">Delivery Fee</p>
                                {
                                    !shippingCostLoading && (
                                        <p className="font-weight-bold">{formatCurrency(50)} {activeCurrency('code')}</p>
                                    )
                                }
                                {
                                    shippingCostLoading && (
                                        <div>
                                            <p className="spinner-border" role="status"> <span className="sr-only">Loading...</span></p>
                                        </div>
                                    )
                                }
                            </div>

                            <div className="cart__right-order_details_item">
                                <p className="font-weight-bold"> Discount</p>
                                <p className="font-weight-bold">{formatCurrency(couponData && couponData.discount_amount ? couponData.discount_amount : 0)} {activeCurrency('code')} </p>
                            </div>

                            <hr />

                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="d-flex justify-content-between">
                                    <input
                                        className="form-control mr-1 coupon-input"
                                        name="code"
                                        autoComplete="off"
                                        placeholder="Discount Code"
                                        value={coupon.code && coupon.code}
                                        onChange={(e) => handleChangeCouponCode("code", e.target.value)}
                                        ref={register({ required: true })} /> <br />
                                    {
                                        !couponLoading && (
                                            <button className="btn btn-success ml-2 btn-coupon-apply" type="submit"> APPLY </button>
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

                            <div className="cart__right-order_details_item">
                                <p className="font-weight-bold">Total</p>
                                <p className="font-weight-bold">{formatCurrency(totalAmount)} {activeCurrency('code')}</p>
                            </div>
                            <p className="text-right border-top text-secondary pt-3 mb-1">
                                <b>VAT</b> included, where applicable
                            </p>
                        </div>
                    </div>

                    <div className="cart__right-footer">
                        <div className="cart__proceed-btn">
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

export default OrderSummery;