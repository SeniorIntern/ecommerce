'use client';

import { DataTable } from '@/app/(private)/data-table';
import TableSkeleton from '@/app/(private)/TableSkeleton';
import { useMyOrders } from '@/hooks';
import { columns } from './Order-Columns';

export const MyOrdersTable = () => {
  const { isLoading, error, data } = useMyOrders({
    page: 1,
    limit: 12
  });

  if (isLoading) return <TableSkeleton />;

  return (
    <div>
      {data?.data.orders && (
        <DataTable columns={columns} data={data.data.orders} />
      )}
    </div>
  );
};
