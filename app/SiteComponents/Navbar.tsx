'use client'
import { useState } from 'react';
import Link from 'next/link';
import ButtonCta from "./ButtonCta";
import { IoClose, IoMenu } from 'react-icons/io5';
import MobileNav from './MobileNav';
import Image from 'next/image'

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);

    const handleToggle = () => {
        if (open) {
            setIsAnimating(true);
            setOpen(false);
        } else {
            setOpen(true);
        }
    };

    const handleAnimationEnd = () => {
        setIsAnimating(false);
    };

    return (
        <div className="navbar w-screen fixed top-0 right-0 left-0 h-[80px] z-50 bg-brand-blue">
            <div className="container px-[20px] mx-auto flex flex-row justify-between items-center text-white">
                <div onClick={handleToggle} className="hamburger-container cursor-pointer lg:hidden z-30 fixed top-4 left-4 pt-4 pr-4 pb-4">
                    {open ? <IoClose size={25} /> : <IoMenu size={25} />}
                </div>
                <div className="logo hidden lg:block translate-y-2 p-4 rounded-full">
                    <Image src={'/images/ldd-logo.png'} alt="logo" width={100} height={60}/>
                </div>
                {(open || isAnimating) && (
                    <MobileNav open={open} onClose={handleAnimationEnd} />
                )}

                <ul className="flex-row space-x-8 items-center hidden lg:flex">
                    <Link href="/">
                        <li>Home</li>
                    </Link>
                    <Link href="/about">
                        <li>About</li>
                    </Link>
                    <Link href="/projects">
                        <li>Projects</li>
                    </Link>
                    <ButtonCta text='Book a consultation' />
                </ul>
            </div>
        </div>
    );
}
