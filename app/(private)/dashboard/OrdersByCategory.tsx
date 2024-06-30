import { Armchair } from 'lucide-react';

const OrdersByCategory = () => {
  return (
    <div className="space-y-3">
      <p className="text-xl">Order by Location</p>
      <div className="grid grid-cols-4 gap-4">
        <div className="flex flex-col justify-between rounded-md border-2 border-gray-200 p-4">
          <div className="flex items-center justify-between">
            <span>Furniture</span>
            <Armchair />
          </div>
          <span className="font-extrabold">0 order</span>
          <p className="text-sm text-mutedtext">0 products</p>
        </div>
      </div>
    </div>
  );
};

export default OrdersByCategory;
