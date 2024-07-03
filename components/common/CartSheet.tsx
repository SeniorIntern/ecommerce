'use client';

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from '@/components/ui/sheet';
import ProductPlaceholderImage from '@/public/product/productPlaceholder.jpg';
import useCartStore, { CartProduct } from '@/store/cart';
import { MoveRight, ShoppingBag } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Img from '../reusables/Img';
import { Button } from '../ui/button';
import { ScrollArea } from '../ui/scroll-area';
import { Separator } from '../ui/separator';

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
  const { cartItems } = useCartStore();
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
                  <div
                    key={item._id}
                    className="flex gap-4 rounded-md border border-muted p-2"
                  >
                    <div className="h-20 w-1/4">
                      <Img
                        className="size-full"
                        imgSrc={ProductPlaceholderImage}
                      />
                    </div>
                    <div>
                      <p>{item.name}</p>
                      <p>Quantity: {item.quantity}</p>
                      <p>Price: ${item.price}</p>
                    </div>
                  </div>
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
                  <p>Subtotal:</p>
                  <p className="text-mutedtext">
                    Shipping and taxes calculated at checkout.
                  </p>
                </div>
                <p>${getCartItemsTotal(cartItems)}</p>
              </div>

              <Button
                className="w-full"
                onClick={() => router.push('/checkout')}
              >
                Book Now
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
