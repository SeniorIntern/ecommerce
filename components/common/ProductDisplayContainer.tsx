'use client';

import { PLACEHOLDER_PRODUCT_IMAGE } from '@/constants';
import { useProduct } from '@/hooks';
import ProductPlaceholderImage from '@/public/product/productPlaceholder.jpg';
import Img from '../reusables/Img';
import ProductCardControls from './ProductCardControls';
import ProductPageCardSkeleton from './ProductPageCardSkeleton';

type Props = {
  productId: string;
};

const ProductDisplayContainer = ({ productId }: Props) => {
  const { data, isLoading } = useProduct(productId);

  if (isLoading) return <ProductPageCardSkeleton />;

  return (
    <div className="grid grid-cols-1 gap-10 sm:grid-cols-2">
      <div className="flex h-[500px] gap-2">
        <div className="grid h-fit gap-3 bg-orange-200">
          <Img
            imgSrc={PLACEHOLDER_PRODUCT_IMAGE}
            className="size-20 cursor-pointer"
          />
          <Img imgSrc={PLACEHOLDER_PRODUCT_IMAGE} className="size-20 cursor-pointer" />
          <Img imgSrc={PLACEHOLDER_PRODUCT_IMAGE} className="size-20 cursor-pointer" />
        </div>
        <div className="h-full grow">
          <Img
            imgSrc={ProductPlaceholderImage || data?.data.mainImage}
            className="size-full"
          />
        </div>
      </div>

      <div className="space-y-6">
        <p className="text-2xl font-extrabold">{data?.data.name}</p>

        <div className="space-y-3 text-mutedtext">
          <div>
            <p>Description:</p>
            <p>{data?.data.description}</p>
          </div>
        </div>

        <div className="space-y-3 text-mutedtext">
          <p>Type: {data?.data.category.name}</p>
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
