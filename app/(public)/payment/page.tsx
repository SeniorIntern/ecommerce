'use client';

import useCartStore from '@/store/cart';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe, StripeElementsOptions } from '@stripe/stripe-js';
import { useEffect, useState } from 'react';
import CheckoutForm from './CheckoutForm';
import { HorizontalPaddingContainer } from '@/components/reusables/HorizontalPaddingContainer';

// Make sure to call loadStripe outside of a component’s render to avoid
// recreating the Stripe object on every render.
// This is your test publishable API key.
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBIC!);

export default function Page() {
  const [clientSecret, setClientSecret] = useState('');
  const cartItems = useCartStore((s) => s.cartItems);

  useEffect(() => {
    console.log();

    // Create PaymentIntent as soon as the page loads

    fetch('http://localhost:8080/create-payment-intent', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ items: cartItems })
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, []);

  const options: StripeElementsOptions = {
    clientSecret
  };

  return (
    <section className="my-6">
      <HorizontalPaddingContainer>
        {clientSecret && (
          <Elements options={options} stripe={stripePromise}>
            <CheckoutForm />
          </Elements>
        )}
      </HorizontalPaddingContainer>
    </section>
  );
}
