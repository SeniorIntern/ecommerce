'use client';

import { Checkbox } from '@/components/ui/checkbox';
import { cn } from '@/lib/utils';
import { Category } from '@/types';
import { useRouter } from 'next/navigation';

type Props = {
  selectedCategoryId: string;
  category: Category;
};

const CategoryCheckbox = ({ category, selectedCategoryId }: Props) => {
  const router = useRouter();

  return (
    <div className="flex items-center space-x-2">
      <Checkbox
        id={category._id}
        checked={category._id === selectedCategoryId}
        className={cn('border-accent')}
        onClick={() => router.push(`?category=${category._id}`)}
      />
      <label
        htmlFor={category.name}
        className="text-sm peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        {category.name}
      </label>
    </div>
  );
};

export default CategoryCheckbox;
