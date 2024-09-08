'use client';

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious
} from '@/components/ui/pagination';
import { useProducts } from '@/hooks';
import EmptyProductImage from '@/public/emptyProduct.webp';
import { Product } from '@/types';
import _ from 'lodash';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';
import { ProductCardSkeleton } from './ProductCardSkeleton';
import ProductCard from './common/ProductCard';

type Props = {
  page?: number;
};

const ProductsContainer = ({ page }: Props) => {
  const searchParams = useSearchParams();
  const searchKeyword = searchParams.get('search');

  const currentPage = page || 1;
  const { data, isLoading } = useProducts({
    page: currentPage,
    limit: searchKeyword ? 500 : 12
  });

  const filteredProducts = (keyword: string): Product[] => {
    const filterResults = _.filter(data?.data.products, (val) =>
      val.productName.toLowerCase().includes(keyword.toLowerCase())
    );
    return filterResults;
  };

  return (
    <div className="space-y-6">
      <article className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
        {isLoading ? (
          Array.from({ length: 7 }).map((_, idx) => (
            <ProductCardSkeleton key={idx} />
          ))
        ) : searchKeyword ? (
          filteredProducts(searchKeyword).map((product) => (
            <ProductCard product={product} key={product._id} />
          ))
        ) : data?.data.products.length ? (
          data?.data.products.map((product) => (
            <ProductCard product={product} key={product._id} />
          ))
        ) : (
          <div className="">
            <Image
              src={EmptyProductImage}
              alt="Man and a empty container"
              width={800}
              height={800}
              className="mx-auto"
            />
          </div>
        )}
      </article>

      {!searchKeyword && (
        <Pagination className="">
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious
                href={
                  data?.data.hasPrevPage
                    ? `/products/?page=${data.data.prevPage}`
                    : '/products'
                }
              />
            </PaginationItem>

            <PaginationItem>
              <PaginationLink
                className=""
                href={`/products?page=${data?.data.page}`}
              >
                {data?.data.page}
              </PaginationLink>
            </PaginationItem>

            <PaginationItem>
              <PaginationNext
                href={
                  data?.data.hasNextPage
                    ? `/products/?page=${data.data.nextPage}`
                    : `/products/${data?.data.page}`
                }
              />
            </PaginationItem>

            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>

            <PaginationItem>
              <PaginationLink
                className=""
                href={`/products/?page=${data?.data.totalPages}`}
              >
                {data?.data.totalPages}
              </PaginationLink>
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      )}
    </div>
  );
};

export default ProductsContainer;
