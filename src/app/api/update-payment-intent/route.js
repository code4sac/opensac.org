import {stripe} from "../create-payment-intent/route";

export const POST = async (req) => {
    let {id, amount} = await req.json();
    amount = Number(amount);

    try {
      const paymentIntent = await stripe.paymentIntents.update(
        id,
        {
          amount: amount,  
        }
      );
      return new Response(JSON.stringify({clientSecret: paymentIntent.client_secret}))
    } catch (error) {
      console.log(`Error: ${error.message}`) 
      return new Response(`Error: ${error.message}`, {status: 405})
    }

    
}