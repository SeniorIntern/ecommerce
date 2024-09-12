'use client';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { TOAST_KEY_AUTH } from '@/constants';
import { useAddUser } from '@/hooks';
import { UserRegistrationFormSchema } from '@/Schemas';
import { zodResolver } from '@hookform/resolvers/zod';
import { AxiosError } from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { z } from 'zod';

export type RegisterDataType = z.infer<typeof UserRegistrationFormSchema>;

export default function Page() {
  const router = useRouter();

  const form = useForm<z.infer<typeof UserRegistrationFormSchema>>({
    resolver: zodResolver(UserRegistrationFormSchema),
    defaultValues: {
      fullName: '',
      email: '',
      password: '',
      username: ''
    }
  });

  const { mutate, isPending } = useAddUser();

  async function onSubmit(values: z.infer<typeof UserRegistrationFormSchema>) {
    try {
      mutate(values);
      toast.success('User registration sucessfull', { id: TOAST_KEY_AUTH });
      router.push('/login');
    } catch (err) {
      if (err instanceof AxiosError) {
        console.log('Axios Error.', err.message);

        if (err.response?.data.errors.length) {
          const errMessage = err.response?.data.errors as [
            Record<string, string>
          ];

          toast.error(
            errMessage.map((err) => Object.values(err).flat().join(', ')),
            { id: TOAST_KEY_AUTH }
          );
        } else {
          toast.error(err.response?.data.message, { id: TOAST_KEY_AUTH });
        }
      }
    }
  }

  return (
    <section>
      <Card className="mx-auto my-10 max-w-sm">
        <CardHeader>
          <CardTitle className="text-xl">Sign Up</CardTitle>
          <CardDescription>
            Enter your information to create an account.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-4">
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

              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="flex justify-between">
                      Password
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="password"
                        placeholder="*********"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button disabled={isPending} type="submit" className="w-full">
                Create an account
              </Button>

              <div className="mt-4 text-center text-sm">
                Already have an account?{' '}
                <Link href="/login" className="underline">
                  Sign in
                </Link>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </section>
  );
}
