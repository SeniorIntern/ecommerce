'use client';

import { useProducts } from '@/hooks';
import EmptyProductImage from '@/public/emptyProduct.webp';
import Image from 'next/image';
import { ProductCardSkeleton } from './ProductCardSkeleton';
import ProductCard from './common/ProductCard';

const ProductsContainer = () => {
  const { data, isLoading, error } = useProducts({ page: 1, limit: 12 });

  console.log('products===', data);

  return (
    <div className="grow">
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 xl:grid-cols-3">
        {isLoading ? (
          Array.from({ length: 7 }).map((_, idx) => (
            <ProductCardSkeleton key={idx} />
          ))
        ) : data?.data.products.length ? (
          data?.data.products.map((product) => (
            <ProductCard product={product} key={product._id} />
          ))
        ) : (
        <div className=''>
          <Image
            src={EmptyProductImage}
            alt="Man and a empty container" 
            width={800}
            height={800}
            className="mx-auto"
          />
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductsContainer;
