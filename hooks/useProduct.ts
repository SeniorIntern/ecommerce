import { QUERY_KEY_PRODUCTS } from '@/constants';
import { productService } from '@/services';
import { SingleProductsFetchResponse } from '@/types';
import { useQuery } from '@tanstack/react-query';

const useProduct = (productId: string) => {
  return useQuery<SingleProductsFetchResponse, Error>({
    queryKey: [QUERY_KEY_PRODUCTS, productId],
    queryFn: () => productService.getOneById(productId)
  });
};

export default useProduct;
