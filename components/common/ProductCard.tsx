import ProductPlaceholderImage from '@/public/product/productPlaceholder.jpg';
import { Product } from '@/types';
import Link from 'next/link';
import Img from '../reusables/Img';
import { Badge } from '../ui/badge';
import ProductCardControls from './ProductCardControls';

type Props = {
  product: Product;
};

const ProductCard = ({ product }: Props) => {
  return (
    <div className="overflow-hidden rounded-md rounded-t-lg border border-gray-200">
      <Link href={`/products/${product._id}`}>
        <div className="relative h-[240px]">
          <Img
            className="size-full transition duration-300 ease-in-out hover:scale-110"
            imgSrc={product.mainImage || ProductPlaceholderImage}
            imgClass="rounded-none"
          />
          <Badge variant="secondary" className="absolute bottom-2 right-2 px-4">
            {product.category.categoryName}
          </Badge>
        </div>
      </Link>

      <div className="space-y-2 p-3">
        <Link href={`/products/${product._id}`}>
          <p className="font-extrabold">
            {product.productName.length > 20
              ? product.productName.slice(0, 20) + '...'
              : product.productName}
          </p>
        </Link>
        <p className="text-xl font-extrabold">${product.price}</p>
        <ProductCardControls product={product} />
      </div>
    </div>
  );
};

export default ProductCard;
