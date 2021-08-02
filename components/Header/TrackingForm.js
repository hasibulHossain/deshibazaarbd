import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from 'react-redux';
import ErrorMessage from '../master/ErrorMessage/ErrorMessage';
import { getUserOrderList } from '../orders/_redux/action/OrderAction';
import moment from "moment";
import Link from 'next/link';
import { activeCurrency, formatCurrency } from '../../services/currency';
import LoadingSpinner from '../master/LoadingSpinner/LoadingSpinner';
import WarningMessage from '../master/warningMessage/WarningMessage';

const TrackingForm = ({ show, setShow }) => {
    const router   = useRouter();
    const dispatch = useDispatch();
    const { register, formState: { errors }, handleSubmit } = useForm();
    const { orderList, isLoading } = useSelector((state) => state.OrderReducer);

    const onSubmit = data => {
        router.push(`/order/${data.orderID}`)
        setShow(false);
    };

    useEffect(() => {
        dispatch(getUserOrderList(5))
    }, []);

    return (
        <div className="p-2">
            <h6 className="order_tracking_form_title border-bottom p-2"> My Last Order</h6>
            {
                isLoading && (
                    <LoadingSpinner text="Loading order list...." />
                )
            }
            {
                !isLoading && orderList.length === 0 && (
                    <WarningMessage text="Sorry! Order list not found...." />
                )
            }
            {
                !isLoading && orderList.length > 0 && (
                    <>
                        {
                            orderList.map((item, index) => (
                                <p key={index}>
                                    <Link href={`/order/${item.id}`}>
                                        <a className="text-decoration-none">
                                            {moment(item.transaction_date).format("DD/MM/YYYY")} - #{item.id} - {formatCurrency(item.final_total)} {activeCurrency('code')}
                                        </a>
                                    </Link>
                                </p>
                            ))
                        }
                    </>
                )
            }
            <h6 className="order_tracking_form_title"> Track My Order</h6>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input
                    className="form-control mr-1"
                    name="orderID"
                    autoComplete="off"
                    placeholder="Enter your order id..."
                    ref={register({ required: true })} />

                {errors.orderID && <ErrorMessage errorText="Please enter your order id..." />}
                <button className="custom-button-component float-right mt-2" type="submit">
                    Track Now
                </button>
            </form>
        </div>
    );
};

export default TrackingForm;