import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import ContactForm from "./ContactForm";

export default function Contact(){
    return (
        <div className="contact py-28">
            <div className="container mx-auto  ">
            <div className=" flex bg-gray-200 translate-y-2 w-[80%] mx-auto p-12  bg-light-background shadow-xl rounded-lg">
                <div className="text-side w-1/2 ">
                    <h3 className="capitalize text-brand-blue mb-4">contact us for a <br></br> <span className="capitalize italic text-brand-orange"> free consultation</span></h3>
                    <div className="contact-method mb-2 flex items-center space-x-2">
                        <FaPhoneAlt color='#0F122F'/>
                        <p className="text-lato opacity-70 text-lg">+234 234 234 234</p>
                    </div>
                    <div className="contact-method mb-2 flex items-center space-x-2">
                         <MdEmail size={20} color='#0F122F'/> 
                        <p className="text-lato opacity-70 text-lg">qg2p8@example.com</p>
                    </div>
                </div>
                <div className="form-side w-1/2">
                    <ContactForm/>
                </div>
             
            </div>
            <div className='map-view h-[350px]'>
        <iframe
          width="100%"
          height="100%"
          style={{border:0}}

          allowFullScreen
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d90284.49043269485!2d168.61739859040918!3d-44.99669492981708!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa9d51df1d7a8de5f%3A0x500ef868479a600!2sQueenstown!5e0!3m2!1sen!2snz!4v1711249838039!5m2!1sen!2snz">
        </iframe>
      </div>
                </div>
        </div>
    )
}