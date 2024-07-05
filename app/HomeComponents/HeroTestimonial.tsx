import { FaStar } from "react-icons/fa"

export default function HeroTestimonial({text, testimonialWriter}: {text: string, testimonialWriter: string}) {
    return (
        <div className="hero-testimonial flex flex-col items-start lg:items-center space-y-3 ">
           
            <div className="star-row flex flex-row space-x-1">
                <FaStar className='text-brand-secondary'/>
                <FaStar className='text-brand-secondary'/>
                <FaStar className='text-brand-secondary'/>
                <FaStar className='text-brand-secondary'/>
                <FaStar className='text-brand-secondary'/>
            </div>
            <p className="uppercase tracking-widest leading-tight text-sm opacity-75">{testimonialWriter}</p>
            <p className="font-lato italic text-lg font-poppins lg:text-center">&quot;{text}&quot;</p>
            
        </div>
    )
}