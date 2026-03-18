import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Kalyana from "@/components/Kalyana";
import Programs from "@/components/Programs";
import Gallery from "@/components/Gallery";
import TrustSection from "@/components/TrustSection";
import InternationalOutreach from "@/components/InternationalOutreach";
import Team from "@/components/Team";
import VaikhanasaPandits from "@/components/VaikhanasaPandits";
import AdvisoryBoard from "@/components/AdvisoryBoard";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Kalyana />
      <Programs />
      <Gallery />
      <TrustSection />
      <InternationalOutreach />
      <Team />
      <VaikhanasaPandits />
      <AdvisoryBoard />
      <Contact />
      <Footer />
    </main>
  );
}
