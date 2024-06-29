import SecondBannerImage from '@/public/SecondBannerImage.png';
import { HorizontalPaddingContainer } from './reusables/HorizontalPaddingContainer';
import Img from './reusables/Img';

const HomeBanner = () => {
  return (
    <HorizontalPaddingContainer className='h-56'>
      <Img
        imgSrc={SecondBannerImage}
        alt="Banner Image"
        className="size-full"
      />
    </HorizontalPaddingContainer>
  );
};

export default HomeBanner;
