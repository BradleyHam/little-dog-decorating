import Footer from "../SiteComponents/Footer"
import Navbar from "../SiteComponents/Navbar"
import ProjectCard from "./ProjectCard"

export default function Projects() {
    return (
        <main>
            <Navbar />
            <div className="projects mt-[100px] mt-32 mb-12 mx-5">
            <h1 className="text-black">Our Projects</h1>
            <div className="flex flex-col space-y-8 mt-4 lg:flex-row lg:space-y-0 lg:space-x-8">
                <ProjectCard title="Project 1"/>
                <ProjectCard title='project 2'/>
                <ProjectCard title='project 3'/>
            </div>
            </div>
            <Footer />
        </main>
    )   
}