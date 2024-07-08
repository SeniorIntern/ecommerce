import { Skeleton } from '@/components/ui/skeleton';

const TableSkeleton = () => {
  return (
    <div className="space-y-2 rounded-md border-gray-200 p-2">
      <div className="">
        <Skeleton className="h-10 w-full" />
      </div>
      <Skeleton className="h-80 w-full" />
    </div>
  );
};

export default TableSkeleton;
