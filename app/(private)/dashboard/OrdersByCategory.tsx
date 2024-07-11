import { Armchair } from 'lucide-react';

const OrdersByCategory = () => {
  return (
    <div className="space-y-3">
      <p className="text-xl">Order by Category</p>
      <div className="grid grid-cols-4 gap-4">
        <div className="flex cursor-pointer flex-col gap-3 rounded-md border-2 border-gray-200 p-6 hover:bg-muted/50">
          <div className="flex items-center justify-between">
            <span>Sleek</span>
            <Armchair />
          </div>
          <div>
            <span className="text-2xl font-extrabold">5</span>
            <p className="text-sm text-mutedtext">0 products</p>
          </div>
        </div>
        <div className="flex cursor-pointer flex-col gap-3 rounded-md border-2 border-gray-200 p-6 hover:bg-muted/50">
          <div className="flex items-center justify-between">
            <span>Sleek</span>
            <Armchair />
          </div>
          <div>
            <span className="text-2xl font-extrabold">5</span>
            <p className="text-sm text-mutedtext">0 products</p>
          </div>
        </div>
        <div className="flex cursor-pointer flex-col gap-3 rounded-md border-2 border-gray-200 p-6 hover:bg-muted/50">
          <div className="flex items-center justify-between">
            <span>Sleek</span>
            <Armchair />
          </div>
          <div>
            <span className="text-2xl font-extrabold">5</span>
            <p className="text-sm text-mutedtext">0 products</p>
          </div>
        </div>
        <div className="flex cursor-pointer flex-col gap-3 rounded-md border-2 border-gray-200 p-6 hover:bg-muted/50">
          <div className="flex items-center justify-between">
            <span>Sleek</span>
            <Armchair />
          </div>
          <div>
            <span className="text-2xl font-extrabold">5</span>
            <p className="text-sm text-mutedtext">0 products</p>
          </div>
        </div>

        <div className="flex cursor-pointer flex-col gap-3 rounded-md border-2 border-gray-200 p-6 hover:bg-muted/50">
          <div className="flex items-center justify-between">
            <span>Sleek</span>
            <Armchair />
          </div>
          <div>
            <span className="text-2xl font-extrabold">5</span>
            <p className="text-sm text-mutedtext">0 products</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrdersByCategory;
