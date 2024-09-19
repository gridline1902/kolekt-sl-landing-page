import NavBar from "@/components/NavBar";
import HeroSection from "@/components/HeroSection";
import PartnersSection from "@/components/PartnersSection/PartnersSection";
import KolektSolutionsSection from "@/components/KolektSolutionsSection/KolektSolutionsSection";
import Footer from "@/components/Footer/Footer";
import ContactSection from "@/components/ContactSection/ContactSection";

export default function Home() {
  return (
    <main>
      <NavBar />
      <HeroSection />
      <PartnersSection />
      <KolektSolutionsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
