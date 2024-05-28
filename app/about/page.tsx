import Footer from "../SiteComponents/Footer";
import Navbar from "../SiteComponents/Navbar";
import Image from 'next/image'
import Header from "../SiteComponents/Header";
import AboutSection from "./AboutComponents/AboutSection";
import Values from "./AboutComponents/Values";
import TopBanner from "../SiteComponents/TopBanner";
export default function About() {
    return (
    <main className=" text-brand-blue">
        <Navbar />
        <TopBanner />
        <AboutSection />
        {/* <Values /> */}
        <Footer />
      </main>
    )
}