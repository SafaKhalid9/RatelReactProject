import StatsCards from "@/Components/ClientsPage/StatisticsCards";
import Header from "../Components/ClientsPage/Header";
import HeroSection from "../Components/ClientsPage/HeroSlider";
import NewsSection from "@/Components/ClientsPage/news";
import AboutSection from "@/Components/ClientsPage/about";
import Footer from "@/Components/ClientsPage/Footer";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-(--background-page)">
      <Header />
      <HeroSection />
      <StatsCards />
      <NewsSection />
      <AboutSection />
      <Footer />
    </div>
  );
}
