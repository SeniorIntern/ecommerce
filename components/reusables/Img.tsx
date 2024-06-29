import { PLACEHOLDER_PROFILE_IMAGE } from '@/constants';
import { cn } from '@/lib/utils';
import Image, { StaticImageData } from 'next/image';

type Props = {
  className: string;
  imgSrc: string | StaticImageData;
  imgClass: string;
  alt: string;
};

const Img = ({ imgSrc, className: containerClass, imgClass, alt }: Partial<Props>) => {
  return (
    <div className={cn('relative size-10', containerClass)}>
      <Image
        src={imgSrc || PLACEHOLDER_PROFILE_IMAGE}
        alt={alt || 'placeholder image'}
        fill
        className={cn('rounded-md object-cover', imgClass)}
      />
    </div>
  );
};

export default Img;
