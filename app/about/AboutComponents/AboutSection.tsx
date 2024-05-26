import Image from 'next/image'
export default function About() {
    return(
        <div className="px-5 container mx-auto lg:max-w-[70%] py-24">
           <h2 className="text-3xl font-bold text-left tracking-tight font-poppins">About</h2>
            <div className='bg-gray-200 h-[300px] w-full mt-[20px] lg:mt-[30px]'>
             <Image />
            </div>
        <p className="font-lato font-normal opacity-80 text-xl lg:text-left pt-[20px] lg:pt-[30px]">
        Nestled in the heart of Queenstown, Little Dog Decorating is your local expert in transforming spaces with vibrant colors and professional finishes. Founded on a passion for creativity and a dedication to craftsmanship, we pride ourselves on delivering personalized painting solutions that reflect your style and enhance your environment. Whether you&apos;re looking to refresh your home or reinvent your business space, our team is here to make your vision come to life with precision and flair. Join us in our journey of painting a brighter future, one brushstroke at a time.

  </p>
    </div>
    )

}