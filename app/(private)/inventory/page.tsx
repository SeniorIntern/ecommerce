import { Button } from '@/components/ui/button';
import { InventoryTable } from './InventoryTable';

export default function Page() {
  return (
    <section className="space-y-3">
      <div>
        <p className="text-3xl font-extrabold">Products</p>
        <div className="flex justify-between">
          <span className="text-mutedtext">All Products</span>
          <Button>Add Product</Button>
        </div>
      </div>

      <InventoryTable />
    </section>
  );
}
