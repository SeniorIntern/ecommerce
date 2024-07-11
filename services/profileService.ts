import { ProfileFetchResponse } from '@/types';

import HttpService from './HttpService';

export default new HttpService<ProfileFetchResponse>('/users/current-user');
