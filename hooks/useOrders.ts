import { QUERY_KEY_ORDERS } from '@/constants';
import { ordersService } from '@/services';
import { AllOrdersFetchResponse, PaginationParams } from '@/types';
import { useQuery } from '@tanstack/react-query';

const useOrders = ({ page, limit }: PaginationParams) => {
  return useQuery<AllOrdersFetchResponse, Error>({
    queryKey: [QUERY_KEY_ORDERS],
    queryFn: () => ordersService.get(page, limit)
  });
};

export default useOrders;
