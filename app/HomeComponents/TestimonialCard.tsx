import { BiSolidQuoteAltLeft } from "react-icons/bi";

export default function TestimonialCard({name, occupation, testimonial}: {name: string, occupation: string, testimonial: string}) {
    return (
        <div className="flex flex-col  bg-brand-blue  shadow-2xl rounded-lg">
            
            <div className="testionial-card-heading flex space-x-3 py-[20px] px-5">
                <div className="flex space-x-3 items-center">
                <BiSolidQuoteAltLeft size={40} color='#C18C5D' />
                    <div className="text-white ">
                        <p className="text-lg font-semibold capitalize tracking-tight">{name}</p>
                        <p className="text-sm uppercase tracking-widest opacity-60">{occupation}</p>  
                    </div>
                </div>
            </div>

            <p className="text-brand-blue opacity-60 text-lg font-light leading-normal text-white pt-[20px] pb-[40px] px-5">
                {testimonial}
            </p>

        </div>
    )
}
