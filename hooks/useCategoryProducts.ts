import { QUERY_KEY_CATEGORY_PRODUCTS } from '@/constants';
import categoryProductService from '@/services/categoryProductService';
import { AllProductsFetchResponse, PaginationParams } from '@/types';
import { useQuery } from '@tanstack/react-query';

type Params = PaginationParams & { _id: string };

const useCategoryProducts = ({ _id, page, limit }: Params) => {
  return useQuery<AllProductsFetchResponse, Error>({
    queryKey: [QUERY_KEY_CATEGORY_PRODUCTS, _id],
    queryFn: () => categoryProductService.getOneById(_id, page, limit)
  });
};

export default useCategoryProducts;
