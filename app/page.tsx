import Navbar from "./PageComponents/Navbar";
import Footer from "./PageComponents/Footer";


import Contact from "./HomeComponents/Contact";
import Hero from "./HomeComponents/Hero";
import ProcessSection from "./HomeComponents/ProcessSection";
import Services from "./HomeComponents/Services";
import Testimonials from "./HomeComponents/Testimonials";
import Faq from "./HomeComponents/Faq";

export default function Home() {
  return (
    <main className="pt-[80px] text-brand-blue">
      <Navbar />
        <Hero />
        <Services />
        <ProcessSection />
        <Testimonials />
        <Faq />
        <Contact />
      <Footer />
    </main>
  );
}
