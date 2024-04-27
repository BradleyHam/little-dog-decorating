
import Image from 'next/image';
import ServiceText from './ServiceText';

const ServiceData = {
    exteriorPainting: {
        heading: 'Exterior Painting',
        bulletPoints: ['Roof Spraying', 'Water Blasting', 'Cedar Care', 'Gutter Cleaning']
    },
    interiorPainting: {
        heading: 'Interior Painting',
        bulletPoints: ['Gib Stopping', 'Wallpapering', 'Spray Painting']
    }
}

export default function Services() {
    return (
        <div className='bg-light-background'>
        <div className='services container mx-auto py-28 space-y-12'>
            <div className='px-5 service flex flex-col lg:flex-row'>
                <div className='lg:w-2/3 bg-gray-300 h-[300px] relative'>
                    <Image src='/images/mica9.jpeg'   layout='fill'
        objectFit='cover'  alt='something'/>
                </div>
               <ServiceText heading={ServiceData.exteriorPainting.heading } bulletPoints={ServiceData.exteriorPainting.bulletPoints}/>
            </div>
            <div className='service flex flex-col lg:flex-row px-5'>
               
                <div className='lg:w-2/3 bg-gray-300 h-[300px] relative lg:order-1'>
                        <Image src='/images/base-hostel.webp'   layout='fill'
                objectFit='cover'  alt='something'/>
                </div>
                <ServiceText heading={ServiceData.interiorPainting.heading } bulletPoints={ServiceData.interiorPainting.bulletPoints}/>
            </div>
        </div>
        </div>
  );
}