import Header from "@/components/header";
import HeroSection from "@/components/hero-section";
import FeatureShowcase from "@/components/feature-showcase";
import TestimonialsSection from "@/components/testimonials-section";
import SignupSection from "@/components/signup-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <HeroSection />
      <FeatureShowcase />
      <TestimonialsSection />
      <SignupSection />
      <Footer />
    </div>
  );
}
