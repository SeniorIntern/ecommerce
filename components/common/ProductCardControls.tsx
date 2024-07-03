'use client';

import useCartStore, { CartProduct } from '@/store/cart';
import { Product } from '@/types';
import { Heart, Minus, Plus } from 'lucide-react';
import { Button } from '../ui/button';

type Props = {
  product: Product;
};

const productQuantityInCart = (_id: string, cartItems: CartProduct[]) => {
  const product = cartItems.find((item) => item._id === _id);
  return product?.quantity || 0;
};

const ProductCardControls = ({ product }: Props) => {
  const {
    cartItems,
    addProductToCart,
    removeProductFromCart,
    decreaseProductQuantityFromCart
  } = useCartStore();

  const productQtyInCart = productQuantityInCart(product._id, cartItems);

  return (
    <div className="flex gap-1">
      {productQtyInCart ? (
        <div className="flex h-10 items-center">
          <Button
            variant="outline"
            className="h-full rounded-r-none border-r-0 border-gray-200 text-mutedtext hover:bg-gray-100"
            size="icon"
            onClick={() =>
              productQtyInCart === 1
                ? removeProductFromCart(product._id)
                : decreaseProductQuantityFromCart(product._id)
            }
          >
            <Minus className="h-4 w-4" />
          </Button>
          <span className="flex h-full items-center border border-gray-200 px-3 text-sm">
            {productQtyInCart}
          </span>
          <Button
            variant="outline"
            className="h-full rounded-l-none border-l-0 border-gray-200 text-mutedtext hover:bg-gray-100"
            size="icon"
            onClick={() => addProductToCart(product)}
          >
            <Plus className="h-4 w-4" />
          </Button>
        </div>
      ) : (
        <Button onClick={() => addProductToCart(product)}>Add to Cart</Button>
      )}

      <Button variant="ghost" className="text-accent hover:bg-accent/20">
        <Heart size={16} className="mr-1" />
        wishlist
      </Button>
    </div>
  );
};

export default ProductCardControls;
