import Footer from "@/app/SiteComponents/Footer";
import Navbar from "@/app/SiteComponents/Navbar";
import Image from "next/image";


export default function Project(){  
    return (
        <div>
            <Navbar />
            <div className="px-5 mb-24 mt-[70px] container sm:mx-auto">
                <h1 className="text-black pt-24">Project</h1>
                <div className="before mt-4">
                    <h3 className="text-brand-blue mb-4">before</h3>
                    <div className="before-images flex flex-col  lg:flex-row lg:space-x-8 lg:space-y-0 space-y-8 ">
                    <div className="image-container w-full bg-gray-200 h-[300px]">
                         {/* <Image /> */}
                    </div>
                    <div className="image-container w-full bg-gray-200 h-[300px]">
                         {/* <Image /> */}
                    </div>
                    <div className="image-container w-full bg-gray-200 h-[300px]">
                         {/* <Image /> */}
                    </div>
                    <div className="image-container w-full bg-gray-200 h-[300px]">
                         {/* <Image /> */}
                    </div>
                    </div>
                </div>
                <div className="after pt-8">
                <h3 className="text-brand-blue mb-4">after</h3>
                <div className="after-images flex flex-col lg:flex-row lg:space-x-8 lg:space-y-0 space-y-8">
                <div className="image-container w-full bg-gray-200 h-[300px]">
                         {/* <Image /> */}
                    </div>
                    <div className="image-container w-full bg-gray-200 h-[300px]">
                         {/* <Image /> */}
                    </div>
                </div>
                </div>
                <div className="project-description pt-8">
                    <h3 className="pb-4">about the project</h3>
                    <p>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias, vel? Consequuntur est voluptatem nobis? Voluptatum totam quam iusto numquam accusantium dignissimos earum repellat eligendi. Voluptas ratione corporis assumenda maiores ea.
                    </p>
                </div>
            </div>
            <Footer />
        </div>
    )
}