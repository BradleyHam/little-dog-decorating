'use client'
import { useState, useEffect } from 'react';
import Link from 'next/link';
import ButtonCta from "./ButtonCta";
import { IoClose, IoMenu } from 'react-icons/io5';
import MobileNav from './MobileNav';
import Image from 'next/image';

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

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

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className={`navbar w-screen top-0 right-0 left-0 fixed z-50 transition-colors duration-300 ${isScrolled ? 'bg-brand-blue' : 'bg-transparent'}`}>
            <div className="container px-[20px] mx-auto flex flex-row justify-between items-center text-white">
                <div onClick={handleToggle} className="hamburger-container cursor-pointer lg:hidden z-30 top-4 left-4 pt-4 pr-4 pb-4">
                    {open ? <IoClose size={25} /> : <IoMenu size={25} />}
                </div>
                <div className="logo hidden lg:block translate-y-2 p-4 rounded-full">
                    <Image src={'/images/ldd-logo.png'} alt="logo" width={100} height={60} />
                </div>
                {(open || isAnimating) && (
                    <MobileNav open={open} onClose={handleAnimationEnd} handleToggle={handleToggle} />
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
