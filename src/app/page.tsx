import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Kalyana from "@/components/Kalyana";
import Programs from "@/components/Programs";
import Gallery from "@/components/Gallery";
import TrustSection from "@/components/TrustSection";
import Team from "@/components/Team";
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
      <Team />
      <Contact />
      <Footer />
    </main>
  );
}
