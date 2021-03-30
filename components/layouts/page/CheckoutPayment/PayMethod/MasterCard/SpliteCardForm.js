import React, { useMemo, useState } from "react";
import {
    useStripe,
    useElements,
    CardNumberElement,
    CardCvcElement,
    CardExpiryElement,
    CardElement
} from "@stripe/react-stripe-js";
import Axios from "axios";

// import useResponsiveFontSize from "../../useResponsiveFontSize";

const useOptions = () => {
    //   const fontSize = useResponsiveFontSize();
    const options = useMemo(
        () => ({
            style: {
                base: {
                    fontSize: "16px",
                    color: "#424770",
                    letterSpacing: "0.025em",
                    fontFamily: "Source Code Pro, monospace",
                    "::placeholder": {
                        color: "#aab7c4"
                    }
                },
                invalid: {
                    color: "#9e2146"
                }
            }
        }),
        []
    );

    return options;
};

const SpliteCardForm = () => {
    const stripe = useStripe();
    const elements = useElements();
    const options = useOptions();

    const [billingDetails, setBillingDetails] = useState({
        email: "m.akash.cse@gmail.com",
        phone: "01314925185",
        name: "Md. Maniruzzaman Akash"
    });

    const handleSubmit = async event => {
        event.preventDefault();

        if (!stripe || !elements) {
            // Stripe.js has not loaded yet. Make sure to disable
            // form submission until Stripe.js has loaded.
            return;
        }

        const card = elements.getElement(CardNumberElement);
        const result = await stripe.createToken(card);

        // const payload = await stripe.createPaymentMethod({
        //     type: "card",
        //     card: elements.getElement(CardNumberElement)
        // });
        // console.log("[PaymentMethod]", payload);


        if (result.error) {
            // Show error to your customer.
            console.log(result.error.message);
        } else {
            // Send the token to your server.
            // This function does not exist yet; we will define it in the next step.
            stripeTokenHandler(result.token);
        }

        // const payload = await stripe.createPaymentMethod({
        //     type: "card",
        //     card: elements.getElement(CardNumberElement),
        //     billing_details: billingDetails
        // });

        // hit the payment api
        // if (payload) {
        //     const data = {
        //         order_id: 2,
        //         payload: payload.paymentMethod
        //     }

        //     Axios.post(`${process.env.NEXT_PUBLIC_API_URL}payments`, data)
        //         .then(res => {
        //             console.log(`res after payment`, res);
        //         })
        // }


        // console.log("payload payment", payload);
    };

    function stripeTokenHandler(token) {
        const paymentData = { token: token.id };

        // const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}payments`, {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify(paymentData),
        // });

        const data = {
            order_id: 2,
            payload: paymentData.token
        }

        Axios.post(`${process.env.NEXT_PUBLIC_API_URL}payments`, data)
            .then(res => {
                console.log(`res after payment`, res);
            })

        // Return and display the result of the charge.
        // return response.json();
    }

    return (
        <div className="card p-3 mb-5 mt-2 splitCardForm">
            <form onSubmit={handleSubmit}>
                <label>
                    Card number
                    <CardNumberElement
                        options={options}
                        onReady={() => {
                            console.log("CardNumberElement [ready]");
                        }}
                        onChange={event => {
                            console.log("CardNumberElement [change]", event);
                        }}
                        onBlur={() => {
                            console.log("CardNumberElement [blur]");
                        }}
                        onFocus={() => {
                            console.log("CardNumberElement [focus]");
                        }}
                    />
                </label>
                <label>
                    Expiration date
                    <CardExpiryElement
                        options={options}
                        onReady={() => {
                            console.log("CardNumberElement [ready]");
                        }}
                        onChange={event => {
                            console.log("CardNumberElement [change]", event);
                        }}
                        onBlur={() => {
                            console.log("CardNumberElement [blur]");
                        }}
                        onFocus={() => {
                            console.log("CardNumberElement [focus]");
                        }}
                    />
                </label>
                <label>
                    CVC
                    <CardCvcElement
                        options={options}
                        onReady={() => {
                            console.log("CardNumberElement [ready]");
                        }}
                        onChange={event => {
                            console.log("CardNumberElement [change]", event);
                        }}
                        onBlur={() => {
                            console.log("CardNumberElement [blur]");
                        }}
                        onFocus={() => {
                            console.log("CardNumberElement [focus]");
                        }}
                    />
                </label>
                <button type="submit" className="btn custom-pay-btn" disabled={!stripe}>
                    Pay
                </button>
            </form>
        </div>
    );
};

export default SpliteCardForm;