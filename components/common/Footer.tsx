'use client';

import { cn } from '@/lib/utils';
import FurnModernLogo from '@/public/logo.png';
import { legalOptions, navOptions } from '@/staticData';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { CSSProperties } from 'react';
import { HorizontalPaddingContainer } from '../reusables/HorizontalPaddingContainer';
import AcknowledgementBanner from '../AcknowledgementBanner';

const footerGridContainerStyle: CSSProperties = {
  display: 'grid',
  gridTemplateColumns: '40fr 20fr 20fr 20fr',
  marginBottom: '4rem'
};

const Footer = () => {
  const pathname = usePathname();

  return (
    <footer className="border-t border-gray-200 bg-lime">
      <HorizontalPaddingContainer className="my-8 text-mutedtext">
        <div style={footerGridContainerStyle}>
          <div className="space-y-3">
            <Link href={'/'}>
              <Image src={FurnModernLogo} width={120} alt="FurnModern Logo" />
            </Link>
            <p>
              The Modern Fern is a leading online store for all your good
              quality furniture and home decor needs.
            </p>
          </div>

          <div>
            <p className="mb-6 font-extrabold text-black">Userful Links</p>
            <div className="flex flex-col space-y-3">
              {navOptions.map((item, idx) => (
                <Link
                  className={cn(
                    pathname === item.href && 'font-extrabold text-accent'
                  )}
                  href={item.href}
                  key={idx}
                >
                  {item.option}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className="mb-6 font-extrabold text-black">Helpful Links</p>
            <div className="flex flex-col space-y-3">
              <Link href={'/login'}>Login</Link>
            </div>
          </div>

          <div>
            <p className="mb-6 font-extrabold text-black">Legal</p>
            <div className="flex flex-col space-y-3">
              {legalOptions.map((item, idx) => (
                <Link
                  className={cn(
                    pathname === item.href && 'font-extrabold text-accent'
                  )}
                  href={item.href}
                  key={idx}
                >
                  {item.option}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <p className="text-center">
          © 2024. The Modern Furn. All rights reserved.
        </p>
      </HorizontalPaddingContainer>
    </footer>
  );
};

export default Footer;
