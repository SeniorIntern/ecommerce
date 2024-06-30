import { PropsWithChildren } from 'react';
import AdminAside from './AdminAside';
import { AdminNavbar } from './AdminNavbar';

export default function PrivateLayout({ children }: PropsWithChildren) {
  return (
    <div className="container flex">
      <AdminAside />
      <main className="grow">
        <AdminNavbar />
        <div className="px-4 py-8">{children}</div>
      </main>
    </div>
  );
}
