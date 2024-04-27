import { FaStar } from "react-icons/fa"

export default function HeroTestimonial({text}: {text: string}) {
    return (
        <div className="hero-testimonial flex flex-col items-start lg:items-center space-y-1 ">
            <div className="star-row flex flex-row space-x-1">
                <FaStar className='text-brand-orange'/>
                <FaStar className='text-brand-orange'/>
                <FaStar className='text-brand-orange'/>
                <FaStar className='text-brand-orange'/>
                <FaStar className='text-brand-orange'/>
               
            </div>
            <p className="font-lato italic text-lg">"{text}"</p>
        </div>
    )
}