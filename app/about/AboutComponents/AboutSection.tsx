import Image from 'next/image'
export default function About() {
    return(
        <div className="bg-white px-5  pb-[80px] z-20 relative">  
        <div className='container mx-auto lg:max-w-[70%]'>
           {/* <h2 className="text-3xl font-bold text-left tracking-tight font-poppins">About</h2> */}
            <div className='bg-gray-200   h-[300px] w-full -translate-y-[30px] lg:-translate-y-[30px] z-10 '>
             {/* <Image /> */}
             
            </div>
            <p className="  opacity-80 text-xl lg:text-left ">
        Nestled in the heart of Queenstown, Little Dog Decorating is your local expert in transforming spaces with vibrant colors and professional finishes. Founded on a passion for creativity and a dedication to craftsmanship, we pride ourselves on delivering personalized painting solutions that reflect your style and enhance your environment. Whether you&apos;re looking to refresh your home or reinvent your business space, our team is here to make your vision come to life with precision and flair. Join us in our journey of painting a brighter future, one brushstroke at a time.

  </p>
       
  </div>
    </div>
    )

}