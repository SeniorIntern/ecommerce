import { QUERY_KEY_PRODUCTS } from '@/constants';
import { productsService } from '@/services';
import { AllProductsFetchResponse, PaginationParams } from '@/types';
import { useQuery } from '@tanstack/react-query';

const useProducts = ({ page, limit }: PaginationParams) => {
  return useQuery<AllProductsFetchResponse, Error>({
    queryKey: QUERY_KEY_PRODUCTS,
    queryFn: () => productsService.get(page, limit)
  });
};

export default useProducts;
