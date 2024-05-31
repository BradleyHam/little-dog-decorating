import Footer from "../SiteComponents/Footer"
import Navbar from "../SiteComponents/Navbar"
import ProjectCard from "./ProjectCard"
import Image from 'next/image'
import FilterBar from "./FilterBar"
import TopBanner from "@/app/SiteComponents/TopBanner"
import ProjectSection from "./ProjectSection"
import getProjects from "@/sanity/utils"
export default async function Projects() {
    const projects = await getProjects();
    console.log('projects', projects)
    return (
        <main>
            <Navbar />
            <TopBanner />
            <div className="projects bg-white lg:my-[80px] px-[20px] py-[80px]
            ]   max-w-6xl lg:mx-auto">
        {/* <h1 className="text-black lg:text-3xl">Projects</h1> */}
            <p className="lg:mt-[20px]">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus hic quisquam deserunt repellendus soluta rerum pariatur eius id, modi libero!</p>
            <ProjectSection projects={projects}/>
            </div>
            <Footer />
        </main>
    )   
}