import { QUERY_KEY_PRODUCTS, TOAST_KEY_ANNOUNCE } from '@/constants';
import { apiClient } from '@/services';
import { SingleProductsFetchResponse } from '@/types';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';

const usePatchProductImages = (productId: string) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (values: FormData) =>
      apiClient
        .patch<SingleProductsFetchResponse>(
          `/products/images/${productId}`,
          values
        )
        .then((res) => res.data),
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: [QUERY_KEY_PRODUCTS] });
      toast.success('Product images updated', {
        id: TOAST_KEY_ANNOUNCE
      });
    }
  });
};

export default usePatchProductImages;
