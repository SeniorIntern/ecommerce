'use client';

import { formatDate } from '@/helpers';
import { Order } from '@/types';
import { ColumnDef } from '@tanstack/react-table';

export const columns: ColumnDef<Order>[] = [
  {
    id: 'orderItems.length',
    accessorKey: 'orderItems.length',
    header: 'Products',
    cell: ({ row }) => (
      <ul>
        {row.original.orderItems.map((item) => (
          <li key={item._id}>
            {item.productId.productName}{' '}
            <span className="text-xs text-gray-700">(${item.price}/qty.)</span>{' '}
            x {item.quantity}
          </li>
        ))}
      </ul>
    )
  },
  {
    accessorKey: 'totalPrice',
    header: 'Total Price'
  },
  {
    id: 'createdAt',
    accessorKey: 'createdAt',
    header: 'Order Date',
    cell: ({ row }) => <span>{formatDate(row.original.updatedAt)}</span>
  }
];
