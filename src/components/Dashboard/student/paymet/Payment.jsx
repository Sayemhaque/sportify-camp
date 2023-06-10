import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
// import { cartContext } from "../../provider/CartProvider";
// import {useContext} from "react"
import Checkout from "./Checkout";

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_PK)
const Payment = () => {

    return (
        <div>
            <Elements stripe={stripePromise}>
            <h1 className="text-center text-4xl py-2 font-serif w-4/12 mx-auto  border border-b-4">Payment</h1> 
                <Checkout />
            </Elements>
        </div>
    );
};

export default Payment;