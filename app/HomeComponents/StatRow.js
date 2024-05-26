
import Image from 'next/image'
export default function StatRow(){
    return (
        <div className="stat-row">
               
        <div className="stats px-5 flex flex-col space-y-8 items-center lg:flex-row justify-around items-left lg:items-center py-24">
               <div className="master-painters lg:w-1/3 flex justify-center">
                       <Image src='/images/master-painters.png' alt='something' width={200} height={100}/>
               </div>
             
               <div className="stat lg:w-1/3 text-center flex items-center space-x-4 justify-center font-lato">
                       <p className="text-3xl bold text-brand-blue tracking-wide">+ 100</p><p className='capitalize text-xl text-brand-blue opacity-60'> houses transformed </p>
               </div>
               <div className="stat lg:w-1/3 text-center flex items-center space-x-4 justify-center font-lato">
                       <p className="text-3xl bold text-brand-blue">+ 8</p><p className='capitalize text-xl text-brand-blue opacity-60'> years operating in Queenstown </p>
               </div>
               
        </div>
      </div>
    )
}