import React from 'react'
import { useState } from 'react'
import {
    CardElement,
    Elements,
    useStripe,
    useElements
} from '@stripe/react-stripe-js'

const CheckoutForm = () => {
    const [succeeded, setSucceeded] = useState(false)
    const [error, setError] = useState(null)
    const [processing, setProcessing] = useState("")
    const [disabled, setDisabled] = useState(true)
    const [clientSecret, setClientSecret] = useState("")
    const stripe = useStripe();
    const elements = useElements();

    const cardStyle = {
        style: {
            base: {
                color: "#32325d",
                fontFamily: 'Arial, sans-serif',
                fontSmoothing: "antialiased",
                fontSize: "16px",
                "::placeholder": {
                    color: "#32325d"
                }
            },
            invalid: {
                color: "#fa755a",
                iconColor: "#fa755a"
            }
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: 'card',
            card: elements.getElement(CardElement)
        });
    };

    return (
        <form onSubmit={handleSubmit} >
            <CardElement options={cardStyle} />
            <button className="border-2 rounded-xl" type="button" disabled={!stripe}>
                Pay
            </button>
        </form>
    )
}


export default CheckoutForm;