import BreadcrumbBar from '@/components/common/BreadcrumbBar';
import { ProductsContainer } from '@/components/ProductsContainer';
import { HorizontalPaddingContainer } from '@/components/reusables/HorizontalPaddingContainer';
import ProductFilterAside from './ProductFilterAside';

type Props = {
  params: { productId: string };
  searchParams: { category: string; page: string };
};

export default function Page({ params, searchParams }: Props) {
  const { category, page } = searchParams;

  return (
    <section>
      <HorizontalPaddingContainer>
        {JSON.stringify(category)}
        <BreadcrumbBar />
        <div className="flex gap-12">
          <ProductFilterAside />
          <ProductsContainer className="grow" />
        </div>
      </HorizontalPaddingContainer>
    </section>
  );
}
