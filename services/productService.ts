import { ProductFetchResponse } from '@/types';

import HttpService from './HttpService';

export default new HttpService<ProductFetchResponse>('/products');
