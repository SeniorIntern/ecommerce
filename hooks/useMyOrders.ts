import { QUERY_KEY_ORDERS } from '@/constants';
import { apiClient } from '@/services';
import { MyOrdersFetchResonse, PaginationParams } from '@/types';
import { useQuery } from '@tanstack/react-query';

const useMyOrders = ({ page, limit }: PaginationParams) => {
  return useQuery<MyOrdersFetchResonse>({
    queryKey: [QUERY_KEY_ORDERS, 'user'],
    queryFn: () =>
      apiClient
        .get<MyOrdersFetchResonse>('/orders/my-orders')
        .then((res) => res.data)
  });
};

export default useMyOrders;
