'use client'
import {useState, useEffect} from 'react'
import Link from 'next/link';

import ButtonCta from "./ButtonCta";
import Image from 'next/image'
import { IoMenu } from 'react-icons/io5';

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className={`navbar w-screen fixed top-0 right-0 left-0 z-20 ${scrolled ? 'bg-brand-blue' : 'bg-transparent'} transition-colors duration-300`}>
            <div className="container px-4 mx-auto flex flex-row justify-between items-center text-white">
                <div className="logo z-20 translate-y-4 order-last lg:order-first">
                    <Image src='/images/ldd-logo.png' alt='something' width={75} height={75}/>
                </div>
                <div className="navlinks">
                    <div className='flex flex-row items-center'>
                        {open && (
                            <ul className='flex flex-col items-start space-y-4 px-5 py-10 pt-10 w-screen absolute right-0 translate-y-full bottom-0 bg-brand-blue lg:hidden'>
                                <Link href="/">
                                    <li>Home</li>
                                </Link>
                                <Link href="/about">
                                    <li>About</li>
                                </Link>
                                <Link href="/projects">
                                    <li>Projects</li>
                                </Link>
                                <ButtonCta text='book a consultation'/>
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
                                <li>Projects</li>
                            </Link>
                            <ButtonCta text='book a consultation'/>
                        </ul>

                        <div onClick={() => setOpen(!open)} className="cursor-pointer lg:hidden">
                            <IoMenu color='white' size={30}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
