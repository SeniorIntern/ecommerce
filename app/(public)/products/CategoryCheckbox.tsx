import { Checkbox } from '@/components/ui/checkbox';
import { cn } from '@/lib/utils';

type Props = {
  option: string;
};

const CategoryCheckbox = ({ option }: Props) => {
  return (
    <div className="flex items-center space-x-2">
      <Checkbox id={option} className={cn('border-accent bg-white')} />
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
