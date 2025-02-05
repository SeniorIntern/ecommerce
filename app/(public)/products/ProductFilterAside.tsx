'use client';

import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Skeleton } from '@/components/ui/skeleton';
import { useCategories } from '@/hooks';
import { X } from 'lucide-react';
import { useRouter } from 'next/navigation';
import CategoryCheckbox from './CategoryCheckbox';

type Props = {
  selectedCategoryId: string;
};

const ProductFilterAside = ({ selectedCategoryId }: Props) => {
  const { data, isLoading } = useCategories({ page: 1, limit: 40 });

  const router = useRouter();

  return (
    <div className="w-72 min-w-fit space-y-6">
      <div className="flex items-center justify-between">
        <p className="text-xl">Browse By</p>
        <Button
          variant="outline"
          size="sm"
          className="text-sm hover:bg-gray-100"
          onClick={() => router.push('/products')}
        >
          <X size={16} />
          Clear Filter
        </Button>
      </div>

      <Separator className="my-8" color="black" />

      <div className="space-y-6">
        <p className="text-xl">Category</p>
        <div className="space-y-3">
          {isLoading
            ? Array.from({ length: 10 }).map((_, idx) => (
                <div key={idx} className="flex gap-2">
                  <Skeleton className="size-5" />
                  <Skeleton className="h-5 w-36" />
                </div>
              ))
            : data?.data.categories.map((category) => (
                <CategoryCheckbox
                  selectedCategoryId={selectedCategoryId}
                  key={category._id}
                  category={category}
                />
              ))}
        </div>
      </div>
    </div>
  );
};

export default ProductFilterAside;
