import { Button } from '@/components/ui/button';
import CategoryTable from './CategoryTable';

export default function Page() {
  return (
    <section className="space-y-3">
      <div>
        <p className="text-3xl font-extrabold">Categories</p>
        <div className="flex justify-between">
          <span className="text-mutedtext">All Categories</span>
          <Button>Add Category</Button>
        </div>
      </div>

      <CategoryTable />
    </section>
  );
}
