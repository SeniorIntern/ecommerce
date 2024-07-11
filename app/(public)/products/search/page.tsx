'use client';

import ProductsContainer from '@/components/ProductsContainer';
import { HorizontalPaddingContainer } from '@/components/reusables/HorizontalPaddingContainer';
import { useSearchParams } from 'next/navigation';

export default function Page() {
  const searchParams = useSearchParams();
  const search = searchParams.get('search');

  return (
    <section className="my-6">
      <HorizontalPaddingContainer>
        {search && <ProductsContainer searchKeyword={search} />}
      </HorizontalPaddingContainer>
    </section>
  );
}
