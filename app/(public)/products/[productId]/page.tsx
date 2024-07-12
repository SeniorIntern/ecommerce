import ProductDisplayContainer from '@/components/common/ProductDisplayContainer';
import ProductsGrid from '@/components/ProductsContainer';
import { HorizontalPaddingContainer } from '@/components/reusables/HorizontalPaddingContainer';

export default function Page({ params }: { params: { productId: string } }) {
  const { productId } = params;

  return (
    <section className="my-6">
      <HorizontalPaddingContainer>
        <div className="space-y-16">
          <ProductDisplayContainer productId={productId} />

          <div className="space-y-3">
            <p className="text-2xl">Similar Products</p>
            <ProductsGrid />
          </div>
        </div>
      </HorizontalPaddingContainer>
    </section>
  );
}
