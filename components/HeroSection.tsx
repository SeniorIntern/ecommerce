import HeroImage from '@/public/heroImage.jpg';
import Image from 'next/image';
import HappyCustomersImageList from './HappyCustomersImageList';
import HeroSectionSearchComponent from './HeroSectionSearchComponent';
import { HorizontalPaddingContainer } from './reusables/HorizontalPaddingContainer';

export const HeroSection = () => {
  return (
    <div className="min-h-[40vh] bg-accent py-20">
      <HorizontalPaddingContainer>
        <div className="grid grid-cols-1 items-center gap-20 md:grid-cols-2">
          <div className="space-y-4 text-xl text-white">
            <p className="mb-8 text-3xl font-extrabold">The Modern Furniture</p>
            <p className="">
              The Modern Furniture is a
              <span className="border-b-2"> leading online store</span> for all
              your good quality furniture and home decor needs.
            </p>
            <HeroSectionSearchComponent />
            <HappyCustomersImageList />
            <p className="text-[1rem] font-extrabold">
              100K+ Happy Customers...
            </p>
          </div>

          <div>
            <Image
              src={HeroImage}
              width={500}
              height={500}
              alt="Hero image of a red sofa"
              className="w-full rounded-lg"
            />
          </div>
        </div>
      </HorizontalPaddingContainer>
    </div>
  );
};
