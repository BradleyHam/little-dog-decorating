import HeroTestimonial from "./HeroTestimonial";
import Image from "next/image"
import HeroTestimonials from "./HeroTestimonials";
import HeroHeading from "./HeroHeading";

export default function Hero() {
    return (
        <>
            <HeroTestimonials />
            <HeroHeading />
            <div className="">
               <div className="container mx-auto">
                <div className="width-full h-[500px]   bg-gray-600">
                     <Image src='' alt='something'/>
                 </div>
                 <div className="stats flex flex-row justify-around items-center py-24">
                        <div className="master-painters w-1/3 flex justify-center">
                                <Image src='/images/master-painters.png' alt='something' width={200} height={100}/>
                        </div>
                        <div className="stat w-1/3 text-center flex items-center space-x-4 justify-center font-lato">
                                <p className="text-3xl bold text-brand-blue">8 +</p><p className='capitalize text-xl text-brand-blue opacity-60'> years of experience </p>
                        </div>
                        <div className="stat w-1/3 text-center flex items-center space-x-4 justify-center font-lato">
                                <p className="text-3xl bold text-brand-blue tracking-wide">100 +</p><p className='capitalize text-xl text-brand-blue opacity-60'> houses transformed </p>
                        </div>
                        
                 </div>
               </div>

            </div>
        </>
    )
}