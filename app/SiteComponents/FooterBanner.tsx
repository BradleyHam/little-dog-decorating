import React from 'react'
import ButtonCta from './ButtonCta'

function FooterBanner() {
  return (
    <div className="footer-banner flex flex-col w-full py-[80px] bg-primary-800 flex justify-center space-x-8 space-y-[40px] items-center">
          <div className=" text-center ">
            <h2 className='text-lg text-white font-bold'>Transform your space! </h2>
            <h2 className='text-lg text-white font-bold'>Contact us for a free consultation</h2>
            </div>
            <ButtonCta text='Get in Touch'/>
    </div>
  )
}

export default FooterBanner