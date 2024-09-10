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
import { apiClient } from '@/services';
import { AxiosError } from 'axios';
import { FormEvent, useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { toast } from 'sonner';

const ProfileAvatarUpdateDialog = () => {
  const [open, setOpen] = useState(false);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    console.log('rejections===', fileRejections);
    console.log('accept files===', acceptedFiles);
  }, []);

  const { acceptedFiles, fileRejections, getRootProps, getInputProps } =
    useDropzone({
      onDrop,
      accept: {
        'image/*': ['.png', '.jpeg', '.jpg']
      },
      maxFiles: 1
    });

  const handleAvatarUpload = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log('triggered');

    if (!acceptedFiles.length) {
      toast.error('Please select an image file to upload.', {
        id: TOAST_KEY_ANNOUNCE
      });
      return;
    }
    if (acceptedFiles.length > 1) {
      toast.error('You can only select one image to upload', {
        id: TOAST_KEY_ANNOUNCE
      });
      return;
    }

    if (e.target) {
      const formData = new FormData();
      formData.append('avatarImage', acceptedFiles[0]);
      console.log('avatarImage', formData.get('avatarImage'));

      try {
        const res = await apiClient.patch('/users/avatar', formData);
        toast.success(res.data.message, { id: TOAST_KEY_ANNOUNCE });
        setOpen(false);
      } catch (err) {
        if (err instanceof AxiosError) {
          toast.error(err.response?.data.message, { id: TOAST_KEY_ANNOUNCE });
        }
      }
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>Upload avatar</Button>
      </DialogTrigger>
      <DialogContent className="max-w-fit">
        <DialogHeader>
          <DialogTitle>Drop or Drop Avatar Image</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleAvatarUpload} encType="multipart/form-data">
          <div className="cursor-pointer rounded-lg border-2 border-dotted border-gray-400 p-8">
            <div {...getRootProps()}>
              <input name="avatarImage" {...getInputProps()} />
              <p>
                {!acceptedFiles.length
                  ? "Drag 'n' drop image here, or click to select image"
                  : `${acceptedFiles[0]?.name}, ${acceptedFiles[0]?.size / 1000} KB`}
              </p>

              <em className="text-mutedtext">
                (Only *.jpeg, *jpg and *.png images will be accepted)
              </em>

              <ul>
                {fileRejections.map((item, idx) => (
                  <li key={idx} className="text-sm text-red-600">
                    {item.errors[0].message} - {item.file.name}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <Button className="my-3 w-full">Upload</Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ProfileAvatarUpdateDialog;
