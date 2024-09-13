'use client';

import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog';

type Props = {
  handleDelete: () => void;
};

const CategoryDeleteDialog = ({ handleDelete }: Props) => {
  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <button className="rounded bg-red-500 px-2 py-1 text-white hover:bg-red-600">
            Delete
          </button>
        </DialogTrigger>
        <DialogContent className="max-w-fit">
          <DialogHeader>
            <DialogTitle>Delete the category</DialogTitle>
          </DialogHeader>
          <div className="space-y-2">
            <p className="">Are you sure you want to delete this category?</p>
            <Button variant="destructive" onClick={handleDelete}>
              Confirm
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default CategoryDeleteDialog;
