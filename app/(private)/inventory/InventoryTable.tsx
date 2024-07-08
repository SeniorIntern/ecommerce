'use client';

import { useProducts } from '@/hooks';
import { DataTable } from '../data-table';
import TableSkeleton from '../TableSkeleton';
import { columns } from './inventory-columns';

export const InventoryTable = () => {
  const { data, isLoading } = useProducts({ page: 1, limit: 8 });

  if (isLoading) return <TableSkeleton />;

  return (
    <div>
      {data?.data.products && (
        <DataTable columns={columns} data={data.data.products} />
      )}
    </div>
  );
};
