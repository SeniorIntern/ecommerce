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
import { COOKIES, TOAST_KEY_AUTH } from '@/constants';
import { apiClient } from '@/services';
import { LoginReponse } from '@/types';
import { zodResolver } from '@hookform/resolvers/zod';
import { AxiosError } from 'axios';
import { setCookie } from 'cookies-next';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { z } from 'zod';

const formSchema = z.object({
  username: z.string().min(1, { message: 'Username is required.' }),
  password: z.string().min(1, { message: 'Password is required.' })
});

export type LoginDataType = z.infer<typeof formSchema>;

export default function Page() {
  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: 'nikhil',
      password: 'nik@123'
    }
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const res = await apiClient.post<LoginReponse>('/users/login', values);

      toast.success(res.data.message, {
        id: TOAST_KEY_AUTH
      });

      setCookie(COOKIES.ACCESS_TOKEN, res.data.data.accessToken);
      setCookie(COOKIES.REFRESH_TOKEN, res.data.data.refreshToken);
      setCookie(COOKIES.USER, res.data.data.user);
      router.push('/');
    } catch (err) {
      if (err instanceof AxiosError) {
        console.log('Axios Error.', err.message);
        toast.error(err.response?.data?.message, { id: TOAST_KEY_AUTH });
      }
    }
  }

  return (
    <section>
      <Card className="mx-auto my-16 max-w-sm">
        <CardHeader>
          <CardTitle className="text-2xl">Login</CardTitle>
          <CardDescription>
            Enter your username and password to login to your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-4">
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
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="flex justify-between">
                      <span>Password</span>
                      <Link href={'/forget-password'} className="underline">
                        Forgot your password?
                      </Link>
                    </FormLabel>
                    <FormControl>
                      <Input type="password" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full">
                Submit
              </Button>

              <div className="mt-4 text-center text-sm">
                Don&apos;t have an account?{' '}
                <Link href="/register" className="underline">
                  Sign up
                </Link>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </section>
  );
}
