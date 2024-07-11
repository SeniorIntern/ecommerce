import { AllOrdersFetchResponse } from '@/types';

import HttpService from './HttpService';

export default new HttpService<AllOrdersFetchResponse>('/ecommerce/orders/list/admin');
