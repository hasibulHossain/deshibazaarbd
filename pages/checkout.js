import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
// local import
// import ShippingInfo from "../components/ShippingInfo/ShippingInfo";
// import CheckoutPaymentMethod from "../components/ShippingInfo/CheckoutPaymentMethod";
// import OrderSummery from "../components/orders/OrderSummery";
// import CartProduct from "../components/carts/cart-product/CartProduct";
// import DeliveryInfo from '../components/Delivery/DeliveryInfo';
import { getUserDataAction } from "../components/_redux/getUserData/Action/UserDataAction";
import { storeSells } from "../components/Delivery/_redux/Action/DeliveryInfoAction";
import { getCartsAction } from "../components/carts/_redux/action/CartAction";
import { handleShippingCost } from "../components/orders/_redux/action/OrderAction";
// import ProtectedRoute from "../components/master/protectedRoute/ProtectedRoute";
// import { toggleFloatingCart } from "../_redux/store/action/globalAction";
import dynamic from 'next/dynamic';
import withProtectedRoute from "../components/master/hoc/withProtectedRoute";

const ShippingInfo = dynamic(() => import('../components/ShippingInfo/ShippingInfo'));
const CheckoutPaymentMethod = dynamic(() => import('../components/ShippingInfo/CheckoutPaymentMethod'));
const OrderSummery = dynamic(() => import('../components/orders/OrderSummery'));
const CartProduct = dynamic(() => import('../components/carts/cart-product/CartProduct'));
const DeliveryInfo = dynamic(() => import('../components/Delivery/DeliveryInfo'));



const Checkout = ()=> {
	
	const dispatch                             = useDispatch();
	const { customerInfo }                     = useSelector((state) => state.DeliveryInfoReducer);
	const { couponData, shippingCost }         = useSelector((state) => state.OrderReducer);
	const { carts, totalPrice, totalQuantity } = useSelector((state) => state.CartReducer);

	useEffect(() => {
		dispatch(getCartsAction());
		dispatch(getUserDataAction());
		dispatch(handleShippingCost(carts));
		// dispatch(toggleFloatingCart(false));
	}, []);

	const handleStoreOrder = () => {
		// dispatch(storeSells(customerInfo, carts, totalQuantity, shippingCost, totalPrice, couponData));
		// router.push('/');
	}

	return (
			<div className="container">
				<div className="row">
					<div className="col-lg-8 col-md-7">
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
