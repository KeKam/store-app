import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_4fI10ashegBwZ8CQcI0EjdgL00kRVDyXIX';

  const onToken = token => {
    console.log(token);
    alert('Payment was successful');
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
