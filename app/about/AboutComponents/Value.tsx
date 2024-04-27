import Image from 'next/image'
import { ReactElement } from 'react';

interface ValueProps {
    value: string;
    description: string;
    icon: ReactElement; // This indicates that 'icon' is a JSX element
  }
  
export default function Value ({value, description, icon}: ValueProps) {
    return (
        <div className='w-full rounded shadow-lg mx-5 bg-white p-8 flex flex-col space-y-2 h-[300px]'> 
            {icon}
            <h3 className='text-brand-blue font-poppins'>{value}</h3>
            <p className='opacity-80 font-poppins'>{description}</p>
        </div>
    )
} 