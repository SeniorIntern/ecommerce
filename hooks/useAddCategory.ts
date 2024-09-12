import { QUERY_KEY_CATEGORIES, TOAST_KEY_ANNOUNCE } from '@/constants';
import { apiClient } from '@/services';
import { AddCategoryResponse } from '@/types';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';

const useAddCategory = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (categoryName: string) =>
      apiClient
        .post<AddCategoryResponse>('/categories', {
          categoryName
        })
        .then((res) => res.data),
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: [QUERY_KEY_CATEGORIES] });
      toast.success('New category added', {
        id: TOAST_KEY_ANNOUNCE
      });
    }
  });
};

export default useAddCategory;
