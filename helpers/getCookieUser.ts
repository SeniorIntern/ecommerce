import { User } from '@/types';
import { getCookie } from 'cookies-next';

const getCookieUser = (): User | null => {
  const CookieUser = getCookie('user') || undefined;
  if (CookieUser) {
    const user = JSON.parse(CookieUser) as User;
    return user;
  } else return null;
};

export default getCookieUser;
