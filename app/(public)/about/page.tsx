import { HorizontalPaddingContainer } from '@/components/reusables/HorizontalPaddingContainer';
import { Button } from '@/components/ui/button';
import { CreditCard, Search, ShieldCheck, Zap } from 'lucide-react';
import Image from 'next/image';
import CompanyLogo from '@/public/logos/Asset 4@4x.png';
import Link from 'next/link';

type Props = {
  cardTitle: string;
  cardDescription: string;
  Icon: React.ElementType;
};

const AboutCard = ({ cardTitle, cardDescription, Icon }: Props) => {
  return (
    <div className="space-y-3 rounded-2xl p-6 transition duration-300 hover:bg-white hover:shadow-2xl hover:shadow-gray-600/10">
      <div className="w-fit rounded-md border border-gray-300 p-1">
        <Icon size={24} />
      </div>
      <div className="space-y-1">
        <p className="font-bold">{cardTitle}</p>
        <p className="text-mutedtext">{cardDescription}</p>
      </div>
    </div>
  );
};

export default function Page() {
  return (
    <section className="my-14">
      <HorizontalPaddingContainer>
        <div className="space-y-20">
          <div className="mx-auto max-w-[620px] space-y-4">
            <h1 className="text-center text-6xl font-bold">
              Discover Sustainable Living with
              <span className="text-accent">The Green Australia.</span>
            </h1>

            <p className="text-center text-mutedtext">
              Be a part of the sustainable living movement and shop at The Green
              Australia today! Explore our website to discover our latest
              collection and make a conscious choice for a greener planet.
            </p>

            <div className="mx-auto max-w-fit space-x-2">
              <Link href={'/login'}>
                <Button>Get Started</Button>
              </Link>
              <Link href={'/products'}>
                <Button variant="outline">Check Products</Button>
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-16 rounded-3xl border border-gray-300 p-1 lg:grid-cols-2 lg:gap-4">
            <div className="flex">
              <div className="m-auto w-[65%] space-y-2">
                <Image
                  src={CompanyLogo}
                  width={50}
                  height={50}
                  alt="Company logo"
                  className="mx-auto mb-10 mt-10 lg:mt-0"
                />
                <p className="text-center text-xl font-bold">
                  Home Decor, Done Right
                </p>
                <p className="text-center text-mutedtext">
                  We offer quality furniture and home decor with a focus on
                  sustainability. We provide stylish, eco-friendly products at
                  affordable prices through our user-friendly e-commerce
                  platform.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-3 rounded-2xl bg-muted p-1 sm:grid-cols-2">
              <AboutCard
                Icon={ShieldCheck}
                cardTitle="Quality choices"
                cardDescription="Offering a wide range of high-quality furniture and home décor items to suit every style and budget."
              />
              <AboutCard
                Icon={CreditCard}
                cardTitle="Affordable Prices"
                cardDescription="Providing affordable and stylish home solutions without breaking the bank."
              />
              <AboutCard
                Icon={Zap}
                cardTitle="Sustainable Sourcing"
                cardDescription="Committed to sourcing items responsibly, ensuring environmental impact is minimized without compromising on quality."
              />
              <AboutCard
                Icon={Search}
                cardTitle="Easy Shopping"
                cardDescription="An easy-to-use e-commerce platform allowing customers to shop for sustainable home goods from the comfort of their homes."
              />
            </div>
          </div>

          <div className="mx-auto max-w-[620px] space-y-4">
            <h3 className="text-center text-5xl">
              We <span className="font-bold text-accent">Scaled !</span>
            </h3>
            <p className="text-center text-mutedtext">
              We have been working hard to provide the best services to our
              clients. We have been growing and scaling our business to provide
              the best services to our clients.
            </p>
          </div>
        </div>
      </HorizontalPaddingContainer>
    </section>
  );
}
