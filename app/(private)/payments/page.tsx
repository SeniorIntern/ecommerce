import { columns, Payment } from './columns';
import { DataTable } from './data-table';

export default function Page() {
  const data: Payment[] = [
    {
      id: '728ed52f',
      amount: 100,
      status: 'pending',
      email: 'm@example.com'
    },
    {
      id: '489e1d42',
      amount: 125,
      status: 'processing',
      email: 'example@gmail.com'
    }
  ];

  return (
    <section className="container mx-auto py-10">
      <DataTable data={data} columns={columns} />
    </section>
  );
}
