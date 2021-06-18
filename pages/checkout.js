import React, { useEffect } from "react";

// third party import
import { IoIosCheckmarkCircle } from "react-icons/io";
import { FiChevronRight } from "react-icons/fi";
import { MdDelete } from "react-icons/md";

import { useSelector, useDispatch } from "react-redux";

// local import
import MainLayout from "../components/layouts/MainLayout";
import Card from "../components/Card/Card";
import RemoveCartItem from "../components/RemoveCartItem/RemoveCartItem";
import { toggleModal } from "../_redux/store/action/globalAction";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBag, faSync, faTrash } from "@fortawesome/free-solid-svg-icons";
import { getCartsAction, handleApplyCouponCode, handleChangeCouponInput, handleShippingCost } from "../components/_redux/CartProduct/Action/CartAction";
import CartProduct from "../components/CartProducts/CartProduct.js/CartProduct";
import { getUserDataAction } from "../components/_redux/getUserData/Action/UserDataAction";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import ErrorMessage from '../components/master/ErrorMessage/ErrorMessage'
import OrderSummery from '../components/master/OrderSummery/OrderSummery'
export default function Carts() {
  const router = useRouter();
  const dispatch = useDispatch();

  const { register, handleSubmit, watch, errors } = useForm();

  const { isModalActive } = useSelector((state) => state.GlobalReducer);
  const carts = useSelector((state) => state.CartReducer.carts);
  const userData = useSelector((state) => state.UserDataReducer.userData);

  const deleteItemsHandler = () => {
    dispatch(toggleModal());
  };

  useEffect(() => {
    if (typeof window === "undefined") {
      global.window = {};
    }
    dispatch(getCartsAction());
    dispatch(getUserDataAction());
    dispatch(handleShippingCost(carts))


  }, []);


  const placeOrder = () => {
    if (userData !== null) {
      router.push('/checkout')
    } else if (userData === null) {
      router.push('/login')
    }
  }
  return (
    <>
      <MainLayout pageTitle="checkout">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-8">
              <h2>Hello</h2>
            </div>
            <div className="col-md-4 cart_checkout_margin">
              <OrderSummery handleClick={placeOrder} />
            </div>
          </div>
        </div>
      </MainLayout>
    </>
  );
}
