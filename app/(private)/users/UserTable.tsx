'use client';

import { useUsers } from '@/hooks';
import { DataTable } from '../data-table';
import TableSkeleton from '../TableSkeleton';
import { columns } from './users-column';

export const UserTable = () => {
  const { data, isLoading } = useUsers({ page: 1, limit: 8 });

  if (isLoading) return <TableSkeleton />;
  console.log(data?.data);

  return (
    <div>{data?.data && <DataTable columns={columns} data={data.data} />}</div>
  );
};
