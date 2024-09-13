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
import { Textarea } from '@/components/ui/textarea';
import { usePatchProduct } from '@/hooks';
import { ProductSchema } from '@/Schemas';
import { Product } from '@/types';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

export function ProductInfoUpdateDialog({ product }: { product: Product }) {
  const [open, setOpen] = useState(false);

  const { productName, category, description, price, stock } = product;

  const form = useForm<z.infer<typeof ProductSchema>>({
    resolver: zodResolver(ProductSchema),
    defaultValues: {
      productName,
      category: category._id,
      description,
      price,
      stock
    }
  });

  const { mutate, isPending } = usePatchProduct();

  function onSubmit(values: z.infer<typeof ProductSchema>) {
    const { stock, price } = values;

    mutate({
      productId: product._id,
      product: { ...values, stock: +stock, price: +price }
    });
    setOpen(false);
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <button className="rounded bg-green-500 px-2 py-1 text-white hover:bg-green-500/80">
          Update Info
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Update Product Information</DialogTitle>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="productName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Enter product name</FormLabel>
                  <FormControl>
                    <Input placeholder="Aa" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="category"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Enter category name</FormLabel>
                  <FormControl>
                    <Input placeholder="Aa" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Enter product description</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="This product is made from pure..."
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="price"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Enter proudct price(In USD)</FormLabel>
                  <FormControl>
                    <Input placeholder="10" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="stock"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Enter total stock of product</FormLabel>
                  <FormControl>
                    <Input placeholder="10" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button disabled={isPending} type="submit">
              {isPending ? 'Updating' : 'Update'}
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
