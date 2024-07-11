import { redirect } from 'next/navigation';
import { Button } from './ui/button';
import { Input } from './ui/input';

const HeroSectionSearchComponent = () => {
  async function searchProduct(formData: FormData) {
    'use server';
    const keyword = formData.get('search');
    redirect(`/products/search?search=${keyword}`);
  }

  return (
    <form
      action={searchProduct}
      className="flex items-center gap-6 rounded-md bg-white p-2"
    >
      <Input
        name="search"
        className="border-none text-black focus-visible:ring-0 focus-visible:ring-offset-0"
        placeholder="Search the product you want to buy..."
      />
      <Button className="px-8">Search</Button>
    </form>
  );
};

export default HeroSectionSearchComponent;
