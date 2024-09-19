import { AdminAllOrdersFetchResponse } from '@/types';

import HttpService from './HttpService';

export default new HttpService<AdminAllOrdersFetchResponse>('/orders');
