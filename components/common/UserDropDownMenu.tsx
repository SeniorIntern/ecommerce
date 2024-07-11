'use client';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import getCookieUser from '@/helpers/getCookieUser';
import { isNull } from 'lodash';
import Link from 'next/link';

const UserDropDown = () => {
  const user = getCookieUser();

  const navOptions = [
    {
      href: '/profile',
      label: 'Profile'
    },
    {
      href: '/orders',
      label: 'Orders'
    },
    {
      href: '/wishlist',
      label: 'Wishlist'
    }
  ];

  if (isNull(user)) return <Link href="/login">Login</Link>;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Avatar className="size-8">
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>My Profile</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {navOptions.map((item, idx) => (
          <DropdownMenuItem key={idx} className="focus:bg-accent/40">
            <Link href={item.href} className="size-full">
              {item.label}
            </Link>
          </DropdownMenuItem>
        ))}
        <DropdownMenuSeparator />
        <DropdownMenuLabel>Log Out</DropdownMenuLabel>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserDropDown;
