'use client';

import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { productCategories } from '@/staticData';
import { X } from 'lucide-react';
import { useRouter } from 'next/navigation';
import CategoryCheckbox from './CategoryCheckbox';

const ProductFilterAside = () => {
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
          {productCategories.map((item, idx) => (
            <CategoryCheckbox
              key={idx}
              option={item.option}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductFilterAside;
