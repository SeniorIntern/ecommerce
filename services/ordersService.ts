import { AllOrdersFetchResponse } from '@/types';

import HttpService from './HttpService';

export default new HttpService<AllOrdersFetchResponse>('/orders/list/admin');
