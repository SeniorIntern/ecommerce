import { Skeleton } from '@/components/ui/skeleton';

const ProductPageCardSkeleton = () => {
  return (
    <div className="grid grid-cols-1 gap-10 sm:grid-cols-2">
      <Skeleton className="h-[500px]" />

      <div className="space-y-6">
        <Skeleton className="h-10 w-1/2" />

        <div className="">
          <Skeleton className="h-10 w-full" />
          <div>
            <Skeleton className="h-14 w-full" />
          </div>
        </div>

        <Skeleton className="h-10 w-20" />

        <div className="flex w-1/2 gap-1">
          <Skeleton className="h-10 w-1/2" />
          <Skeleton className="h-10 w-1/2" />
        </div>
      </div>
    </div>
  );
};

export default ProductPageCardSkeleton;
