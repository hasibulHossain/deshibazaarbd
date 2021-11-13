import Axios from "axios";
import { showToast } from "../../../master/Helper/ToastHelper";
import * as Types from "../Type/Types";
import dayjs from "dayjs";
import { decrypt, encrypt } from "../../../master/utils/EncryptHelper";
import { getCartsAction } from "../../../carts/_redux/action/CartAction";

export const handleChangeDeliveryInputData = (name, value) => (dispatch) => {
    const addressData = {
        name: name,
        value: value
    }
    dispatch({ type: Types.DELIVER_CUSTOMER_INPUT_CHANGE, payload: addressData })
}

export const storeSells = (customerInfo, carts, totalQuantity, shippingCost, totalPrice, couponData, userData) => (dispatch) => {

    let discountAmount = 0, discountType = 1;

    if ( typeof couponData !== 'undefined' && couponData !== null ) {
        discountAmount = couponData.discount_amount;
        discountType   = 2; // 2 = Coupon Discount
    }

    shippingCost = isNaN(shippingCost) ? 0 : parseFloat(shippingCost);

    const payment_method = localStorage.getItem('payment_method') || 'cash';
    let sale_lines       = [];

    carts.forEach((item) => {
        const singleItem = {
            item_id           : item.productID,
            quantity          : parseInt(item.quantity),
            unit_price        : item.offerPrice > 0 ? item.offerPrice : item.price,
            unit_price_inc_tax: item.offerPrice > 0 ? item.offerPrice : item.price,
            discount_amount   : 0,
            item_tax          : 0
        }

        if(item.isChecked) {
            sale_lines.push(singleItem)
        }
    });

    const totalPayableAmount = parseFloat(shippingCost + totalPrice - discountAmount);
    const orderPostedData = {
        business_id     : userData.business_id,
        created_by      : 1,
        type            : "sell",
        status          : 'pending',
        delivery_status : 'not_delivered',
        payment_status  : 'due', // @todo No needs
        title           : 'Ecommerce Sale', // @todo No needs
        invoice_no      : null, // @todo No needs
        ref_no          : null, // @todo No needs
        transaction_date: dayjs().format("YYYY-MM-DD"),
        total_before_tax: totalPrice,
        tax_amount      : 0,
        discount_type_id: discountType,
        tax_id          : 1,
        discount_amount : discountAmount,
        shipping_details: '', // @todo No needs, remove when fixed api
        order_quantity  : totalQuantity,
        shipping_charges: shippingCost,
        additional_notes: '',
        staff_note      : '',
        paid_total      : 0,
        due_total       : totalPayableAmount,
        final_total     : totalPayableAmount,
        sale_lines      : sale_lines,
        payment_method  : payment_method,
        coupon          : couponData !== null ? couponData.code : null
    }

    let response = {
        status   : false,
        isLoading: true,
        orderData: {}
    }

    dispatch({ type: Types.ORDER_SUBMIT, payload: response });
    const invoiceURL = `${window.location.protocol}//${window.location.host}/order/invoice/`;

    if(typeof payment_method === 'undefined' && payment_method === null || payment_method === '') {
        showToast('error', 'Please select a payment method');
        return false;
    }

    Axios.post(`sales`, orderPostedData)
        .then((res) => {
            if (res.data.status) {
                response.status    = res.data.status;
                response.orderData = res.data.data;
                response.isLoading = false;
                localStorage.removeItem("carts");
                dispatch(getCartsAction());
                localStorage.setItem('tr', encrypt(res.data.data.id));

                showToast('success', res.data.message);
                dispatch({ type : Types.ORDER_SUBMIT, payload: response });

                setTimeout(() => {
                    if(payment_method === 'cash') {
                        const url = `${invoiceURL}${res.data.data.id}`;
                        window.location.href = url;
                    } else {
                        if(res.data.data.payment !== null) {
                            window.location.href = res.data.data.payment.forwarding_url
                        }
                    }
                }, 1000);
            }
        }).catch((err) => {
            const responseLog = err.response;
            response.isLoading = false;

            if (typeof responseLog !== 'undefined') {
                const { request, ...errorObject } = responseLog;
                showToast('error', responseLog.data.message);
                dispatch({ type: Types.ORDER_SUBMIT, payload: response })
            }
        })
}

/**
 * Get Last transaction data by transaction id
 * 
 * @since 0.0.1
 * 
 * @return Object|null transaction data
 */
export async function getLastTransactionData() {

    // Check if there is any tr value is in local storage,
    let transaction_no = await localStorage.getItem('tr');
    let transactionData = null;

    // if not, then return null;
    if (typeof transaction_no !== 'undefined' && transaction_no !== null) {
        transaction_no = decrypt(transaction_no);
        await Axios.get(`sales/${transaction_no}`)
            .then(res => {
                transactionData = res.data.data;
            })
            .catch(err => {
                return null;
            })
    }

    return transactionData;
}

export const getCurrentUserDataAction = (userData) => (dispatch) => {
    dispatch({ type: Types.SET_CUSTOMER_DELIVERY_INFO, payload: userData });
}