import { QUERY_KEY_ADDRESS } from '@/constants';
import { addressService } from '@/services';
import { AddressFetchResponse } from '@/types';
import { useQuery } from '@tanstack/react-query';

const useProduct = (addressId: string) => {
  return useQuery<AddressFetchResponse, Error>({
    queryKey: [QUERY_KEY_ADDRESS, addressId],
    queryFn: () => addressService.getOneById(addressId)
  });
};

export default useProduct;
