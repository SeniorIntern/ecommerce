import { Product } from '@/types';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export type CartProduct = Product & {
  quantity: number;
};

interface CartStore {
  cartItems: CartProduct[];
  addProductToCart: (product: Product) => void;
  decreaseProductQuantityFromCart: (_id: string) => void;
  removeProductFromCart: (_id: string) => void;
  resetCart: () => void;
}

const useCartStore = create(
  persist<CartStore>(
    (set, get) => ({
      cartItems: [],
      addProductToCart: (product: Product) => {
        const prevCartItems = get().cartItems;
        const isProductAlreadyAdded = prevCartItems.some(
          (item) => item._id === product._id
        );
        if (isProductAlreadyAdded) {
          const cart = get().cartItems;
          const targetProductIndex = cart.findIndex(
            (item) => item._id === product._id
          );
          cart[targetProductIndex].quantity += 1;
          return set({ cartItems: cart });
        } else {
          return set({
            cartItems: [...get().cartItems, { ...product, quantity: 1 }]
          });
        }
      },
      removeProductFromCart: (_id: string) =>
        set({ cartItems: get().cartItems.filter((item) => item._id !== _id) }),
      decreaseProductQuantityFromCart: (_id: string) => {
        const cart = get().cartItems;
        const targetProductIndex = cart.findIndex((item) => item._id === _id);
        cart[targetProductIndex].quantity -= 1;
        return set({ cartItems: cart });
      },
      resetCart: () => set({ cartItems: [] })
    }),
    { name: 'cart' }
  )
);

export default useCartStore;
