import { ShoppingCart } from 'lucide-react';

const DashboardOverview = () => {
  return (
    <div className="space-y-3">
      <p className="text-xl">Overview</p>
      <div className="grid grid-cols-4 gap-4">
        {Array.from({ length: 6 }).map((item, idx) => (
          <div
            key={idx}
            className="flex cursor-pointer flex-col gap-3 rounded-md border-2 border-gray-200 p-4 hover:bg-muted/50"
          >
            <div className="flex items-center justify-between">
              <span>Total Orders</span>
              <ShoppingCart />
            </div>
            <div>
              <span className="font-extrabold">5</span>
              <p className="text-sm text-mutedtext">2 pending order</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DashboardOverview;
