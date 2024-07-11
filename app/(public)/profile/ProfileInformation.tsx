'use client';

import { Skeleton } from '@/components/ui/skeleton';
import { useProfile } from '@/hooks';
import moment from 'moment';

const ProfileInformation = () => {
  const { data, isLoading } = useProfile();

  return (
    <article>
      <h1 className="mb-4 text-xl">Manage My Account</h1>
      {isLoading ? (
        <div className="grid min-h-40 grid-cols-1 justify-between gap-2 md:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 2 }).map((item, idx) => (
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
        <div className="grid min-h-40 grid-cols-1 justify-between gap-2 md:grid-cols-2 lg:grid-cols-3">
          <div className="space-y-3 bg-muted p-3">
            <p>
              Personal Profile
              <span className="text-sm uppercase text-blue-400">Edit</span>
            </p>
            <div>
              <p>{data?.data.username}</p>
              <p>{data?.data.email}</p>
            </div>
          </div>

          <div className="space-y-3 bg-muted p-3">
            <p>Account Information</p>
            <div>
              <p>
                Create Date - {moment(data?.data.createdAt).format('MMM Do YY')}
              </p>
              <p>
                Last Update - {moment(data?.data.email).format('MMM Do YY')}
              </p>
            </div>
          </div>
        </div>
      )}
    </article>
  );
};

export default ProfileInformation;
