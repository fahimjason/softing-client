import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';


const OrderPayment = ({ handlePayment }) => {
    const stripe = useStripe();
    const elements = useElements();

    const [errMess, setErrMess] = useState(null);
    const [sucMess, setSucMess] = useState(null);

    const handleSubmit = async (event) => {
        // Block native form submission.
        event.preventDefault();

        if (!stripe || !elements) {
            // Stripe.js has not loaded yet. Make sure to disable
            // form submission until Stripe.js has loaded.
            return;
        }

        // Get a reference to a mounted CardElement. Elements knows how
        // to find your CardElement because there can only ever be one of
        // each type of element.
        const cardElement = elements.getElement(CardElement);

        // Use your card Element with other Stripe.js APIs
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card: cardElement,
        });

        if (error) {
            setErrMess(error.message);
            setSucMess(null);
        } else {
            setSucMess(paymentMethod.id);
            setErrMess(null);
            handlePayment(paymentMethod.id)
        }
    };
    return (
        <form onSubmit={handleSubmit}>
            <CardElement />
            <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                <button className="btn btn-lg btn-danger mt-3" type="submit" disabled={!stripe}>
                    Pay
                </button>
            </div>
            {
                errMess && <p style={{ color: 'red' }}>{errMess}</p>
            }
            {
                sucMess && <p style={{ color: 'green' }}>Your payment successful </p>
            }
        </form>
    );
};

export default OrderPayment;