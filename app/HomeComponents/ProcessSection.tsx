import ProcessStep from "./ProcessStep";
import Image from 'next/image'

export default function ProcessSection() {
    return (
        <div className="flex flex-col lg:items-center py-24 px-5">
            <div className="container mx-auto text-center">
            {/* <h2 className="text-3xl text-brand-blue font-lato capitalize font-bold tracking-tight font-poppins leading-regular">three step process, <br className="lg:hidden"></br><span className="italic text-brand-orange">lasting results</span></h2> */}
            <div className="flex flex-col space-y-12 lg:flex-row  items-start lg:items-center">    
                <ProcessStep number={1} heading='contact' description='Get in touch via phone or email'/>
                  <div className="-translate-y-8 px-8 hidden lg:block">
                      <Image src={'/images/arrow-doodle.svg'} alt="arrow-doodle" width={150} height={49}/> 
                </div>
                <ProcessStep number={2} heading='schedule' description='Schedule a site visit '/>
              <div className="-translate-y-8 px-8 hidden lg:block">
                  <Image src={'/images/arrow-doodle.svg'} alt="arrow-doodle" width={150} height={49}/> 
               </div>
                <ProcessStep number={3} heading='quote' description='Receive your quote'/>
            </div>
            </div>
        </div>
    )
}