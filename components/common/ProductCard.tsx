import ProductPlaceholderImage from '@/public/product/productPlaceholder.jpg';
import { Product } from '@/types';
import Link from 'next/link';
import Img from '../reusables/Img';
import ProductCardControls from './ProductCardControls';
import { Badge } from '../ui/badge';

type Props = {
  product: Product;
};

const ProductCard = ({ product }: Props) => {
  return (
    <div className="rounded-md border border-gray-200">
      <Link href={`/products/${product._id}`}>
        <div className="relative h-[240px]">
          <Img
            className="size-full"
            imgSrc={ProductPlaceholderImage || product.mainImage.url}
            imgClass="rounded-t-md rounded-b-none"
          />
          <Badge className="absolute bottom-2 right-2 bg-accent px-4">
            foo
          </Badge>
        </div>
      </Link>

      <div className="space-y-2 p-3">
        <p className="font-extrabold">{product.name}</p>
        <p className="text-xl font-extrabold">${product.price}</p>
        <p className="text-sm font-bold text-mutedtext">
          {product.stock} available
        </p>
        <ProductCardControls product={product} />
      </div>
    </div>
  );
};

export default ProductCard;
