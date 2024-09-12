import { QUERY_KEY_CATEGORIES, TOAST_KEY_ANNOUNCE } from '@/constants';
import { UserRegistrationFormSchema } from '@/Schemas';
import { apiClient } from '@/services';
import { RegistrationReponse } from '@/types';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';
import { z } from 'zod';

const useAddUser = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (values: z.infer<typeof UserRegistrationFormSchema>) =>
      apiClient
        .post<RegistrationReponse>('/users/register', {
          values
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

export default useAddUser;
