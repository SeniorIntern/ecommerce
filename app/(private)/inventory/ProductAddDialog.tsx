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
import { TOAST_KEY_ANNOUNCE } from '@/constants';
import useAddProduct from '@/hooks/useAddProduct';
import { ProductSchema } from '@/Schemas';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { z } from 'zod';

const ProductAddDialog = () => {
  const [open, setOpen] = useState(false);

  const {
    acceptedFiles: mainImgAcceptedFiles,
    fileRejections: mainImgFileRejections,
    getRootProps: mainImgGetRootProps,
    getInputProps: mainImgGetInputProps
  } = useDropzone({
    accept: {
      'image/*': ['.png', '.jpeg', '.jpg']
    },
    maxFiles: 1
  });

  const {
    acceptedFiles: subImgAcceptedFiles,
    fileRejections: subImgFileRejections,
    getRootProps: subImgGetRootProps,
    getInputProps: subImgGetInputProps
  } = useDropzone({
    accept: {
      'image/*': ['.png', '.jpeg', '.jpg']
    },
    maxFiles: 4
  });

  const form = useForm<z.infer<typeof ProductSchema>>({
    resolver: zodResolver(ProductSchema),
    defaultValues: {
      productName: 'New revolving chair',
      category: '66e29ed12a993d0608e19f91',
      description:
        'Office chair for maximum comfort. This chair hash 360 degree rotation capabilities.',
      price: 160,
      stock: 20
    }
  });

  const { mutate, isPending } = useAddProduct();

  function onSubmit(values: z.infer<typeof ProductSchema>) {
    try {
      // check existance of main image
      if (!mainImgAcceptedFiles.length) {
        toast.error('Please select main image file.', {
          id: TOAST_KEY_ANNOUNCE
        });
        return;
      }
      if (mainImgAcceptedFiles.length > 1) {
        toast.error('You can only select one image.', {
          id: TOAST_KEY_ANNOUNCE
        });
        return;
      }

      // check existance of sub images
      if (!subImgAcceptedFiles.length) {
        toast.error('Please select at least one sub image.', {
          id: TOAST_KEY_ANNOUNCE
        });
        return;
      }
      if (subImgAcceptedFiles.length > 4) {
        toast.error('You can only select four sub images', {
          id: TOAST_KEY_ANNOUNCE
        });
        return;
      }

      const formData = new FormData();
      formData.append('mainImage', mainImgAcceptedFiles[0]);

      // Append subImages under the same field name 'subImages[]'
      subImgAcceptedFiles.forEach((file) => {
        formData.append('subImages', file);
      });

      // Append object (values) properties to formData
      Object.entries(values).forEach(([key, value]) => {
        formData.append(key, value.toString());
      });

      mutate(formData)
      setOpen(false);
    } catch (err) {
      if (err instanceof Error) {
        toast.error(err.message, { id: TOAST_KEY_ANNOUNCE });
      }
    }
  }

  return (
    <div>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button>Add Product</Button>
        </DialogTrigger>

        <DialogContent className="min-w-[480px] max-w-fit">
          <DialogHeader>
            <DialogTitle>Add New Product</DialogTitle>
          </DialogHeader>

          <div>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="h-[80vh] space-y-8 overflow-scroll p-2"
              >
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
                <div className="cursor-pointer rounded-lg border-2 border-dotted border-gray-400 p-8">
                  <div {...mainImgGetRootProps()}>
                    <input name="mainImage" {...mainImgGetInputProps()} />
                    <p>
                      {!mainImgAcceptedFiles.length
                        ? "Drop product's main image"
                        : `${mainImgAcceptedFiles[0]?.name}, ${mainImgAcceptedFiles[0]?.size / 1000} KB`}
                    </p>

                    <em className="text-mutedtext">(*.jpeg, *jpg and *.png)</em>

                    <ul>
                      {mainImgFileRejections.map((item, idx) => (
                        <li key={idx} className="text-sm text-red-600">
                          {item.errors[0].message} - {item.file.name}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="cursor-pointer rounded-lg border-2 border-dotted border-gray-400 p-8">
                  <div {...subImgGetRootProps()}>
                    <input name="subImages" {...subImgGetInputProps()} />

                    <p>
                      {!subImgAcceptedFiles.length
                        ? "Drop product's sub images"
                        : `${subImgAcceptedFiles.length} images selected`}
                    </p>
                    <em className="text-mutedtext">(*.jpeg, *jpg and *.png)</em>

                    <ul>
                      {subImgFileRejections.map((item, idx) => (
                        <li key={idx} className="text-sm text-red-600">
                          {item.errors[0].message} - {item.file.name}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <Button disabled={isPending} type="submit" className="w-full">
                  {isPending ? 'Submitting' : 'Add Product'}
                </Button>
              </form>
            </Form>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ProductAddDialog;
