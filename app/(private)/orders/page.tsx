import { Button } from '@/components/ui/button';
import { OrdersTable } from './OrdersTable';

export default function Page() {
  return (
    <section className="space-y-3">
      <div>
        <p className="text-3xl font-extrabold">Orders</p>
        <div className="flex justify-between">
          <span className="text-mutedtext">All Orders</span>
          <Button>Add Order</Button>
        </div>
      </div>

      <OrdersTable />
    </section>
  );
}
