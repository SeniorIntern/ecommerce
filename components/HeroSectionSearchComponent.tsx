import { Button } from './ui/button';
import { Input } from './ui/input';

const HeroSectionSearchComponent = () => {
  return (
    <form className="flex items-center gap-6 rounded-md bg-white p-2">
      <Input
        className="border-none text-black focus-visible:ring-0 focus-visible:ring-offset-0"
        placeholder="Enter the product you want to buy..."
      />
      <Button className="bg-accent px-8">Search</Button>
    </form>
  );
};

export default HeroSectionSearchComponent;
