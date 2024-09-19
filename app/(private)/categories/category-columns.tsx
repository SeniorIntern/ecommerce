'use client';

import { formatDate } from '@/helpers';
import { Category } from '@/types';
import { ColumnDef } from '@tanstack/react-table';
import CategoryDeleteDialog from './CategoryDeleteDialog';
import { CategoryUpdateDialog } from './CategoryUpdateDialog';

export const columns: ColumnDef<Category>[] = [
  {
    accessorKey: 'categoryName',
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
  },
  {
    id: 'actions',
    header: 'Actions',
    cell: ({ row }) => {
      const category = row.original;

      return (
        <span className="flex items-center gap-1">
          <CategoryDeleteDialog category={category} />
          <CategoryUpdateDialog category={category} />
        </span>
      );
    }
  }
];
