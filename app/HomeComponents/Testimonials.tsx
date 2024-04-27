import TestimonialCard from "./TestimonialCard";

const testimonials = [
    {
        name: 'john doe',
        occupation: 'software engineer',
        testimonial: `We recently hired Lakeside Painting to refresh our living room and kitchen, and I couldn't be happier with the results. Their team was professional, tidy, and incredibly efficient. The quality of the work is outstanding, and they managed to perfectly match the colors we envisioned. I highly recommend them to anyone looking to enhance their home`
    },
    {
        name: 'james dean',
        occupation: 'shop manager',
        testimonial: `Choosing Lakeside Painting was one of the best home improvement decisions we've ever made. Not only did they provide a detailed consultation, but their attention to detail was impeccable. Our home now feels brand new, thanks to their excellent craftsmanship and dedication to quality. Their friendly and knowledgeable team made the whole process a breeze!`
    }
]

export default function Testimonials() {
    return (
        <div className="testimonials bg-light-background">
            <div className='container px-5 flex flex-col lg:flex-row items-center space-y-12 lg:space-y-0 lg:space-x-12 mx-auto py-28'>
                {
                    testimonials.map((item, index) => (
                        <div className="lg:w-1/2">
                            <TestimonialCard key={index} {...item}/>
                        </div>
                    ))
                    
                }
              
            </div>
        </div>
    )
}