import { QUERY_KEY_PROFILE } from '@/constants';
import { profileService } from '@/services';
import { ProfileFetchResponse } from '@/types';
import { useQuery } from '@tanstack/react-query';

const useProfile = () => {
  return useQuery<ProfileFetchResponse, Error>({
    queryKey: [QUERY_KEY_PROFILE],
    queryFn: profileService.getMe
  });
};

export default useProfile;
