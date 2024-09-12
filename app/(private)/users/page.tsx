import UserAddDialog from './UserAddDialog';
import { UserTable } from './UserTable';

export default function Page() {
  return (
    <section className="space-y-3">
      <div>
        <p className="text-3xl font-extrabold">Users</p>
        <div className="flex justify-between">
          <span className="text-mutedtext">All Users</span>
          <UserAddDialog/>
        </div>
      </div>

      <UserTable />
    </section>
  );
}
