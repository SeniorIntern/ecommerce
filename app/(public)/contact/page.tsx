import { HorizontalPaddingContainer } from '@/components/reusables/HorizontalPaddingContainer';
import ContactImage from '@/public/contact/contact.png';
import Image from 'next/image';
import ContactForm from './ContactForm';

export default function Page() {
  return (
    <section className="my-6 space-y-8">
      <div className="mx-auto max-w-[400px] space-y-2">
        <p className="text-center">Contact Us</p>
        <p className="text-center text-4xl font-bold">
          We would love to hear from you
        </p>
      </div>

      <HorizontalPaddingContainer>
        <div className="grid grid-cols-1 gap-16 md:grid-cols-2">
          <div className="flex justify-center md:justify-end">
            <div className="relative size-[400px]">
              <Image
                src={ContactImage}
                alt="Person communicating with assistant"
                layout="fill"
                objectFit="contain"
                className=""
              />
            </div>
          </div>

          <div>
            <p className="mx-auto max-w-fit border-b-4 border-gray-300 text-xl font-extrabold">
              Get In Touch!
            </p>
            <ContactForm />
          </div>
        </div>
      </HorizontalPaddingContainer>
    </section>
  );
}
