'use client'
import Image from 'next/image'
import { useState, useEffect, useRef } from 'react';

function useCountUp(target, duration, start) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!start) return;

        let startCount = 0;
        const end = parseInt(target);
        if (startCount === end) return;

        const totalDuration = parseInt(duration);
        const incrementTime = totalDuration / end;
        const timer = setInterval(() => {
            startCount += 1;
            setCount(startCount);
            if (startCount === end) clearInterval(timer);
        }, incrementTime);

        return () => clearInterval(timer);
    }, [target, duration, start]);

    return count;
}

export default function StatRow() {
    const [startCounting, setStartCounting] = useState(false);
    const statRowRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setStartCounting(true);
                    observer.disconnect();
                }
            },
            {
                root: null,
                rootMargin: '0px 0px -5px 0px',
                threshold: 0,
            }
        );

        if (statRowRef.current) {
            observer.observe(statRowRef.current);
        }

        return () => {
            if (observer && observer.disconnect) {
                observer.disconnect();
            }
        };
    }, []);

    const housesTransformed = useCountUp(100, 1500, startCounting); // 100 over 2 seconds
    const yearsOperating = useCountUp(8, 1500, startCounting); // 8 over 2 seconds

    return (
        <div ref={statRowRef} className="stat-row bg-white">
            <div className="stats px-5 flex flex-col space-y-8 lg:space-y-0 items-start lg:flex-row justify-around items-left lg:items-center py-[60px]">
                <div className="master-painters lg:w-1/3 flex justify-center">
                    <Image src='/images/master-painters.png' alt='something' width={200} height={100} />
                </div>
                <div className="stat lg:w-1/3 text-center flex items-center space-x-4 justify-center ">
                    <p className="text-3xl bold text-brand-blue tracking-wide"><span className=''>+</span> {housesTransformed}</p>
                    <p className='capitalize text-xl text-brand-blue opacity-60'> houses transformed </p>
                </div>
                <div className="stat lg:w-1/3 text-center flex items-center space-x-4 justify-center ">
                    <p className="text-3xl bold text-brand-blue"><span className=''>+</span> {yearsOperating}</p>
                    <p className='capitalize text-xl text-brand-blue opacity-60'> Years in Business </p>
                </div>
            </div>
        </div>
    );
}
