'use client';

import { cn } from '@/lib/utils';
import { Book, Group, House, ShoppingBag, User } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const AdminAside = () => {
  const pathname = usePathname();

  return (
    <aside className="h-screen w-44 space-y-3 border border-r-gray-200 p-4">
      <Link
        href={'/dashboard'}
        className={cn(
          'flex items-center space-x-2 rounded-md px-1 py-2 text-mutedtext',
          pathname === '/dashboard' && 'bg-accent text-white hover:bg-accent/80'
        )}
      >
        <House />
        <span>Dashboard</span>
      </Link>

      <Link
        href={'/orders'}
        className={cn(
          'flex items-center space-x-2 rounded-md px-1 py-2 text-mutedtext',
          pathname === '/orders' && 'bg-accent text-white hover:bg-accent/80'
        )}
      >
        <ShoppingBag />
        <span>Orders</span>
      </Link>

      <Link
        href={'/users'}
        className={cn(
          'flex items-center space-x-2 rounded-md px-1 py-2 text-mutedtext',
          pathname === '/users' && 'bg-accent text-white hover:bg-accent/80'
        )}
      >
        <User />
        <span>Users</span>
      </Link>
      <Link
        href={'/categories'}
        className={cn(
          'flex items-center space-x-2 rounded-md px-1 py-2 text-mutedtext',
          pathname === '/categories' &&
            'bg-accent text-white hover:bg-accent/80'
        )}
      >
        <Group />
        <span>Categories</span>
      </Link>
      <Link
        href={'/inventory'}
        className={cn(
          'flex items-center space-x-2 rounded-md px-1 py-2 text-mutedtext',
          pathname === '/inventory' && 'bg-accent text-white hover:bg-accent/80'
        )}
      >
        <Book />
        <span>Inventory</span>
      </Link>
    </aside>
  );
};

export default AdminAside;
