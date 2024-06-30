import Footer from '@/components/common/Footer';
import NavBar from '@/components/common/NavBar';
import { PropsWithChildren } from 'react';

export default function PublicLayout({ children }: PropsWithChildren) {
  return (
    <div className="container flex min-h-screen flex-col">
      <NavBar />
      <main className="grow">{children}</main>
      <Footer />
    </div>
  );
}
