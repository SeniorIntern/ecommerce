import { QUERY_KEY_USERS } from '@/constants';
import { userService } from '@/services';
import {
  PaginationParams,
  UsersFetchResponse
} from '@/types';
import { useQuery } from '@tanstack/react-query';

const useUsers = ({ page, limit }: PaginationParams) => {
  return useQuery<UsersFetchResponse, Error>({
    queryKey: [QUERY_KEY_USERS, page, limit],
    queryFn: () => userService.get(page, limit)
  });
};

export default useUsers;
