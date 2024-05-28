import Link from "next/link";
import Image from 'next/image'
import { FaArrowRight } from "react-icons/fa";

export default function ProjectCard({title, topHeavy}: {title: string, topHeavy: boolean}) {
    return (
        <div className="project-card w-full">
        <Link href={`/projects/${title}`} className="w-full">
        <div className="project-card border gap-2 grid grid-rows-6 grid-cols-12 h-[300px]  cursor-pointer">
            <div className={`relative col-span-12
             ${topHeavy ? 'row-start-1' : 'row-start-3'} 
             ${topHeavy ? 'row-end-5' : 'row-end-7'}
              bg-gray-300`}>
                <Image objectFit='cover' src={'/images/ldd-exterior.jpg'} fill={true} alt={'something'}/>
              </div>
            <div className={` 
            ${topHeavy ? 'row-start-5' : 'row-start-1'}
            ${topHeavy ? 'row-end-7' : 'row-end-3'}
            ${topHeavy ? 'col-start-1' : 'col-start-6'}
            ${topHeavy ? 'col-end-8' : 'col-end-13'}
            bg-red-300 relative`}
            >
                  <Image objectFit='cover' src={'/images/ldd-interior.jpg'} fill={true} alt={'something'}/>
            </div>
            <div className={`col-span-5 
            ${topHeavy ? 'row-start-5' : 'row-start-1'}
            ${topHeavy ? 'row-end-7' : 'row-end-3'}
            ${topHeavy ? 'col-start-8' : 'col-start-1'}
            ${topHeavy ? 'col-end-13' : 'col-end-6'}
          
             bg-red-700 relative`}>
                  <Image objectFit='cover' src={'/images/ldd-1.jpg'} fill={true} alt={'something'}/>
             </div>
        </div>
        </Link>
        <div className="card-description-row flex justify-between items-center">
          <h2>{title}</h2>
          <FaArrowRight />
        </div>
      
        </div>
    )
}