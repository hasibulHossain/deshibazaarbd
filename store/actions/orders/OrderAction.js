import * as Types from "../../Types";
import moment from "moment";
import Axios from "axios";
import { showToast } from "../../../components/master/Helper/ToastHelper";
import { decrypt, encrypt } from "../../../components/utils/EncryptHelper";

export const orderInputChange = (name, value) => (dispatch) => {
    const formData = {
        name: name,
        value: value
    }
    dispatch({ type: Types.ORDER_INPUT_CHANGE, payload: formData });
}

export const getOrderInfo = (orderInputData, carts, totalQuantity, shippingCost, totalPrice) => (dispatch) => {
}

export const storeSells = (orderInputData, carts, totalQuantity, shippingCost, totalPrice) => (dispatch) => {
    const getUserData = JSON.parse(localStorage.getItem('loginData'))
    const { userData } = getUserData;
    let sale_lines = [];

    carts.forEach((item) => {
        const singleItem = {
            item_id: item.productID,
            quantity: item.quantity,
            unit_price: item.price,
            unit_price_inc_tax: item.price,
            discount_amount: 0,
            item_tax: 0
        }
        sale_lines.push(singleItem)
    })

    const orderPlaceData = {
        business_id: userData.business_id,
        created_by: 1,
        type: "sell",
        status: true,
        delivery_status: 'not_delivered',
        payment_status: 'due',
        title: 'Ecommerce Sale',
        invoice_no: null,
        ref_no: null,
        transaction_date: moment().format("YYYY-MM-DD"),
        total_before_tax: totalPrice,
        tax_amount: 0,
        discount_type_id: 1,
        tax_id: 1,
        discount_amount: 0,
        shipping_details: '', //this is shipping address
        order_quantity: totalQuantity,
        shipping_charges: shippingCost,
        additional_notes: '',
        staff_note: '',
        paid_total: 0,
        due_total: shippingCost + totalPrice,
        final_total: shippingCost + totalPrice,
        sale_lines: sale_lines,
    }
    let response = {
        status: false,
        isLoading: true,
        orderData: {}
    }

    dispatch({ type: Types.ORDER_SUBMIT, payload: response });

    Axios.post(`${process.env.NEXT_PUBLIC_API_URL}sales`, orderPlaceData)
        .then((res) => {
            if (res.data.status) {
                console.log(`res`, res)
                response.status = res.data.status;
                response.orderData = res.data.data;
                response.isLoading = false;
                // localStorage.removeItem("carts");
                // dispatch(getCartsAction());
                localStorage.setItem('tr', encrypt(res.data.data.id));
                showToast('success', 'Order Placed Successfully, Please confirm your payment.');
                dispatch({ type: Types.ORDER_SUBMIT, payload: response });
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
export async function getLastTransactionData () {

    // Check if there is any tr value is in local storage,
    let transaction_no = await localStorage.getItem('tr');
    let transactionData = null;
    
    // if not, then return null;
    if (typeof transaction_no !== 'undefined' && transaction_no !== null ) {
        transaction_no = decrypt(transaction_no);
        await Axios.get(`${process.env.NEXT_PUBLIC_API_URL}sales/${transaction_no}`)
            .then(res => {
                transactionData = res.data.data;
            })
            .catch(err => {
                return null;
            })
    }

    return transactionData;
}