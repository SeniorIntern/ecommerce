'use client';

import { Category } from '@/types';
import { ColumnDef } from '@tanstack/react-table';

export const columns: ColumnDef<Category>[] = [
  {
    accessorKey: 'name',
    header: 'Category Name'
  },
  {
    accessorKey: 'createdAt',
    header: 'Create Date'
  },
  {
    accessorKey: 'updatedAt',
    header: 'Update Date'
  }
];
