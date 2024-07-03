import BreadcrumbBar from '@/components/common/BreadcrumbBar';
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
    <section className='my-6'>
      <HorizontalPaddingContainer>
        {JSON.stringify(category)}
        <div className="flex gap-12">
          <ProductFilterAside />
          <div className="grow">
            <ProductsContainer />
          </div>
        </div>
      </HorizontalPaddingContainer>
    </section>
  );
}
