import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import OrderPayment from '../OrderPayment/OrderPayment';

const stripePromise = loadStripe('pk_test_51Ie3IHAgyIUkUwiGpN7rHxi7jjcG1x143UunPvHCnKDmCvzTXpV7dRicr1V8XQXWoEdnyskgWy2x359zoPLYbic700s3SZPkdx');

const ProcessOrder = ({ handlePayment }) => {
    return (
        <Elements stripe={stripePromise}>
            <OrderPayment handlePayment={handlePayment} />
        </Elements>
    );
};

export default ProcessOrder;