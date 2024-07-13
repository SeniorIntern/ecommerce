import OfferBannerImage1 from '@/public/offerBannerImage1.png';
import OfferBannerImage2 from '@/public/offerBannerImage2.png';
import { HorizontalPaddingContainer } from './reusables/HorizontalPaddingContainer';
import Img from './reusables/Img';

const OffersBanner = () => {
  return (
    <div className="md:hidden lg:block">
      <HorizontalPaddingContainer className="grid h-56 grid-cols-2 gap-4">
        <Img
          imgSrc={OfferBannerImage1}
          alt="Product offer banner"
          className="size-full"
          imgClass="object-contain rounded-none"
        />
        <Img
          imgSrc={OfferBannerImage2}
          alt="Product offer banner"
          className="size-full"
          imgClass="object-contain"
        />
      </HorizontalPaddingContainer>
    </div>
  );
};

export default OffersBanner;
