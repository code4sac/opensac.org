import {useStripe, useElements, AddressElement, PaymentElement} from '@stripe/react-stripe-js';
import DonationAmount from './DonationAmount';
import { useState, useEffect } from 'react';

const CheckoutForm = ({ paymentIntentId, updatePaymentIntent }) => {
    const [donationValue, setDonationValue] = useState(500);

    const stripe = useStripe();
    const elements = useElements();

    useEffect(() => {
      updatePaymentIntent(paymentIntentId, donationValue);
    },[donationValue]);

    const handleSubmit = async (event) => {
      // We don't want to let default form submission happen here,
      // which would refresh the page.
      event.preventDefault();
  
      if (!stripe || !elements) {
        // Stripe.js hasn't yet loaded.
        // Make sure to disable form submission until Stripe.js has loaded.
        return;
      }
  
      const result = await stripe.confirmPayment({
        //`Elements` instance that was used to create the Payment Element
        elements,
        confirmParams: {
          return_url: "http://localhost:3000/",
        },
      });
  
      if (result.error) {
        // Show error to your customer (for example, payment details incomplete)
        console.log(result.error.message);
      } else {
        // Your customer will be redirected to your `return_url`. For some payment
        // methods like iDEAL, your customer will be redirected to an intermediate
        // site first to authorize the payment, then redirected to the `return_url`.
      }
    };

  return (
    <form onSubmit={handleSubmit} style={{background: 'white'}}>
      {/* <h1 style={{color: 'green'}}>{donationValue}</h1> */}
      <div className="donation-billing-amount-container">
        <div className="donation-billing-container">
            <h2>Billing Address</h2>
            <span>Use a permenant address where you can recieve mail.</span>  
            <AddressElement options={{mode: "billing"}}/>
        </div>
        <DonationAmount donationValue={donationValue} setDonationValue={setDonationValue} />
      </div>
      <div className="donation-payment-element-container">
        <h2>Payment Method</h2>
        <span>Please provide your credit card or debit card details in the form below.</span>
        <PaymentElement />
      </div>
      
      
      
    </form>
  );
};

export default CheckoutForm;