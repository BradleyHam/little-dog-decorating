import { FaCheck } from "react-icons/fa";
import ButtonSeeMore from "../PageComponents/ButtonSeeMore";

export default function ServiceText({heading, bulletPoints}: {heading: string, bulletPoints: string[]}) {
    return (
        <>
            <div className='lg:w-1/3 bg-brand-blue h-[300px] p-6 flex flex-col justify-between'>
            <div className='top-content'>
            <h3>{heading}</h3>
            <ul className='list-disc list-inside text-white list-none pt-2 space-y-1 font-lato'>
                {bulletPoints.map(point =>   <li className='flex items-center space-x-2'><FaCheck color='#E68C2C'/><p className='opacity-90'>{point}</p></li>)}
            </ul>
            </div>
            <ButtonSeeMore />
        </div>    
    </>    
    )
}