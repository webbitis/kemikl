import Header from "./components/Header";
import Hero from "./components/Hero";
import ChemistrySection from "./components/ChemistrySection";
import Benefits from "./components/Benefits";
import EarlyAccess from "./components/EarlyAccess";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="relative flex min-h-full flex-col overflow-x-hidden bg-[#fdf8fb]">
      {/* Global ambient background */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-pink-100/40 via-[#fdf8fb] to-[#fdf8fb]"
      />
      <div
        aria-hidden
        className="pointer-events-none fixed -z-10 bottom-0 right-0 h-[600px] w-[600px] translate-x-1/3 translate-y-1/3 rounded-full bg-gradient-to-tl from-purple-100/30 to-transparent blur-3xl"
      />

      <Header />
      <main>
        <Hero />
        <ChemistrySection />
        <Benefits />
        <EarlyAccess />
      </main>
      <Footer />
    </div>
  );
}
