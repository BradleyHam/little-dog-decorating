import React from 'react'
import ButtonCta from './ButtonCta'

function FooterBanner() {
  return (
    <div className="footer-banner w-full h-40 bg-primary-800 flex justify-center space-x-8 items-center">
          <div className="flex flex-col">
            <h2 className='text-lg text-white font-bold'>Transform your space </h2>
            <h2 className='text-lg text-white font-bold'>Contact us for a free consultation</h2>
            </div>
            <ButtonCta text='Get in Touch'/>
    </div>
  )
}

export default FooterBanner