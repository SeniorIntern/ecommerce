import ProductPlaceholderImage from '@/public/product/productPlaceholder.jpg';
import Link from 'next/link';
import Img from '../reusables/Img';
import { Button } from '../ui/button';

const ProductCard = () => {
  return (
    <Link href={`/products/1`}>
      <div className="w-[268px] rounded-md border border-gray-200">
        <div className="size-full h-[240px]">
          <Img
            className="size-full"
            imgSrc={ProductPlaceholderImage}
            imgClass="rounded-t-md rounded-b-none"
          />
        </div>
        <div className="space-y-2 p-3">
          <p className="mb-6 font-extrabold">Silas Ratan Single Seater</p>
          <p className="font-extrabold">$6,782.00</p>
          <p className="font-bold text-mutedtext">12 available</p>
          <div className="flex gap-2">
            <Button className="w-1/2 text-white">Add to Cart</Button>
            <Button variant="secondary" className="w-1/2">
              Book now
            </Button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
