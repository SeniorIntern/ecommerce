import { CartProduct } from '@/store/cart';

const getCartItemsTotal = (items: CartProduct[]): number => {
  let total = 0;
  for (let i = 0; i < items.length; i++) {
    total += items[i].price * items[i].quantity;
  }
  return total;
};

export default getCartItemsTotal;
