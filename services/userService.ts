import { UsersFetchResponse } from '@/types';
import HttpService from './HttpService';

export default new HttpService<UsersFetchResponse>('/users');
