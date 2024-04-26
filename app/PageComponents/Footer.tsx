import Image from 'next/image'
import { AiFillInstagram } from 'react-icons/ai'
import { RiFacebookFill } from 'react-icons/ri'
export default function Footer(){
    return (
    
        <div className='footer bg-brand-blue text-white'>
        <div className='footer-container container mx-auto flex justify-between items-center pt-8  pb-4'>
           
          
            <div className='socials flex'>
                <a className='facebook' href='https://www.facebook.com/profile.php?id=61556279065294&mibextid=qi2Omg&rdid=znh743H9o3lnaMpV' >
                    <AiFillInstagram size={40} />
                </a>
                <a className='instagram' href='https://www.instagram.com/rts_chemicals/'>
                <RiFacebookFill size={40}  />
              </a> 
            </div>
            <Image src={'/images/ldd-logo.png'} alt='something' width={100} height={100} className={'logo'}/>
        </div>
        <div className='bottom-footer mx-5 md:mx-10 lg:mx-20 py-10 text-lato border-t-2'>
        &copy; 2024 Little Dog Decorating
        </div>
    </div>
    )
}