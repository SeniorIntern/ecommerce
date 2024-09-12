'use client';

import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useDeleteCategory, useUpdateCategory } from '@/hooks';
import { Category } from '@/types';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

const formSchema = z.object({
  categoryName: z.string().min(2).max(50)
});

export function CategoryUpdateDialog({ category }: { category: Category }) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      categoryName: category.categoryName
    }
  });

  const { mutate } = useUpdateCategory();

  function onSubmit(values: z.infer<typeof formSchema>) {
    mutate({
      categoryId: category._id,
      categoryName: values.categoryName
    });
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="rounded bg-green-500 px-2 py-1 text-white hover:bg-green-500/80 hover:bg-red-600">
          Update
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Update Category</DialogTitle>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="categoryName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Category name</FormLabel>
                  <FormControl>
                    <Input placeholder="Aa" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit">Submit</Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
