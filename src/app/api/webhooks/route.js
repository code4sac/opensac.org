// import Stripe from 'stripe';
import {stripe} from "../create-payment-intent/route";

export const config = {
    api: {
        bodyParser: false,
    }
}

export const POST = async (req,res) => {
    // const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
    const rawBody = await req.text();
    const sig = req.headers.get("stripe-signature");
    const webhookSecret = process.env.STRIPE_WEBHOOK_SIGNING_SECRET;

    let event;

    try {
        if (!sig || !webhookSecret) return;

        event = stripe.webhooks.constructEvent(rawBody, sig, webhookSecret);
    } catch (error) {
        console.log(`Webhook error: ${error.message}`);
        return new Response(`Webhook error: ${error.message}`, {status: 400})
    }

    console.log('event', event)

    return new Response("Success", {status: 200})
}