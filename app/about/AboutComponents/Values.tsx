import Image from 'next/image'
import Value from './Value'
import { IconBase } from 'react-icons'
import { SiTrustpilot } from 'react-icons/si'
import { PiCubeTransparentBold } from 'react-icons/pi'
import { FaBookOpen, FaHandshakeSimple } from 'react-icons/fa6'

const iconSize = 30;


const values = [
    {   
        value: 'Integrity',
        description: 'We take the highest standards of integrity and accountability with every project we undertake',
        icon: <SiTrustpilot color='#C18C5D' size={iconSize}/>
    },
    {
        value: 'Quality',
        description: 'We strive to deliver quality results with every project we undertake',
        icon: <FaBookOpen color='#C18C5D' size={28}/>
    },
    {
        value: 'Reliability',
        description: 'We take the highest standards of reliability and accountability with every project we undertake',
        icon: <FaHandshakeSimple color='#C18C5D' size={iconSize}/>
    },
    {
        value: 'Trust',
        description: 'We take the highest standards of trust and accountability with every project we undertake',
        icon: <SiTrustpilot color='#C18C5D' size={30}/>
    }
]
export default function Values(){
    return(
        <div className="bg-gray-50">
            <div className="flex flex-col items-center px-5 container mx-auto py-[80px] ">
                <h2 className="text-2xl font-bold text-brand-primary tracking-tighter">Our values</h2>
                <div className="values flex flex-col  items-center  pt-12 w-full lg:flex-row space-y-4 lg:space-y-0">
                   { values.map((value, index) => <Value key={index} value={value.value} description={value.description} icon={value.icon}/>) }
              
                </div>
            </div>
        </div>
    )
}