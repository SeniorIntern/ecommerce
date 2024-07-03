'use client';

import { Checkbox } from '@/components/ui/checkbox';
import { cn } from '@/lib/utils';
import { useRouter } from 'next/navigation';

type Props = {
  option: string;
  selectedCategory: string;
};

const CategoryCheckbox = ({ option, selectedCategory }: Props) => {
  const router = useRouter();

  return (
    <div className="flex items-center space-x-2">
      <Checkbox
        id={option}
        checked={selectedCategory === option}
        className={cn('border-accent')}
        onClick={() => router.push(`?category=${option}`)}
      />
      <label
        htmlFor={option}
        className="text-sm peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        {option}
      </label>
    </div>
  );
};

export default CategoryCheckbox;
