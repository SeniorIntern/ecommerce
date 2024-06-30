import ChairImage from '@/public/categories/chair.png';
import { productCategories } from '@/staticData';
import Link from 'next/link';
import { HorizontalPaddingContainer } from './reusables/HorizontalPaddingContainer';
import Img from './reusables/Img';

const CategoriesBar = () => {
  return (
    <HorizontalPaddingContainer className="space-y-3">
      <p className="text-3xl font-extrabold">Categories</p>
      <div className="flex gap-4 overflow-scroll">
        {productCategories.map((item, idx) => (
          <Link
            href={item.href}
            key={idx}
            className="flex min-w-fit items-center gap-4 rounded-md border border-gray-300 p-2"
          >
            <Img imgSrc={ChairImage} className="size-8" />
            <p className="mr-2">{item.option}</p>
          </Link>
        ))}
      </div>
    </HorizontalPaddingContainer>
  );
};

export default CategoriesBar;
