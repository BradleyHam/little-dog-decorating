'use client'
import HeroTestimonial from "./HeroTestimonial";
import { useEffect, useRef } from "react";
import Image from "next/image";
import HeroTestimonials from "./HeroTestimonials";
import ButtonCta from "../SiteComponents/ButtonCta";
import gsap from 'gsap';

export default function Hero() {
    const headingRef = useRef(null);
   
   

    return (
        <div className="hero-container h-screen">
            <div className="text-white px-5 flex flex-col items-start lg:items-center pt-[150px] lg:pt-[250px]">
                <HeroTestimonials />
                <div className="heading-row flex flex-col mx-auto pt-12 lg:pt-28 text-center mb-[40px]">
                    <h1 ref={headingRef} className="text-4xl text-left lg:text-center text-brand-blue font-bold capitalize mb-4 tracking-tight leading-normal font-poppins text-white">
                        transform your space with <span className="text-brand-orange">little dog decorating</span>
                    </h1>
                    <h1 className="text-2xl text-left lg:text-center text-white font-medium capitalize leading-normal">
                        expert painting services in Queenstown
                    </h1>
                </div>
                <ButtonCta text='book a consultation' />
            </div>
        </div>
    );
}
