import { TOAST_KEY_ANNOUNCE } from '@/constants';
import { apiClient } from '@/services';
import { Profile, ProfileInformationPatchResponse } from '@/types';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';

const usePatchProfileInformation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (
      payload: Partial<Pick<Profile, 'fullName' | 'email' | 'username'>>
    ) =>
      apiClient
        .patch<ProfileInformationPatchResponse>(
          '/users/update-account',
          payload
        )
        .then((res) => res.data),
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ['QUERY_KEY_PROFILE'] });
      toast.success('Account details updated successfully', {
        id: TOAST_KEY_ANNOUNCE
      });
    }
  });
};

export default usePatchProfileInformation;
