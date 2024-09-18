'use client';

import { TOAST_KEY_ANNOUNCE } from '@/constants';
import { apiClient } from '@/services';
import useCartStore from '@/store/cart';
import { AxiosError } from 'axios';
import { useEffect } from 'react';
import { toast } from 'sonner';

export default function Page({
  searchParams: { amount }
}: {
  searchParams: { amount: string };
}) {
  const { cartItems, resetCart } = useCartStore();

  useEffect(() => {
    // const controller = new AbortController();
    if (cartItems.length) {
      console.log('cartItems===', cartItems);
      apiClient
        .post('/orders', {
          orderItems: cartItems
        })
        .then(() => {
          resetCart()
          toast.success('Payment is successfull. Thank You!', {
            id: TOAST_KEY_ANNOUNCE
          });
        })
        .catch((err) => {
          if (err instanceof AxiosError) {
            console.log('AxiosError===', err);
            toast.success('Payment was unsuccessfull.', {
              id: TOAST_KEY_ANNOUNCE
            });
          }
        });
    }
  }, [cartItems]);

  return (
    <main className="m-10 mx-auto max-w-6xl rounded-md border bg-gradient-to-tr from-blue-500 to-purple-500 p-10 text-center text-white">
      <div className="mb-10">
        <h1 className="mb-2 text-4xl font-extrabold">Thank you!</h1>
        <h2 className="text-2xl">You successfully sent</h2>

        <div className="mt-5 rounded-md bg-white p-2 text-4xl font-bold text-purple-500">
          ${amount}
        </div>
      </div>
    </main>
  );
}
