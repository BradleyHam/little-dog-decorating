import Footer from "../SiteComponents/Footer"
import Navbar from "../SiteComponents/Navbar"
import ProjectCard from "./ProjectCard"
import Image from 'next/image'
import FilterBar from "./FilterBar"
import TopBanner from "@/app/SiteComponents/TopBanner"
import ProjectSection from "./ProjectSection"
import getProjects from "@/sanity/utils/getProjects"
import ModalClientManager from "../SiteComponents/ModalClientManager"
export default async function Projects() {
    const projects = await getProjects();
    return (
        <main>
            <ModalClientManager>
            <Navbar />
            <TopBanner heading={'Projects'}/>
            <div className="projects bg-white lg:my-[80px] px-[20px] py-[40px]
            ]   max-w-6xl lg:mx-auto">
        {/* <h1 className="text-black lg:text-3xl">Projects</h1> */}
            <p className="lg:mt-[20px] text-sm font-light leading-relaxed">
                Little Dog Decorating is dedicated to bringing color and life to the spaces where people live, work, and flourish. We take pride in transforming your visions into vibrant realities.
            <br /><br />
             Explore some of our outstanding projects and see how we aim to elevate the painting industry through quality craftsmanship.</p>
            <ProjectSection projects={projects}/>
            </div>
            <Footer />
            </ModalClientManager>
        </main>
    )   
}