import dynamic from "next/dynamic";

const Navigation = dynamic(() => import("@/components/navigation").then(mod => mod.Navigation), { ssr: false });
const HeroSection = dynamic(() => import("@/components/hero-section").then(mod => mod.HeroSection));
const BusinessesSection = dynamic(() => import("@/components/businesses-section").then(mod => mod.BusinessesSection));
const StatsSection = dynamic(() => import("@/components/stats-section").then(mod => mod.StatsSection));
const ValuesSection = dynamic(() => import("@/components/values-section").then(mod => mod.ValuesSection));
const Footer = dynamic(() => import("@/components/footer").then(mod => mod.Footer));
const TestimonialsCarousel = dynamic(() => import("@/components/testimonials-carousel").then(mod => mod.TestimonialsCarousel));
const PartnersCarousel = dynamic(() => import("@/components/partners-carousel").then(mod => mod.PartnersCarousel));

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      <main>
        <HeroSection />
        <div className="bg-black">
          <BusinessesSection />
          <PartnersCarousel />
          <StatsSection />
        </div>

        <div className="bg-white">
          {/* Testimonial Section Header */}
          <section className="bg-white py-10 px-6">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-2">
                <h2 className="text-4xl lg:text-5xl font-medium text-gray-900 mb-6">
                  Real Results.
                  <br />
                  Proven Impact.
                </h2>
                <p className="text-gray-600 max-w-3xl mx-auto text-lg">
                  We collaborate with top institutions, government agencies, and
                  private organizations to deliver lasting impact in education,
                  infrastructure, and garment production.
                </p>
              </div>
            </div>
          </section>

          <TestimonialsCarousel />
        </div>
        <div className="bg-black">
          <ValuesSection />
        </div>
      </main>
      <Footer />
    </div>
  );
}
