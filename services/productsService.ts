import { AllProductsFetchResponse } from '@/types';

import HttpService from './HttpService';

export default new HttpService<AllProductsFetchResponse>('/ecommerce/products');
