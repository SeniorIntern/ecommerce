'use client';

import { HorizontalPaddingContainer } from '@/components/reusables/HorizontalPaddingContainer';
import { cn } from '@/lib/utils';
import FurnModernLogo from '@/public/logo.png';
import { navOptions } from '@/staticData';
import { SearchIcon, X } from 'lucide-react';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Skeleton } from '../ui/skeleton';
import CartSheet from './CartSheet';
import SearchInput from './SearchInput';
import Logout from './Logout';
import UserNavbarControls from './UserNavbarControls';

const UserDropDownMenu = dynamic(() => import('./UserDropDownMenu'), {
  ssr: false,
  loading: () => <Skeleton className="size-8 rounded-full bg-gray-200" />
});

const NavBar = () => {
  const pathname = usePathname();
  const [showSearchInput, setShowSearchInput] = useState(false);
  const toggleSearch = () => setShowSearchInput((val) => !val);

  return (
    <header className="border-b border-muted py-3">
      <HorizontalPaddingContainer className="flex items-center justify-between">
        <Link href={'/'}>
          <Image src={FurnModernLogo} width={140} alt="FurnModern Logo" />
        </Link>

        {showSearchInput ? (
          <SearchInput toggleSearch={toggleSearch} />
        ) : (
          <nav className="space-x-6">
            {navOptions.map((item, idx) => (
              <Link
                key={idx}
                href={item.href}
                className={cn(
                  pathname === item.href &&
                    'border-b-2 border-accent pb-6 text-accent'
                )}
              >
                {item.option}
              </Link>
            ))}
          </nav>
        )}

        <div className="flex items-center justify-between space-x-4">
          {showSearchInput ? (
            <X onClick={toggleSearch} className="cursor-pointer" />
          ) : (
            <SearchIcon onClick={toggleSearch} className="cursor-pointer" />
          )}
          <CartSheet />
          <UserDropDownMenu />
        </div>
      </HorizontalPaddingContainer>
    </header>
  );
};

export default NavBar;
