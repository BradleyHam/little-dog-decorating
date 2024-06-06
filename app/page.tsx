'use client'
import { useState } from 'react';
import Modal from './SiteComponents/Modal';

import Navbar from "./SiteComponents/Navbar";
import Footer from "./SiteComponents/Footer";
import Contact from "./HomeComponents/Contact";
import Hero from "./HomeComponents/Hero";
import ProcessSection from "./HomeComponents/ProcessSection";
import Services from "./HomeComponents/Services";
import Testimonials from "./HomeComponents/Testimonials";
import Faq from "./HomeComponents/Faq";
import Image from 'next/image'
import StatRow from './HomeComponents/StatRow'
import ModalClientManager from './SiteComponents/ModalClientManager';

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
      setIsModalOpen(true);
  };

  const handleCloseModal = () => {
      setIsModalOpen(false);
  };
  return (
    <main className="relative text-brand-blue">
        <ModalClientManager>
        <Navbar />
        <Hero />
        <StatRow />
        <Services />
        <ProcessSection />
        <Testimonials />
        <Faq />
        <Contact />
      <Footer />
      </ModalClientManager>
    </main>
  );
}
