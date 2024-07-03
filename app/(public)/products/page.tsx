import ProductsContainer from '@/components/ProductsContainer';
import { HorizontalPaddingContainer } from '@/components/reusables/HorizontalPaddingContainer';
import ProductFilterAside from './ProductFilterAside';

type Props = {
  params: { productId: string };
  searchParams: { category: string; page: string };
};

export default function Page({ params, searchParams }: Props) {
  const { category, page } = searchParams;

  return (
    <section className="my-6">
      <HorizontalPaddingContainer>
        <div className="flex gap-12">
          <ProductFilterAside categoryParam={category} />
          <div className="grow">
            <ProductsContainer />
          </div>
        </div>
      </HorizontalPaddingContainer>
    </section>
  );
}
