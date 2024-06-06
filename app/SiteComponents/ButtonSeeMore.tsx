import { FaArrowRightLong } from "react-icons/fa6";

export default function ButtonSeeMore() {
    return (
        <div className='see-more text-white font-poppins flex items-center space-x-2 mt-[40px]'>
            <a href='#'>See Our Projects</a>
            <FaArrowRightLong />
        </div>
    );
}