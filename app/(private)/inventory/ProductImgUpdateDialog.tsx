'use client';

import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog';
import { TOAST_KEY_ANNOUNCE } from '@/constants';
import useAddProduct from '@/hooks/useAddProduct';
import { Product } from '@/types';
import { FormEvent, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { toast } from 'sonner';

const ProductImgUpdateDialog = ({ product }: { product: Product }) => {
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

  const { mutate, isPending } = useAddProduct();

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

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

      mutate(formData);
      setOpen(false);
    } catch (err) {
      if (err instanceof Error) {
        toast.error(err.message, { id: TOAST_KEY_ANNOUNCE });
      }
    }
  };

  return (
    <div>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <button className="rounded bg-green-500 px-2 py-1 text-white hover:bg-green-500/80">
            Update Images 
          </button>
        </DialogTrigger>

        <DialogContent className="min-w-[480px] max-w-fit">
          <DialogHeader>
            <DialogTitle>Add new product images</DialogTitle>
          </DialogHeader>

          <div>
            <form
              onSubmit={onSubmit}
              className="h-[80vh] space-y-8 overflow-scroll p-2"
            >
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
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ProductImgUpdateDialog;
