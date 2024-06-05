import { FaCheck } from "react-icons/fa";
import ButtonSeeMore from "../SiteComponents/ButtonSeeMore";
import Link from "next/link";

export default function ServiceText({heading, bulletPoints}: {heading: string, bulletPoints: string[]}) {
    return (
        <>
            <div className='lg:w-1/3 bg-brand-blue h-[300px] p-6 flex flex-col justify-between'>
            <div className='top-content'>
            <h3 className="text-white">{heading}</h3>
            <ul className='list-disc list-inside text-white list-none pt-2 space-y-1 font-lato'>
    
                {bulletPoints.map((point, index) =>   <li key={index} className='flex items-center space-x-2'><FaCheck color='#C18C5D'/><p className='opacity-90'>{point}</p></li>)}
            </ul>
            </div>
            <Link href="/projects">
             <ButtonSeeMore />
            </Link>
        </div>    
    </>    
    )
}