type ApiResponseInfo = {
  statusCode: number;
  message: string;
  sucess: boolean;
};

type PaginationInfo = {
  hasNextPage: boolean;
  hasPrevPage: boolean;
  limit: number;
  nextPage: number;
  page: number;
  prevPage: null | number;
  totalPages: number;
};

type PaginationParams = {
  limit: number;
  page: number;
};

type Product = {
  _id: string;
  category: string;
  description: string;
  name: string;
  owner: string;
  price: number;
  stock: number;
  mainImage: {
    _id: string;
    url: string;
  };
  subImages: {
    _id: string;
    url: string;
  }[];
};

type SingleProductsFetchResponse = ApiResponseInfo & {
  data: Product;
};

type AllProductsFetchResponse = ApiResponseInfo & {
  data: PaginationInfo & {
    products: Product[];
    totalProducts: number;
  };
};

type Category = {
  _id: string;
  name: string;
  createdAt:string;
  updatedAt:string;
};

type CategoryFetchResponse = ApiResponseInfo & {
  data: PaginationInfo & {
    categories: Category[];
    totalCategories: number;
  };
};

type User = {
  _id: string;
  avatar: {
    url: string;
  };
  email: string;
  role: 'ADMIN' | 'SELLER';
  isEmailVerified: boolean;
  username: string;
};

type LoginReponse = ApiResponseInfo & {
  data: {
    accessToken: string;
    refreshToken: string;
    user: User;
  };
};

type RegistrationReponse = ApiResponseInfo & {
  data: {
    user: User;
  };
};

type Session = {
  userData: User;
  expires: number;
};

export {
  PaginationParams,
  Product,
  AllProductsFetchResponse,
  SingleProductsFetchResponse,
  Category,
  CategoryFetchResponse,
  User,
  LoginReponse,
  RegistrationReponse,
  Session
};
