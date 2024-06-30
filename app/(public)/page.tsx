import CategoriesBar from '@/components/CategoriesBar';
import { HeroSection } from '@/components/HeroSection';
import HomeBanner from '@/components/HomeBanner';
import OffersBanner from '@/components/OffersBanner';
import ProductsShowcase from '@/components/ProductShowcase';
import Testimonials from '@/components/Testimonials';
import TrustedCompanies from '@/components/TrustedCompanies';

export default function Page() {
  return (
    <section className="space-y-20">
      <HeroSection />
      <OffersBanner />
      <CategoriesBar />
      <ProductsShowcase />
      <Testimonials />
      <HomeBanner />
      <TrustedCompanies />
    </section>
  );
}
