import React, { useMemo } from "react";
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import SpliteCardForm from "./SpliteCardForm";
// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe('pk_test_TYooMQauvdEDq54NiTphI7jx');

const MasterCard = () => {
    return (
        <Elements stripe={stripePromise}>
            <SpliteCardForm />
        </Elements>
    );
};

export default MasterCard;
