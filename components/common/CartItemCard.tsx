import { cn } from '@/lib/utils';
import ProductPlaceholderImage from '@/public/product/productPlaceholder.jpg';
import { CartProduct } from '@/store/cart';
import { Trash } from 'lucide-react';
import Img from '../reusables/Img';
import Link from 'next/link';

type Props = {
  item: CartProduct;
  className?: string;
  removeProductFromCart: (_id: string) => void;
};

const CartItemCard = ({ item, className, removeProductFromCart }: Props) => {
  return (
    <div
      className={cn(
        'flex gap-4 rounded-md border border-gray-200 p-2',
        className
      )}
    >
      <div className="h-20 w-1/4">
        <Img className="size-full" imgSrc={ProductPlaceholderImage} />
      </div>

      <div className="flex grow items-start justify-between">
        <div>
          <Link href={`/products/${item._id}`}>
            <p>{item.name}</p>
          </Link>
          <p>Quantity: {item.quantity}</p>
          <p>
            Price: <span className="font-extrabold">${item.price}</span>
          </p>
        </div>
        <Trash
          onClick={() => removeProductFromCart(item._id)}
          color="red"
          size={16}
        />
      </div>
    </div>
  );
};

export default CartItemCard;
