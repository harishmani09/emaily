const keys = require('../config/keys');
const stripe  = require('stripe')(keys.stripeSecretKey);
const requireLogin = require('../middlewares/requireLogin');

module.exports =  app  => {

    app.post('/api/stripe', requireLogin, async (req, res) => {

      if (!req.user) {
        return res.status(401).send({error: 'You must login'});
      }

      const charge = await stripe.charges.create({
        amount: 500,
        currency: 'inr',
        description: 'Rs5 for 50 email credits',
        source: req.body.id
      });

      req.user.credits += 50;
      const user = await req.user.save();
      res.send(user);

    });

};





// const stripe = require('stripe')('sk_test_4eC39HqLyjWDarjtT1zdp7dc');

// // `source` is obtained with Stripe.js; see https://stripe.com/docs/payments/accept-a-payment-charges#web-create-token
// const charge = await stripe.charges.create({
//   amount: 2000,
//   currency: 'usd',
//   source: 'tok_mastercard',
//   description: 'My First Test Charge (created for API docs)',
// });