'use client';

import CartItemCard from '@/components/common/CartItemCard';
import { HorizontalPaddingContainer } from '@/components/reusables/HorizontalPaddingContainer';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { TOAST_KEY_ANNOUNCE } from '@/constants';
import useCartStore, { CartProduct } from '@/store/cart';
import { ArrowRight, Trash } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';

export default function Page() {
  const router = useRouter();
  const { cartItems, resetCart, removeProductFromCart } = useCartStore();

  const getCartItemsTotal = (items: CartProduct[]): number => {
    let total = 0;
    for (let i = 0; i < items.length; i++) {
      total += items[i].price * items[i].quantity;
    }
    return total;
  };

  return (
    <section className="my-6">
      <HorizontalPaddingContainer>
        <p className="text-xl font-extrabold">Shopping Cart Items:</p>
        <div className="my-4 space-y-6">
          {cartItems.length ? (
            <div className="w-1/2 rounded-md border border-gray-400 p-2">
              <ScrollArea className="h-96 min-h-fit w-full">
                <div className="flex flex-col gap-4">
                  {cartItems.map((item) => (
                    <CartItemCard
                      removeProductFromCart={removeProductFromCart}
                      key={item._id}
                      item={item}
                    />
                  ))}
                </div>
              </ScrollArea>
            </div>
          ) : (
            <div className="w-1/2">
              <p className="text-mutedtext">No items in the cart</p>
            </div>
          )}

          <div className="flex gap-2">
            <Button
              onClick={() => {
                resetCart();
                toast.success('Cart is cleared.', { id: TOAST_KEY_ANNOUNCE });
              }}
              disabled={cartItems.length === 0}
              variant="destructive"
              className="flex items-center gap-2"
            >
              Clear Cart
              <Trash size={16} />
            </Button>
            <Button
              onClick={() => router.push('/payment')}
              className="flex items-center gap-2"
            >
              Proceed to payment
              <ArrowRight size={16} />
            </Button>
          </div>

          <div className="flex justify-between rounded-md border-2 border-dashed border-accent p-4">
            <div>
              <p className="text-xl font-bold uppercase">Subtotal:</p>
              <p className="text-sm text-mutedtext">
                Shipping and taxes calculated at checkout.
              </p>
            </div>
            <p className="text-xl font-bold">${getCartItemsTotal(cartItems)}</p>
          </div>
        </div>
      </HorizontalPaddingContainer>
    </section>
  );
}
