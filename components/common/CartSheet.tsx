import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from '@/components/ui/sheet';
import { MoveRight, ShoppingBag } from 'lucide-react';
import { Button } from '../ui/button';
import { Separator } from '../ui/separator';

const Cart = () => {
  return (
    <div className="relative">
      <ShoppingBag />
      <span className="absolute -right-2 -top-3 flex size-6 items-center justify-center rounded-full bg-red-500 text-white">
        0
      </span>
    </div>
  );
};

const CartSheet = () => {
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
          <div>
            {false ? (
              <div></div>
            ) : (
              <div>
                <p className="text-mutedtext">No items in the cart</p>
              </div>
            )}
          </div>

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
                <p>$0.00</p>
              </div>

              <Button className="w-full">Book Now</Button>
              <div className="mx-auto flex w-fit items-center text-sm text-accent">
                <span className="text-black">or</span>
                <span className="mx-1">Continue Shopping</span>
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
