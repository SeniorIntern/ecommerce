import { QUERY_KEY_ORDERS } from '@/constants';
import { ordersService } from '@/services';
import { AdminAllOrdersFetchResponse, PaginationParams } from '@/types';
import { useQuery } from '@tanstack/react-query';

const useOrders = ({ page, limit }: PaginationParams) => {
  return useQuery<AdminAllOrdersFetchResponse, Error>({
    queryKey: [QUERY_KEY_ORDERS],
    queryFn: () => ordersService.get(page, limit)
  });
};

export default useOrders;
