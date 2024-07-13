import SecondBannerImage from '@/public/SecondBannerImage.png';
import { HorizontalPaddingContainer } from './reusables/HorizontalPaddingContainer';
import Img from './reusables/Img';

const HomeBanner = () => {
  return (
    <HorizontalPaddingContainer className="hidden h-56 lg:block">
      <Img
        imgSrc={SecondBannerImage}
        alt="Banner Image"
        className="size-full"
      />
    </HorizontalPaddingContainer>
  );
};

export default HomeBanner;
