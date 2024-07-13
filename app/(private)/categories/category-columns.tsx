'use client';

import { formatDate } from '@/helpers';
import { Category } from '@/types';
import { ColumnDef } from '@tanstack/react-table';

export const columns: ColumnDef<Category>[] = [
  {
    accessorKey: 'name',
    header: 'Category Name'
  },
  {
    accessorKey: 'createdAt',
    header: 'Create Date',
    cell: ({ row }) => formatDate(row.getValue('createdAt'))
  },
  {
    accessorKey: 'updatedAt',
    header: 'Update Date',
    cell: ({ row }) => formatDate(row.getValue('updatedAt'))
  }
];
