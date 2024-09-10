import { Profile } from '@/types';

type User = Pick<Profile, 'fullName' | 'email' | 'username'>;

function filterDuplicates(inputObj: User, compareObj: User): Partial<User> {
  return Object.keys(inputObj).reduce((result: Partial<User>, key) => {
    if (inputObj[key as keyof User] !== compareObj[key as keyof User]) {
      result[key as keyof User] = inputObj[key as keyof User];
    }
    return result;
  }, {});
}

export default filterDuplicates;
