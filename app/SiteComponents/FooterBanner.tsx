import React from 'react'
import ButtonCta from './ButtonCta'

function FooterBanner() {
  return (
    <div className="footer-banner flex justify-center w-full py-[80px] bg-primary-800 space-x-8  items-center">
          <div className=" text-left  ">
            <h2 className='text-lg text-white font-bold text-[#50d71e]'>Transform your space! </h2>
            <h2 className='text-lg text-white font-bold text-brand-blue'>Contact us for a free consultation</h2>
            </div>
            <ButtonCta text='Get in Touch'/>
    </div>
  )
}

export default FooterBanner