import React, { useState, useEffect } from 'react';
import "./Payment.css";
import { useStateValue } from './StateProvider';
import CheckoutProduct from './CheckoutProduct';
import { Link, useNavigate } from "react-router-dom";
import axios from "./axios";
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from './reducer'; 
import { db } from "./firebase";
import { doc, setDoc } from "firebase/firestore";


function Payment() {
    const[{basket, user}, dispatch] = useStateValue();
    const navigate = useNavigate();

    const stripe = useStripe();
    const elements = useElements();

    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);
    const [succeeded, setSucceeded] = useState(false);
    const [processing, setProcessing] = useState("");
    const [clientSecret, setClientSecret] = useState("");

    useEffect(() => {
    if (basket.length === 0) {
        return;
    }

    const getClientSecret = async () => {
        const response = await axios({
            method: 'post',
            url: `/payments/create?total=${Math.round(getBasketTotal(basket) * 100)}`,
        });

        setClientSecret(response.data.clientSecret);
    };

    getClientSecret();
}, [basket]);

    console.log("THE SECRET IS >>>", clientSecret);

    const handleSubmit = async (event) => {
    event.preventDefault();

    try {
        setProcessing(true);

        const result = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement),
            },
        });

        if (result.error) {
            setError(result.error.message);
            setProcessing(false);
            return;
        }

        const paymentIntent = result.paymentIntent;

        await setDoc(
            doc(db, "users", user?.uid, "orders", paymentIntent.id),
            {
                basket,
                amount: paymentIntent.amount,
                created: paymentIntent.created,
            }
        );

        setSucceeded(true);
        setError(null);
        setProcessing(false);

        dispatch({
            type: "EMPTY_BASKET",
        });

        navigate("/orders", { replace: true });

    } 
    catch (err) {
        console.error("PAYMENT ERROR:", err);
        setError(err.message);
        setProcessing(false);
    }
};

    const handleChange = (event) => {
        // Listen for changes in the CardElement
        // and display any errors as the customer types their card details
        setDisabled(event.empty);
        setError(event.error ? event.error.message : "");
    }

  return (
    <div className='payment'>
        <div className="payment__container">

        <h1>
            Checkout (<Link to="/checkout">{basket?.length} items</Link>)
        </h1>
        
            {/* Payment section - delivery address */}
            <div className="payment__section">
                <div className="payment__title">
                    <h3>Delivery Address</h3>
                </div>

                <div className="payment__address">
                    <p>{user?.email}</p>
                    <p>123 React Lane</p>
                    <p>Los Angeles, CA</p>
                    <p>United States</p>
                </div>
            </div>

            {/* Payment section - Review Items */}
            <div className="payment__section">
                <div className="payment__title">
                    <h3>Review items and delivery</h3>
                </div>

                <div className="payment__items">
                    {basket.map((item) => (
                        <CheckoutProduct
                            id={item.id}
                            image={item.image}
                            title={item.title}
                            price={item.price}
                            rating={item.rating}
                        />  
                    ))}
                </div>
            </div>

            {/* Payment section - Payment method */}
            <div className="payment__section">
                <div className="payment__title">
                    <h3>Payment Method</h3>
                </div>

                <div className="payment__details">
                    {/* Stripe magic will go */ }

                    <form onSubmit={handleSubmit}>
                        <CardElement onChange={handleChange} />

                        <div className="payment__priceContainer">
                            <CurrencyFormat
                                renderText={(value) => (
                                    <h3>Order Total: {value}</h3>
                                )}
                                decimalScale={2}
                                value={getBasketTotal(basket)}
                                displayType={'text'}
                                thousandSeparator={true}
                                prefix={'$'}
                            />
                            <button disabled={processing || disabled || succeeded}>
                                <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                            </button>
                        </div>

                        {/* Errors */}
                        {error && <div>{error}</div>}
                    </form>
                </div>
            </div>

        </div>
    </div>
  )
}
      
    

export default Payment
