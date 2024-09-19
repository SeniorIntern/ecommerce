'use client';

import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog';
import { TOAST_KEY_ANNOUNCE } from '@/constants';
import { useDeleteProduct } from '@/hooks';
import { Product } from '@/types';
import { toast } from 'sonner';

const ProductDeleteDialog = ({ product }: { product: Product }) => {
  const { mutate: deleteProduct } = useDeleteProduct(); // Use mutation hook to delete category
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
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <button className="rounded bg-red-500 px-2 py-1 text-white hover:bg-red-600">
            Delete
          </button>
        </DialogTrigger>
        <DialogContent className="max-w-fit">
          <DialogHeader>
            <DialogTitle>Delete the product</DialogTitle>
          </DialogHeader>
          <div className="space-y-2">
            <p className="">Are you sure you want to delete this product?</p>
            <Button
              className="w-full"
              variant="destructive"
              onClick={handleDelete}
            >
              Confirm
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ProductDeleteDialog;
