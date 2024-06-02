import Image from 'next/image'
import { AiFillInstagram } from 'react-icons/ai'
import { RiFacebookFill } from 'react-icons/ri'
export default function Footer(){
    return (  
        <div className='footer bg-brand-blue text-white px-5'>
        <div className='footer-container container mx-auto flex justify-center items-center py-[40px]'>
          
            <div className='socials flex justify-center'>
                <a className='facebook opacity-70 cursor-pointer hover:opacity-100' href='https://www.facebook.com/profile.php?id=61556279065294&mibextid=qi2Omg&rdid=znh743H9o3lnaMpV' >
                    <AiFillInstagram size={30} />
                </a>
                <a className='instagram opacity-70 cursor-pointer hover:opacity-100' href='https://www.instagram.com/rts_chemicals/'>
                <RiFacebookFill size={30}  />
              </a> 
            </div>
        </div>
        <div className='bottom-footer mx-5 md:mx-10 lg:mx-20 py-10 border-t flex justify-center'>
          <p className='opacity-80'>  &copy; 2024 Little Dog Decorating </p> 
        </div>
    </div>
    )
}