'use client';

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table';
import { Address } from '@/types';
import { Info } from 'lucide-react';

const AddressInfoDialog = ({ address }: { address: Address }) => {
  return (
    <div>
      <Dialog>
        <DialogTrigger>
          <Info className="cursor-pointer text-gray-400" />
        </DialogTrigger>
        <DialogContent className="min-w-fit">
          <DialogHeader>
            <DialogTitle>Address Information</DialogTitle>
          </DialogHeader>

          <Table>
            <TableCaption>Your delivery address details</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">Country</TableHead>
                <TableHead>State</TableHead>
                <TableHead>City name</TableHead>
                <TableHead>Address 1</TableHead>
                <TableHead>Address 2</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">{address.country}</TableCell>
                <TableCell>{address.state}</TableCell>
                <TableCell>{address.city}</TableCell>
                <TableCell className="text-right">
                  {address.addressLine1}
                </TableCell>
                <TableCell className="text-right">
                  {address.addressLine2}
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AddressInfoDialog;
