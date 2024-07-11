'use client';

import { useProducts } from '@/hooks';
import ProductCard from './common/ProductCard';
import { ProductCardSkeleton } from './ProductCardSkeleton';

const FeaturedProductsContainer = () => {
  const { data, isLoading, error } = useProducts({ page: 1, limit: 6 });

  return (
    <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {isLoading
        ? Array.from({ length: 7 }).map((_, idx) => (
            <ProductCardSkeleton key={idx} />
          ))
        : data?.data?.products.map((product) => (
            <ProductCard product={product} key={product._id} />
          ))}
    </div>
  );
};

export default FeaturedProductsContainer;
