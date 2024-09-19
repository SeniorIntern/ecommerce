'use client';

import { AdminOrder } from '@/types';
import { ColumnDef } from '@tanstack/react-table';

export const columns: ColumnDef<AdminOrder>[] = [
  {
    accessorKey: 'userId.fullName',
    header: 'Customer'
  },
  {
    accessorKey: 'userId.email',
    header: 'Customer Email'
  },
  {
    id: 'orderItems.length',
    accessorKey: 'orderItems.length',
    header: 'Order Items (qty. x price per item)',
    cell: ({ row }) => (
      <ul>
        {row.original.orderItems.map((item) => (
          <li key={item._id}>
            {item._id}
            <span className="text-xs text-gray-700">{` (${item.quantity} x ${item.price})`}</span>
          </li>
        ))}
      </ul>
    )
  },
  {
    accessorKey: 'totalPrice',
    header: 'Total Price'
  }
];
