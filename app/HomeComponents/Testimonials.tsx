import TestimonialCard from "./TestimonialCard";

const testimonials = [
    {
        name: 'john doe',
        occupation: 'software engineer',
        testimonial: `Little Dog Decorating did an amazing job on our office renovation. Their attention to detail and commitment to excellence really stood out. The painters were friendly, efficient, and left the place spotless every day. Our office now has a fresh, vibrant look that has impressed both our staff and clients. Thank you, Little Dog Decorating!`
    },
    {
        name: 'james dean',
        occupation: 'shop manager',
        testimonial: `I couldn't be happier with the work Little Dog Decorating did on our home! From the initial consultation to the final touches, their team was professional, punctual, and incredibly detail-oriented. The quality of their painting exceeded our expectations, and our home looks stunning. I highly recommend Little Dog Decorating for anyone looking to transform their space with expert painting services`
    }
]

export default function Testimonials() {
    return (
        <div className="testimonials bg-light-background">
            <div className='container px-5 flex flex-col lg:flex-row items-center space-y-12 lg:space-y-0 lg:space-x-12 mx-auto py-28'>
                {
                    testimonials.map((item, index) => (
                        <div key={index}className="lg:w-1/2">
                            <TestimonialCard  {...item}/>
                        </div>
                    ))
                    
                }
              
            </div>
        </div>
    )
}