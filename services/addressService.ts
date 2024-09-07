import { AddressFetchResponse } from '@/types';

import HttpService from './HttpService';

export default new HttpService<AddressFetchResponse>('/addresses');
