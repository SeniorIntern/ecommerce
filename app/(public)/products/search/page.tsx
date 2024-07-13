import ProductsContainer from '@/components/ProductsContainer';
import { HorizontalPaddingContainer } from '@/components/reusables/HorizontalPaddingContainer';
import { Suspense } from 'react';

export default function Page() {
  return (
    <section className="my-6">
      <HorizontalPaddingContainer>
        <Suspense>
          <ProductsContainer />
        </Suspense>
      </HorizontalPaddingContainer>
    </section>
  );
}
