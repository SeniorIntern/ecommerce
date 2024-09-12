import { QUERY_KEY_CATEGORIES, TOAST_KEY_ANNOUNCE } from '@/constants';
import { apiClient } from '@/services';
import { UpdateCategoryResponse } from '@/types';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';

const usePatchCategory = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      categoryId,
      categoryName
    }: {
      categoryId: string;
      categoryName: string;
    }) =>
      apiClient
        .put<UpdateCategoryResponse>(`/categories/${categoryId}`, {
          categoryName
        })
        .then((res) => res.data),
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: [QUERY_KEY_CATEGORIES] });
      toast.success('Category is updated', {
        id: TOAST_KEY_ANNOUNCE
      });
    }
  });
};

export default usePatchCategory;
