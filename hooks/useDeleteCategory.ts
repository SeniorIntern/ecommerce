import { QUERY_KEY_CATEGORIES, TOAST_KEY_ANNOUNCE } from '@/constants';
import { apiClient } from '@/services';
import { AddCategoryResponse } from '@/types';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';

const useDeleteCategory = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (categoryId: string) =>
      apiClient
        .delete<AddCategoryResponse>(`/categories/${categoryId}`)
        .then((res) => res.data),
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: [QUERY_KEY_CATEGORIES] });
      toast.success('Category is deleted', {
        id: TOAST_KEY_ANNOUNCE
      });
    }
  });
};

export default useDeleteCategory;
