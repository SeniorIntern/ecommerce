import DashboardOverview from './DashboardOverview';
import OrdersByCategory from './OrdersByCategory';

export default function Page() {
  return (
    <section className="space-y-6">
      <p className="text-3xl font-extrabold">Dashboard</p>
      <DashboardOverview />
      <OrdersByCategory />
    </section>
  );
}
