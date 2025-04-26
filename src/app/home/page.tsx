import Footer from '@/common/components/footer/Footer';
import About from '@/common/components/home/about/About';
import FeaturedCompanies from '@/common/components/home/featuredcompany/FeaturedCompanies';
import Partners from '@/common/components/home/partners/Partners';
import ReviewsSection from '@/common/components/home/reviewbanner/ReviewsSection';
import CompanySearchBar from '@/common/components/home/serchhome/CompanySearchBar';
import Support from '@/common/components/home/supportslang/Support';
import TestimonialsSection from '@/common/components/lastpart/TestimonialsSection';

export default function ReviewsHeroSection() {
  return (
    <section className="bg-white w-full">
      {/* py-16 px-6 md:px-20 */}
      <ReviewsSection />

      <CompanySearchBar />

      <FeaturedCompanies />

      <About />
      <Partners />

      <Support />

      <TestimonialsSection />
      <Footer />
    </section>
  );
}
