'use client';

import { HorizontalPaddingContainer } from '@/components/reusables/HorizontalPaddingContainer';
import { cn } from '@/lib/utils';
import FurnModernLogo from '@/public/logo.png';
import { NavOptions } from '@/staticData';
import { SearchIcon, ShoppingBag } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NavBar = () => {
  const pathname = usePathname();

  return (
    <header className="py-3">
      <HorizontalPaddingContainer className="flex items-center justify-between">
        <Link href={'/'}>
          <Image src={FurnModernLogo} width={140} alt="FurnModern Logo" />
        </Link>

        <nav className="space-x-6">
          {NavOptions.map((item, idx) => (
            <Link
              key={idx}
              href={item.href}
              className={cn(pathname === item.href && 'text-accent')}
            >
              {item.option}
            </Link>
          ))}
        </nav>

        <div className="flex items-center justify-between space-x-4">
          <SearchIcon />
          <ShoppingBag />
          <Link href={'/login'}>Login</Link>
        </div>
      </HorizontalPaddingContainer>
    </header>
  );
};

export default NavBar;
