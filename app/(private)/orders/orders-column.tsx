'use client';

import { Order } from '@/types';
import { ColumnDef } from '@tanstack/react-table';

export const columns: ColumnDef<Order>[] = [
  {
    accessorKey: 'customer.username',
    header: 'Username'
  },
  {
    accessorKey: 'customer.email',
    header: 'Email'
  },
  {
    accessorKey: 'orderPrice',
    header: 'Total Price'
  },
  {
    accessorKey: 'discountedOrderPrice',
    header: 'Price after discount'
  },
  {
    accessorKey: 'isPaymentDone',
    header: 'Payment status'
  },
  {
    accessorKey: 'status',
    header: 'Order status'
  },
  {
    accessorKey: 'address.city',
    header: 'Delivery Address'
  },
];
