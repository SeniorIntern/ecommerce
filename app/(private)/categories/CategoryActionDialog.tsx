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
import { TOAST_KEY_ANNOUNCE } from '@/constants';
import { useAddCategory } from '@/hooks';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { z } from 'zod';

const formSchema = z.object({
  categoryName: z
    .string()
    .min(2, { message: 'Category must be atleast 2 characters long' })
    .max(50, {
      message: 'Category name must be less than 50 charactes.'
    })
});

type Props = {
  actionType: 'POST' | 'PATCH';
};

const CategoryActionDialog = ({ actionType }: Props) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      categoryName: ''
    }
  });

  const { mutate } = useAddCategory();

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    const { categoryName } = values;
    try {
      mutate(categoryName);
    } catch (err) {
      if (err instanceof Error)
        toast.error(err.message, { id: TOAST_KEY_ANNOUNCE });
    }
  }

  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <Button>{actionType === 'POST' ? 'Add' : 'Update'} Category</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>
              {actionType === 'POST' ? 'Add New ' : 'Update '}
              Category
            </DialogTitle>
          </DialogHeader>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="categoryName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Enter new category</FormLabel>
                    <FormControl>
                      <Input placeholder="Aa" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button className="w-full" type="submit">
                Submit
              </Button>
            </form>
          </Form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default CategoryActionDialog;
