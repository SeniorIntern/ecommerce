import {
  QUERY_KEY_PRODUCTS,
  TOAST_KEY_ANNOUNCE
} from '@/constants';
import { apiClient } from '@/services';
import { SingleProductsFetchResponse } from '@/types';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';

const useDeleteProduct = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (productId: string) =>
      apiClient
        .delete<SingleProductsFetchResponse>(`/products/${productId}`)
        .then((res) => res.data),
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: [QUERY_KEY_PRODUCTS] });
      toast.success('Product is deleted', {
        id: TOAST_KEY_ANNOUNCE
      });
    }
  });
};

export default useDeleteProduct;
