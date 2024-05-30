'use client'
import Footer from "../SiteComponents/Footer"
import Navbar from "../SiteComponents/Navbar"
import ProjectCard from "./ProjectCard"
import Image from 'next/image'
import FilterBar from "./FilterBar"

import {useState} from 'react'
import TopBanner from "@/app/SiteComponents/TopBanner"

const categories = [
    'Commercial',
    'Fit-Out',
    'Strengthening',
    'Architectural / Residential',
    'Design and Build / ECI',
    'Government',
  ];
export default function Projects() {
    const [filteredCategory, setFilteredCategory] = useState('All Categories');
    return (
        <main>
            <Navbar />
            <TopBanner />
            <div className="projects mt-[20px] lg:my-[80px] mt-32 mb-12 mx-5 max-w-6xl lg:mx-auto">
        {/* <h1 className="text-black lg:text-3xl">Projects</h1> */}
            <p className="lg:mt-[20px]">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus hic quisquam deserunt repellendus soluta rerum pariatur eius id, modi libero!</p>
            <FilterBar categories={categories} onFilterChange={setFilteredCategory}/>
            <div className="flex flex-col space-y-[40px] mt-[40px] lg:flex-row lg:space-y-0 lg:space-x-8">
                <ProjectCard title="Project 1" topHeavy={true}/>
                <ProjectCard title='project 2' topHeavy={false}/>
                <ProjectCard title='project 3' topHeavy={true}/>
            </div>
            </div>
            <Footer />
        </main>
    )   
}