import React, { useMemo } from "react";
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import SpliteCardForm from "./SpliteCardForm";

const stripePromise = loadStripe(`pk_test_BE2H4ZqSHaRIyY6EWQNfX152`); // Stripe Public Key

const MasterCard = () => {
    return (
        <Elements stripe={stripePromise}>
            <SpliteCardForm />
        </Elements>
    );
};

export default MasterCard;
