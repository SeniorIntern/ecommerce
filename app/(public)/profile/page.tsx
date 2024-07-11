import { HorizontalPaddingContainer } from '@/components/reusables/HorizontalPaddingContainer';
import ProfileAvatar from './ProfileAvatar';
import ProfileInformation from './ProfileInformation';
import RecentOrders from './RecentOrders';

export default function Page() {
  return (
    <section className="my-6">
      <HorizontalPaddingContainer className="space-y-8">
        <ProfileAvatar />
        <ProfileInformation />
        <RecentOrders />
      </HorizontalPaddingContainer>
    </section>
  );
}
