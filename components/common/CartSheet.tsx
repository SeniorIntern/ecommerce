'use client';

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from '@/components/ui/sheet';
import useCartStore, { CartProduct } from '@/store/cart';
import { MoveRight, ShoppingBag } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Button } from '../ui/button';
import { ScrollArea } from '../ui/scroll-area';
import { Separator } from '../ui/separator';
import CartItemCard from './CartItemCard';

const Cart = () => {
  const cartItems = useCartStore((s) => s.cartItems);

  return (
    <div className="relative">
      <ShoppingBag />
      <span className="absolute -right-2 -top-3 flex size-6 items-center justify-center rounded-full bg-red-500 text-white">
        {cartItems.length}
      </span>
    </div>
  );
};

const CartSheet = () => {
  const { cartItems, removeProductFromCart } = useCartStore();
  const router = useRouter();

  const getCartItemsTotal = (items: CartProduct[]): number => {
    let total = 0;
    for (let i = 0; i < items.length; i++) {
      total += items[i].price * items[i].quantity;
    }
    return total;
  };

  return (
    <Sheet>
      <SheetTrigger>
        <Cart />
      </SheetTrigger>
      <SheetContent className="min-w-[500px]">
        <SheetHeader>
          <SheetTitle>Shopping Cart</SheetTitle>
        </SheetHeader>
        <div className="my-3 flex h-full flex-col justify-between">
          <ScrollArea className="h-auto">
            {cartItems.length ? (
              <div className="flex flex-col gap-4">
                {cartItems.map((item) => (
                  <CartItemCard
                    removeProductFromCart={removeProductFromCart}
                    key={item._id}
                    item={item}
                  />
                ))}
              </div>
            ) : (
              <div>
                <p className="text-mutedtext">No items in the cart</p>
              </div>
            )}
          </ScrollArea>

          <div>
            <Separator />
            <div className="my-8 space-y-3">
              <div className="flex justify-between">
                <div>
                  <p className="text-lg font-bold uppercase">Subtotal:</p>
                  <p className="text-sm text-mutedtext">
                    Shipping and taxes calculated at checkout.
                  </p>
                </div>
                <p>${getCartItemsTotal(cartItems)}</p>
              </div>

              <Button
                className="w-full"
                onClick={() => router.push('/checkout')}
              >
                Checkout Now
              </Button>
              <div className="mx-auto flex w-fit items-center text-sm text-accent">
                <span className="text-black">or</span>
                <Link href={'/products'} className="mx-1">
                  Continue Shopping
                </Link>
                <MoveRight className="w-4" />
              </div>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default CartSheet;
