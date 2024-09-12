'use client';

import { TOAST_KEY_ANNOUNCE } from '@/constants';
import { formatDate } from '@/helpers';
import { useDeleteCategory } from '@/hooks';
import { Category } from '@/types';
import { ColumnDef } from '@tanstack/react-table';
import { toast } from 'sonner';
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
      const { mutate: deleteCategory } = useDeleteCategory(); // Use mutation hook to delete category
      const category = row.original; // Access the entire row's data

      const handleDelete = () => {
        deleteCategory(category._id, {
          onSuccess: () =>
            toast.success('Category deleted successfully', {
              id: TOAST_KEY_ANNOUNCE
            }),
          onError: () =>
            toast.error('Failed to delete the category', {
              id: TOAST_KEY_ANNOUNCE
            })
        });
      };

      return (
        <span className="flex items-center gap-1">
          <CategoryDeleteDialog handleDelete={handleDelete} />
          <CategoryUpdateDialog category={category} />
        </span>
      );
    }
  }
];
