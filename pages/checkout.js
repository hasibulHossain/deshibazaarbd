import React, { useEffect } from "react";
import router, { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
// local import
import MainLayout from "../components/layouts/MainLayout";
import ShippingInfo from "../components/ShippingInfo/ShippingInfo";
import CheckoutPaymentMethod from "../components/ShippingInfo/CheckoutPaymentMethod";
import OrderSummery from "../components/orders/OrderSummery";
import CartProduct from "../components/carts/cart-product/CartProduct";
import DeliveryInfo from '../components/Delivery/DeliveryInfo';

import { getUserDataAction } from "../components/_redux/getUserData/Action/UserDataAction";
import { storeSells } from "../components/Delivery/_redux/Action/DeliveryInfoAction";
import { getCartsAction } from "../components/carts/_redux/action/CartAction";
import { handleShippingCost } from "../components/orders/_redux/action/OrderAction";
// import { toggleFloatingCart } from "../_redux/store/action/globalAction";

export default function Carts() {
	// const router = useRouter();
	const dispatch         = useDispatch();
	const { customerInfo } = useSelector((state) => state.DeliveryInfoReducer);
	const { couponData }   = useSelector((state) => state.OrderReducer);

	const { carts, totalPrice, totalQuantity, shippingCost } = useSelector((state) => state.CartReducer);

	useEffect(() => {
		dispatch(getCartsAction());
		dispatch(getUserDataAction());
		dispatch(handleShippingCost(carts))
		// dispatch(toggleFloatingCart(false));
	}, []);

	// useEffect(() => {
	// 	if(!carts.length) {
	// 		setTimeout(() => {
	// 			router.push('/');
	// 		}, 5000);
	// 	}
	// }, [carts]);

	const handleStoreOrder = () => {
		dispatch(storeSells(customerInfo, carts, totalQuantity, shippingCost, totalPrice, couponData));
		// router.push('/');
	}

	return (
		<MainLayout pageTitle="Checkout">
			<div className="container">
				<div className="row">
					<div className="col-md-8">
						<div className="delivery_info mb-3 mt-5">
							<DeliveryInfo />
							<div className="card mt-3 pl-3 pr-3 pt-2 shadow-sm">
								<div className="d-flex justify-content-between align-items-center">
									<p className="deliver_content">{carts.length} Items</p>
									<p className="deliver_content">Price</p>
									<p className="deliver_content">Quantity</p>
								</div>
							</div>

							<div className="p-3 card shadow-sm">
								{
									carts.length > 0 && carts.map((item, index) => (
										<div className="cart_items_details" key={index + 1}>
											<CartProduct cart={item} />
										</div>
									))
								}
							</div>
						</div>
					</div>
					<div className="col-md-4 cart_checkout_margin">
						<ShippingInfo />
						<CheckoutPaymentMethod />
						<OrderSummery handleClick={() => handleStoreOrder()} buttonText="CONFIRM PAYMENT" />
					</div>
				</div>
			</div>
		</MainLayout>
	);
}
