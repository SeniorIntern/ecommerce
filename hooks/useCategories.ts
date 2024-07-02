import { QUERY_KEY_CATEGORIES } from '@/constants';
import { categoryService } from '@/services';
import { CategoryFetchResponse, PaginationParams } from '@/types';
import { useQuery } from '@tanstack/react-query';

const useCategories = ({ page, limit }: PaginationParams) => {
  return useQuery<CategoryFetchResponse, Error>({
    queryKey: QUERY_KEY_CATEGORIES,
    queryFn: () => categoryService.get(page, limit)
  });
};

export default useCategories;
