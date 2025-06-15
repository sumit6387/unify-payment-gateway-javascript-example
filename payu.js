// index.js
require('dotenv').config();
const getGateway = require('unify-payment-gateway').default;

const gateway = new getGateway({
    provider: 'payu',
    clientId: process.env.PAYU_MERCHANT_KEY,
    clientSecret: null,
    salt: process.env.PAYU_SALT,
    environment: "sandbox"
});
const payuCreateOrder = async () => {
    console.log('Initializing payment gateway...');
    try{
    const order = await gateway.order.createOrder({
        amount: 100,
        currency: "INR",
        email: "test@gmail.com",
        phone: "1234567890",
        name: "Test User",
        product_info: "Test Product",
        txn_id: "txn_1234567890",
        notes: {}
      });
      console.log('Order created:', order);
    }catch (error) {
      console.error('Error initializing payment gateway:', error);
    }
}

module.exports = { payuCreateOrder };