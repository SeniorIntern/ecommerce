'use client';

import Img from '@/components/reusables/Img';
import { Product } from '@/types';
import { ColumnDef } from '@tanstack/react-table';
import { Image } from 'lucide-react';

export const columns: ColumnDef<Product>[] = [
  {
    accessorKey: 'name',
    header: 'Status'
  },
  {
    accessorKey: 'category.name',
    header: 'Category'
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
    header: 'Main Image',
    cell: ({ row }) => <Img imgSrc={row.getValue('mainImage.url')} />
  },
  {
    id: 'subImages.length',
    accessorKey: 'subImages.length',
    header: 'Sub Images',
    cell: ({ row }) => <Image />
  }
];
