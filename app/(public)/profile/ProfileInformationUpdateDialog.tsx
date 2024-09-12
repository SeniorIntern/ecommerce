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
import { filterDuplicateFromObjects } from '@/helpers';
import { usePatchProfileInformation, useProfile } from '@/hooks';
import { zodResolver } from '@hookform/resolvers/zod';
import { AxiosError } from 'axios';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { z } from 'zod';

const formSchema = z.object({
  fullName: z
    .string()
    .min(3, { message: 'Full name cannot be less than 3 characters.' })
    .max(50, {
      message: 'Full name cannot be more than 120 characters long.'
    }),
  email: z.string().email(),
  username: z
    .string()
    .min(3, { message: 'Username must be atleast 3 characters long.' })
    .max(50, {
      message: 'Username cannot be more than 120 characters long.'
    })
});

const ProfileInformationUpdateDialog = () => {
  const [open, setOpen] = useState(false);

  const { data, isLoading, error } = useProfile();
  const mutation = usePatchProfileInformation();

  // if (!data?.data) return <p>Loading...</p>;
  const { fullName, username, email } = data?.data || {};

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: fullName || '',
      email: email || '',
      username: username || ''
    }
  });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>{error.message}</p>;

  async function onSubmit(values: z.infer<typeof formSchema>) {
    if (!fullName || !username || !email) {
      toast.error('All fields must have values', { id: TOAST_KEY_ANNOUNCE });
      return;
    }

    const payload = filterDuplicateFromObjects(values, {
      fullName,
      username,
      email
    });

    if (!Object.keys(payload).length) {
      toast.error('Enter unique details.', { id: TOAST_KEY_ANNOUNCE });
      return;
    }

    try {
      mutation.mutate(payload);
      setOpen(false);
    } catch (err) {
      if (err instanceof AxiosError) {
        toast.error('User with the username or email already exists.', {
          id: TOAST_KEY_ANNOUNCE
        });
      }
      setOpen(false);
    }
  }

  return (
    <div>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button>Edit Information</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Upload avatar image</DialogTitle>
          </DialogHeader>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="fullName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Full Name</FormLabel>
                    <FormControl>
                      <Input placeholder="John Smith" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Username</FormLabel>
                    <FormControl>
                      <Input placeholder="John" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="abc@gmail.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button
                disabled={mutation.isPending}
                className="w-full"
                type="submit"
              >
                Submit
              </Button>
            </form>
          </Form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ProfileInformationUpdateDialog;
