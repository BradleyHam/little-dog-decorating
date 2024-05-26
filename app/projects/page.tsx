import Footer from "../SiteComponents/Footer"
import Navbar from "../SiteComponents/Navbar"
import ProjectCard from "./ProjectCard"
import Image from 'next/image'

export default function Projects() {
    return (
        <main>
            <Navbar />
            <div className="projects-banner bg-gray-50">
              <Image src={'/images/unsplash-house.jpg'} objectFit='cover' width={500} height={500}/>
            </div>
            <div className="projects mt-[20px] mt-32 mb-12 mx-5">
            <h1 className="text-black">Projects</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus hic quisquam deserunt repellendus soluta rerum pariatur eius id, modi libero!</p>
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