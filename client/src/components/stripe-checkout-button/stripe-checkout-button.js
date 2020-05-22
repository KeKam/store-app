import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_4fI10ashegBwZ8CQcI0EjdgL00kRVDyXIX';

  const onToken = async (token) => {
    try {
      await axios({
        url: 'payment',
        method: 'post',
        data: {
          amount: priceForStripe,
          token,
        },
      });
      alert('Payment was successful');
    } catch (error) {
      console.log('Payment error: ', error);
      alert(
        'There was an issue with your payment. Make sure to use the provided credit card'
      );
    }
  };

  return (
    <StripeCheckout
      label='Pay Now'
      name='4 Seasons Ltd.'
      billingAddress
      shippingAddress
      description={`Your total is ${price} €`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
      currency='EUR'
    />
  );
};

export default StripeCheckoutButton;
