import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import FeaturedProductsContainer from './FeaturedProductsContainer';
import { HorizontalPaddingContainer } from './reusables/HorizontalPaddingContainer';

const ProductsShowcase = () => {
  return (
    <div>
      <HorizontalPaddingContainer className="space-y-3">
        <div className="flex justify-between">
          <p className="text-3xl font-extrabold">Featured Products</p>
          <Link
            href={'/products'}
            className="flex items-center space-x-1 font-extrabold text-accent"
          >
            <span className="uppercase underline">SHOW ALL</span>
            <span>
              <ArrowUpRight />
            </span>
          </Link>
        </div>
        <FeaturedProductsContainer />
      </HorizontalPaddingContainer>
    </div>
  );
};
export default ProductsShowcase;
