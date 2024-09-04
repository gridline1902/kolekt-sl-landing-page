import NavBar from "@/components/NavBar";
import HeroSection from "@/components/HeroSection";
import PartnersSection from "@/components/PartnersSection/PartnersSection";
import KolektSolutionsSection from "@/components/KolektSolutionsSection/KolektSolutionsSection";

export default function Home() {
  return (
    <main className="w-full">
      <NavBar />
      <HeroSection />
      <PartnersSection />
      <KolektSolutionsSection />
    </main>
  );
}
