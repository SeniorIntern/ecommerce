'use client';

import { Skeleton } from '@/components/ui/skeleton';
import { formatDate } from '@/helpers';
import { useProfile } from '@/hooks';
import ProfileInformationUpdateDialog from './ProfileInformationUpdateDialog';

const ProfileInformation = () => {
  const { data, isLoading, error } = useProfile();
  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>{error.message}</p>;

  if (!data?.data) return null;
  const { fullName, username, email, createdAt, updatedAt } = data.data;

  return (
    <article className="space-y-4">
      <h2 className="text-xl">Profile Information</h2>
      {isLoading ? (
        <div className="grid min-h-40 grid-cols-1 justify-between gap-2 md:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 2 }).map((_, idx) => (
            <div key={idx} className="space-y-4 bg-muted p-3">
              <Skeleton className="h-3 w-40 bg-gray-200" />
              <div className="space-y-2">
                <Skeleton className="h-3 w-20 bg-gray-200" />
                <Skeleton className="h-3 w-40 bg-gray-200" />
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="grid min-h-40 grid-cols-1 gap-10 md:grid-cols-2">
          <div className="space-y-2 rounded-xl bg-muted p-3">
            <p className="text-xl">Personal Information</p>
            <div>
              <div className="flex justify-between">
                <p>Full Name:</p>
                <p> {fullName}</p>
              </div>

              <div className="flex justify-between">
                <p>Username:</p>
                <p>{username}</p>
              </div>

              <div className="flex justify-between">
                <p>Email address:</p>
                <p>{email}</p>
              </div>
            </div>
          </div>

          <div className="space-y-2 rounded-xl bg-muted p-3">
            <p className="text-xl">Account Information</p>

            <div>
              <div className="flex justify-between">
                <p>Create date:</p>
                <p>{formatDate(createdAt)}</p>
              </div>

              <div className="flex justify-between">
                <p>Last update on:</p>
                <p>{formatDate(updatedAt)}</p>
              </div>
            </div>
          </div>
        </div>
      )}
      <ProfileInformationUpdateDialog />
    </article>
  );
};

export default ProfileInformation;
