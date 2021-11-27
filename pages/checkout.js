import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
// local import
import ShippingInfo from "../components/ShippingInfo/ShippingInfo";
import CheckoutPaymentMethod from "../components/ShippingInfo/CheckoutPaymentMethod";
import OrderSummery from "../components/orders/OrderSummery";
import CartProduct from "../components/carts/cart-product/CartProduct";
import DeliveryInfo from '../components/Delivery/DeliveryInfo';
import { getCartsAction } from "../components/carts/_redux/action/CartAction";
import { handleShippingCost, createOrder } from "../components/orders/_redux/action/OrderAction";
// import ProtectedRoute from "../components/master/protectedRoute/ProtectedRoute";
// import { toggleFloatingCart } from "../_redux/store/action/globalAction";
import withProtectedRoute from "../components/master/hoc/withProtectedRoute";

// import dynamic from 'next/dynamic';

// const ShippingInfo = dynamic(() => import('../components/ShippingInfo/ShippingInfo'));
// const CheckoutPaymentMethod = dynamic(() => import('../components/ShippingInfo/CheckoutPaymentMethod'));
// const OrderSummery = dynamic(() => import('../components/orders/OrderSummery'));
// const CartProduct = dynamic(() => import('../components/carts/cart-product/CartProduct'));
// const DeliveryInfo = dynamic(() => import('../components/Delivery/DeliveryInfo'));


const Checkout = ()=> {
	const dispatch                             = useDispatch();
	const { customerInfo }                     = useSelector((state) => state.DeliveryInfoReducer);
	const { couponData, shippingCost, coupon } = useSelector((state) => state.OrderReducer);
	const { carts, totalPrice, totalQuantity } = useSelector((state) => state.CartReducer);
	const { userData } = useSelector((state) => state.UserDataReducer);

	useEffect(() => {
		dispatch(getCartsAction());
		dispatch(handleShippingCost(carts));
		// dispatch(toggleFloatingCart(false));
	}, []);

	const handleStoreOrder = () => {
		if (couponData !== null) {
			couponData.code = coupon.code; // Append code in couponData for backend processing
		}

		// dispatch(createOrder(customerInfo, carts, totalQuantity, shippingCost, totalPrice, couponData, userData)); @todo fixed payment and active dispatch
		// router.push('/');
	}

	return (
			<div className="container">
				<div className="row">
					<div className="col-lg-8 col-md-7">
						<div className="delivery_info mb-3 mt-5">
							<DeliveryInfo />
							{/* <div className="card mt-3 pl-3 pr-3 pt-2 shadow-sm">
								<div className="d-flex justify-content-between align-items-center">
									<p className="deliver_content">{carts.length} Items</p>
									<p className="deliver_content">Price</p>
									<p className="deliver_content">Quantity</p>
								</div>
							</div> */}

							<div className="p-3 mt-3 card shadow-sm">
								{
									carts.length > 0 && carts.map((item, index) => (
										<div className="cart_items_details py-3" key={index + 1}>
											<CartProduct cart={item} />
										</div>
									))
								}
							</div>
						</div>
					</div>
					<div className="col-lg-4 col-md-5 cart_checkout_margin">
						<ShippingInfo />
						<CheckoutPaymentMethod />
						<OrderSummery handleClick={() => handleStoreOrder()} buttonText="CONFIRM PAYMENT" />
					</div>
				</div>
			</div>
	);
}
// export default ProtectedRoute(Checkout);
export default withProtectedRoute(Checkout);
