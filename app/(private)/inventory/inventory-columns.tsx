'use client';

import Img from '@/components/reusables/Img';
import { Badge } from '@/components/ui/badge';
import { Product } from '@/types';
import { ColumnDef } from '@tanstack/react-table';
import ProductDeleteDialog from './ProductDeleteDialog';
import ProductImgUpdateDialog from './ProductImgUpdateDialog';
import { ProductInfoUpdateDialog } from './ProductInfoUpdateDialog';

export const columns: ColumnDef<Product>[] = [
  {
    accessorKey: 'productName',
    header: 'Product Name'
  },
  {
    accessorKey: 'category.categoryName',
    header: 'Category',
    cell: ({ row }) => (
      <Badge variant="secondary">{row.original.category.categoryName}</Badge>
    )
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
    accessorKey: 'mainImage',
    header: 'Main Image',
    cell: ({ row }) => <Img imgSrc={row.getValue('mainImage')} />
  },
  {
    id: 'subImages.length',
    accessorKey: 'subImages.length',
    header: 'Sub Images',
    cell: ({ row }) => <span>{row.original.subImages.length} images</span>
  },
  {
    id: 'actions',
    header: 'Actions',
    cell: ({ row }) => {
      const product = row.original; // Access the entire row's data

      return (
        <span className="flex items-center gap-1">
          <ProductDeleteDialog product={product} />
          <ProductInfoUpdateDialog product={product} />
          <ProductImgUpdateDialog product={product} />
        </span>
      );
    }
  }
];
