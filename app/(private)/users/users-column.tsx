'use client';

import Img from '@/components/reusables/Img';
import { Badge } from '@/components/ui/badge';
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
    header: 'Role',
    cell: ({ row }) => <Badge>{row.getValue('role')}</Badge>
  },
  {
    id: 'avatar',
    accessorKey: 'avatar',
    header: 'Avatar',
    cell: ({ row }) => <Img imgSrc={row.getValue('avatar')} />
  }
];
