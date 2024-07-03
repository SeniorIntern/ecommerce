'use client';

import useProduct from '@/hooks/useProduct';
import ProductPlaceholderImage from '@/public/product/productPlaceholder.jpg';
import Img from '../reusables/Img';
import ProductCardControls from './ProductCardControls';
import ProductPageCardSkeleton from './ProductPageCardSkeleton';

type Props = {
  productId: string;
};

const ProductPageCard = ({ productId }: Props) => {
  const { data, isLoading } = useProduct(productId);

  if (isLoading) return <ProductPageCardSkeleton />;

  return (
    <div className="grid grid-cols-1 gap-10 sm:grid-cols-2">
      <div className="h-[500px]">
        <Img
          imgSrc={ProductPlaceholderImage || data?.data.mainImage}
          className="size-full"
        />
      </div>

      <div className="space-y-6">
        <p className="text-2xl font-extrabold">{data?.data.name}</p>

        <div className="space-y-3 text-mutedtext">
          <div>
            <p>Description:</p>
            <p>{data?.data.description}</p>
          </div>
        </div>

        <div className="space-y-6">
          <p className="text-3xl font-extrabold text-accent">
            ${data?.data.price}
          </p>
          <div>
            <p className="font-bold text-mutedtext">
              {data?.data.stock} available
            </p>
            {data?.data && <ProductCardControls product={data?.data} />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPageCard;
