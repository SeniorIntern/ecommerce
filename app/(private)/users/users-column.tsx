'use client';

import Img from '@/components/reusables/Img';
import { User } from '@/types';
import { ColumnDef } from '@tanstack/react-table';

export const columns: ColumnDef<User>[] = [
  {
    accessorKey: 'username',
    header: 'Username'
  },
  {
    accessorKey: 'email',
    header: 'Email'
  },
  {
    accessorKey: 'role',
    header: 'Role'
  },
  {
    id: 'avatar',
    accessorKey: 'avatar',
    header: 'Avatar',
    cell: ({ row }) => <Img imgSrc={row.getValue('avatar')} />
  }
];
