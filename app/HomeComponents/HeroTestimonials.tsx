import HeroTestimonial from "./HeroTestimonial";

export default function HeroTestimonials(){
    return (
    <div className="hero-testimonial-row flex justify-around container mx-auto py-24">
    <HeroTestimonial text='friendly, punctual and reliable'/>
    <HeroTestimonial text='best painters in town'/>
    <HeroTestimonial text='surpassed expectations'/>
</div>
    )
}