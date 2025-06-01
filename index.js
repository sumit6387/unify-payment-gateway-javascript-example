// index.js
require('dotenv').config();
const getGateway = require('unify-payment-gateway').default;

const gateway = new getGateway({
    provider: 'razorpay',
    clientId: process.env.RAZORPAY_KEY_ID,
    clientSecret: process.env.RAZORPAY_KEY_SECRET,
    environment: "sandbox"
});
const createOrderFunction = async () => {
    console.log('Initializing payment gateway...');
    try{
    const order = await gateway.order.createOrder({
        amount: 10000,
        currency: "INR",
      });
      console.log('Order created:', order);
    }catch (error) {
      console.error('Error initializing payment gateway:', error);
    }
}
createOrderFunction();