import Stripe from "stripe";

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
    apiVersion: "2024-04-10",
});

export const POST = async (req) => {
    try {
      const paymentIntent = await stripe.paymentIntents.create({
        amount: 500,
        currency: 'usd',
        automatic_payment_methods: {
          enabled: true,
        },
      });
      console.log(paymentIntent); 
      return new Response(JSON.stringify({ clientSecret: paymentIntent.client_secret, id: paymentIntent.id }), {status: 200}) 
    } catch (error) {
       console.log(`Error: ${error.message}`) 
       return new Response(`Error: ${error.message}`, {status: 405})
    }    
}
