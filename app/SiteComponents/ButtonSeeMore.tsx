import { FaArrowRightLong } from "react-icons/fa6";

export default function ButtonSeeMore() {
    return (
        <div className='see-more text-white font-poppins flex items-center space-x-2'>
            <a href='#'>See Our Projects</a>
            <FaArrowRightLong />
        </div>
    );
}