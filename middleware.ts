import { NextRequest, NextResponse } from 'next/server';
import { COOKIES } from './constants';

export async function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;

  const authPath = path === '/login' || path === '/register';
  const adminPath =
    path === '/dashboard' ||
    path === '/orders' ||
    path === '/users' ||
    path === '/inventory' ||
    path === '/categories';

  const userPath = path === '/checkout' || path === 'confirm-payment';

  const user = request.cookies.get(COOKIES.USER)?.value;

  if (!user && (adminPath || userPath)) {
    return NextResponse.redirect(new URL('/login', request.nextUrl));
  }

  if (user && authPath) {
    return NextResponse.redirect(new URL('/', request.nextUrl));
  }

  if (user && adminPath && user && JSON.parse(user).role !== 'ADMIN') {
    return NextResponse.redirect(new URL('/', request.nextUrl));
  }
}

export const config = {
  matcher: [
    '/login',
    '/register',
    '/checkout',
    '/confirm-payment',
    '/dashboard',
    '/orders',
    '/users',
    '/categories',
    '/inventory'
  ]
};
