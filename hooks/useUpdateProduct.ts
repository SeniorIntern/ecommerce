import { QUERY_KEY_PRODUCTS, TOAST_KEY_ANNOUNCE } from '@/constants';
import { apiClient } from '@/services';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';

type UpdateProduct = {
  productName: string;
  category: string;
  description: string;
  price: number;
  stock: number;
};

const usePatchProduct = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      productId,
      product
    }: {
      productId: string;
      product: UpdateProduct;
    }) =>
      apiClient
        .put(`/products/${productId}`, {
          product
        })
        .then((res) => res.data),
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: [QUERY_KEY_PRODUCTS] });
      toast.success('Product information is updated', {
        id: TOAST_KEY_ANNOUNCE
      });
    }
  });
};

export default usePatchProduct;
