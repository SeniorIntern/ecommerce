'use server';

import { COOKIES } from '@/constants';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

async function searchProduct(formData: FormData) {
  'use server';
  const keyword = formData.get('search');
  redirect(`/products/search?search=${keyword}`);
}

async function logout() {
  cookies().set(COOKIES.USER, '', { expires: new Date(0) });
  cookies().set(COOKIES.ACCESS_TOKEN, '', { expires: new Date(0) });
  cookies().set(COOKIES.REFRESH_TOKEN, '', { expires: new Date(0) });
  redirect('/login');
}

export { logout, searchProduct };
