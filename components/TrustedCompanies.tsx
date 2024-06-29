import { HorizontalPaddingContainer } from '@/components/reusables/HorizontalPaddingContainer';
import AwsLogo from '@/public/companies/aws.png';
import HooliLogo from '@/public/companies/hooli.png';
import LyftLogo from '@/public/companies/lyft.png';
import PiedPiperLogo from '@/public/companies/piedPiper.png';
import RedditLogo from '@/public/companies/reddit.png';
import StripeLogo from '@/public/companies/stripe.png';
import Image from 'next/image';

const TrustedCompaniesLogo = [
  {
    imgSrc: PiedPiperLogo,
    alt: 'Pied Piper'
  },
  {
    imgSrc: RedditLogo,
    alt: 'Reddit'
  },
  {
    imgSrc: LyftLogo,
    alt: 'Lyft'
  },
  {
    imgSrc: StripeLogo,
    alt: 'Stripe'
  },
  {
    imgSrc: AwsLogo,
    alt: 'AWS'
  },
  {
    imgSrc: HooliLogo,
    alt: 'Hooli'
  }
];

const TrustedCompanies = () => {
  return (
    <div className="bg-lime">
      <HorizontalPaddingContainer className="space-y-16 py-20">
        <p className="text-center text-xl font-bold">
          Trusted By Over 4000 Big Companies{' '}
        </p>
        <div className="grid grid-cols-6 items-center justify-end gap-4">
          {TrustedCompaniesLogo.map((company, idx) => (
            <Image
              key={idx}
              width={120}
              height={120}
              src={company.imgSrc}
              alt={company.alt}
            />
          ))}
        </div>
      </HorizontalPaddingContainer>
    </div>
  );
};

export default TrustedCompanies;
