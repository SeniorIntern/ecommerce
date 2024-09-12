'use client';

import { useCategories } from '@/hooks';
import { DataTable } from '../data-table';
import TableSkeleton from '../TableSkeleton';
import { columns } from './category-columns';

const CategoryTable = () => {
  const { data, isLoading, error } = useCategories({ page: 1, limit: 8 });
  if (isLoading) return <TableSkeleton />;
  if (error) return <p>{error.message}</p>;

  return (
    <div>
      {data?.data.categories && (
        <DataTable columns={columns} data={data?.data.categories} />
      )}
    </div>
  );
};

export default CategoryTable;
