import { BiSolidQuoteAltLeft } from "react-icons/bi";

export default function TestimonialCard({name, occupation, testimonial}: {name: string, occupation: string, testimonial: string}) {
    return (
        <div className="flex flex-col space-y-3 bg-white p-8 shadow-2xl rounded">
            <div className="flex space-x-3 ">
                <div className="flex space-x-3 items-center">
           
                <BiSolidQuoteAltLeft size={40} color='#E68C2C' />
      
                    <div>
                        <p className="text-lg font-semibold capitalize">{name}</p>
                        <p className="text-sm  text-brand-blue uppercase tracking-wide opacity-60">{occupation}</p>  
                    </div>
                </div>
            </div>

            <p className="font-lato opacity-50 text-lg">
                {testimonial}
            </p>
        </div>
    )
}
