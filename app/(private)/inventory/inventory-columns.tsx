'use client';

import { Product } from '@/types';
import { ColumnDef } from '@tanstack/react-table';

export const columns: ColumnDef<Product>[] = [
  {
    accessorKey: 'name',
    header: 'Status'
  },
  {
    accessorKey: 'category',
    header: 'Category'
  },
  {
    accessorKey: 'description',
    header: 'Amount'
  },
  {
    accessorKey: 'price',
    header: 'Price'
  },
  {
    accessorKey: 'stock',
    header: 'Stock'
  },
  {
    accessorKey: 'mainImage.url',
    header: 'Main Image'
  },
  {
    accessorKey: 'subImages.length',
    header: 'Sub Images'
  }
];
