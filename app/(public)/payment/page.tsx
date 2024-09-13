'use client';

import { HorizontalPaddingContainer } from '@/components/reusables/HorizontalPaddingContainer';
import convertToSubcurrency from '@/helpers/converToSubcurrency';
import useCartStore, { CartProduct } from '@/store/cart';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import PaymentContainer from './PaymentContainer';

if (process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY === undefined) {
  throw new Error('NEXT_PUBLIC_STRIPE_PUBLIC_KEY is not defined');
}
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY);

export default function Page() {
  const { cartItems } = useCartStore();
  const getCartItemsTotal = (items: CartProduct[]): number => {
    let total = 0;
    for (let i = 0; i < items.length; i++) {
      total += items[i].price * items[i].quantity;
    }
    return total;
  };

  const amount = getCartItemsTotal(cartItems);

  return (
    <section className="my-10">
      <HorizontalPaddingContainer>
        <p className="text-xl font-bold">Subtotal: ${amount}</p>
        <div>
          <Elements
            stripe={stripePromise}
            options={{
              mode: 'payment',
              amount: convertToSubcurrency(amount),
              currency: 'usd'
            }}
          >
            <PaymentContainer amount={amount} />
          </Elements>
        </div>
      </HorizontalPaddingContainer>
    </section>
  );
}
