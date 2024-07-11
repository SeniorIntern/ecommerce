import { Delete, ShoppingBasket, ShoppingCart } from 'lucide-react';

const DashboardOverview = () => {
  return (
    <div className="space-y-3">
      <p className="text-xl">Overview</p>
      <div className="grid grid-cols-4 gap-4">
        <div className="flex cursor-pointer flex-col gap-3 rounded-md border-2 border-gray-200 p-6 hover:bg-muted/50">
          <div className="flex items-center justify-between">
            <span>Total Orders</span>
            <ShoppingCart />
          </div>
          <div>
            <span className="text-2xl font-extrabold">5</span>
            <p className="text-sm text-mutedtext">2 pending order</p>
          </div>
        </div>

        <div className="flex cursor-pointer flex-col gap-3 rounded-md border-2 border-gray-200 p-6 hover:bg-muted/50">
          <div className="flex items-center justify-between">
            <span>Total Products</span>
            <ShoppingBasket />
          </div>
          <div>
            <span className="text-2xl font-extrabold">2</span>
            <p className="text-sm text-mutedtext">0 archive products</p>
          </div>
        </div>

        <div className="flex cursor-pointer flex-col gap-3 rounded-md border-2 border-gray-200 p-6 hover:bg-muted/50">
          <div className="flex items-center justify-between">
            <span>Total Order Sold</span>
            <ShoppingCart />
          </div>
          <div>
            <span className="text-2xl font-extrabold">2</span>
          </div>
        </div>

        <div className="flex cursor-pointer flex-col gap-3 rounded-md border-2 border-gray-200 p-6 hover:bg-muted/50">
          <div className="flex items-center justify-between">
            <span>Total Cancelled Orders</span>
            <Delete />
          </div>
          <div>
            <span className="text-2xl font-extrabold">0</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardOverview;
