/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { CardElement, useStripe, useElements, } from "@stripe/react-stripe-js";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { FirebaseAuthContext } from "../../../../Provider/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
import { patchRequest, postRequestJWT } from "../../../../utils/CRUD";

const Checkout = () => {
  const { user } = useContext(FirebaseAuthContext)
  const token = localStorage.getItem('token')
  const [clientSecret, setClientSecret] = useState("");
  const stripe = useStripe()
  const elements = useElements()
  const [error, setError] = useState('')
  const [transactionId, setTransactionId] = useState('')
  const [processing, setProcessing] = useState(false);
  const location = useLocation()
  const price = location.state.price;
  const navigate = useNavigate()

  useEffect(() => {
    const getData = async () => {
      const res = await axios.post("https://sportifycamp.vercel.app/create-payment-intent", { price }, {
        headers: { authorization: `baerer ${token}` }
      })
      setClientSecret(res.data?.clientSecret)
      console.log(res.data?.clientSecret)
    }
    getData()
  }, [price, token])

  const handleSubmit = async (event) => {
    event.preventDefault()
    console.log(event)
    const card = elements.getElement(CardElement);
    if (!stripe || !elements) {
      return;
    }

    if (card === null) {
      return;
    }

    const { error } = await stripe.createPaymentMethod({
      type: "card",
      card
    })

    if (error) {
      console.log('[error]', error)
      setError(error.message)
    }

    setProcessing(true)
    const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
      clientSecret,
      {
        payment_method: {
          card: card,
          billing_details: {
            name: user?.diplayName || "anonymus",
            email: user?.email || "anonymus"
          },
        },
      },
    );
   
    if (confirmError) {
      console.log(confirmError)
    }
    setProcessing(false)
    if (paymentIntent.status === "succeeded") {
      setTransactionId(paymentIntent.id)
      console.log(paymentIntent)
      const paymentData = {
        email:user?.email,
        transactionId:paymentIntent.id,
        selectedClass:location.state,
        classId:location.state.classId,
        date:new Date()
      }
      //adding payment details to the payment collection
    const res =   await postRequestJWT('payments',paymentData)
    const seats = await patchRequest(`update/seats/${location.state.classId}`)
    console.log(res,seats)
    navigate('/dashboard/enrolled')
    
    }
  }
  return (
    <form onSubmit={handleSubmit} className="px-14 mt-[100px] bg-base-200 p-12">
      <CardElement
        options={{
          style: {
            base: {
              fontSize: '35px',
              color: '#424770',
              '::placeholder': {
                color: '#aab7c4',
                backgroundColor:"white",
                padding:"20px"
              },
            },
            invalid: {
              color: '#9e2146',
            },
          },
        }}
      />
      <p className="text-red-400 mt-3">{error}</p>
      <button className="btn btn-block bg-orange-300 mt-12 disabled:bg-opacity-25 disabled:cursor-not-allowed" type="submit" disabled={!stripe || !clientSecret || processing}>
        Pay
      </button>
      {transactionId && <p className="text-green-500 mt-5">paymanet successfull</p>}
    </form>
  );
};

export default Checkout;