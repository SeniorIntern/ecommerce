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
  category: Category;
  description: string;
  productName: string;
  owner: string;
  price: number;
  stock: number;
  mainImage: string;
  subImages: string[];
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
  categoryName: string;
  owner: string;
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
  avatar: string;
  email: string;
  role: 'ADMIN' | 'USER';
  isEmailVerified: boolean;
  username: string;
};

type UsersFetchResponse = ApiResponseInfo & {
  data: User[];
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

type MyOrdersFetchResonse = ApiResponseInfo & {
  data: {
    orders: Order[];
  };
};

type Order = {
  _id: string;
  userId: string;
  orderItems: [
    {
      productId: {
        _id: string;
        productName: string;
        price: number;
      };
      quantity: number;
      price: number;
      _id: string;
    }
  ];
  totalPrice: number;
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
  avatar: string;
  createdAt: Date;
  email: string;
  isEmailVerified: string;
  loginType: string;
  role?: string;
  updatedAt: Date;
  fullName: string;
  username: string;
};

type ProfileFetchResponse = ApiResponseInfo & {
  data: Profile;
};

type AvatarUploadResponse = ApiResponseInfo & {
  data: {
    _id: string;
    avatar: string;
  };
};

type ProfileInformationPatchResponse = ApiResponseInfo & {
  data: {
    _id: string;
    username: string;
    email: string;
    fullName: string;
  };
};

type ChangePasswordResponse = ApiResponseInfo & {};

type AddCategoryResponse = ApiResponseInfo & {
  data: {
    categoryName: string;
    owner: string;
    _id: string;
  };
};

type UpdateCategoryResponse = AddCategoryResponse;

export {
  AddCategoryResponse,
  Address,
  AddressFetchResponse,
  AllOrdersFetchResponse,
  AllProductsFetchResponse,
  AvatarUploadResponse,
  Category,
  CategoryFetchResponse,
  ChangePasswordResponse,
  LoginReponse,
  MyOrdersFetchResonse,
  Order,
  PaginationParams,
  Product,
  Profile,
  ProfileFetchResponse,
  ProfileInformationPatchResponse,
  RegistrationReponse,
  Session,
  SingleProductsFetchResponse,
  UpdateCategoryResponse,
  User,
  UsersFetchResponse
};
