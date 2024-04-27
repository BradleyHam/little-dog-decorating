import Footer from "../PageComponents/Footer";
import Navbar from "../PageComponents/Navbar";
import Image from 'next/image'
import Header from "./AboutComponents/Header";
import AboutSection from "./AboutComponents/AboutSection";
import Values from "./AboutComponents/Values";

export default function About() {
    return (
    <main className="pt-[80px] text-brand-blue">
        <Navbar />
        <Header />
        <AboutSection />
        <Values />
        <Footer />
      </main>
    )
}