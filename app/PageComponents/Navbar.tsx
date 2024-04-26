'use client'
import {useState} from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import ButtonCta from "../PageComponents/ButtonCta";
import Image from 'next/image'
export default function Navbar() {
    const [open, setOpen] = useState(true)
    return (
        <div className="navbar   w-screen bg-brand-blue fixed top-0 right-0 left-0 z-20">
            <div className=" container px-4 mx-auto flex flex-row justify-between items-center text-white">
            <div className="logo z-20 translate-y-4">
                <Image src='/images/ldd-logo.png' alt='something' width={100} height={100}/>
            </div>
            <div className="navlinks ml-auto">
                <div className='flex flex-row space-x-6 items-center'>
                    {open && (
                        <ul className={'flex flex-col items-start space-y-4 px-10 py-10 pt-20 w-screen absolute right-0 translate-y-full bottom-0 bg-brand-blue lg:hidden'}>
                            <li>Home</li>
                            <li>About</li>
                            <li>Projects</li>
                            <ButtonCta  text='book a consultation'/>
                        </ul>
                    )}
                  
                    <ul className="flex-row space-x-8 items-center font-lato hidden lg:flex">
                        <li>Home</li>
                        <li>About</li>
                        <li>Projects</li>
                        <ButtonCta  text='book a consultation'/>
                    </ul>
                    <div className="hidden">
                        {/* <ButtonCta  text='book a consultation'/> */}
                    </div>
                    <div onClick={() => setOpen(!open)} className="cursor-pointer lg:hidden">
                     <GiHamburgerMenu />
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}
                        