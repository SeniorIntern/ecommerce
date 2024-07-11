import { SingleProductsFetchResponse } from '@/types';

import HttpService from './HttpService';

export default new HttpService<SingleProductsFetchResponse>('/ecommerce/products');
