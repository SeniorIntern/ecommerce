import { Input } from '@/components/ui/input';
import { PLACEHOLDER_PRODUCT_IMAGE } from '@/constants';
import { useProducts } from '@/hooks';
import { Product } from '@/types';
import { useDebounce } from '@uidotdev/usehooks';
import _ from 'lodash';
import { useRouter } from 'next/navigation';
import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import Img from '../reusables/Img';

type Props = {
  toggleSearch: () => void;
};

const SearchInput = ({ toggleSearch }: Props) => {
  const router = useRouter();

  const { data, isLoading } = useProducts({ page: 1, limit: 500 });

  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState<Product[]>([]);

  const debouncedSearchTerm = useDebounce(searchTerm, 300);

  const handleProductFilter = (keyword: string) => {
    const filterResult = _.filter(data?.data.products, (val) =>
      val.name.toLowerCase().includes(keyword.toLowerCase())
    );
    setResults(filterResult);
  };

  const handleProductSearch = (keyword: string) => {
    router.push(`/products/search?search=${keyword}`);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const term = formData.get('search');
    if (typeof term === 'string') {
      e.currentTarget.reset();
      e.currentTarget.focus();
      handleProductSearch(searchTerm);
    }
    // close input/search component
    toggleSearch();
  };

  useEffect(() => {
    const searchProduct = async () => {
      if (debouncedSearchTerm) {
        handleProductFilter(debouncedSearchTerm);
      }
    };

    searchProduct();
  }, [debouncedSearchTerm]);

  return (
    <form className="relative ml-6 h-full grow" onSubmit={handleSubmit}>
      <Input
        disabled={isLoading}
        name="search"
        placeholder="Product name"
        className="h-full focus-visible:border-accent focus-visible:ring-0 focus-visible:ring-offset-0"
        onChange={handleChange}
      />
      <div className="absolute z-50 w-full rounded-b-lg border border-gray-200 bg-white p-2">
        {results.map((product) => (
          <div
            onClick={() => {
              router.push(`/products/${product._id}`);
              toggleSearch();
            }}
            className="my-2 flex h-20 cursor-pointer gap-2"
            key={product._id}
          >
            <Img imgSrc={PLACEHOLDER_PRODUCT_IMAGE} className="h-full w-20" />
            <div>
              <p className="font-bold">{product.name}</p>
              <p className="text-sm text-mutedtext">{product.category.name}</p>
              <p>${product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </form>
  );
};

export default SearchInput;
