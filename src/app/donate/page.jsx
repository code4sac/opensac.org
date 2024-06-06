"use client";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe('pk_test_51PL7NrJTFuuNs7Woj3NAjqWSb4fsKR16eiERXSQnoNBEKiUVZDWmywZd4Kxl3CsQ8ytJEa3rAnUg87lKxdbEsbxB00w1LdinTj');

const DonatePage = () => {
    const [publishableKey, setPublishableKey] = useState('');
    const [clientSecret, setClientSecret] = useState('');
    const [paymentIntentId, setPaymentIntentId] = useState('');

    useEffect(() => {
        const createPaymentIntent = async () => {
          await fetch('api/create-payment-intent', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({items: [{id: "$5 Donation"}]})
          })
            .then((res) => res.json())
            .then((data) => {
              setClientSecret((prev) => {
                if (!prev) return data.clientSecret;
                else return prev
              });
              setPaymentIntentId((prev) => {
                if (!prev) return data.id;
                else return prev
              });
            })
        }
        if (!clientSecret) createPaymentIntent();    
    },[]);

    const updatePaymentIntent = async (id, amount) => {
      try {
        await fetch('api/update-payment-intent', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({id: paymentIntentId, amount: amount})
      })
      } catch (error) {
        console.error("Error updating payment intent: ", error)
      }
    }

  
  if (!clientSecret) return (
    <div style={{color: "#FFFFFF"}}>
        Loading...
    </div>
  )  

  // const stripe = loadStripe(publishableKey);
  const options = {
    clientSecret: clientSecret
  }

  return (
    <Elements stripe={stripePromise} options={options}>
      <div className="donate-page-container">
        <CheckoutForm paymentIntentId={paymentIntentId} updatePaymentIntent={updatePaymentIntent} />
      </div>
    </Elements>
  )
}

export default DonatePage