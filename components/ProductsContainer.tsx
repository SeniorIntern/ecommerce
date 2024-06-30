import EmptyProductImage from '@/public/emptyProduct.webp';
import Image from 'next/image';
import { ProductCardSkeleton } from './ProductCardSkeleton';
import ProductCard from './common/ProductCard';
import { cn } from '@/lib/utils';

type Props = {
  className?: string;
};

export const ProductsContainer = ({ className }: Props) => {
  return (
    <div className={cn(className)}>
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 xl:grid-cols-3">
        {Array.from({ length: 7 }).map((_, idx) => (
          <ProductCard key={idx} />
        ))}
      </div>

      {/*
      <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
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
      </div> */}
    </div>
  );
};
