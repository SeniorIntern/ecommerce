import { Button } from '@/components/ui/button';

export default function Page() {
  return (
    <section className="space-y-3">
      <div>
        <p className="text-3xl font-extrabold">Users</p>
        <div className="flex justify-between">
          <span className="text-mutedtext">All Users</span>
          <Button>Add User</Button>
        </div>
      </div>
    </section>
  );
}
