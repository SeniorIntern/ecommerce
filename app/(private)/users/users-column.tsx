'use client';

import Img from '@/components/reusables/Img';
import { User } from '@/types';
import { ColumnDef } from '@tanstack/react-table';

export const columns: ColumnDef<User>[] = [
  {
    accessorKey: '_id',
    header: 'User Id'
  },
  {
    accessorKey: 'username',
    header: 'Username'
  },
  {
    accessorKey: 'email',
    header: 'Email'
  },
  {
    id: 'avatar.url',
    accessorKey: 'avatar.url',
    header: 'Avatar',
    cell: ({ row }) => <Img imgSrc={row.getValue('avatar.url')} />
  }
];
