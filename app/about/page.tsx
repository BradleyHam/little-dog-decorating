import Footer from "../SiteComponents/Footer";
import Navbar from "../SiteComponents/Navbar";
import Image from 'next/image'
import Header from "../SiteComponents/Header";
import AboutSection from "./AboutComponents/AboutSection";
import Values from "./AboutComponents/Values";

export default function About() {
    return (
    <main className="pt-[80px] text-brand-blue">
        <Navbar />
        <div className="projects-banner"></div>
        <AboutSection />
        {/* <Values /> */}
        <Footer />
      </main>
    )
}