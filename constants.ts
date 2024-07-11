import PlaceholderImage from '@/public/product/productPlaceholder.jpg';

// Products
// const PLACEHOLDER_PROFILE_IMAGE = 'https://picsum.photos/id/40/4106/2806';
const PLACEHOLDER_PRODUCT_IMAGE = PlaceholderImage;

// Query
const STANDARD_STALE_TIME = 1 * 60 * 1000;
const QUERY_KEY_PRODUCTS = 'products';
const QUERY_KEY_ORDERS = 'orders';
const QUERY_KEY_CATEGORIES = 'categories';
const QUERY_KEY_CATEGORY_PRODUCTS = 'category_products';
const QUERY_KEY_PROFILE = 'profile';
const QUERY_KEY_ADDRESS = 'addresses';

// Toast
const TOAST_KEY_AUTH = 'auth';
const TOAST_KEY_ANNOUNCE = 'announcement';

// JWT
const JWT_EXPIRATION_TIME = '30 days from now';
const SESSION_EXPIRATION_TIME = 30 * 24 * 3600 * 1000;
const COOKIES = {
  ACCESS_TOKEN: 'accessToken',
  REFRESH_TOKEN: 'refreshToken',
  USER: 'user'
};

export {
  COOKIES,
  JWT_EXPIRATION_TIME,
  PLACEHOLDER_PRODUCT_IMAGE,
  QUERY_KEY_ADDRESS,
  QUERY_KEY_CATEGORIES,
  QUERY_KEY_CATEGORY_PRODUCTS,
  QUERY_KEY_ORDERS,
  QUERY_KEY_PRODUCTS,
  QUERY_KEY_PROFILE,
  SESSION_EXPIRATION_TIME,
  STANDARD_STALE_TIME,
  TOAST_KEY_ANNOUNCE,
  TOAST_KEY_AUTH
};
