import Link from "next/link";
import Image from 'next/image'
import { FaArrowRight } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";

export default function ProjectCard({title, smallImage, mediumImage, largeImage, categories, topHeavy, slug}: {title: string, topHeavy: boolean, smallImage: string, mediumImage: string, largeImage: string, categories: string[], slug: string}) {
  console.log('slug', slug)
  return (
        <div className="project-card w-full">
        <Link href={`/projects/${slug}`} className="w-full">
        <div className="project-card  gap-2 grid grid-rows-6 grid-cols-12 h-[300px]  cursor-pointer">
            <div className={`large relative col-span-12
             ${topHeavy ? 'row-start-1' : 'row-start-3'} 
             ${topHeavy ? 'row-end-5' : 'row-end-7'}
              `}>
                <Image objectFit='cover' src={largeImage} fill={true} alt={'something'}/>
              </div>
            <div className={` medium
            ${topHeavy ? 'row-start-5' : 'row-start-1'}
            ${topHeavy ? 'row-end-7' : 'row-end-3'}
            ${topHeavy ? 'col-start-1' : 'col-start-6'}
            ${topHeavy ? 'col-end-8' : 'col-end-13'}
             relative`}
            >
                  <Image objectFit='cover' src={mediumImage} fill={true} alt={'something'}/>
            </div>
            <div className={`col-span-5 small
            ${topHeavy ? 'row-start-5' : 'row-start-1'}
            ${topHeavy ? 'row-end-7' : 'row-end-3'}
            ${topHeavy ? 'col-start-8' : 'col-start-1'}
            ${topHeavy ? 'col-end-13' : 'col-end-6'}
          
              relative`}>
                  <Image objectFit='cover' src={smallImage} fill={true} alt={'something'}/>
             </div>
        </div>
        </Link>
        <div className="card-description-row mt-4 flex justify-between items-center">
          <h2 className="text-base font-regular tracking">{title}</h2>
          <FaArrowRightLong size={22} color='#0F122F'/>
        </div>
      
        </div>
    )
}