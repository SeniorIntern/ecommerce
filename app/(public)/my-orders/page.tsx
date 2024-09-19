'use client';

import { HorizontalPaddingContainer } from '@/components/reusables/HorizontalPaddingContainer';
import { useMyOrders } from '@/hooks';
import { MyOrdersTable } from '../profile/MyOrdersTable';

export default function Page() {
  const { isLoading, error, data } = useMyOrders({
    page: 1,
    limit: 12
  });
  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>{error.message}</p>;

  return (
    <section className="my-10">
      <HorizontalPaddingContainer>
        <div className="space-y-3">
          <h1 className="text-xl">My orders</h1>
          <MyOrdersTable />
        </div>
      </HorizontalPaddingContainer>
    </section>
  );
}
