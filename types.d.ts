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
  createdAt: string;
  updatedAt: string;
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

type Address = {
  _id: string;
  owner: string;
  city: string;
  country: string;
  state: string;
  addressLine1: string;
  addressLine2: string;
};

type AddressFetchResponse = ApiResponseInfo & {
  data: Address;
};

type Order = {
  _id: string;
  address: Address;
  coupon: null | string;
  customer: {
    _id: string;
    email: string;
    username: string;
  };
  discountedOrderPrice: number;
  isPaymentDone: boolean;
  orderPrice: number;
  paymentId: string;
  paymentProvider: 'PAYPAL';
  status: 'PENDING' | 'DELIVERED' | 'CANCELLED';
  totalOrderItems: number;
  createdAt: Date;
  updatedAt: Date;
};

type AllOrdersFetchResponse = ApiResponseInfo & {
  data: PaginationInfo & {
    orders: Order[];
    totalOrders: string;
  };
};

type Profile = {
  _id: string;
  avatar: {
    _id: string;
    url: string;
  };
  createdAt: Date;
  email: string;
  isEmailVerified: string;
  loginType: string;
  role: string;
  updatedAt: Date;
  username: string;
};

type ProfileFetchResponse = ApiResponseInfo & {
  data: Profile;
};

export {
  Address,
  AddressFetchResponse,
  AllOrdersFetchResponse,
  AllProductsFetchResponse,
  Category,
  CategoryFetchResponse,
  LoginReponse,
  Order,
  PaginationParams,
  Product,
  Profile,
  ProfileFetchResponse,
  RegistrationReponse,
  Session,
  SingleProductsFetchResponse,
  User
};
