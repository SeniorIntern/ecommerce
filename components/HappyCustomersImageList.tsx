import EmaImage from '@/public/customers/Ema.webp';
import HenryImage from '@/public/customers/Henry.webp';
import JacobImage from '@/public/customers/Jacob.webp';
import JasonImage from '@/public/customers/Jason.webp';
import RitaImage from '@/public/customers/Rita.webp';
import Img from './reusables/Img';

const customersList = [
  {
    image: RitaImage,
    alt: 'Rita Image'
  },
  {
    image: JacobImage,
    alt: 'Jacob Image'
  },
  {
    image: HenryImage,
    alt: 'Henry Image'
  },
  {
    image: JasonImage,
    alt: 'Jason Image'
  },
  {
    image: EmaImage,
    alt: 'Ema Image'
  }
];

const HappyCustomersImageList = () => {
  return (
    <div className="flex pl-3">
      {customersList.map((customer, idx) => (
        <Img
          key={idx}
          imgSrc={customer.image}
          alt={customer.alt}
          className="-ml-3 size-12"
          imgClass="rounded-full border-4 border-white"
        />
      ))}
    </div>
  );
};

export default HappyCustomersImageList;
