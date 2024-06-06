export const GET = async (req) => {
    return new Response(JSON.stringify({publishableKey: process.env.STRIPE_PUBLISHABLE_KEY}), { status: 200 })
}