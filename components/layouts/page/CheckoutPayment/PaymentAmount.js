import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { getCartsAction, handleApplyCouponCode, handleChangeCouponInput } from '../../../../store/actions/orders/CartAction';

const PaymentAmount = () => {
    const dispatch = useDispatch()
    const loading = useSelector((state) => state.cart.loading);
    const carts = useSelector((state) => state.cart.carts);
    const totalQuantity = useSelector((state) => state.cart.totalQuantity);
    const totalPrice = useSelector((state) => state.cart.totalPrice);
    const shippingCost = useSelector((state) => state.cart.shippingCost);
    const orderInputData = useSelector((state) => state.OrderReducer.orderInputData);
    const placeOrder = useSelector((state) => state.OrderReducer.placeOrder);
  
    useEffect(() => {
      dispatch(getCartsAction());
    }, []);
  

    const placeOrderSubmit = (e) => {
      dispatch(storeSells(orderInputData, carts, totalQuantity, shippingCost, totalPrice))
    }
  
    const { register, handleSubmit, watch, errors } = useForm();
    const coupon = useSelector((state) => state.cart.coupon);
    const couponLoading = useSelector((state) => state.cart.couponLoading);
    const couponData = useSelector((state) => state.cart.couponData);
  
    const handleChangeCouponCode = (name, value) => {
      dispatch(handleChangeCouponInput(name, value))
    }
  
   
  const onSubmit = () => {
    dispatch(handleApplyCouponCode(coupon, carts))
  };
    const withoutDiscount = totalPrice + shippingCost;
    return (
        <>
            <div className="promocodesection priceDetailsHeading py-2 px-3 mb-2">
                <h1>Price Detail</h1>
            </div> <hr/>
            <div className="placeOrderSummery bg-white p-3">

                <div className="placeOrder">
                    <div className="d-flex justify-content-between">
                        <p>Price (0 items)</p>
                        <p>৳ {totalPrice}</p>
                    </div>
                    <div className="d-flex justify-content-between">
                        <p>Number of Items</p>
                        <p> {totalQuantity}</p>
                    </div>
                    <div className="d-flex justify-content-between">
                        <p>Shipping cost </p>
                        <p> ৳ {shippingCost} </p>
                    </div>
                    <div className="d-flex justify-content-between">
                        <p>Discount</p>
                        <p> ৳ {couponData && couponData.discount_amount ? couponData.discount_amount : 0} </p>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="d-flex justify-content-between">
                            <input
                                className="form-control mr-1"
                                name="code"
                                autoComplete="off"
                                placeholder="Your Coupon Code"
                                value={coupon.code && coupon.code}
                                onChange={(e) => handleChangeCouponCode("code", e.target.value)}
                                ref={register({ required: true })} /> <br />
                            {
                                !couponLoading && (
                                    <button className="btn btn-primary" type="submit"> APPLY </button>
                                )
                            }

                            {couponLoading && (
                                <button disabled={true} className="btn btn-primary d-flex">
                                    <span class="spinner-border spinner-border-sm mr-2" role="status" aria-hidden="true"></span> APPLY
                                </button>
                            )}
                        </div>
                        <p> {errors.code ?
                            <span className="text-danger font-weight-bold mt-2">Please insert your coupon code if you have. </span> :
                            (couponData && !couponData.errors && couponData.message ? (
                                <p className="text-success font-weight-bold mt-2">{couponData.message}</p>
                            ) : couponData && couponData.errors && (
                                <p className="text-danger font-weight-bold mt-2">{couponData.errors.message}</p>
                            )
                            )
                        }</p>
                        {/* {
                          couponData && !couponData.errors && couponData.message && (
                            <p className="text-success">{couponData.message}</p>
                          )
                        } */}
                        {/* {
                          couponData && couponData.errors && (
                            <p className="text-danger">{couponData.errors.message}</p>
                          )
                        } */}
                    </form> <hr />
                    <div className="d-flex justify-content-between">
                        <p>Total Price</p>
                        <p>৳ {couponData && couponData.discount_amount ? (withoutDiscount - couponData.discount_amount) : withoutDiscount}</p>
                    </div>
                </div>


                <div className="clearfix"></div>
              
            </div>
        </>
    );
};

export default PaymentAmount;