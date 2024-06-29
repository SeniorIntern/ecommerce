import EmptyProductImage from '@/public/emptyProduct.webp';
import Image from 'next/image';
import { ProductCardSkeleton } from './ProductCardSkeleton';

export const ProductsContainer = () => {
  return (
    <div>
      <div className="grid grid-cols-4 gap-10">
        {Array.from({ length: 7 }).map((_, idx) => (
          <ProductCardSkeleton key={idx} />
        ))}
      </div>

      <div>
        <Image
          src={EmptyProductImage}
          alt="Man and a empty container"
          width={400}
          height={400}
          className="mx-auto"
        />
      </div>
    </div>);
};
