import apiClient from './apiClient';

class HttpService<T> {
  constructor(private readonly endpoint: string) { }

  get = (page: number, limit: number) => {
    return apiClient
      .get<T>(this.endpoint, {
        params: {
          limit,
          page
        }
      })
      .then((res) => res.data);
  };

  getOneById = (_id: string, page?: number, limit?: number) => {
    return apiClient
      .get<T>(this.endpoint + '/' + _id, { params: { page, limit } })
      .then((res) => res.data);
  };

  getMe = () => {
    return apiClient.get<T>(this.endpoint).then((res) => res.data);
  };
  /*
  
      getAll = () => {
        return apiClient.get<T[]>(this.endpoint).then((res) => res.data);
      };
    
      getAllById = (id: string) => {
        return apiClient.get<T[]>(this.endpoint + '/' + id).then((res) => res.data);
      };
    
    */

  post = (data: T) => {
    return apiClient.post<T>(this.endpoint, data).then((res) => res.data);
  };

  patch = (data: FormData) => {
    apiClient.patch(this.endpoint, data).then((res) => res.data);
  };

  delete = (id: string) => {
    apiClient.delete(this.endpoint + '/' + id).then((res) => res.data);
  };
}

export default HttpService;
