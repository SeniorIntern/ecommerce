'use server';

import { logout } from '@/actions/action';
import { Button } from '../ui/button';

const Logout = () => {
  return (
    <form
      action={async () => {
        'use server';
        await logout();
      }}
      className="w-full"
    >
      <Button className="w-full" variant="destructive">
        Logout
      </Button>
    </form>
  );
};

export default Logout;
