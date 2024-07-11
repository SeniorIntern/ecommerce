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
import { useMyOrders } from '@/hooks';
import moment from 'moment';
import RecentOrdersSkeleton from './RecentOrdersSkeleton';
import AddressInfoDialog from './AddressInfoDialog';

const RecentOrders = () => {
  const { data, isLoading } = useMyOrders({ page: 1, limit: 8 });

  if (isLoading) RecentOrdersSkeleton;

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
                {moment(order.createdAt).format('MMM Do YYY')}
              </TableCell>
              <TableCell>${order.discountedOrderPrice}</TableCell>
              <TableCell>{order.address.addressLine1}</TableCell>
              <TableCell>
              <AddressInfoDialog address={order.address}/>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default RecentOrders;
