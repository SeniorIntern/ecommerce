import { HorizontalPaddingContainer } from '@/components/reusables/HorizontalPaddingContainer';
import ChangePassword from './ChangePassword';
import ProfileAvatar from './ProfileAvatar';
import ProfileGreetingHeader from './ProfileGreetingHeader';
import ProfileInformation from './ProfileInformation';
import RecentOrders from './RecentOrders';

export default function Page() {
  return (
    <section className="my-6">
      <HorizontalPaddingContainer className="space-y-8">
        <ProfileGreetingHeader />
        <ProfileAvatar />
        <ProfileInformation />
        <RecentOrders />
        <ChangePassword/>
      </HorizontalPaddingContainer>
    </section>
  );
}
