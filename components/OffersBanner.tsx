import OfferBannerImage1 from '@/public/offerBannerImage1.png';
import OfferBannerImage2 from '@/public/offerBannerImage2.png';
import { HorizontalPaddingContainer } from './reusables/HorizontalPaddingContainer';
import Img from './reusables/Img';

const OffersBanner = () => {
  return (
    <div className="">
      <HorizontalPaddingContainer className="flex h-56 justify-between gap-10">
        <Img
          imgSrc={OfferBannerImage1}
          alt="Product offer banner"
          className="size-full"
          imgClass="object-contain"
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
