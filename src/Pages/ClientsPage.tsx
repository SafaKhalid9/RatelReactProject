import StatsCards from "@/Components/ClientsPage/StatisticsCards";
import Header from "../Components/ClientsPage/Header";
import HeroSection from "../Components/ClientsPage/HeroSlider";
import NewsSection from "@/Components/ClientsPage/news";
import AboutSection from "@/Components/ClientsPage/about";
import Footer from "@/Components/ClientsPage/Footer";
import { WhyUsSection } from "@/Components/ClientsPage/WhyUsSection";
import { TestimonialsSection } from "@/Components/ClientsPage/TestimonialsSection";
import { CTASection } from "@/Components/ClientsPage/CTASection";
import { FAQSection } from "@/Components/ClientsPage/faqSection";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-(--background-page)">
      <Header />
      <HeroSection />
      <StatsCards />
      <AboutSection />
      <WhyUsSection />
      <NewsSection />
      <TestimonialsSection />
      <CTASection />
      <FAQSection />
      <Footer />
    </div>
  );
}
