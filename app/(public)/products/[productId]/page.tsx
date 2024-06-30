import ProductPageCard from '@/components/common/ProductPageCard';
import { ProductsContainer } from '@/components/ProductsContainer';
import { HorizontalPaddingContainer } from '@/components/reusables/HorizontalPaddingContainer';

export default function Page({ params }: { params: { productId: string } }) {
  const { productId } = params;

  return (
    <section>
      <HorizontalPaddingContainer>
        <div className="space-y-10">
          <ProductPageCard productId={productId} />

          <div className='space-y-3'>
            <p className="text-2xl">Similar Products</p>
            <ProductsContainer />
          </div>
        </div>
      </HorizontalPaddingContainer>
    </section>
  );
}
