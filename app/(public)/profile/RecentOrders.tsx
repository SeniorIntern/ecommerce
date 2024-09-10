'use client';

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table';
import { formatDate } from '@/helpers';
import { useMyOrders } from '@/hooks';
import AddressInfoDialog from './AddressInfoDialog';
import RecentOrdersSkeleton from './RecentOrdersSkeleton';

const RecentOrders = () => {
  return (
    <div className='space-y-2'>
      <h2 className="text-xl">Recent Orders</h2>
      <p>Under construction lol</p>
    </div>
  );

  /* 
  const { data, isLoading } = useMyOrders({ page: 1, limit: 8 });

  if (isLoading) return (
    <RecentOrdersSkeleton/>
  )

  return (
    <div>
      <p>Recent Orders</p>
      <Table>
        <TableCaption>A list of your recent orders.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Order #</TableHead>
            <TableHead>Placed On</TableHead>
            <TableHead>Price (Discounted)</TableHead>
            <TableHead>Order info</TableHead>
            <TableHead>Delivery address</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {data?.data.orders.map((order) => (
            <TableRow key={order._id}>
              <TableCell>{order._id}</TableCell>
              <TableCell className="font-medium">
                {formatDate(order.createdAt)}
              </TableCell>
              <TableCell>${order.discountedOrderPrice}</TableCell>
              <TableCell>{order.address.addressLine1}</TableCell>
              <TableCell>
                <AddressInfoDialog address={order.address} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
*/
};

export default RecentOrders;
