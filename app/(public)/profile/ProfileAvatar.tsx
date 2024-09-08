'use client';

import Img from '@/components/reusables/Img';
import { Skeleton } from '@/components/ui/skeleton';
import { useProfile } from '@/hooks';
import ProfileAvatarUpdateDialog from './ProfileAvatarUpdateDialog';

const ProfileAvatar = () => {
  const { data, isLoading } = useProfile();
  if (isLoading)
    return (
      <div className="grid justify-center gap-4">
        <Skeleton className="size-80 rounded-full bg-muted" />
        <Skeleton className="h-12 w-80" />
      </div>
    );

  return (
    <div className="grid justify-center gap-4">
      <Img
        imgSrc={data?.data.avatar}
        alt="Profile avatar"
        className="size-[300px]"
        imgClass="rounded-full  border-[0.8px] border-accent"
      />
      <ProfileAvatarUpdateDialog/>
    </div>
  );
};

export default ProfileAvatar;
