import { InventoryTable } from './InventoryTable';
import ProductAddDialog from './ProductAddDialog';

export default function Page() {
  return (
    <section className="space-y-3">
      <div>
        <p className="text-3xl font-extrabold">Products</p>
        <div className="flex justify-between">
          <span className="text-mutedtext">All Products</span>
          <ProductAddDialog/>
        </div>
      </div>

      <InventoryTable />
    </section>
  );
}
