import ProductsContainer from '@/components/ProductsContainer';
import { HorizontalPaddingContainer } from '@/components/reusables/HorizontalPaddingContainer';
import ProductFilterAside from './ProductFilterAside';
import CategoryProductsContainer from '@/components/CategoryProductsContainer';

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
          <ProductFilterAside selectedCategoryId={category} />
          <div className="grow">
            {category ? (
              <CategoryProductsContainer page={+page} categoryId={category} />
            ) : (
              <ProductsContainer page={+page} />
            )}
          </div>
        </div>
      </HorizontalPaddingContainer>
    </section>
  );
}
