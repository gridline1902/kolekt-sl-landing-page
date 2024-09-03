import NavBar from "@/components/NavBar";
import HeroSection from "@/components/Hero-Section";

export default function Home() {
  return (
    <main className="w-full">
      <NavBar />
      <HeroSection />
      <section className="min-h-screen bg-white" ></section>
    </main>
  );
}
