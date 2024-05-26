'use client'
import {useState} from 'react'
import Link from 'next/link';

import ButtonCta from "./ButtonCta";
import Image from 'next/image'
import { IoMenu } from 'react-icons/io5';
export default function Navbar() {
    const [open, setOpen] = useState(false)
    return (
        <div className="navbar   w-screen bg-transparent fixed top-0 right-0 left-0 z-20">
            <div className=" container px-4 mx-auto flex flex-row justify-between items-center text-white">
            <div className="logo z-20 translate-y-4 order-last lg:order-first">
                <Image src='/images/ldd-logo.png' alt='something' width={100} height={100}/>
            </div>
            <div className="navlinks">
                <div className='flex flex-row space-x-6 items-center'>
                    {open && (

                        <ul className={'flex flex-col items-start space-y-4 px-5 py-10 pt-10 w-screen absolute right-0 translate-y-full bottom-0 bg-brand-blue lg:hidden'}>
                              <Link href="/">
                                <li>Home</li>
                            </Link>
                            <Link href="/about">
                                <li>About</li>
                            </Link>
                            <Link href="/projects">
                                <li>Projects</li>
                            </Link>
                           
                            <ButtonCta  text='book a consultation'/>
                        </ul>
                      
                    )}
                  
                    <ul className="flex-row space-x-8 items-center font-lato hidden lg:flex">
                    <Link href="/">
                                <li>Home</li>
                            </Link>
                        <Link href="/about">
                                <li>About</li>
                            </Link>
                            <Link href="/projects">
                                <li>projects</li>
                            </Link>
                        <ButtonCta  text='book a consultation'/>
                    </ul>
            
                    <div onClick={() => setOpen(!open)} className="cursor-pointer lg:hidden">
                    <IoMenu color='#0F122F' size={30}/>
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}
                        