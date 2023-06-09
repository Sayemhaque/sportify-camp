import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
// import { cartContext } from "../../provider/CartProvider";
// import {useContext} from "react"
import Checkout from "./Checkout";
import './payment.css'
const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_PK)
const Payment = () => {

    return (
        <div>
            <Elements stripe={stripePromise}>
                <Checkout />
            </Elements>
        </div>
    );
};

export default Payment;