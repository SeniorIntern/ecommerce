'use client';

import { Skeleton } from '@/components/ui/skeleton';
import { useProfile } from '@/hooks';

const ProfileGreetingHeader = () => {
  const { data, isLoading, error } = useProfile();
  if (isLoading) return <Skeleton className="mx-auto h-[20px] w-[240px]" />;

  if (error) return <p>{error.message}</p>;

  if (!data?.data) return null;
  const { fullName } = data.data;

  return <h1 className="text-center text-xl">Hello, {fullName}</h1>;
};

export default ProfileGreetingHeader;
