'use client';

import { useProduct } from '@/hooks';
import { cn } from '@/lib/utils';
import { useState } from 'react';
import Img from '../reusables/Img';
import ProductCardControls from './ProductCardControls';
import ProductPageCardSkeleton from './ProductPageCardSkeleton';

type Props = {
  productId: string;
};

const ProductDisplayContainer = ({ productId }: Props) => {
  const { data, isLoading } = useProduct(productId);
  const [displayImg, setDisplayImg] = useState('');

  if (isLoading) return <ProductPageCardSkeleton />;

  return (
    <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
      <div
        className={cn('h-[500px]', data?.data.subImages.length && 'flex gap-2')}
      >
        {data?.data.subImages.length && (
          <div className="grid h-fit gap-2">
            <Img
              imgSrc={data.data.mainImage}
              className="size-20 cursor-pointer"
              onClick={() => setDisplayImg(data.data.mainImage)}
              imgClass={cn(
                displayImg === data.data.mainImage &&
                'border border-2 border-accent rounded-md'
              )}
            />

            {data?.data.subImages.map((link, idx) => (
              <Img
                key={idx}
                imgSrc={link}
                className="size-20 cursor-pointer"
                onClick={() => setDisplayImg(link)}
                imgClass={cn(
                  displayImg === link &&
                  'border border-2 border-accent rounded-md'
                )}
              />
            ))}
          </div>
        )}

        <div className={cn('h-full', data?.data.subImages.length && 'grow')}>
          <Img
            imgSrc={displayImg || data?.data.mainImage}
            className="size-full"
          />
        </div>
      </div>

      <div className="space-y-6">
        <p className="text-2xl font-extrabold">{data?.data.productName}</p>

        <div className="space-y-3 text-mutedtext">
          <div>
            <p>Description:</p>
            <p>{data?.data.description}</p>
          </div>
        </div>

        <div className="space-y-3 text-mutedtext">
          <p>Type: {data?.data.category.categoryName}</p>
        </div>

        <div className="space-y-6">
          <p className="text-3xl font-extrabold text-accent">
            ${data?.data.price}
          </p>
          <div>
            {data?.data && <ProductCardControls product={data?.data} />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDisplayContainer;
