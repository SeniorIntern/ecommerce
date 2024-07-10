'use client';

import useOrders from '@/hooks/useOrders';
import { DataTable } from '../data-table';
import TableSkeleton from '../TableSkeleton';
import { columns } from './orders-column';

export const OrdersTable = () => {
  const { data, isLoading } = useOrders({ page: 1, limit: 8 });

  if (isLoading) return <TableSkeleton />;

  return (
    <div>
      {data?.data.orders && (
        <DataTable columns={columns} data={data.data.orders} />
      )}
    </div>
  );
};
