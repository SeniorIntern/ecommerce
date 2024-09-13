'use client';

import Img from '@/components/reusables/Img';
import { Badge } from '@/components/ui/badge';
import { TOAST_KEY_ANNOUNCE } from '@/constants';
import { useDeleteProduct } from '@/hooks';
import { Product } from '@/types';
import { ColumnDef } from '@tanstack/react-table';
import { toast } from 'sonner';
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
      const { mutate: deleteProduct } = useDeleteProduct(); // Use mutation hook to delete category
      const product = row.original; // Access the entire row's data

      const handleDelete = () => {
        deleteProduct(product._id, {
          onSuccess: () =>
            toast.success('Product deleted successfully', {
              id: TOAST_KEY_ANNOUNCE
            }),
          onError: () =>
            toast.error('Failed to delete the product', {
              id: TOAST_KEY_ANNOUNCE
            })
        });
      };

      return (
        <span className="flex items-center gap-1">
          <ProductDeleteDialog handleDelete={handleDelete} />
          <ProductInfoUpdateDialog product={product} />
          <ProductImgUpdateDialog product={product} />
        </span>
      );
    }
  }
];
