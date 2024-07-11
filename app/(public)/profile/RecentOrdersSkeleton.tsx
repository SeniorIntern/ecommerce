import { Skeleton } from '@/components/ui/skeleton';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table';

const RecentOrdersSkeleton = () => {
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
          {Array.from({ length: 6 }).map((item, idx) => (
            <TableRow key={idx}>
              <TableCell className='bg-gray-400'>
                <Skeleton className="h-3 size-full" />
              </TableCell>
              <TableCell>
                <Skeleton className="h-3 w-10" />
              </TableCell>
              <TableCell>
                <Skeleton className="h-3 w-10" />
              </TableCell>
              <TableCell>
                <Skeleton className="h-3 w-10" />
              </TableCell>
              <TableCell>
                <Skeleton className="h-3 w-10" />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};
export default RecentOrdersSkeleton;
