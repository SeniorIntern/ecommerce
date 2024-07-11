import { PLACEHOLDER_PRODUCT_IMAGE } from '@/constants';
import { cn } from '@/lib/utils';
import Image, { StaticImageData } from 'next/image';

type Props = {
  className: string;
  imgSrc: string | StaticImageData;
  imgClass: string;
  sizes?: string;
  alt: string;
};

const Img = ({
  imgSrc,
  className: containerClass,
  imgClass,
  sizes = '33vw, (max-width: 768px) 50vw, (max-width: 1200px) 100vw',
  alt
}: Partial<Props>) => {
  return (
    <div className={cn('relative size-10', containerClass)}>
      <Image
        src={imgSrc || PLACEHOLDER_PRODUCT_IMAGE}
        alt={alt || 'placeholder image'}
        fill
        sizes={sizes}
        className={cn('rounded-md object-cover', imgClass)}
      />
    </div>
  );
};

export default Img;
