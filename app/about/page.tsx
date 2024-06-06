import Footer from "../SiteComponents/Footer";
import Navbar from "../SiteComponents/Navbar";
import Image from 'next/image'
import Header from "../SiteComponents/Header";
import AboutSection from "./AboutComponents/AboutSection";
import Values from "./AboutComponents/Values";
import TopBanner from "../SiteComponents/TopBanner";
import FooterBanner from "../SiteComponents/FooterBanner";
import ModalClientManager from "@/app/SiteComponents/ModalClientManager";
export default function About() {
    return (
    <main className=" text-brand-primary">
      <ModalClientManager>
        <Navbar />
        <TopBanner heading={"About Us"} />
        <AboutSection />
        <Values />
        {/* <FooterBanner /> */}
        <Footer />
      </ModalClientManager>
      </main>
    )
}