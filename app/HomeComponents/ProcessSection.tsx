import ProcessStep from "./ProcessStep";
import Image from 'next/image'

export default function ProcessSection() {
    return (
        <div className="flex flex-col items-center py-24 px-5">
            <h1 className="text-3xl font-black font-lato capitalize">three step process, <span className="italic text-brand-orange">lasting results</span></h1>
            <div className="flex flex-col space-y-12 pt-12 lg:flex-row container mx-auto  items-center">    
                <ProcessStep number={1} heading='contact' description='Get a quote Get a quote Get a quote Get a quote Get a quote'/>
                  <div className="-translate-y-8 px-8 hidden lg:block">
                      <Image src={'/images/arrow-doodle.svg'} alt="arrow-doodle" width={150} height={49}/> 
                </div>
                <ProcessStep number={2} heading='schedule' description='Get a quote Get a quote Get a quote Get a quote Get a quote'/>
              <div className="-translate-y-8 px-8 hidden lg:block">
                  <Image src={'/images/arrow-doodle.svg'} alt="arrow-doodle" width={150} height={49}/> 
               </div>
                <ProcessStep number={3} heading='paint' description='Get a quote Get a quote Get a quote Get a quote Get a quote'/>
            </div>
        </div>
    )
}