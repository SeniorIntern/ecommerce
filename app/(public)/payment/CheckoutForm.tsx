'use client';

import { Button } from '@/components/ui/button';
import { TOAST_KEY_ANNOUNCE, TOAST_KEY_STRIPE } from '@/constants';
import useCartStore from '@/store/cart';
import {
  PaymentElement,
  useElements,
  useStripe
} from '@stripe/react-stripe-js';
import { StripePaymentElementOptions } from '@stripe/stripe-js';
import { useRouter } from 'next/navigation';
import { FormEvent, useEffect, useState } from 'react';
import { toast } from 'sonner';

export default function CheckoutForm() {
  const router = useRouter();
  const stripe = useStripe();
  const elements = useElements();

  const resetCart = useCartStore((s) => s.resetCart);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!stripe) {
      return;
    }

    const clientSecret = new URLSearchParams(window.location.search).get(
      'payment_intent_client_secret'
    );

    if (!clientSecret) {
      return;
    }

    stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
      switch (paymentIntent!.status) {
        case 'succeeded':
          toast.success('Payment succeeded!', { id: TOAST_KEY_STRIPE });
          break;
        case 'processing':
          toast.success('Your payment is processing.', {
            id: TOAST_KEY_STRIPE
          });
          break;
        case 'requires_payment_method':
          toast.error('Your payment was not successful, please try again.', {
            id: TOAST_KEY_STRIPE
          });
          break;
        default:
          toast.error('Something went wrong.', { id: TOAST_KEY_STRIPE });
          break;
      }
    });
  }, [stripe]);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js hasn't yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

    setIsLoading(true);

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        // Make sure to change this to your payment completion page
        return_url: 'http://localhost:3000/confirm-payment'
      },
      redirect: 'if_required'
    });

    if (!error) {
      // payment is successful
      toast.success('Payment is sucessfull. Thank You!', {
        id: TOAST_KEY_ANNOUNCE
      });

      resetCart();

      router.push(`http://localhost:3000/confirm-payment`);
    }

    // This point will only be reached if there is an immediate error when
    // confirming the payment. Otherwise, your customer will be redirected to
    // your `return_url`. For some payment methods like iDEAL, your customer will
    // be redirected to an intermediate site first to authorize the payment, then
    // redirected to the `return_url`.
    if (error) {
      toast.error(error.message, { id: TOAST_KEY_STRIPE });
    } else {
      toast.error('An unexpected error occurred.', { id: TOAST_KEY_STRIPE });
    }

    setIsLoading(false);
  };

  const paymentElementOptions: StripePaymentElementOptions = {
    layout: 'tabs'
  };

  return (
    <div className="flex items-center justify-center py-8">
      <form
        className="w-1/2 rounded-lg border-gray-200 bg-muted px-8 py-14"
        id="payment-form"
        onSubmit={handleSubmit}
      >
        <PaymentElement id="payment-element" options={paymentElementOptions} />
        <Button
          className="my-8 w-full"
          disabled={isLoading || !stripe || !elements}
          id="submit"
        >
          {isLoading ? 'Paying...' : 'Pay now'}
        </Button>
      </form>
    </div>
  );
}
