import HeroTestimonial from "./HeroTestimonial";
import Image from "next/image"
import HeroTestimonials from "./HeroTestimonials";
import HeroHeading from "./HeroHeading";
import ButtonCta from "../SiteComponents/ButtonCta";

export default function Hero() {
    return (
        <>
        <div className="hero-container h-screen ">
            <div className="text-white px-5 flex flex-col items-start lg:items-center">
                <HeroTestimonials />
                <HeroHeading />
                <ButtonCta text='book a consultation'/>
            </div>
            
            </div>
        </>
    )
}