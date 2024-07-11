import { CategoryFetchResponse } from '@/types';

import HttpService from './HttpService';

export default new HttpService<CategoryFetchResponse>('/ecommerce/categories');
